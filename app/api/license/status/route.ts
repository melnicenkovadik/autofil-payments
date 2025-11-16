import { NextRequest, NextResponse } from 'next/server';
import { getLicenseByEmail } from '../../../../lib/licenseStore';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get('email');

  if (!email) {
    return NextResponse.json({ error: 'email is required' }, { status: 400 });
  }

  const normalizedEmail = email.trim().toLowerCase();

  try {
    const license = await getLicenseByEmail(normalizedEmail);

    if (!license) {
      return NextResponse.json(
        {
          plan: 'free',
          slotsTotal: 0,
          slotsUsed: 0,
        },
        { status: 200 },
      );
    }

    return NextResponse.json(
      {
        plan: license.plan,
        slotsTotal: license.slotsTotal,
        slotsUsed: license.clientIds.length,
      },
      { status: 200 },
    );
  } catch (err) {
    console.error('license status error', err);
    return NextResponse.json({ error: 'INTERNAL_ERROR' }, { status: 500 });
  }
}


