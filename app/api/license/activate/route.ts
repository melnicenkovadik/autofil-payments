import { NextRequest, NextResponse } from 'next/server';
import { activateClient } from '../../../../lib/licenseStore';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const email = (body.email as string | undefined)?.trim().toLowerCase();
    const clientId = (body.clientId as string | undefined)?.trim();

    if (!email || !clientId) {
      return NextResponse.json({ error: 'email and clientId are required' }, { status: 400 });
    }

    try {
      const { license, alreadyActive } = await activateClient(email, clientId);

      return NextResponse.json({
        plan: license.plan,
        slotsTotal: license.slotsTotal,
        slotsUsed: license.clientIds.length,
        alreadyActive,
      });
    } catch (err: any) {
      if (err instanceof Error) {
        if (err.message === 'LICENSE_NOT_FOUND') {
          return NextResponse.json({ error: 'LICENSE_NOT_FOUND' }, { status: 404 });
        }
        if (err.message === 'LICENSE_NOT_PRO') {
          return NextResponse.json({ error: 'LICENSE_NOT_PRO' }, { status: 403 });
        }
        if (err.message === 'LICENSE_SLOTS_EXCEEDED') {
          return NextResponse.json({ error: 'LICENSE_SLOTS_EXCEEDED' }, { status: 403 });
        }
      }

      console.error('activate license error', err);
      return NextResponse.json({ error: 'INTERNAL_ERROR' }, { status: 500 });
    }
  } catch (err) {
    console.error('activate license unexpected error', err);
    return NextResponse.json({ error: 'INTERNAL_ERROR' }, { status: 500 });
  }
}


