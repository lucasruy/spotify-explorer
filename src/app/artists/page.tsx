import { redirect } from 'react-router-dom';

import { getCurrentUser } from '@/features/user';
import { ArtistListingPage } from '@/page/artist-listing';

export default async function Artists() {
  const profile = await getCurrentUser();

  if (!profile) {
    redirect('/login?from=artists');
  }

  return <ArtistListingPage />;
}
