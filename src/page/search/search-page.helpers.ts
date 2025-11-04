import type { SearchCategory } from '@/features/search';

type Translate = (key: string, params?: Record<string, unknown>) => string;

type SelectOption = {
  value: SearchCategory;
  label: string;
};

const followersFormatter = new Intl.NumberFormat(undefined, {
  notation: 'compact',
  maximumFractionDigits: 1,
});

export const createFilterOptions = (
  t: Translate,
  categories: SearchCategory[]
): SelectOption[] => {
  return categories.map(category => ({
    value: category,
    label: t(`filters.options.${category}` as const),
  }));
};

export const getCategoryLabel = (
  t: Translate,
  category: SearchCategory
): string => {
  return t(`filters.options.${category}` as const);
};

export const formatFollowers = (value: number) => {
  if (!Number.isFinite(value)) {
    return '0';
  }

  return followersFormatter.format(value);
};

export const formatDuration = (durationMs: number) => {
  if (!Number.isFinite(durationMs) || durationMs <= 0) {
    return '0:00';
  }

  const totalSeconds = Math.floor(durationMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

export const getInitials = (value: string) => {
  const parts = value.split(' ').filter(Boolean);

  if (!parts.length) {
    return '';
  }

  if (parts.length === 1) {
    return parts[0]!.slice(0, 2).toUpperCase();
  }

  const first = parts[0]![0] ?? '';
  const last = parts[parts.length - 1]![0] ?? '';

  return `${first}${last}`.toUpperCase();
};

export const joinValues = (values: string[]) => {
  return values.filter(Boolean).join(', ');
};
