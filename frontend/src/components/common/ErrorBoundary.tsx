import { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "./Button";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
          <AlertTriangle className="h-10 w-10 text-clay-500" />
          <h2 className="font-display text-xl font-semibold text-ink">
            Something broke on our end
          </h2>
          <p className="max-w-sm text-sm text-ink/60">
            Refresh the page, or head back home while we sort this out.
          </p>
          <Button onClick={() => (window.location.href = "/")}>Back to home</Button>
        </div>
      );
    }
    return this.props.children;
  }
}
