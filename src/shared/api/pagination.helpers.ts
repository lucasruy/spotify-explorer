type OffsetPaginationInput = {
  limit?: number;
  offset?: number;
  total?: number;
  next?: string | null;
  previous?: string | null;
  fallbackLimit: number;
  fallbackOffset: number;
};

export type OffsetPaginationResult = {
  page: number;
  limit: number;
  totalItems: number | null;
  hasNext: boolean;
  hasPrevious: boolean;
};

const sanitizeNumber = (value: unknown) => {
  const parsed = Number(value);

  if (!Number.isFinite(parsed)) {
    return null;
  }

  return Number.parseInt(String(parsed), 10);
};

export const resolveOffsetPagination = (
  input: OffsetPaginationInput
): OffsetPaginationResult => {
  const fallbackLimit = Math.max(1, sanitizeNumber(input.fallbackLimit) ?? 1);
  const fallbackOffset = Math.max(0, sanitizeNumber(input.fallbackOffset) ?? 0);

  const responseLimit = sanitizeNumber(input.limit);
  const safeLimit =
    responseLimit !== null && responseLimit > 0 ? responseLimit : fallbackLimit;

  const responseOffset = sanitizeNumber(input.offset);
  const safeOffset =
    responseOffset !== null && responseOffset >= 0
      ? responseOffset
      : fallbackOffset;

  const total = sanitizeNumber(input.total);
  const totalItems = total !== null && total >= 0 ? total : null;

  const page = safeLimit > 0 ? Math.floor(safeOffset / safeLimit) + 1 : 1;

  const hasNext = typeof input.next === 'string' && input.next.length > 0;
  const hasPrevious = typeof input.previous === 'string' && input.previous.length > 0;

  return {
    page,
    limit: safeLimit,
    totalItems,
    hasNext,
    hasPrevious,
  };
};
