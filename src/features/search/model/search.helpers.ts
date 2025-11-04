import {
  SEARCH_CATEGORIES,
  SEARCH_DEFAULT_CATEGORY,
  SEARCH_DEFAULT_LIMIT,
  SEARCH_DEFAULT_MARKET,
  SEARCH_DEFAULT_QUERY,
  SEARCH_MAX_LIMIT,
} from './search.constants';
import type {
  NormalizedSearchParams,
  SearchCategory,
  SearchParams,
} from './search.types';

const CATEGORY_SET = new Set<SearchCategory>(SEARCH_CATEGORIES);

const clampLimit = (value?: number) => {
  if (!Number.isFinite(value)) {
    return SEARCH_DEFAULT_LIMIT;
  }

  const parsed = Math.trunc(Number(value));

  if (parsed <= 0) {
    return SEARCH_DEFAULT_LIMIT;
  }

  return Math.min(parsed, SEARCH_MAX_LIMIT);
};

const normalizePage = (value?: number) => {
  if (!Number.isFinite(value)) {
    return 1;
  }

  const parsed = Math.trunc(Number(value));

  if (parsed <= 0) {
    return 1;
  }

  return parsed;
};

export const isValidSearchCategory = (
  value: unknown
): value is SearchCategory => {
  if (typeof value !== 'string') {
    return false;
  }

  return CATEGORY_SET.has(value as SearchCategory);
};

export const getDefaultSearchParams = (): NormalizedSearchParams => {
  return {
    page: 1,
    limit: SEARCH_DEFAULT_LIMIT,
    category: SEARCH_DEFAULT_CATEGORY,
    query: SEARCH_DEFAULT_QUERY,
    market: SEARCH_DEFAULT_MARKET,
  };
};

export const normalizeSearchParams = (
  params: SearchParams = {}
): NormalizedSearchParams => {
  const defaults = getDefaultSearchParams();

  const category = isValidSearchCategory(params.category)
    ? params.category
    : defaults.category;

  const limit = clampLimit(params.limit) ?? defaults.limit;

  const page = normalizePage(params.page);

  const query = params.query?.trim() || defaults.query;

  const market = params.market === null
    ? null
    : params.market?.trim() || defaults.market;

  return {
    page,
    limit,
    category,
    query,
    market,
  };
};
