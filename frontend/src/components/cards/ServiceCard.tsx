import { LucideIcon } from "lucide-react";
import { Card } from "@/components/common/Card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => (
  <Card className="flex flex-col gap-4">
    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-moss-900 text-bone">
      <Icon className="h-5 w-5" />
    </div>
    <h3 className="font-display text-lg font-semibold text-ink">{title}</h3>
    <p className="text-sm text-ink/60">{description}</p>
  </Card>
);
