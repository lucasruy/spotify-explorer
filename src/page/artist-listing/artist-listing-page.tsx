'use client';

import Link from 'next/link';
import { useMemo, useRef, useState } from 'react';

import {
  ArtistListingFilters,
  POPULAR_ARTISTS_DEFAULT_GENRE,
  POPULAR_ARTISTS_DEFAULT_LIMIT,
  artistListingFiltersDefaultValues,
  getPopularArtistGenreOptions,
  sanitizeArtistListingFilters,
  type ArtistListingFiltersForm,
  usePopularArtists,
} from '@/features/artist-listing';
import { useI18n } from '@/shared/i18n';
import { Button, Card, SimplePagination, SpotifyIcon } from '@/shared/ui';
import { calculatePaginationDisplay } from '@/shared/utils/pagination.helpers';

import { getFollowersLabel, getGenresLabel } from './artist-listing-page.helpers';
import {
  ArtistListingEmpty,
  ArtistListingError,
  ArtistListingLoading,
} from './artist-listing-page.feedback';

const DEFAULT_PAGE = 1;

export const ArtistListingPage = () => {
  const { t } = useI18n('artist-listing-page');
  const [page, setPage] = useState(DEFAULT_PAGE);
  const [filters, setFilters] = useState<ArtistListingFiltersForm>(
    artistListingFiltersDefaultValues
  );
  const headerRef = useRef<HTMLDivElement>(null);
  const genreOptions = useMemo(() => {
    const baseOptions = getPopularArtistGenreOptions();
    return baseOptions.map(option => ({
      ...option,
      label:
        t(`filters.genre.options.${option.value}` as const) ?? option.label,
    }));
  }, [t]);

  const { data, isLoading, isError, error, refetch, isFetching } =
    usePopularArtists({
      page,
      artistName: filters.artistName,
      genre: filters.genre,
    });

  const artists = data?.items ?? [];
  const pagination = data?.pagination;
  const totalItems = pagination?.totalItems ?? null;
  const hasNextPage = pagination?.hasNext ?? false;
  const hasPreviousPage = pagination?.hasPrevious ?? false;
  const currentPage = pagination?.page ?? page;
  const limit = pagination?.limit ?? POPULAR_ARTISTS_DEFAULT_LIMIT;
  const { pageStart, pageEnd, totalDisplay } = calculatePaginationDisplay({
    itemsLength: artists.length,
    page: currentPage,
    limit,
    totalItems,
    hasNext: hasNextPage,
  });
  const genre = data?.filters.genre;
  const appliedArtistFilter = data?.filters.artistName;
  const hasCustomGenre = Boolean(
    genre && genre !== POPULAR_ARTISTS_DEFAULT_GENRE
  );
  const displayedGenreLabel = genre
    ? (t(`filters.genre.options.${genre}` as const) ?? genre)
    : null;
  const activeGenreLabel = displayedGenreLabel;

  const handlePageChange = (nextPage: number) => {
    if (nextPage <= 0 || nextPage === page) {
      return;
    }

    setPage(nextPage);
    headerRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });
  };

  const handleFiltersSubmit = (values: ArtistListingFiltersForm) => {
    const sanitized = sanitizeArtistListingFilters(values);

    setFilters(previous => {
      if (
        previous.artistName === sanitized.artistName &&
        previous.genre === sanitized.genre
      ) {
        return previous;
      }

      return sanitized;
    });

    setPage(DEFAULT_PAGE);
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
                  <div className="flex items-center gap-2">
                    <Button asChild size="sm" variant="inverted">
                      <Link href={`/artists/${artist.id}`}>
                        {t('card.detailsCta')}
                      </Link>
                    </Button>
                    <Button asChild variant="secondary" kind="icon" size="sm">
                      <Link
                        href={artist.externalUrl}
                        target="_blank"
                        rel="noreferrer"
                        title={t('card.spotifyCta')}
                      >
                        <SpotifyIcon className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
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

        <SimplePagination
          hasNext={hasNextPage}
          hasPrevious={hasPreviousPage}
          nextLabel={t('pagination.next')}
          previousLabel={t('pagination.previous')}
          currentLabel={t('pagination.current', { page: currentPage })}
          onNext={() => {
            handlePageChange(currentPage + 1);
          }}
          onPrevious={() => {
            handlePageChange(currentPage - 1);
          }}
          summary={t('pagination.summary', {
            start: pageStart,
            end: pageEnd,
            total: totalDisplay,
          })}
        />
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
              {t('hero.filtersNotice', {
                genre: displayedGenreLabel,
              })}
            </p>
          ) : null}
          {appliedArtistFilter || hasCustomGenre ? (
            <p className="text-muted-foreground text-xs">
              {t('hero.activeFilters', {
                artist: appliedArtistFilter || t('filters.emptyValue'),
                genre: hasCustomGenre
                  ? activeGenreLabel
                  : t(`filters.genre.options.${POPULAR_ARTISTS_DEFAULT_GENRE}`),
              })}
            </p>
          ) : null}
          {isFetching ? (
            <p className="text-muted-foreground text-xs">
              {t('states.updating')}
            </p>
          ) : null}
        </header>

        <div className="mb-10">
          <ArtistListingFilters
            initialValues={filters}
            onSubmit={handleFiltersSubmit}
            labels={{
              title: t('filters.title'),
              description: t('filters.description'),
              artistName: {
                label: t('filters.artistName.label'),
                placeholder: t('filters.artistName.placeholder'),
              },
              genre: {
                label: t('filters.genre.label'),
                placeholder: t('filters.genre.placeholder'),
              },
              actions: {
                apply: t('filters.actions.apply'),
                clear: t('filters.actions.clear'),
              },
            }}
            isSubmitting={isFetching}
            genreOptions={genreOptions}
          />
        </div>

        {renderContent()}
      </div>
    </div>
  );
};
