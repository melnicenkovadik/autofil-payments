import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { upsertLicense } from '../../../../lib/licenseStore';

const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2025-02-24.acacia',
  })
  : null as unknown as Stripe;

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  const sig = req.headers.get('stripe-signature');
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig || !webhookSecret) {
    return new NextResponse('Missing signature', { status: 400 });
  }

  const rawBody = await req.text();

  let event: Stripe.Event;

  try {
    if (!stripe) {
      throw new Error('Stripe not initialized');
    }
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    console.error('Stripe webhook signature verification failed', err);
    return new NextResponse('Invalid signature', { status: 400 });
  }

  try {
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;

      const email =
        session.customer_email ||
        session.customer_details?.email ||
        session.metadata?.email ||
        '';

      const normalizedEmail = email.trim().toLowerCase();

      if (!normalizedEmail) {
        console.warn('Stripe webhook: checkout.session.completed without email');
        return new NextResponse('ok', { status: 200 });
      }

      const slotsRaw = session.metadata?.slots;
      const slotsToAdd = slotsRaw ? Number(slotsRaw) || 0 : 0;
      const safeSlotsToAdd = slotsToAdd > 0 ? slotsToAdd : 2;

      await upsertLicense(normalizedEmail, safeSlotsToAdd);
    }

    return new NextResponse('ok', { status: 200 });
  } catch (err) {
    console.error('Stripe webhook error', err);
    return new NextResponse('Webhook handler error', { status: 500 });
  }
}


