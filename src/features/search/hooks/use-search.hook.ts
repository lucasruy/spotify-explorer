'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { searchCatalog } from '../api';
import {
  normalizeSearchParams,
  type SearchParams,
  type SearchResponse,
} from '../model';

const SEARCH_QUERY_KEY = 'search-catalog';

export const useSearch = (params: SearchParams) => {
  const normalized = normalizeSearchParams(params);

  return useQuery<SearchResponse, unknown>({
    queryKey: [SEARCH_QUERY_KEY, normalized],
    queryFn: () => searchCatalog(normalized),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60,
  });
};
