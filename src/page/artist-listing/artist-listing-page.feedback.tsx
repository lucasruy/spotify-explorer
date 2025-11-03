'use client';

import { PopularArtistsResponse } from '@/features/artist-listing';
import { useI18n } from '@/shared/i18n';
import { Button } from '@/shared/ui';
import { QueryObserverResult, RefetchOptions } from '@tanstack/react-query';

export const ArtistListingLoading = () => {
  const { t } = useI18n('artist-listing-page');

  return (
    <div className="flex flex-col items-center gap-3 py-16 text-center">
      <span className="text-sm font-medium text-muted-foreground">
        {t('states.loading')}
      </span>
    </div>
  );
};

export const ArtistListingError = ({ error, refetch }: { error: unknown; refetch: (options?: RefetchOptions) => Promise<QueryObserverResult<PopularArtistsResponse, unknown>> }) => {
  const { t } = useI18n('artist-listing-page');

  const errorMessage =
    typeof error === 'string'
      ? error
      : (error as Error | undefined)?.message ?? null;
  const isUnauthorized = errorMessage?.includes('401') ?? false;
  const description = isUnauthorized
    ? t('states.unauthorized')
    : t('states.error');

  return (
    <div className="flex flex-col items-center gap-4 py-16 text-center">
      <span className="text-sm font-medium text-muted-foreground">
        {description}
      </span>
      {errorMessage ? (
        <span className="text-xs text-muted-foreground/70">
          {errorMessage}
        </span>
      ) : null}
      <Button type="button" variant="outline" onClick={() => refetch()}>
        {t('states.retry')}
      </Button>
    </div>
  );
};

export const ArtistListingEmpty = () => {
  const { t } = useI18n('artist-listing-page');

  return (
    <div className="flex flex-col items-center gap-3 py-16 text-center">
      <span className="text-sm font-medium text-muted-foreground">
        {t('states.empty')}
      </span>
    </div>
  );
}
