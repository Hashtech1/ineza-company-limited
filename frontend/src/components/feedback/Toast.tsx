import { CheckCircle2, XCircle, Info, AlertTriangle, X } from "lucide-react";
import { useNotificationContext } from "@/contexts/NotificationContext";
import { cn } from "@/utils/helpers";

const ICONS = {
  success: CheckCircle2,
  error: XCircle,
  info: Info,
  warning: AlertTriangle,
};

const TONE = {
  success: "border-moss-500/30 bg-moss-50 text-moss-800",
  error: "border-red-300 bg-red-50 text-red-700",
  info: "border-blue-300 bg-blue-50 text-blue-700",
  warning: "border-clay-400/40 bg-clay-400/10 text-clay-700",
};

export const ToastContainer = () => {
  const { toasts, dismiss } = useNotificationContext();

  return (
    <div className="fixed bottom-5 right-5 z-[110] flex w-full max-w-sm flex-col gap-2">
      {toasts.map((toast) => {
        const Icon = ICONS[toast.type];
        return (
          <div
            key={toast.id}
            className={cn(
              "flex items-start gap-3 rounded-xl border px-4 py-3 shadow-card animate-in fade-in slide-in-from-bottom-2",
              TONE[toast.type]
            )}
          >
            <Icon className="mt-0.5 h-5 w-5 shrink-0" />
            <p className="flex-1 text-sm">{toast.message}</p>
            <button onClick={() => dismiss(toast.id)} aria-label="Dismiss">
              <X className="h-4 w-4 opacity-60 hover:opacity-100" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
