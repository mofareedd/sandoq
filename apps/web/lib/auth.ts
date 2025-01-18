import { auth } from '@tawasul/auth';
import { headers } from 'next/headers';

export async function currentUser() {
  return await auth.api.getSession({
    headers: await headers(),
  });
}
export async function logOut() {
  return await auth.api.signOut({
    headers: await headers(),
  });
}

export type Session = typeof auth.$Infer.Session;
