import {
  POPULAR_ARTISTS_DEFAULT_GENRE,
  POPULAR_ARTISTS_DEFAULT_LIMIT,
  POPULAR_ARTISTS_DEFAULT_MARKET,
  type PopularArtistsQuery,
} from './artist-listing.types';

export const getDefaultPopularArtistFilters = (): Required<PopularArtistsQuery> => ({
  page: 1,
  limit: POPULAR_ARTISTS_DEFAULT_LIMIT,
  genre: POPULAR_ARTISTS_DEFAULT_GENRE,
  market: POPULAR_ARTISTS_DEFAULT_MARKET,
});
