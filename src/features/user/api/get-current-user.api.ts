import { cookies } from 'next/headers';

import {
  SPOTIFY_COOKIE_ACCESS_TOKEN,
  SPOTIFY_COOKIE_EXPIRES_AT,
} from '@/features/auth/config';
import { isAccessTokenExpired } from '@/features/auth/model';
import {
  mapUserProfile,
  type UserProfile,
} from '@/entities/user';

export const getCurrentUser = async (): Promise<UserProfile | null> => {
  const store = await cookies();
  const accessToken = store.get(SPOTIFY_COOKIE_ACCESS_TOKEN)?.value;
  const expiresAt = store.get(SPOTIFY_COOKIE_EXPIRES_AT)?.value;

  if (!accessToken || isAccessTokenExpired(expiresAt)) {
    return null;
  }

  const response = await fetch('https://api.spotify.com/v1/me', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    return null;
  }

  const payload = await response.json();
  return mapUserProfile(payload);
};
