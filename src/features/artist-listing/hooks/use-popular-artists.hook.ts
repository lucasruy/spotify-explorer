'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { getPopularArtists } from '../api';
import {
  getDefaultPopularArtistFilters,
  type PopularArtistsQuery,
  type PopularArtistsResponse,
} from '../model';

const POPULAR_ARTISTS_QUERY_KEY = 'popular-artists';

const normalizeParams = (
  params: PopularArtistsQuery
): PopularArtistsQuery => {
  const fallback = getDefaultPopularArtistFilters();

  return {
    page: params.page ?? fallback.page,
    limit: params.limit ?? fallback.limit,
    genre: params.genre ?? fallback.genre,
    market: params.market ?? fallback.market,
  };
};

export const usePopularArtists = (
  params: PopularArtistsQuery
) => {
  const normalized = normalizeParams(params);

  return useQuery<PopularArtistsResponse, unknown>({
    queryKey: [POPULAR_ARTISTS_QUERY_KEY, normalized],
    queryFn: () => getPopularArtists(normalized),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60,
  });
};
