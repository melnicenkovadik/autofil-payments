import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

// Сколько устройств даём на одну оплату
const SLOTS_PER_PAYMENT = 2;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const clientId = body.clientId as string | undefined;
    const email = (body.email as string | undefined)?.trim().toLowerCase();
    const quantity = (body.quantity as number | undefined) ?? 1;

    if (!clientId) {
      return NextResponse.json({ error: 'clientId is required' }, { status: 400 });
    }

    if (!process.env.STRIPE_PRICE_ID) {
      return NextResponse.json({ error: 'STRIPE_PRICE_ID is not configured' }, { status: 500 });
    }

    const origin =
      req.headers.get('origin') ??
      process.env.PUBLIC_SITE_URL ??
      'https://autofil-payments.vercel.app';

    const slots = SLOTS_PER_PAYMENT * quantity;

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity,
        },
      ],
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`,
      customer_email: email,
      metadata: {
        clientId,
        email: email ?? '',
        slots: String(slots),
      },
    });

    if (!session.url) {
      return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Stripe checkout error', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}



