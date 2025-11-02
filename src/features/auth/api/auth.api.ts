import { cookies } from 'next/headers';
import type { NextResponse } from 'next/server';

import {
  SPOTIFY_AUTHORIZE_URL,
  SPOTIFY_CODE_CHALLENGE_METHOD,
  SPOTIFY_COOKIE_ACCESS_TOKEN,
  SPOTIFY_COOKIE_CODE_VERIFIER,
  SPOTIFY_COOKIE_EXPIRES_AT,
  SPOTIFY_COOKIE_REFRESH_TOKEN,
  SPOTIFY_TOKEN_URL,
} from '../config/auth.config';
import {
  generateCodeChallenge,
  generateCodeVerifier,
  getSpotifyEnv,
  isProduction,
} from '../model/auth.model';
import type { SpotifyTokenResponse } from '../model/auth.types';

export const buildAuthorizeUrl = (codeChallenge: string) => {
  const { clientId, redirectUri, scopes } = getSpotifyEnv();

  const params = new URLSearchParams({
    client_id: clientId,
    response_type: 'code',
    redirect_uri: redirectUri,
    scope: scopes.join(' '),
    code_challenge_method: SPOTIFY_CODE_CHALLENGE_METHOD,
    code_challenge: codeChallenge,
  });

  return `${SPOTIFY_AUTHORIZE_URL}?${params.toString()}`;
};

export const setCodeVerifierCookie = (
  response: NextResponse,
  verifier: string
) => {
  response.cookies.set(SPOTIFY_COOKIE_CODE_VERIFIER, verifier, {
    httpOnly: true,
    secure: isProduction(),
    sameSite: 'lax',
    path: '/',
    maxAge: 300,
  });
};

export const readCodeVerifier = async () => {
  const store = await cookies();
  return store.get(SPOTIFY_COOKIE_CODE_VERIFIER)?.value ?? null;
};

export const clearCodeVerifierCookie = (response: NextResponse) => {
  response.cookies.delete(SPOTIFY_COOKIE_CODE_VERIFIER);
};

export const exchangeCodeForTokens = async (
  code: string,
  codeVerifier: string
) => {
  const { clientId, clientSecret, redirectUri } = getSpotifyEnv();

  const body = new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: 'authorization_code',
    code,
    redirect_uri: redirectUri,
    code_verifier: codeVerifier,
  });

  const response = await fetch(SPOTIFY_TOKEN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Failed to exchange code for tokens: ${details}`);
  }

  return (await response.json()) as SpotifyTokenResponse;
};

export const storeTokens = (
  response: NextResponse,
  tokens: SpotifyTokenResponse
) => {
  const now = Date.now();
  const expiresAt = new Date(now + tokens.expires_in * 1000);

  response.cookies.set(SPOTIFY_COOKIE_ACCESS_TOKEN, tokens.access_token, {
    httpOnly: true,
    secure: isProduction(),
    sameSite: 'lax',
    path: '/',
    maxAge: tokens.expires_in,
  });

  response.cookies.set(
    SPOTIFY_COOKIE_EXPIRES_AT,
    expiresAt.toISOString(),
    {
      httpOnly: true,
      secure: isProduction(),
      sameSite: 'lax',
      path: '/',
      maxAge: tokens.expires_in,
    }
  );

  if (tokens.refresh_token) {
    response.cookies.set(
      SPOTIFY_COOKIE_REFRESH_TOKEN,
      tokens.refresh_token,
      {
        httpOnly: true,
        secure: isProduction(),
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 30,
      }
    );
  }
};

export const clearTokens = (response: NextResponse) => {
  response.cookies.delete(SPOTIFY_COOKIE_ACCESS_TOKEN);
  response.cookies.delete(SPOTIFY_COOKIE_REFRESH_TOKEN);
  response.cookies.delete(SPOTIFY_COOKIE_EXPIRES_AT);
};

export const buildCodeChallenge = (verifier: string) => {
  return generateCodeChallenge(verifier);
};

export { generateCodeVerifier, isProduction };
