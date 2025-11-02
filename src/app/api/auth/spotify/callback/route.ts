import { NextResponse } from 'next/server';

import {
  clearCodeVerifierCookie,
  exchangeCodeForTokens,
  isProduction,
  readCodeVerifier,
  storeTokens,
} from '@/features/auth/api';

const setAuthError = (response: NextResponse, error: string) => {
  response.cookies.set('spotify_auth_error', error, {
    httpOnly: true,
    secure: isProduction(),
    sameSite: 'lax',
    path: '/',
    maxAge: 60,
  });
};

export async function GET(request: Request) {
  const url = new URL(request.url);
  const error = url.searchParams.get('error');
  const code = url.searchParams.get('code');
  const verifier = await readCodeVerifier();
  const redirectUrl = new URL('/', request.url);

  if (error) {
    const response = NextResponse.redirect(redirectUrl);
    clearCodeVerifierCookie(response);
    setAuthError(response, error);
    return response;
  }

  if (!code) {
    const response = NextResponse.redirect(redirectUrl);
    clearCodeVerifierCookie(response);
    setAuthError(response, 'missing_code');
    return response;
  }

  if (!verifier) {
    const response = NextResponse.redirect(redirectUrl);
    setAuthError(response, 'missing_verifier');
    return response;
  }

  try {
    const tokens = await exchangeCodeForTokens(code, verifier);
    const response = NextResponse.redirect(redirectUrl);
    clearCodeVerifierCookie(response);
    storeTokens(response, tokens);
    return response;
  } catch (error) {
    console.error(
      'Spotify token exchange failed',
      error instanceof Error ? error.message : error
    );
    const response = NextResponse.redirect(redirectUrl);
    clearCodeVerifierCookie(response);
    setAuthError(response, 'token_exchange_failed');
    return response;
  }
}
