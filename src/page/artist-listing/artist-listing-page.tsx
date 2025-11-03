'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';

import { usePopularArtists } from '@/features/artist-listing';
import { useI18n } from '@/shared/i18n';
import { Button, Card, Pagination } from '@/shared/ui';

import { getFollowersLabel, getGenresLabel } from './artist-listing-page.helpers';
import { ArtistListingEmpty, ArtistListingError, ArtistListingLoading } from './artist-listing-page.feedback';

const DEFAULT_PAGE = 1;

export const ArtistListingPage = () => {
  const { t } = useI18n('artist-listing-page');
  const [page, setPage] = useState(DEFAULT_PAGE);
  const headerRef = useRef<HTMLDivElement>(null);

  const { data, isLoading, isError, error, refetch, isFetching } =
    usePopularArtists({ page });

  const artists = data?.items ?? [];
  const totalPages = data?.pagination.totalPages ?? 0;
  const genre = data?.filters.genre;

  const handlePageChange = (nextPage: number) => {
    setPage(nextPage);
    headerRef?.current?.scrollIntoView({ behavior: "smooth", block: "nearest" })
  };

  const renderContent = () => {
    if (isLoading) {
      return <ArtistListingLoading />;
    }

    if (isError) {
      return <ArtistListingError error={error} refetch={refetch} />;
    }

    if (!artists.length) {
      return <ArtistListingEmpty />;
    }

    return (
      <>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {artists.map(artist => {
            const followers = getFollowersLabel(artist);
            const genresLabel = getGenresLabel(artist);

            return (
              <Card
                key={artist.id}
                title={artist.name}
                subtitle={genresLabel ?? t('card.subtitleFallback')}
                description={t('card.popularity', {
                  value: artist.popularity,
                })}
                media={
                  artist.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={artist.imageUrl}
                      alt={t('card.mediaAlt', { name: artist.name })}
                      className="h-24 w-24 rounded-2xl object-cover shadow-lg"
                      height={96}
                      width={96}
                    />
                  ) : (
                    <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-dashed border-border/60 bg-muted text-lg font-semibold text-muted-foreground">
                      {artist.name.charAt(0).toUpperCase()}
                    </div>
                  )
                }
                actions={
                  <Button asChild variant="secondary" size="sm">
                    <Link href={artist.externalUrl} target="_blank" rel="noreferrer">
                      {t('card.spotifyCta')}
                    </Link>
                  </Button>
                }
              >
                <dl className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <dt>{t('card.followers.label')}</dt>
                    <dd className="text-foreground font-medium">
                      {followers}
                    </dd>
                  </div>
                  {genresLabel ? (
                    <div className="flex justify-between">
                      <dt>{t('card.genres.label')}</dt>
                      <dd className="text-foreground font-medium">
                        {genresLabel}
                      </dd>
                    </div>
                  ) : null}
                </dl>
              </Card>
            );
          })}
        </div>

        {totalPages > 1 ? (
          <div className="mt-10 flex justify-center">
            <Pagination
              page={page}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        ) : null}
      </>
    );
  };

  return (
    <div className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
        <header ref={headerRef} className="mb-10 space-y-4 text-center md:space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            {t('hero.badge')}
          </p>
          <div className="space-y-3 text-balance">
            <h1 className="text-3xl font-semibold text-foreground md:text-5xl">
              {t('hero.title')}
            </h1>
            <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-lg">
              {t('hero.description')}
            </p>
          </div>
          {genre ? (
            <p className="text-xs text-muted-foreground">
              {t('hero.filtersNotice', { genre })}
            </p>
          ) : null}
          {isFetching ? (
            <p className="text-xs text-muted-foreground">
              {t('states.updating')}
            </p>
          ) : null}
        </header>

        {renderContent()}
      </div>
    </div>
  );
};
