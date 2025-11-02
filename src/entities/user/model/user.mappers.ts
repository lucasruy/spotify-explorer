import type { ApiUserProfile, UserProfile } from './user.types';

export const mapUserProfile = (
  payload: ApiUserProfile
): UserProfile => {
  return {
    id: payload.id,
    displayName: payload.display_name ?? payload.id,
    email: payload.email,
    country: payload.country,
    product: payload.product,
    followers: payload.followers?.total ?? 0,
    imageUrl: payload.images?.[0]?.url ?? null,
    externalUrl: payload.external_urls?.spotify ?? 'https://open.spotify.com',
  };
};
