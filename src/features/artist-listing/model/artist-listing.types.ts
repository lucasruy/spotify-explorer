import type { Artist } from '@/entities/artist';

export const POPULAR_ARTISTS_DEFAULT_LIMIT = 20;
export const POPULAR_ARTISTS_DEFAULT_GENRE = 'pop';
export const POPULAR_ARTISTS_DEFAULT_MARKET = 'US';

export const POPULAR_ARTISTS_GENRES = [
  'pop',
  'rock',
  'hip-hop',
  'electronic',
  'indie',
  'metal',
  'jazz',
  'latin',
  'country',
  'k-pop',
] as const;

export type PopularArtistGenre = (typeof POPULAR_ARTISTS_GENRES)[number];

export type PopularArtistsQuery = {
  page?: number;
  limit?: number;
  genre?: PopularArtistGenre;
  market?: string;
  artistName?: string;
};

export type PopularArtistsResponse = {
  items: Artist[];
  pagination: {
    page: number;
    limit: number;
    totalItems: number | null;
    hasNext: boolean;
    hasPrevious: boolean;
  };
  filters: {
    genre: PopularArtistGenre;
    market: string;
    artistName: string;
  };
};
