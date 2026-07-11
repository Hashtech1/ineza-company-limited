import { ReactNode } from "react";
import { cn } from "@/utils/helpers";

interface FormActionsProps {
  children: ReactNode;
  align?: "left" | "right" | "between";
  className?: string;
}

const ALIGN = { left: "justify-start", right: "justify-end", between: "justify-between" };

export const FormActions = ({ children, align = "right", className }: FormActionsProps) => (
  <div className={cn("flex items-center gap-3 pt-2", ALIGN[align], className)}>{children}</div>
);
