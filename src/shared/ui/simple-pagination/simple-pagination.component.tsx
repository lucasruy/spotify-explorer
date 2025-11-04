'use client';

import { Button } from '../button';

export type SimplePaginationProps = {
  summary: string;
  currentLabel: string;
  previousLabel: string;
  nextLabel: string;
  hasPrevious: boolean;
  hasNext: boolean;
  onPrevious: () => void;
  onNext: () => void;
};

export const SimplePagination = ({
  summary,
  currentLabel,
  previousLabel,
  nextLabel,
  hasPrevious,
  hasNext,
  onPrevious,
  onNext,
}: SimplePaginationProps) => {
  return (
    <div className="mt-10 flex flex-col items-center gap-3">
      <div className="flex items-center gap-3">
        <Button
          type="button"
          variant="outline"
          size="sm"
          disabled={!hasPrevious}
          onClick={onPrevious}
        >
          {previousLabel}
        </Button>

        <span className="text-muted-foreground text-xs md:text-sm">
          {currentLabel}
        </span>

        <Button
          type="button"
          variant="outline"
          size="sm"
          disabled={!hasNext}
          onClick={onNext}
        >
          {nextLabel}
        </Button>
      </div>
      <p className="text-muted-foreground text-xs md:text-sm">{summary}</p>
    </div>
  );
};
