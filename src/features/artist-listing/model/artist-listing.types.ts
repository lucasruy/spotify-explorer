import type { Artist } from '@/entities/artist';

export const POPULAR_ARTISTS_DEFAULT_LIMIT = 20;
export const POPULAR_ARTISTS_DEFAULT_GENRE = 'pop';
export const POPULAR_ARTISTS_DEFAULT_MARKET = 'US';

export type PopularArtistsQuery = {
  page?: number;
  limit?: number;
  genre?: string;
  market?: string;
};

export type PopularArtistsResponse = {
  items: Artist[];
  pagination: {
    page: number;
    limit: number;
    totalPages: number;
    totalItems: number;
  };
  filters: {
    genre: string;
    market: string;
  };
};
