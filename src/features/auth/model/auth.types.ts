export type SpotifyTokenResponse = {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
  refresh_token?: string;
};

export type SpotifyEnvConfig = {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  scopes: string[];
};
