import { ArrowDown, ArrowUp, Minus, LucideIcon } from "lucide-react";
import { Card } from "@/components/common/Card";
import { cn } from "@/utils/helpers";

interface StatCardProps {
  label: string;
  value: string | number;
  change?: number;
  trend?: "up" | "down" | "flat";
  icon?: LucideIcon;
}

const TREND_ICON = { up: ArrowUp, down: ArrowDown, flat: Minus };
const TREND_COLOR = { up: "text-moss-700", down: "text-red-600", flat: "text-ink/40" };

export const StatCard = ({ label, value, change, trend = "flat", icon: Icon }: StatCardProps) => {
  const TrendIcon = TREND_ICON[trend];
  return (
    <Card className="flex items-start justify-between">
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-ink/50">{label}</p>
        <p className="mt-2 font-display text-2xl font-semibold text-ink">{value}</p>
        {change !== undefined && (
          <p className={cn("mt-2 flex items-center gap-1 text-xs font-medium", TREND_COLOR[trend])}>
            <TrendIcon className="h-3.5 w-3.5" /> {Math.abs(change)}%
          </p>
        )}
      </div>
      {Icon && (
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-moss-50 text-moss-700">
          <Icon className="h-5 w-5" />
        </div>
      )}
    </Card>
  );
};
