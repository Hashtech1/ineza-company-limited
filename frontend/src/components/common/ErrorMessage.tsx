import { AlertCircle } from "lucide-react";

export const ErrorMessage = ({ message }: { message: string }) => (
  <p className="flex items-center gap-1.5 text-xs text-red-600">
    <AlertCircle className="h-3.5 w-3.5" /> {message}
  </p>
);
