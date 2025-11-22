import { kv } from '@vercel/kv';

export type Plan = 'free' | 'pro';

export type License = {
  email: string;
  plan: Plan;
  slotsTotal: number;
  clientIds: string[];
  createdAt: number;
  updatedAt: number;
};

const LICENSE_PREFIX = 'license:';

function makeKey(email: string): string {
  return `${LICENSE_PREFIX}${email.toLowerCase()}`;
}

export async function getLicenseByEmail(email: string): Promise<License | null> {
  const key = makeKey(email);
  const value = await kv.get<License | null>(key);
  return value ?? null;
}

export async function upsertLicense(
  email: string,
  slotsToAdd: number,
): Promise<License> {
  const key = makeKey(email);
  const now = Date.now();

  const existing = await kv.get<License | null>(key);
  if (!existing) {
    const created: License = {
      email: email.toLowerCase(),
      plan: 'pro',
      slotsTotal: slotsToAdd,
      clientIds: [],
      createdAt: now,
      updatedAt: now,
    };
    await kv.set(key, created);
    return created;
  }

  const next: License = {
    ...existing,
    plan: 'pro',
    slotsTotal: existing.slotsTotal + slotsToAdd,
    updatedAt: now,
  };
  await kv.set(key, next);
  return next;
}

export async function activateClient(
  email: string,
  clientId: string,
): Promise<{ license: License; alreadyActive: boolean }> {
  const key = makeKey(email);
  const now = Date.now();
  const existing = await kv.get<License | null>(key);

  if (!existing) {
    throw new Error('LICENSE_NOT_FOUND');
  }

  if (existing.plan !== 'pro') {
    throw new Error('LICENSE_NOT_PRO');
  }

  const normalizedClientId = clientId.trim();

  if (existing.clientIds.includes(normalizedClientId)) {
    return { license: existing, alreadyActive: true };
  }

  if (existing.clientIds.length >= existing.slotsTotal) {
    throw new Error('LICENSE_SLOTS_EXCEEDED');
  }

  const next: License = {
    ...existing,
    clientIds: [...existing.clientIds, normalizedClientId],
    updatedAt: now,
  };
  await kv.set(key, next);
  return { license: next, alreadyActive: false };
}

export async function deactivateClient(
  email: string,
  clientId: string,
): Promise<License | null> {
  const key = makeKey(email);
  const now = Date.now();
  const existing = await kv.get<License | null>(key);

  if (!existing) {
    return null;
  }

  const normalizedClientId = clientId.trim();
  if (!normalizedClientId) {
    return existing;
  }

  if (!existing.clientIds.includes(normalizedClientId)) {
    return existing;
  }

  const next: License = {
    ...existing,
    clientIds: existing.clientIds.filter((id) => id !== normalizedClientId),
    updatedAt: now,
  };

  await kv.set(key, next);
  return next;
}


