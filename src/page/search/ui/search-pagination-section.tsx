import { Button } from '@/shared/ui';

type SearchPaginationSectionProps = {
  summary: string;
  hasPrevious: boolean;
  hasNext: boolean;
  previousLabel: string;
  nextLabel: string;
  currentLabel: string;
  onPrevious: () => void;
  onNext: () => void;
};

export const SearchPaginationSection = ({
  summary,
  hasPrevious,
  hasNext,
  previousLabel,
  nextLabel,
  currentLabel,
  onPrevious,
  onNext,
}: SearchPaginationSectionProps) => {
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
