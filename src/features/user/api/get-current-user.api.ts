import { getValidAccessToken } from '@/features/auth/model';
import { mapUserProfile, type UserProfile } from '@/entities/user';

export const getCurrentUser = async (): Promise<UserProfile | null> => {
  const accessToken = await getValidAccessToken();

  if (!accessToken) {
    return null;
  }

  const response = await fetch('https://api.spotify.com/v1/me', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    return null;
  }

  const payload = await response.json();
  return mapUserProfile(payload);
};
