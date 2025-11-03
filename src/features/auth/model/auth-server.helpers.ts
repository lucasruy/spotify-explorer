import { cookies } from 'next/headers';

import {
  SPOTIFY_COOKIE_ACCESS_TOKEN,
  SPOTIFY_COOKIE_EXPIRES_AT,
} from '../config/auth.config';
import { isAccessTokenExpired } from './auth.model';

export const getValidAccessToken = async (): Promise<string | null> => {
  const store = await cookies();
  const accessToken = store.get(SPOTIFY_COOKIE_ACCESS_TOKEN)?.value;
  const expiresAt = store.get(SPOTIFY_COOKIE_EXPIRES_AT)?.value;

  if (!accessToken || isAccessTokenExpired(expiresAt)) {
    return null;
  }

  return accessToken;
};
