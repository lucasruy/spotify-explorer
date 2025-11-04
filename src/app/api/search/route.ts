import { NextResponse } from 'next/server';

import { mapAlbum } from '@/entities/album';
import type { ApiAlbum } from '@/entities/album';
import { mapArtist } from '@/entities/artist';
import type { ApiArtist } from '@/entities/artist';
import { mapTrack } from '@/entities/track';
import type { ApiTrack } from '@/entities/track';
import { getValidAccessToken } from '@/features/auth/model';
import {
  SEARCH_DEFAULT_CATEGORY,
  SEARCH_DEFAULT_LIMIT,
  SEARCH_DEFAULT_MARKET,
  SEARCH_DEFAULT_QUERY,
  SEARCH_MAX_LIMIT,
  isValidSearchCategory,
  type SearchCategory,
  type SearchResponse,
} from '@/features/search/model';
import { resolveOffsetPagination } from '@/shared/api';

const SPOTIFY_SEARCH_ENDPOINT = 'https://api.spotify.com/v1/search';

const sanitizeText = (value: string | null) => value?.trim() ?? '';

const parseNumberParam = (value: string | null, fallback: number) => {
  if (!value) {
    return fallback;
  }

  const parsed = Number(value);

  if (!Number.isFinite(parsed) || parsed <= 0) {
    return fallback;
  }

  return Number.parseInt(String(parsed), 10);
};

const parseCategory = (value: string | null): SearchCategory => {
  if (value && isValidSearchCategory(value)) {
    return value;
  }

  return SEARCH_DEFAULT_CATEGORY;
};

const resolveMarket = (value: string | null) => {
  if (value === null) {
    return SEARCH_DEFAULT_MARKET;
  }

  const sanitized = sanitizeText(value);

  if (!sanitized) {
    return null;
  }

  return sanitized.toUpperCase();
};

export async function GET(request: Request) {
  const accessToken = await getValidAccessToken();

  if (!accessToken) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const url = new URL(request.url);
  const page = parseNumberParam(url.searchParams.get('page'), 1);
  const limitParam = parseNumberParam(
    url.searchParams.get('limit'),
    SEARCH_DEFAULT_LIMIT
  );
  const limit = Math.min(limitParam, SEARCH_MAX_LIMIT);
  const category = parseCategory(url.searchParams.get('category'));
  const query = sanitizeText(url.searchParams.get('query')) || SEARCH_DEFAULT_QUERY;
  const marketParam = resolveMarket(url.searchParams.get('market'));
  const market = marketParam ?? null;
  const offset = (page - 1) * limit;

  const spotifyType =
    category === 'artists' ? 'artist' : category === 'albums' ? 'album' : 'track';

  const searchParams = new URLSearchParams({
    type: spotifyType,
    q: query,
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
      { error: `Failed to perform search: ${details}` },
      { status: response.status }
    );
  }

  const payload = await response.json();

  const categoryConfig = {
    artists: {
      sectionKey: 'artists',
      mapItem: (item: unknown) => ({
        type: 'artists' as const,
        item: mapArtist(item as ApiArtist),
      }),
    },
    albums: {
      sectionKey: 'albums',
      mapItem: (item: unknown) => ({
        type: 'albums' as const,
        item: mapAlbum(item as ApiAlbum),
      }),
    },
    tracks: {
      sectionKey: 'tracks',
      mapItem: (item: unknown) => ({
        type: 'tracks' as const,
        item: mapTrack(item as ApiTrack),
      }),
    },
  } satisfies Record<
    SearchCategory,
    {
      sectionKey: 'artists' | 'albums' | 'tracks';
      mapItem: (item: unknown) => SearchResponse['items'][number];
    }
  >;

  const { sectionKey, mapItem } = categoryConfig[category];
  const section = (payload?.[sectionKey] ?? {}) as {
    items?: unknown[];
    total?: number;
    limit?: number;
    offset?: number;
    next?: string | null;
    previous?: string | null;
  };

  const apiItems = Array.isArray(section.items) ? section.items : [];
  const mappedItems: SearchResponse['items'] = apiItems.map(item =>
    mapItem(item)
  );

  const pagination = resolveOffsetPagination({
    limit: section.limit,
    offset: section.offset,
    total: section.total,
    next: section.next,
    previous: section.previous,
    fallbackLimit: limit,
    fallbackOffset: offset,
  });

  const body: SearchResponse = {
    items: mappedItems,
    pagination,
    filters: {
      category,
      query,
      market,
    },
  };

  return NextResponse.json(body, {
    headers: {
      'Cache-Control': 'no-store',
    },
  });
}
