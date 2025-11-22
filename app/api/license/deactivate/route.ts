import { NextRequest, NextResponse } from 'next/server';
import { deactivateClient, getLicenseByEmail } from '../../../../lib/licenseStore';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const email = (body.email as string | undefined)?.trim().toLowerCase();
    const clientId = (body.clientId as string | undefined)?.trim();

    if (!email || !clientId) {
      return NextResponse.json({ error: 'email and clientId are required' }, { status: 400 });
    }

    try {
      const license = await deactivateClient(email, clientId);

      if (!license) {
        return NextResponse.json(
          {
            plan: 'free',
            slotsTotal: 0,
            slotsUsed: 0,
            isActiveForClient: false,
          },
          { status: 200 },
        );
      }

      return NextResponse.json(
        {
          plan: license.plan,
          slotsTotal: license.slotsTotal,
          slotsUsed: license.clientIds.length,
          isActiveForClient: false,
        },
        { status: 200 },
      );
    } catch (err) {
      console.error('deactivate license error', err);
      return NextResponse.json({ error: 'INTERNAL_ERROR' }, { status: 500 });
    }
  } catch (err) {
    console.error('deactivate license unexpected error', err);
    return NextResponse.json({ error: 'INTERNAL_ERROR' }, { status: 500 });
  }
}



