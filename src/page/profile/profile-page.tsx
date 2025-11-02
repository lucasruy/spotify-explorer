'use client';

import Link from 'next/link';

import type { UserProfile } from '@/features/user';
import { useI18n } from '@/shared/i18n';
import { Button, LanguageSelector, ThemeToggle } from '@/shared/ui';

type ProfilePageProps = {
  profile: UserProfile;
};

export const ProfilePage = ({ profile }: ProfilePageProps) => {
  const { t } = useI18n('profile-page');

  const profileDetails = [
    {
      id: 'email',
      label: t('sections.details.email'),
      value: profile.email ?? t('sections.details.empty'),
    },
    {
      id: 'country',
      label: t('sections.details.country'),
      value: profile.country ?? t('sections.details.empty'),
    },
    {
      id: 'product',
      label: t('sections.details.plan'),
      value: profile.product ?? t('sections.details.empty'),
    },
  ];

  return (
    <div className="bg-background">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-primary/15 via-transparent to-transparent" />
        <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-6 py-16">
          <header className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  {t('hero.badge')}
                </div>
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    {t('tagline')}
                  </p>
                  <h1 className="text-balance text-4xl font-semibold leading-tight text-foreground md:text-6xl">
                    {t('title', { name: profile.displayName })}
                  </h1>
                </div>
                <p className="max-w-3xl text-balance text-lg text-muted-foreground md:text-xl">
                  {t('subtitle')}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="px-8">
                  <Link href={profile.externalUrl} target="_blank" rel="noreferrer">
                    {t('cta.primary')}
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="px-8">
                  <Link href="/">{t('cta.secondary')}</Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-6 md:w-72">
              <div className="flex items-center justify-end gap-3">
                <ThemeToggle />
                <LanguageSelector />
              </div>
              <div className="rounded-3xl border border-border bg-card/40 p-6 shadow-lg backdrop-blur">
                <div className="flex flex-col items-center gap-4">
                  <div className="h-24 w-24 overflow-hidden rounded-full border border-border/60 bg-card">
                    {profile.imageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        alt={t('hero.avatarAlt', { name: profile.displayName })}
                        src={profile.imageUrl}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-2xl font-semibold text-muted-foreground">
                        {profile.displayName.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <h2 className="text-lg font-semibold text-foreground">
                      {profile.displayName}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {profile.email ?? t('sections.details.empty')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <main className="grid gap-12 pb-16 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <section className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
                  {t('sections.details.title')}
                </h2>
                <p className="text-base text-muted-foreground md:text-lg">
                  {t('sections.details.description')}
                </p>
              </div>
              <div className="grid gap-4">
                {profileDetails.map(item => (
                  <div
                    key={item.id}
                    className="rounded-3xl border border-border bg-card/40 p-6 shadow-sm"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-2 text-base text-foreground md:text-lg">{item.value}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-6">
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
                  {t('sections.followers.title')}
                </h2>
                <p className="text-base text-muted-foreground md:text-lg">
                  {t('sections.followers.description')}
                </p>
              </div>
              <div className="rounded-3xl border border-primary/40 bg-primary/10 p-6">
                <p className="text-4xl font-semibold text-primary md:text-5xl">
                  {profile.followers.toLocaleString()}
                </p>
                <p className="mt-2 text-sm text-primary/90 md:text-base">
                  {t('sections.followers.caption')}
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};
