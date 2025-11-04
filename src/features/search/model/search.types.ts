import type { Album } from '@/entities/album';
import type { Artist } from '@/entities/artist';
import type { Track } from '@/entities/track';

export type SearchCategory = 'artists' | 'albums' | 'tracks';

export type SearchParams = {
  page?: number;
  limit?: number;
  category?: SearchCategory;
  query?: string;
  market?: string | null;
};

export type NormalizedSearchParams = {
  page: number;
  limit: number;
  category: SearchCategory;
  query: string;
  market: string | null;
};

export type SearchItem =
  | {
      type: 'artists';
      item: Artist;
    }
  | {
      type: 'albums';
      item: Album;
    }
  | {
      type: 'tracks';
      item: Track;
    };

export type SearchResponse = {
  items: SearchItem[];
  pagination: {
    page: number;
    limit: number;
    totalItems: number | null;
    hasNext: boolean;
    hasPrevious: boolean;
  };
  filters: {
    category: SearchCategory;
    query: string;
    market: string | null;
  };
};
