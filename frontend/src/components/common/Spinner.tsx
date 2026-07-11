import { Loader2 } from "lucide-react";
import { cn } from "@/utils/helpers";

export const Spinner = ({ className }: { className?: string }) => (
  <Loader2 className={cn("h-5 w-5 animate-spin text-moss-700", className)} />
);
