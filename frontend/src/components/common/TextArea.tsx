import { TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "@/utils/helpers";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, error, rows = 4, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        className={cn(
          "w-full rounded-lg border bg-bone px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/40 transition-colors focus:border-moss-500 focus:outline-none",
          error ? "border-red-400" : "border-ink/15",
          className
        )}
        {...props}
      />
    );
  }
);
TextArea.displayName = "TextArea";
