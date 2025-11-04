type PaginationDisplayInput = {
  itemsLength: number;
  page: number;
  limit: number;
  totalItems: number | string | null | undefined;
  hasNext: boolean;
};

export type PaginationDisplayResult = {
  pageStart: number;
  pageEnd: number;
  totalDisplay: number | string;
  visibleCount: number;
};

export const calculatePaginationDisplay = (
  input: PaginationDisplayInput
): PaginationDisplayResult => {
  const safePage = Number.isFinite(input.page) ? Math.max(1, Math.trunc(input.page)) : 1;
  const safeLimit = Number.isFinite(input.limit) ? Math.max(1, Math.trunc(input.limit)) : 1;
  const itemsLength = Number.isFinite(input.itemsLength)
    ? Math.max(0, Math.trunc(input.itemsLength))
    : 0;

  if (itemsLength === 0) {
    const pageStart = 0;
    const pageEnd = 0;
    const visibleCount = Math.max(0, (safePage - 1) * safeLimit);
    const totalDisplay = input.totalItems ?? (input.hasNext ? `${visibleCount}+` : visibleCount);

    return {
      pageStart,
      pageEnd,
      totalDisplay,
      visibleCount,
    };
  }

  const pageStart = (safePage - 1) * safeLimit + 1;
  const pageEnd = pageStart + itemsLength - 1;
  const visibleCount = pageEnd;
  const totalDisplay =
    input.totalItems !== null && input.totalItems !== undefined
      ? input.totalItems
      : input.hasNext
        ? `${visibleCount}+`
        : visibleCount;

  return {
    pageStart,
    pageEnd,
    totalDisplay,
    visibleCount,
  };
};
