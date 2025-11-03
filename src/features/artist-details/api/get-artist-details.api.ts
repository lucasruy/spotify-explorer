import { getValidAccessToken } from '@/features/auth/model';
import { mapArtist, type ApiArtist } from '@/entities/artist';

import type { ArtistDetails } from '../model';

const SPOTIFY_ARTIST_ENDPOINT = 'https://api.spotify.com/v1/artists';

export const getArtistDetails = async (
  id: string
): Promise<ArtistDetails | null> => {
  const accessToken = await getValidAccessToken();

  if (!accessToken) {
    return null;
  }

  const response = await fetch(`${SPOTIFY_ARTIST_ENDPOINT}/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    return null;
  }

  const payload = (await response.json()) as ApiArtist;
  return mapArtist(payload);
};
