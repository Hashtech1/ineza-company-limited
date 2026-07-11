import { ReactNode } from "react";
import { cn } from "@/utils/helpers";

interface TableRowProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const TableRow = ({ children, onClick, className }: TableRowProps) => (
  <tr
    onClick={onClick}
    className={cn(
      "border-b border-ink/5 last:border-0 hover:bg-moss-50/40",
      onClick && "cursor-pointer",
      className
    )}
  >
    {children}
  </tr>
);
