import { useMemo, useState } from "react";

interface UsePaginationOptions {
  totalItems: number;
  pageSize?: number;
  initialPage?: number;
}

export function usePagination({ totalItems, pageSize = 10, initialPage = 1 }: UsePaginationOptions) {
  const [page, setPage] = useState(initialPage);

  const totalPages = Math.max(Math.ceil(totalItems / pageSize), 1);

  const goToPage = (target: number) => {
    setPage(Math.min(Math.max(target, 1), totalPages));
  };

  const range = useMemo(() => {
    const start = (page - 1) * pageSize;
    return { start, end: start + pageSize };
  }, [page, pageSize]);

  return {
    page,
    totalPages,
    pageSize,
    range,
    nextPage: () => goToPage(page + 1),
    prevPage: () => goToPage(page - 1),
    goToPage,
  };
}
