import type { SearchCategory } from './search.types';

export const SEARCH_CATEGORIES: SearchCategory[] = [
  'artists',
  'albums',
  'tracks',
];

export const SEARCH_DEFAULT_CATEGORY: SearchCategory = 'artists';
export const SEARCH_DEFAULT_LIMIT = 20;
export const SEARCH_MAX_LIMIT = 50;
export const SEARCH_DEFAULT_QUERY = 'a';
export const SEARCH_DEFAULT_MARKET = 'US';
