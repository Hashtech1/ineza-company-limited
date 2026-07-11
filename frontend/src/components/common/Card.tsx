import { HTMLAttributes } from "react";
import { cn } from "@/utils/helpers";

export const Card = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("rounded-xl2 border border-ink/10 bg-bone p-6 shadow-card", className)}
    {...props}
  />
);
