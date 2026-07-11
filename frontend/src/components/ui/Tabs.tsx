import { ReactNode, useState } from "react";
import { cn } from "@/utils/helpers";

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

export const Tabs = ({ items, defaultTab }: { items: TabItem[]; defaultTab?: string }) => {
  const [active, setActive] = useState(defaultTab ?? items[0]?.id);

  return (
    <div>
      <div className="flex gap-1 border-b border-ink/10">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={cn(
              "border-b-2 px-4 py-2.5 text-sm font-medium transition-colors",
              active === item.id
                ? "border-moss-900 text-ink"
                : "border-transparent text-ink/50 hover:text-ink"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="py-5">{items.find((i) => i.id === active)?.content}</div>
    </div>
  );
};
