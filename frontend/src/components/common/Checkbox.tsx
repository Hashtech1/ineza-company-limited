import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/utils/helpers";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => (
    <label htmlFor={id} className="flex items-center gap-2 text-sm text-ink/80">
      <input
        ref={ref}
        id={id}
        type="checkbox"
        className={cn(
          "h-4 w-4 rounded border-ink/30 text-moss-700 focus:ring-moss-500",
          className
        )}
        {...props}
      />
      {label}
    </label>
  )
);
Checkbox.displayName = "Checkbox";
