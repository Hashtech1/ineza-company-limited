import { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  htmlFor?: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
  hint?: string;
}

export const FormField = ({ label, htmlFor, error, required, children, hint }: FormFieldProps) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={htmlFor} className="text-sm font-medium text-ink/80">
      {label} {required && <span className="text-clay-600">*</span>}
    </label>
    {children}
    {hint && !error && <p className="text-xs text-ink/40">{hint}</p>}
    {error && <p className="text-xs text-red-600">{error}</p>}
  </div>
);
