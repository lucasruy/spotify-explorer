import { z } from 'zod';

import {
  POPULAR_ARTISTS_DEFAULT_GENRE,
  POPULAR_ARTISTS_GENRES,
} from './artist-listing.types';
import { isValidPopularArtistGenre } from './artist-listing.helpers';

export const artistListingFiltersSchema = z.object({
  artistName: z
    .string()
    .trim()
    .max(120, 'Artist name must have at most 120 characters.')
    .default(''),
  genre: z
    .enum(POPULAR_ARTISTS_GENRES)
    .default(POPULAR_ARTISTS_DEFAULT_GENRE),
});

export type ArtistListingFiltersForm = z.infer<typeof artistListingFiltersSchema>;

export const artistListingFiltersDefaultValues: ArtistListingFiltersForm = {
  artistName: '',
  genre: POPULAR_ARTISTS_DEFAULT_GENRE,
};

export const sanitizeArtistListingFilters = (
  values: ArtistListingFiltersForm
): ArtistListingFiltersForm => ({
  artistName: values.artistName.trim(),
  genre: isValidPopularArtistGenre(values.genre)
    ? values.genre
    : POPULAR_ARTISTS_DEFAULT_GENRE,
});
