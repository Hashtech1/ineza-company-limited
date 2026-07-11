import { ReactNode, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/utils/helpers";

export interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
}

export const Accordion = ({ items }: { items: AccordionItem[] }) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="divide-y divide-ink/10 rounded-xl2 border border-ink/10">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id}>
            <button
              className="flex w-full items-center justify-between px-5 py-4 text-left"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
            >
              <span className="text-sm font-medium text-ink">{item.title}</span>
              <ChevronDown className={cn("h-4 w-4 text-ink/50 transition-transform", isOpen && "rotate-180")} />
            </button>
            {isOpen && <div className="px-5 pb-4 text-sm text-ink/60">{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
};
