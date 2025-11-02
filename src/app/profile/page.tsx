import { redirect } from 'next/navigation';

import { getCurrentUser } from '@/features/user';
import { ProfilePage } from '@/page/profile';

export default async function Profile() {
  const profile = await getCurrentUser();

  if (!profile) {
    redirect('/login?from=profile');
  }

  return <ProfilePage profile={profile} />;
}
