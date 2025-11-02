import crypto from 'node:crypto';

import { SPOTIFY_DEFAULT_SCOPES } from '../config/auth.config';
import type { SpotifyEnvConfig } from './auth.types';

export const generateCodeVerifier = (length = 64) => {
  const random = crypto.randomBytes(length);
  return random.toString('base64url');
};

export const generateCodeChallenge = (verifier: string) => {
  const hash = crypto.createHash('sha256').update(verifier).digest('base64');
  return hash.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};

export const getSpotifyEnv = (): SpotifyEnvConfig => {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;
  const scopes = process.env.SPOTIFY_SCOPES;

  if (!clientId) {
    throw new Error('SPOTIFY_CLIENT_ID is not configured');
  }

  if (!clientSecret) {
    throw new Error('SPOTIFY_CLIENT_SECRET is not configured');
  }

  if (!redirectUri) {
    throw new Error('SPOTIFY_REDIRECT_URI is not configured');
  }

  if (scopes) {
    return {
      clientId,
      clientSecret,
      redirectUri,
      scopes: scopes.split(' ').filter(Boolean),
    };
  }

  return {
    clientId,
    clientSecret,
    redirectUri,
    scopes: SPOTIFY_DEFAULT_SCOPES,
  };
};

export const isAccessTokenExpired = (value?: string) => {
  if (!value) {
    return false;
  }

  const expiresAt = new Date(value);

  if (Number.isNaN(expiresAt.getTime())) {
    return false;
  }

  return expiresAt.getTime() <= Date.now();
};

export const isProduction = () => {
  return process.env.NODE_ENV === 'production';
};
