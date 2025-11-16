import { NextRequest, NextResponse } from 'next/server';
import { upsertLicense } from '../../../../../lib/licenseStore';

export const runtime = 'nodejs';

type CryptoPayUpdate = {
  update_id: number;
  update_type: string;
  request_date: number;
  payload?: {
    invoice_id?: number;
    status?: string;
    hash?: string;
    asset?: string;
    amount?: string;
    pay_url?: string;
    created_at?: number;
    paid_at?: number | null;
    payload?: string | null;
  };
};

export async function POST(req: NextRequest) {
  try {
    const raw = await req.text();

    if (!raw) {
      return new NextResponse('no body', { status: 400 });
    }

    let update: CryptoPayUpdate;
    try {
      update = JSON.parse(raw) as CryptoPayUpdate;
    } catch (e) {
      console.error('CryptoPay webhook: failed to parse JSON', e, raw);
      return new NextResponse('bad json', { status: 400 });
    }

    // We are interested only in successful paid invoices
    const payload = update.payload;
    if (!payload) {
      return new NextResponse('ok', { status: 200 });
    }

    const status = payload.status;
    if (status !== 'paid' && status !== 'paid_out') {
      return new NextResponse('ok', { status: 200 });
    }

    const payloadRaw = payload.payload;
    if (!payloadRaw) {
      console.warn('CryptoPay webhook: paid invoice without payload');
      return new NextResponse('ok', { status: 200 });
    }

    let parsedPayload: { email?: string; clientId?: string; slots?: number } = {};
    try {
      parsedPayload = JSON.parse(payloadRaw);
    } catch (e) {
      console.error('CryptoPay webhook: failed to parse payload JSON', e, payloadRaw);
      return new NextResponse('ok', { status: 200 });
    }

    const email = parsedPayload.email?.trim().toLowerCase();
    const slots = parsedPayload.slots ?? 2;

    if (!email) {
      console.warn('CryptoPay webhook: paid invoice without email in payload');
      return new NextResponse('ok', { status: 200 });
    }

    const safeSlots = Number.isFinite(slots) && slots > 0 ? slots : 2;

    await upsertLicense(email, safeSlots);

    return new NextResponse('ok', { status: 200 });
  } catch (err) {
    console.error('CryptoPay webhook error', err);
    return new NextResponse('error', { status: 500 });
  }
}


