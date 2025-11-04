export type ApiAlbumImage = {
  url?: string;
  width?: number;
  height?: number;
};

export type ApiAlbumArtist = {
  id: string;
  name: string;
};

export type ApiAlbum = {
  id: string;
  name: string;
  release_date?: string;
  release_date_precision?: 'year' | 'month' | 'day';
  total_tracks?: number;
  images?: ApiAlbumImage[];
  artists?: ApiAlbumArtist[];
  external_urls?: {
    spotify?: string;
  };
};

export type ApiAlbumSearchResponse = {
  albums: {
    href?: string;
    items?: ApiAlbum[];
    limit?: number;
    next?: string | null;
    offset?: number;
    previous?: string | null;
    total?: number;
  };
};

export type AlbumArtist = {
  id: string;
  name: string;
};

export type Album = {
  id: string;
  name: string;
  artists: AlbumArtist[];
  releaseDate: string | null;
  releaseYear: string | null;
  totalTracks: number;
  imageUrl: string | null;
  externalUrl: string;
};
