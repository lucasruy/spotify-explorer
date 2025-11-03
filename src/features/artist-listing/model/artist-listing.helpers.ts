import {
  POPULAR_ARTISTS_DEFAULT_GENRE,
  POPULAR_ARTISTS_DEFAULT_LIMIT,
  POPULAR_ARTISTS_DEFAULT_MARKET,
  POPULAR_ARTISTS_GENRES,
  type PopularArtistGenre,
  type PopularArtistsQuery,
} from './artist-listing.types';

export const getDefaultPopularArtistFilters =
  (): Required<PopularArtistsQuery> => ({
    page: 1,
    limit: POPULAR_ARTISTS_DEFAULT_LIMIT,
    genre: POPULAR_ARTISTS_DEFAULT_GENRE,
    market: POPULAR_ARTISTS_DEFAULT_MARKET,
    artistName: '',
  });

export const getPopularArtistGenreOptions = () =>
  POPULAR_ARTISTS_GENRES.map(genre => ({
    value: genre,
    label: genre
      .split('-')
      .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))
      .join(' '),
  }));

export const isValidPopularArtistGenre = (
  value: string
): value is PopularArtistGenre =>
  (POPULAR_ARTISTS_GENRES as readonly PopularArtistGenre[]).includes(
    value as PopularArtistGenre
  );
