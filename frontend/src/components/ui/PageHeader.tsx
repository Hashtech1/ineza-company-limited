import { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
}

export const PageHeader = ({ eyebrow, title, description, actions }: PageHeaderProps) => (
  <div className="flex flex-col gap-4 border-b border-ink/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
    <div>
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-moss-700">
          {eyebrow}
        </p>
      )}
      <h1 className="font-display text-3xl font-semibold text-ink">{title}</h1>
      {description && <p className="mt-2 max-w-xl text-sm text-ink/60">{description}</p>}
    </div>
    {actions}
  </div>
);
