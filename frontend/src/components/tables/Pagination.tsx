import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/utils/helpers";

interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export const Pagination = ({ page, totalPages, onChange }: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1).slice(
    Math.max(0, page - 3),
    page + 2
  );

  return (
    <div className="flex items-center justify-center gap-1.5">
      <button
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className="rounded-md p-1.5 text-ink/60 hover:bg-moss-50 disabled:opacity-30"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={cn(
            "h-8 w-8 rounded-md text-sm font-medium",
            p === page ? "bg-moss-900 text-bone" : "text-ink/60 hover:bg-moss-50"
          )}
        >
          {p}
        </button>
      ))}
      <button
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
        className="rounded-md p-1.5 text-ink/60 hover:bg-moss-50 disabled:opacity-30"
        aria-label="Next page"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
};
