import type { ApiAlbum } from '@/entities/album';

export type ApiTrackArtist = {
  id: string;
  name: string;
};

export type ApiTrack = {
  id: string;
  name: string;
  duration_ms?: number;
  popularity?: number;
  explicit?: boolean;
  preview_url?: string | null;
  external_urls?: {
    spotify?: string;
  };
  artists?: ApiTrackArtist[];
  album?: ApiAlbum;
};

export type ApiTrackSearchResponse = {
  tracks: {
    href?: string;
    items?: ApiTrack[];
    limit?: number;
    next?: string | null;
    offset?: number;
    previous?: string | null;
    total?: number;
  };
};

export type TrackArtist = {
  id: string;
  name: string;
};

export type TrackAlbum = {
  id: string;
  name: string;
  imageUrl: string | null;
  releaseYear: string | null;
};

export type Track = {
  id: string;
  name: string;
  artists: TrackArtist[];
  album: TrackAlbum | null;
  durationMs: number;
  popularity: number;
  explicit: boolean;
  previewUrl: string | null;
  externalUrl: string;
};
