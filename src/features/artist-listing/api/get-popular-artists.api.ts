import { HttpClient } from '@/shared/api';

import {
  getDefaultPopularArtistFilters,
  type PopularArtistsQuery,
  type PopularArtistsResponse,
} from '../model';

const artistListingClient = new HttpClient({
  baseURL: '/api',
});

const buildQueryString = (params: PopularArtistsQuery) => {
  const searchParams = new URLSearchParams();

  if (params.page) {
    searchParams.set('page', String(params.page));
  }

  if (params.limit) {
    searchParams.set('limit', String(params.limit));
  }

  if (params.genre) {
    searchParams.set('genre', params.genre);
  }

  if (params.market) {
    searchParams.set('market', params.market);
  }

  if (params.artistName) {
    searchParams.set('artist', params.artistName);
  }

  return searchParams.toString();
};

export const getPopularArtists = async (
  params: PopularArtistsQuery = {}
): Promise<PopularArtistsResponse> => {
  const defaults = getDefaultPopularArtistFilters();
  const query = buildQueryString({
    page: params.page ?? defaults.page,
    limit: params.limit ?? defaults.limit,
    genre: params.genre ?? defaults.genre,
    market: params.market ?? defaults.market,
    artistName: params.artistName ?? defaults.artistName,
  });
  const endpoint = `/artists/popular${query ? `?${query}` : ''}`;

  const response = await artistListingClient.get<PopularArtistsResponse>(
    endpoint,
    {
      cache: 'no-store',
    }
  );

  return response.data;
};
