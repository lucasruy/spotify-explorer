import { NextResponse } from 'next/server';

import {
  buildAuthorizeUrl,
  buildCodeChallenge,
  generateCodeVerifier,
  setCodeVerifierCookie,
} from '@/features/auth/api';

export async function GET() {
  try {
    const verifier = generateCodeVerifier();
    const challenge = buildCodeChallenge(verifier);
    const authorizeUrl = buildAuthorizeUrl(challenge);

    const response = NextResponse.redirect(authorizeUrl);
    setCodeVerifierCookie(response, verifier);

    return response;
  } catch (error) {
    // 🛡️ Sentinel: Do not leak internal error details to the client
    console.error('Spotify login error:', error instanceof Error ? error.message : error);

    return NextResponse.json(
      {
        message: 'Failed to start Spotify authentication',
        details: 'An unexpected error occurred. Please try again later.',
      },
      { status: 500 }
    );
  }
}
