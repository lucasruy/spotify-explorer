import type { SearchItem } from '@/features/search';

import { Button } from '@/shared/ui';

import { SearchResultCard } from './search-result-card';

type Translate = (key: string, params?: Record<string, unknown>) => string;

type SearchResultsSectionProps = {
  items: SearchItem[];
  isLoading: boolean;
  isError: boolean;
  loadingLabel: string;
  errorLabel: string;
  retryLabel: string;
  emptyLabel: string;
  errorDetail?: string;
  onRetry: () => void;
  t: Translate;
};

export const SearchResultsSection = ({
  items,
  isLoading,
  isError,
  loadingLabel,
  errorLabel,
  retryLabel,
  emptyLabel,
  errorDetail,
  onRetry,
  t,
}: SearchResultsSectionProps) => {
  if (isLoading) {
    return (
      <div className="text-muted-foreground mt-6 flex min-h-[200px] items-center justify-center text-sm">
        {loadingLabel}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mt-6 flex min-h-[200px] flex-col items-center justify-center gap-4 text-center">
        <p className="text-muted-foreground text-sm">{errorLabel}</p>
        <Button
          onClick={() => {
            onRetry();
          }}
          variant="outline"
          size="sm"
        >
          {retryLabel}
        </Button>
        {errorDetail ? (
          <p className="text-muted-foreground/80 text-xs">{errorDetail}</p>
        ) : null}
      </div>
    );
  }

  if (!items.length) {
    return (
      <div className="text-muted-foreground mt-6 flex min-h-[200px] items-center justify-center text-sm">
        {emptyLabel}
      </div>
    );
  }

  return (
    <div className="mt-6 grid auto-rows-fr items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">
      {items.map(entry => (
        <SearchResultCard
          key={`${entry.type}-${entry.item.id}`}
          entry={entry}
          t={t}
        />
      ))}
    </div>
  );
};
