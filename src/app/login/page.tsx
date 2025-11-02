import { getCurrentUser } from '@/features/user';
import { LoginPage } from '@/page/login';

export default async function Login() {
  const profile = await getCurrentUser();

  return <LoginPage isLogged={Boolean(profile)} />;
}
