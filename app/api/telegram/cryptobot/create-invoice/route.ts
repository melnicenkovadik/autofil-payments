import { NextRequest, NextResponse } from 'next/server';

const API_BASE = 'https://pay.crypt.bot';
const API_TOKEN = process.env.CRYPTO_PAY_API_TOKEN;

// How many device slots we give per payment (same as Stripe)
const SLOTS_PER_PAYMENT = 2;

export async function POST(req: NextRequest) {
  if (!API_TOKEN) {
    return NextResponse.json(
      { error: 'CRYPTO_PAY_API_TOKEN is not configured' },
      { status: 500 },
    );
  }

  try {
    const body = await req.json().catch(() => ({}));
    const clientId = (body.clientId as string | undefined)?.trim();
    const email = (body.email as string | undefined)?.trim().toLowerCase();

    if (!clientId) {
      return NextResponse.json({ error: 'clientId is required' }, { status: 400 });
    }

    if (!email) {
      return NextResponse.json({ error: 'email is required' }, { status: 400 });
    }

    const asset = process.env.CRYPTO_PAY_ASSET || 'USDT';
    const amountRaw = process.env.CRYPTO_PAY_AMOUNT || '2';
    const amount = Number(amountRaw);

    if (!asset || !Number.isFinite(amount) || amount <= 0) {
      return NextResponse.json(
        { error: 'CRYPTO_PAY_ASSET/CRYPTO_PAY_AMOUNT are not configured correctly' },
        { status: 500 },
      );
    }

    const payload = JSON.stringify({
      email,
      clientId,
      slots: SLOTS_PER_PAYMENT,
    });

    const resp = await fetch(`${API_BASE}/api/createInvoice`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Crypto-Pay-API-Token': API_TOKEN,
      },
      body: JSON.stringify({
        asset,
        amount,
        payload,
      }),
    });

    if (!resp.ok) {
      const text = await resp.text().catch(() => '');
      console.error('CryptoPay createInvoice failed', resp.status, text);
      return NextResponse.json({ error: 'CREATE_INVOICE_FAILED' }, { status: 500 });
    }

    const json = (await resp.json().catch(() => null)) as
      | { ok?: boolean; result?: { pay_url?: string } }
      | null;

    const payUrl = json?.result?.pay_url;

    if (!payUrl) {
      console.error('CryptoPay createInvoice: no pay_url in response', json);
      return NextResponse.json({ error: 'NO_PAY_URL' }, { status: 500 });
    }

    return NextResponse.json({ url: payUrl });
  } catch (error) {
    console.error('CryptoPay create-invoice error', error);
    return NextResponse.json({ error: 'INTERNAL_ERROR' }, { status: 500 });
  }
}


