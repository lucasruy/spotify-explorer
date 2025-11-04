import type { Album, ApiAlbum } from './album.types';

const extractYear = (value?: string | null) => {
  if (!value) {
    return null;
  }

  const year = value.slice(0, 4);

  if (!/^[0-9]{4}$/.test(year)) {
    return null;
  }

  return year;
};

const selectImageUrl = (images?: ApiAlbum['images']) => {
  if (!images?.length) {
    return null;
  }

  const candidate = images.find(image => Boolean(image?.url));

  return candidate?.url ?? null;
};

export const mapAlbum = (payload: ApiAlbum): Album => {
  const artists = payload.artists?.map(artist => ({
    id: artist.id,
    name: artist.name,
  })) ?? [];

  return {
    id: payload.id,
    name: payload.name,
    artists,
    releaseDate: payload.release_date ?? null,
    releaseYear: extractYear(payload.release_date),
    totalTracks: payload.total_tracks ?? 0,
    imageUrl: selectImageUrl(payload.images),
    externalUrl: payload.external_urls?.spotify ?? 'https://open.spotify.com',
  };
};
