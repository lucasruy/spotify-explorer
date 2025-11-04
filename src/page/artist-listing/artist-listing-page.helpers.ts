import { Artist } from '@/entities/artist';

export const getFollowersLabel = (artist: Artist) => {
  return new Intl.NumberFormat().format(artist.followers);
};

export const getGenresLabel = (artist: Artist) => {
  if (!artist.genres.length) {
    return null;
  }

  const genres = artist.genres.slice(0, 2).join(', ');
  return genres;
};

