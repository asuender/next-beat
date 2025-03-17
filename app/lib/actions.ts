'use server';

import { auth } from '@/auth';
import { Session } from 'next-auth';

const BASE_URL = 'https://api.spotify.com/v1';

export async function getUserTop(session: Session, type: 'tracks' | 'artists') {
  const response = await fetch(`${BASE_URL}/me/top/${type}`, {
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
    },
  });
  const data = await response.json();
  return data;
}