'use client';

import { ChangeEvent, useMemo, useRef, useState } from 'react';

import {
  SEARCH_CATEGORIES,
  SEARCH_DEFAULT_CATEGORY,
  SEARCH_DEFAULT_LIMIT,
  type SearchCategory,
  useSearch,
} from '@/features/search';
import { useI18n } from '@/shared/i18n';

import {
  SearchFiltersSection,
  SearchHeroSection,
  SearchPaginationSection,
  SearchResultsSection,
} from './ui';
import { createFilterOptions, getCategoryLabel } from './search-page.helpers';

export const SearchPage = () => {
  const { t } = useI18n('search-page');
  const [category, setCategory] = useState<SearchCategory>(
    SEARCH_DEFAULT_CATEGORY
  );
  const [page, setPage] = useState(1);
  const headerRef = useRef<HTMLDivElement>(null);

  const filterOptions = useMemo(() => {
    return createFilterOptions(t, SEARCH_CATEGORIES);
  }, [t]);

  const { data, isLoading, isError, error, refetch, isFetching } = useSearch({
    category,
    page,
    limit: SEARCH_DEFAULT_LIMIT,
  });

  const items = data?.items ?? [];
  const pagination = data?.pagination;
  const totalItems = pagination?.totalItems ?? null;
  const hasNextPage = pagination?.hasNext ?? false;
  const hasPreviousPage = pagination?.hasPrevious ?? false;
  const currentPage = pagination?.page ?? page;
  const limit = pagination?.limit ?? SEARCH_DEFAULT_LIMIT;
  const pageStart = items.length ? (currentPage - 1) * limit + 1 : 0;
  const pageEnd = items.length ? pageStart + items.length - 1 : 0;
  const visibleCount = items.length ? pageEnd : (currentPage - 1) * limit;
  const totalDisplay =
    totalItems !== null
      ? totalItems
      : hasNextPage
        ? `${visibleCount}+`
        : visibleCount;

  const activeCategoryLabel = getCategoryLabel(
    t,
    data?.filters.category ?? category
  );

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value as SearchCategory);
    setPage(1);
    headerRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });
  };

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

  return (
    <div className="bg-background">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
        <SearchHeroSection
          badge={t('hero.badge')}
          title={t('hero.title')}
          description={t('hero.description')}
          headerRef={headerRef}
        />

        <SearchFiltersSection
          title={t('filters.title')}
          description={t('filters.description')}
          selectLabel={t('filters.select.label')}
          value={category}
          options={filterOptions}
          onChange={handleCategoryChange}
        />
        {isFetching && !isLoading ? (
          <p className="text-muted-foreground text-center text-xs md:text-sm">
            {t('states.updating')}
          </p>
        ) : null}

        <SearchResultsSection
          items={items}
          isLoading={isLoading}
          isError={isError}
          loadingLabel={t('states.loading')}
          errorLabel={t('states.error')}
          retryLabel={t('states.retry')}
          emptyLabel={t('states.empty')}
          errorDetail={error instanceof Error ? error.message : undefined}
          onRetry={() => {
            void refetch();
          }}
          t={t}
        />

        <SearchPaginationSection
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
          summary={t('results.summary', {
            start: pageStart,
            end: pageEnd,
            total: totalDisplay,
            category: activeCategoryLabel,
          })}
        />
      </div>
    </div>
  );
};
