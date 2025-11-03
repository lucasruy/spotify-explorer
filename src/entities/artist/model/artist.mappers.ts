import type { ApiArtist, Artist } from './artist.types';

export const mapArtist = (payload: ApiArtist): Artist => {
  const fallbackImage = payload.images?.find(image => Boolean(image?.url));

  return {
    id: payload.id,
    name: payload.name,
    followers: payload.followers?.total ?? 0,
    genres: payload.genres ?? [],
    imageUrl: fallbackImage?.url ?? null,
    popularity: payload.popularity ?? 0,
    externalUrl: payload.external_urls?.spotify ?? 'https://open.spotify.com',
  };
};
