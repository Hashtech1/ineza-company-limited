import { cn } from "@/utils/helpers";

export const Skeleton = ({ className }: { className?: string }) => (
  <div className={cn("animate-pulse rounded-md bg-ink/10", className)} />
);
