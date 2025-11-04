'use client';

import Image from 'next/image';
import Link from 'next/link';

import type { UserProfile } from '@/entities/user';
import { useI18n } from '@/shared/i18n';
import { Button, LanguageSelector, ThemeToggle } from '@/shared/ui';

import { navbarLinks } from './navbar.constants';

type NavbarProps = {
  user: UserProfile | null;
};

export const Navbar = ({ user }: NavbarProps) => {
  const { t } = useI18n('navbar');
  const enabledLinks = navbarLinks.filter(link => {
    if (user !== null) {
      return true;
    }

    if ('public' in link) {
      return Boolean(link.public);
    }

    return false;
  });

  return (
    <nav className="border-border/60 bg-background/80 sticky top-0 z-10 border-b backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl justify-between px-6">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-foreground hover:text-primary text-sm font-semibold transition"
          >
            Spotify Explorer
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <ul className="text-muted-foreground ml-auto hidden items-center gap-6 text-sm md:flex">
            {enabledLinks.map(link => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="hover:text-primary transition"
                >
                  {t(link.labelKey)}
                </Link>
              </li>
            ))}
          </ul>

          <div className="bg-border/60 h-6 w-px" aria-hidden />

          <div className="flex items-center">
            {!user ? (
              <Button asChild size="sm" className="px-4">
                <Link href="/login">{t('actions.login')}</Link>
              </Button>
            ) : (
              <Link
                href="/profile"
                className="group relative flex items-center"
              >
                <div
                  className="border-button bg-card h-9 w-9 overflow-hidden rounded-full border"
                  title={user.displayName}
                >
                  {user.imageUrl ? (
                    <Image
                      src={user.imageUrl}
                      alt={user.displayName}
                      width={36}
                      height={36}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-muted-foreground flex h-full w-full items-center justify-center text-sm font-semibold">
                      {user.displayName.charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>
              </Link>
            )}
          </div>

          <ThemeToggle />
          <LanguageSelector />
        </div>
      </div>
    </nav>
  );
};
