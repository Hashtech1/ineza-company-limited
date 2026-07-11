import { Search } from "lucide-react";
import { InputHTMLAttributes } from "react";
import { cn } from "@/utils/helpers";

export const SearchBar = ({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) => (
  <div className={cn("relative", className)}>
    <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
    <input
      type="search"
      className="h-11 w-full rounded-full border border-ink/15 bg-bone pl-10 pr-4 text-sm placeholder:text-ink/40 focus:border-moss-500 focus:outline-none"
      {...props}
    />
  </div>
);
