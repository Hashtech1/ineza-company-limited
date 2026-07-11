import { LucideIcon } from "lucide-react";
import { cn } from "@/utils/helpers";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

/**
 * A borderless, minimal variant of ServiceCard for dense feature grids
 * (e.g. inside a page section that already has its own card chrome).
 */
export const FeatureCard = ({ icon: Icon, title, description, className }: FeatureCardProps) => (
  <div className={cn("flex flex-col gap-3", className)}>
    <Icon className="h-6 w-6 text-moss-700" />
    <h4 className="font-medium text-ink">{title}</h4>
    <p className="text-sm text-ink/60">{description}</p>
  </div>
);
