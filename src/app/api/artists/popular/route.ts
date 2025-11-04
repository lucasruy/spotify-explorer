import { NextResponse } from 'next/server';

import { mapArtist, type ApiArtistSearchResponse } from '@/entities/artist';
import {
  POPULAR_ARTISTS_DEFAULT_GENRE,
  POPULAR_ARTISTS_DEFAULT_LIMIT,
  POPULAR_ARTISTS_DEFAULT_MARKET,
  isValidPopularArtistGenre,
  type PopularArtistsResponse,
} from '@/features/artist-listing/model';
import { getValidAccessToken } from '@/features/auth/model';
import { resolveOffsetPagination } from '@/shared/api';

const SPOTIFY_SEARCH_ENDPOINT = 'https://api.spotify.com/v1/search';
const MAX_LIMIT = 50;

const sanitizeSearchValue = (value: string | null) =>
  value?.replace(/"/g, '').trim() ?? '';

const parseNumberParam = (value: string | null, fallback: number) => {
  if (!value) {
    return fallback;
  }

  const parsed = Number(value);

  if (!Number.isFinite(parsed) || parsed <= 0) {
    return fallback;
  }

  return parsed;
};

export async function GET(request: Request) {
  const accessToken = await getValidAccessToken();

  if (!accessToken) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const url = new URL(request.url);
  const pageParam = parseNumberParam(url.searchParams.get('page'), 1);
  const limitParam = parseNumberParam(
    url.searchParams.get('limit'),
    POPULAR_ARTISTS_DEFAULT_LIMIT
  );
  const limit = Math.min(limitParam, MAX_LIMIT);
  const page = Math.max(pageParam, 1);
  const genreParam =
    sanitizeSearchValue(url.searchParams.get('genre')) ||
    POPULAR_ARTISTS_DEFAULT_GENRE;
  const genre = isValidPopularArtistGenre(genreParam)
    ? genreParam
    : POPULAR_ARTISTS_DEFAULT_GENRE;
  const market =
    url.searchParams.get('market')?.trim() || POPULAR_ARTISTS_DEFAULT_MARKET;
  const artistName = sanitizeSearchValue(url.searchParams.get('artist'));
  const offset = (page - 1) * limit;

  const queryTerms = [`genre:"${genre}"`];

  if (artistName) {
    queryTerms.push(`artist:"${artistName}"`);
  }

  const searchParams = new URLSearchParams({
    type: 'artist',
    q: queryTerms.join(' '),
    limit: String(limit),
    offset: String(offset),
  });

  if (market) {
    searchParams.set('market', market);
  }

  const response = await fetch(
    `${SPOTIFY_SEARCH_ENDPOINT}?${searchParams.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: 'no-store',
    }
  );

  if (!response.ok) {
    const details = await response.text();
    return NextResponse.json(
      { error: `Failed to fetch artists: ${details}` },
      { status: response.status }
    );
  }

  const payload = (await response.json()) as ApiArtistSearchResponse;
  const section = payload.artists ?? {};
  const apiArtists = Array.isArray(section.items) ? section.items : [];
  const sortedArtists = [...apiArtists].sort(
    (a, b) => (b.popularity ?? 0) - (a.popularity ?? 0)
  );
  const items = sortedArtists.map(mapArtist);

  const pagination = resolveOffsetPagination({
    limit: section.limit,
    offset: section.offset,
    total: section.total,
    next: section.next,
    previous: section.previous,
    fallbackLimit: limit,
    fallbackOffset: offset,
  });

  const body: PopularArtistsResponse = {
    items,
    pagination,
    filters: {
      genre,
      market,
      artistName,
    },
  };

  return NextResponse.json(body, {
    headers: {
      'Cache-Control': 'no-store',
    },
  });
}
