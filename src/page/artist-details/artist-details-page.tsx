'use client';

import Link from 'next/link';

import type { ArtistDetails } from '@/features/artist-details';
import { useI18n } from '@/shared/i18n';
import { Button, Card } from '@/shared/ui';

export type ArtistDetailsPageProps = {
  artist: ArtistDetails;
};

export const ArtistDetailsPage = ({ artist }: ArtistDetailsPageProps) => {
  const { t } = useI18n('artist-details-page');

  const genres = artist.genres.length
    ? artist.genres.slice(0, 5).join(', ')
    : t('sections.about.emptyGenres');

  return (
    <div className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
        <header className="mb-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-6">
            {artist.imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={artist.imageUrl}
                alt={t('hero.mediaAlt', { name: artist.name })}
                className="h-28 w-28 rounded-3xl object-cover shadow-lg md:h-36 md:w-36"
                height={144}
                width={144}
              />
            ) : (
              <div className="border-border/60 bg-primary/10 text-primary flex h-28 w-28 items-center justify-center rounded-3xl border text-3xl font-semibold md:h-36 md:w-36">
                {artist.name.charAt(0).toUpperCase()}
              </div>
            )}

            <div className="space-y-3 text-balance">
              <p className="text-muted-foreground text-xs font-semibold tracking-[0.3em] uppercase">
                {t('hero.badge')}
              </p>
              <h1 className="text-foreground text-3xl font-semibold md:text-5xl">
                {artist.name}
              </h1>
              <p className="text-muted-foreground max-w-xl text-sm md:text-lg">
                {t('hero.description', { genres })}
              </p>
            </div>
          </div>
        </header>

        <main className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <section className="space-y-6 rounded-3xl border border-border/60 bg-card/40 p-6 shadow-sm">
            <header className="space-y-2">
              <h2 className="text-foreground text-xl font-semibold md:text-2xl">
                {t('sections.about.title')}
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                {t('sections.about.subtitle')}
              </p>
            </header>

            <dl className="grid gap-4 text-sm md:text-base">
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <dt className="text-muted-foreground text-xs font-semibold tracking-[0.3em] uppercase">
                  {t('sections.about.followersLabel')}
                </dt>
                <dd className="text-foreground text-lg font-semibold md:text-xl">
                  {artist.followers.toLocaleString()}
                </dd>
              </div>

              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <dt className="text-muted-foreground text-xs font-semibold tracking-[0.3em] uppercase">
                  {t('sections.about.popularityLabel')}
                </dt>
                <dd className="text-foreground text-lg font-semibold md:text-xl">
                  {t('sections.about.popularityValue', {
                    value: artist.popularity,
                  })}
                </dd>
              </div>

              <div className="flex flex-col gap-1">
                <dt className="text-muted-foreground text-xs font-semibold tracking-[0.3em] uppercase">
                  {t('sections.about.genresLabel')}
                </dt>
                <dd className="text-foreground text-sm md:text-base">{genres}</dd>
              </div>
            </dl>
          </section>

          <aside className="space-y-6">
            <Card
              className="border-border/60 bg-card/40"
              title={t('sections.quickActions.title')}
              subtitle={t('sections.quickActions.subtitle')}
              description={t('sections.quickActions.description')}
              actions={
                <div className="ml-auto flex items-center gap-2">
                  <Button asChild size="sm" variant="primary">
                    <Link href={artist.externalUrl} target="_blank" rel="noreferrer">
                      {t('sections.quickActions.spotifyCta')}
                    </Link>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <Link href="/artists">{t('sections.quickActions.listingCta')}</Link>
                  </Button>
                </div>
              }
            >
              <p className="text-muted-foreground text-sm">
                {t('sections.quickActions.helper')}
              </p>
            </Card>
          </aside>
        </main>
      </div>
    </div>
  );
};
