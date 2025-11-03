'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';

import { usePopularArtists } from '@/features/artist-listing';
import { useI18n } from '@/shared/i18n';
import { Button, Card, Pagination } from '@/shared/ui';

import {
  clampPage,
  getFollowersLabel,
  getGenresLabel,
} from './artist-listing-page.helpers';
import {
  ArtistListingEmpty,
  ArtistListingError,
  ArtistListingLoading,
} from './artist-listing-page.feedback';

const DEFAULT_PAGE = 1;

export const ArtistListingPage = () => {
  const { t } = useI18n('artist-listing-page');
  const [page, setPage] = useState(DEFAULT_PAGE);
  const headerRef = useRef<HTMLDivElement>(null);

  const { data, isLoading, isError, error, refetch, isFetching } =
    usePopularArtists({ page });

  const artists = data?.items ?? [];
  const totalPages = data?.pagination.totalPages ?? 0;
  const totalItems = data?.pagination.totalItems ?? 0;
  const currentPage = data?.pagination.page ?? clampPage(page, totalPages);
  const genre = data?.filters.genre;

  const handlePageChange = (nextPage: number) => {
    setPage(nextPage);
    headerRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });
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
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
                    <div className="border-border/60 bg-muted text-muted-foreground flex h-24 w-24 items-center justify-center rounded-2xl border border-dashed text-lg font-semibold">
                      {artist.name.charAt(0).toUpperCase()}
                    </div>
                  )
                }
                actions={
                  <Button asChild variant="secondary" size="sm">
                    <Link
                      href={artist.externalUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t('card.spotifyCta')}
                    </Link>
                  </Button>
                }
              >
                <dl className="text-muted-foreground space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt>{t('card.followers.label')}</dt>
                    <dd className="text-foreground font-medium">{followers}</dd>
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

        <div className="mt-10 flex flex-col items-center gap-3">
          {totalPages > 1 ? (
            <Pagination
              page={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          ) : null}

          {totalItems ? (
            <p className="text-muted-foreground text-xs">
              {t('pagination.summary', {
                current: currentPage,
                total: Math.max(totalPages, 1),
                count: totalItems,
              })}
            </p>
          ) : null}
        </div>
      </>
    );
  };

  return (
    <div className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
        <header
          ref={headerRef}
          className="mb-10 space-y-4 text-center md:space-y-6"
        >
          <p className="text-muted-foreground text-xs font-semibold tracking-[0.3em] uppercase">
            {t('hero.badge')}
          </p>
          <div className="space-y-3 text-balance">
            <h1 className="text-foreground text-3xl font-semibold md:text-5xl">
              {t('hero.title')}
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-sm md:text-lg">
              {t('hero.description')}
            </p>
          </div>
          {genre ? (
            <p className="text-muted-foreground text-xs">
              {t('hero.filtersNotice', { genre })}
            </p>
          ) : null}
          {isFetching ? (
            <p className="text-muted-foreground text-xs">
              {t('states.updating')}
            </p>
          ) : null}
        </header>

        {renderContent()}
      </div>
    </div>
  );
};
