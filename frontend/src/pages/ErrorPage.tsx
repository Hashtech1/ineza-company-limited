import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/common/Button";

const ErrorPage = ({ resetError }: { resetError?: () => void }) => (
  <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-6 text-center">
    <AlertTriangle className="h-10 w-10 text-clay-500" />
    <h1 className="font-display text-xl font-semibold text-ink">Something went wrong</h1>
    <p className="max-w-sm text-sm text-ink/60">Please try again, or come back a little later.</p>
    <Button onClick={resetError ?? (() => window.location.reload())}>Try again</Button>
  </div>
);

export default ErrorPage;
