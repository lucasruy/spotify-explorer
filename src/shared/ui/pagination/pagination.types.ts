import type { HTMLAttributes } from 'react';

export type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
} & HTMLAttributes<HTMLElement>;
