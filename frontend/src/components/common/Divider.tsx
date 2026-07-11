import { cn } from "@/utils/helpers";

export const Divider = ({ className, label }: { className?: string; label?: string }) => {
  if (!label) return <hr className={cn("border-ink/10", className)} />;
  return (
    <div className={cn("flex items-center gap-3 text-xs uppercase tracking-wide text-ink/40", className)}>
      <span className="h-px flex-1 bg-ink/10" />
      {label}
      <span className="h-px flex-1 bg-ink/10" />
    </div>
  );
};
