import { notFound } from 'next/navigation';

import { getArtistDetails } from '@/features/artist-details';
import { ArtistDetailsPage } from '@/page/artist-details';

type ArtistDetailsRouteParams = {
  params: {
    id: string;
  };
};

export default async function ArtistDetailsRoute({
  params,
}: ArtistDetailsRouteParams) {
  const { id } = await params
  const artist = await getArtistDetails(id);

  if (!artist) {
    notFound();
  }

  return <ArtistDetailsPage artist={artist} />;
}
