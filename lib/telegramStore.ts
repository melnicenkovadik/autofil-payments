import { kv } from '@vercel/kv';

const TG_EMAIL_PREFIX = 'tg_email:';

function makeKey(userId: number): string {
  return `${TG_EMAIL_PREFIX}${userId}`;
}

export async function setTelegramUserEmail(userId: number, email: string): Promise<void> {
  const key = makeKey(userId);
  const normalizedEmail = email.trim().toLowerCase();
  if (!normalizedEmail) return;
  await kv.set(key, normalizedEmail);
}

export async function getTelegramUserEmail(userId: number): Promise<string | null> {
  const key = makeKey(userId);
  const value = await kv.get<string | null>(key);
  return value ?? null;
}


