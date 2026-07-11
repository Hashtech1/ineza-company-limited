import { ReactNode } from "react";
import { AlertCircle, CheckCircle2, Info } from "lucide-react";
import { cn } from "@/utils/helpers";

type Tone = "info" | "success" | "error";

const STYLE: Record<Tone, { icon: typeof Info; classes: string }> = {
  info: { icon: Info, classes: "border-blue-200 bg-blue-50 text-blue-700" },
  success: { icon: CheckCircle2, classes: "border-moss-500/30 bg-moss-50 text-moss-800" },
  error: { icon: AlertCircle, classes: "border-red-200 bg-red-50 text-red-700" },
};

export const Alert = ({ tone = "info", children }: { tone?: Tone; children: ReactNode }) => {
  const { icon: Icon, classes } = STYLE[tone];
  return (
    <div className={cn("flex items-start gap-2.5 rounded-lg border px-4 py-3 text-sm", classes)}>
      <Icon className="mt-0.5 h-4 w-4 shrink-0" />
      <div>{children}</div>
    </div>
  );
};
