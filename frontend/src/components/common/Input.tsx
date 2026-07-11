import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/utils/helpers";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "h-11 w-full rounded-lg border bg-bone px-3.5 text-sm text-ink placeholder:text-ink/40 transition-colors focus:border-moss-500 focus:outline-none",
          error ? "border-red-400" : "border-ink/15",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
