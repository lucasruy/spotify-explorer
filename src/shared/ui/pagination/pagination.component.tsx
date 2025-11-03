'use client';

import { useMemo } from 'react';

import { cn } from '@/shared/lib';
import { Button } from '@/shared/ui/button';

import type { PaginationProps } from './pagination.types';

const DOTS = 'dots';

const createRange = (start: number, end: number) => {
  if (end < start) {
    return [];
  }

  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
};

export const Pagination = ({
  page,
  totalPages,
  onPageChange,
  siblingCount = 1,
  className,
  ...props
}: PaginationProps) => {
  const activePage = Math.min(Math.max(page, 1), totalPages);

  const pages = useMemo(() => {
    if (totalPages <= 0) {
      return [];
    }

    const totalPageNumbers = siblingCount * 2 + 5;

    if (totalPageNumbers >= totalPages) {
      return createRange(1, totalPages);
    }

    const leftSiblingIndex = Math.max(activePage - siblingCount, 1);
    const rightSiblingIndex = Math.min(activePage + siblingCount, totalPages);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftRange = createRange(1, 3 + siblingCount * 2);
      return [...leftRange, DOTS, totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightRange = createRange(
        totalPages - (2 + siblingCount * 2),
        totalPages
      );
      return [1, DOTS, ...rightRange];
    }

    const middleRange = createRange(leftSiblingIndex, rightSiblingIndex);

    return [1, DOTS, ...middleRange, DOTS, totalPages];
  }, [activePage, siblingCount, totalPages]);

  const handleChange = (value: number) => {
    if (value === activePage || value < 1 || value > totalPages) {
      return;
    }

    onPageChange(value);
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav
      aria-label="Pagination"
      className={cn('flex items-center justify-center', className)}
      {...props}
    >
      <ul className="flex items-center gap-2">
        <li>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => handleChange(activePage - 1)}
            disabled={activePage <= 1}
            aria-label="Previous page"
          >
            Prev
          </Button>
        </li>

        {pages.map((item, index) => {
          if (item === DOTS) {
            return (
              <li key={`dots-${index}`}>
                <span className="px-2 text-sm text-muted-foreground">...</span>
              </li>
            );
          }

          return (
            <li key={`page-${item}`}>
              <Button
                type="button"
                variant={item === activePage ? 'primary' : 'ghost'}
                size="sm"
                onClick={() => handleChange(item as number)}
                aria-current={item === activePage ? 'page' : undefined}
                aria-label={`Go to page ${item}`}
              >
                {item}
              </Button>
            </li>
          );
        })}

        <li>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => handleChange(activePage + 1)}
            disabled={activePage >= totalPages}
            aria-label="Next page"
          >
            Next
          </Button>
        </li>
      </ul>
    </nav>
  );
};
