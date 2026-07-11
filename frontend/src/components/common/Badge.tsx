import { HTMLAttributes } from "react";
import { cn } from "@/utils/helpers";

type Tone = "neutral" | "success" | "warning" | "danger" | "info";

const TONE_STYLES: Record<Tone, string> = {
  neutral: "bg-ink/5 text-ink/70",
  success: "bg-moss-100 text-moss-800",
  warning: "bg-clay-400/20 text-clay-600",
  danger: "bg-red-100 text-red-700",
  info: "bg-blue-100 text-blue-700",
};

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
}

export const Badge = ({ className, tone = "neutral", ...props }: BadgeProps) => (
  <span
    className={cn(
      "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
      TONE_STYLES[tone],
      className
    )}
    {...props}
  />
);
