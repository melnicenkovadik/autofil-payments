import { NextRequest, NextResponse } from 'next/server';
import { upsertLicense } from '../../../../../lib/licenseStore';
import { getTelegramUserEmail, setTelegramUserEmail } from '../../../../../lib/telegramStore';

export const runtime = 'nodejs';

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_API_BASE = BOT_TOKEN ? `https://api.telegram.org/bot${BOT_TOKEN}` : '';

type TelegramUser = {
  id: number;
  is_bot?: boolean;
  first_name?: string;
  username?: string;
};

type SuccessfulPayment = {
  currency: string;
  total_amount: number;
  invoice_payload?: string;
};

type TelegramMessage = {
  message_id: number;
  from?: TelegramUser;
  chat: { id: number; type: string };
  text?: string;
  successful_payment?: SuccessfulPayment;
};

type TelegramUpdate = {
  update_id: number;
  message?: TelegramMessage;
};

async function sendMessage(chatId: number, text: string): Promise<void> {
  if (!BOT_TOKEN || !TELEGRAM_API_BASE) return;
  try {
    await fetch(`${TELEGRAM_API_BASE}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'Markdown',
      }),
    });
  } catch (err) {
    console.error('Failed to send Telegram message', err);
  }
}

export async function POST(req: NextRequest) {
  if (!BOT_TOKEN) {
    console.error('TELEGRAM_BOT_TOKEN is not configured');
    return new NextResponse('Bot token not configured', { status: 500 });
  }

  let update: TelegramUpdate;
  try {
    update = (await req.json()) as TelegramUpdate;
  } catch (err) {
    console.error('Telegram bot webhook: failed to parse JSON', err);
    return new NextResponse('bad json', { status: 400 });
  }

  const message = update.message;
  if (!message) {
    return new NextResponse('ok', { status: 200 });
  }

  const chatId = message.chat.id;
  const userId = message.from?.id;

  // Handle commands: /start, /help, /email
  if (message.text && message.text.startsWith('/')) {
    const [command, arg] = message.text.split(/\s+/, 2);

    if (command === '/start' || command === '/help') {
      await sendMessage(
        chatId,
        [
          '👋 *Autofill Pro* bot',
          '',
          '1. Отправь команду `/email your@email.com`, чтобы привязать email, на который оплачиваешь Pro.',
          '2. Оплати через Stars или другие способы, привязанные к этому боту.',
          '3. В расширении открой вкладку *PRO for life – $2* и нажми *Activate this device*.',
        ].join('\n'),
      );
      return new NextResponse('ok', { status: 200 });
    }

    if (command === '/email') {
      if (!userId) {
        await sendMessage(chatId, 'Не удалось определить пользователя Telegram.');
        return new NextResponse('ok', { status: 200 });
      }

      if (!arg) {
        await sendMessage(chatId, 'Пришли email так: `/email your@email.com`');
        return new NextResponse('ok', { status: 200 });
      }

      const email = arg.trim().toLowerCase();
      if (!email.includes('@')) {
        await sendMessage(chatId, 'Похоже, это не email. Попробуй ещё раз: `/email your@email.com`');
        return new NextResponse('ok', { status: 200 });
      }

      await setTelegramUserEmail(userId, email);
      await sendMessage(
        chatId,
        `✅ Email \`${email}\` привязан к твоему Telegram. Используй его в расширении на вкладке *PRO for life – $2*.`,
      );
      return new NextResponse('ok', { status: 200 });
    }
  }

  // Handle successful payments (including Telegram Stars)
  if (message.successful_payment && userId) {
    try {
      const email = await getTelegramUserEmail(userId);
      if (!email) {
        await sendMessage(
          chatId,
          'Оплата получена, но email не найден. Пожалуйста, сначала привяжи email командой `/email your@email.com`.',
        );
        return new NextResponse('ok', { status: 200 });
      }

      // For now, any successful payment gives standard Pro license (2 slots)
      const SLOTS_PER_PAYMENT = 2;
      await upsertLicense(email, SLOTS_PER_PAYMENT);

      await sendMessage(
        chatId,
        [
          '🎉 Оплата получена, лицензия Pro активирована для твоего email:',
          `\`${email}\``,
          '',
          'Теперь открой расширение → вкладка *PRO for life – $2* → нажми *Activate this device* на каждом браузере, где используешь расширение.',
        ].join('\n'),
      );
    } catch (err) {
      console.error('Telegram bot webhook: failed to process successful_payment', err);
      await sendMessage(chatId, 'Что-то пошло не так при обработке оплаты. Попробуй позже.');
    }
  }

  return new NextResponse('ok', { status: 200 });
}


