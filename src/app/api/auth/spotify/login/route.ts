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
    return NextResponse.json(
      {
        message: 'Failed to start Spotify authentication',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
