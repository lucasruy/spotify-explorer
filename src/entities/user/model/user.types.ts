export type ApiUserProfile = {
  id: string;
  display_name?: string;
  email?: string;
  country?: string;
  product?: string;
  followers?: {
    total?: number;
  };
  images?: Array<{
    url?: string;
  }>;
  external_urls?: {
    spotify?: string;
  };
};

export type UserProfile = {
  id: string;
  displayName: string;
  email?: string;
  country?: string;
  product?: string;
  followers: number;
  imageUrl: string | null;
  externalUrl: string;
};
