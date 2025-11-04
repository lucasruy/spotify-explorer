import type { ChangeEvent } from 'react';

import type { SearchCategory } from '@/features/search';
import { Select } from '@/shared/ui';

type SearchFilterOption = {
  value: SearchCategory;
  label: string;
};

type SearchFiltersSectionProps = {
  title: string;
  description: string;
  selectLabel: string;
  value: SearchCategory;
  options: SearchFilterOption[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

export const SearchFiltersSection = ({
  title,
  description,
  selectLabel,
  value,
  options,
  onChange,
}: SearchFiltersSectionProps) => {
  return (
    <section className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="space-y-2 text-center md:text-left">
        <h2 className="text-foreground text-xl font-semibold">{title}</h2>
        <p className="text-muted-foreground text-sm md:text-base">
          {description}
        </p>
      </div>

      <div className="w-full max-w-xs space-y-2">
        <label
          htmlFor="search-category"
          className="text-foreground text-sm font-medium"
        >
          {selectLabel}
        </label>
        <Select
          id="search-category"
          value={value}
          onChange={onChange}
          options={options}
        />
      </div>
    </section>
  );
};
