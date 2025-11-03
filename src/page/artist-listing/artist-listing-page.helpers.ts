import { Artist } from "@/entities/artist";

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

export const clampPage = (value: number, max: number) => {
  if (!max) return value;
  if (value < 1) return 1;
  if (value > max) return max;
  return value;
};
