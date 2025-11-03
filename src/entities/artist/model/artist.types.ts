export type ApiArtistImage = {
  url?: string;
  width?: number;
  height?: number;
};

export type ApiArtist = {
  id: string;
  name: string;
  followers?: {
    total?: number;
  };
  genres?: string[];
  images?: ApiArtistImage[];
  popularity?: number;
  external_urls?: {
    spotify?: string;
  };
};

export type ApiArtistSearchResponse = {
  artists: {
    href?: string;
    items?: ApiArtist[];
    limit?: number;
    next?: string | null;
    offset?: number;
    previous?: string | null;
    total?: number;
  };
};

export type Artist = {
  id: string;
  name: string;
  followers: number;
  genres: string[];
  imageUrl: string | null;
  popularity: number;
  externalUrl: string;
};
