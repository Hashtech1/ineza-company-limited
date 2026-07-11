import { HTMLAttributes } from "react";
import { cn } from "@/utils/helpers";

export const Container = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("container-page", className)} {...props} />
);
