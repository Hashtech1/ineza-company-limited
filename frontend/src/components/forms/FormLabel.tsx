import { LabelHTMLAttributes } from "react";
import { cn } from "@/utils/helpers";

interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export const FormLabel = ({ className, required, children, ...props }: FormLabelProps) => (
  <label className={cn("text-sm font-medium text-ink/80", className)} {...props}>
    {children} {required && <span className="text-clay-600">*</span>}
  </label>
);
