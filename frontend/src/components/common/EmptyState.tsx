import { ReactNode } from "react";
import { Inbox } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
}

export const EmptyState = ({ title, description, icon, action }: EmptyStateProps) => (
  <div className="flex flex-col items-center justify-center gap-3 rounded-xl2 border border-dashed border-ink/15 px-6 py-16 text-center">
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-moss-50 text-moss-700">
      {icon ?? <Inbox className="h-6 w-6" />}
    </div>
    <h3 className="font-display text-lg font-medium text-ink">{title}</h3>
    {description && <p className="max-w-sm text-sm text-ink/60">{description}</p>}
    {action}
  </div>
);
