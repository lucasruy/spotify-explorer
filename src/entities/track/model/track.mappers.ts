import { mapAlbum } from '@/entities/album';

import type { Track, ApiTrack } from './track.types';

const selectArtists = (artists?: ApiTrack['artists']) => {
  if (!artists?.length) {
    return [];
  }

  return artists.map(artist => ({
    id: artist.id,
    name: artist.name,
  }));
};

const selectAlbum = (album?: ApiTrack['album']) => {
  if (!album) {
    return null;
  }

  const mapped = mapAlbum(album);

  return {
    id: mapped.id,
    name: mapped.name,
    imageUrl: mapped.imageUrl,
    releaseYear: mapped.releaseYear,
  };
};

export const mapTrack = (payload: ApiTrack): Track => {
  return {
    id: payload.id,
    name: payload.name,
    artists: selectArtists(payload.artists),
    album: selectAlbum(payload.album),
    durationMs: payload.duration_ms ?? 0,
    popularity: payload.popularity ?? 0,
    explicit: Boolean(payload.explicit),
    previewUrl: payload.preview_url ?? null,
    externalUrl: payload.external_urls?.spotify ?? 'https://open.spotify.com',
  };
};
