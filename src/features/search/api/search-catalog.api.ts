import { HttpClient } from '@/shared/api';

import {
  normalizeSearchParams,
  type SearchParams,
  type SearchResponse,
} from '../model';

const searchClient = new HttpClient({
  baseURL: '/api',
});

const buildQueryString = (params: ReturnType<typeof normalizeSearchParams>) => {
  const searchParams = new URLSearchParams();

  searchParams.set('category', params.category);
  searchParams.set('page', String(params.page));
  searchParams.set('limit', String(params.limit));

  if (params.query) {
    searchParams.set('query', params.query);
  }

  if (params.market) {
    searchParams.set('market', params.market);
  }

  return searchParams.toString();
};

export const searchCatalog = async (
  params: SearchParams = {}
): Promise<SearchResponse> => {
  const normalized = normalizeSearchParams(params);
  const query = buildQueryString(normalized);
  const endpoint = `/search${query ? `?${query}` : ''}`;

  const response = await searchClient.get<SearchResponse>(endpoint, {
    cache: 'no-store',
  });

  return response.data;
};
