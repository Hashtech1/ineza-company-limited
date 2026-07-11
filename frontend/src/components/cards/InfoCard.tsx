import { ReactNode } from "react";
import { Card } from "@/components/common/Card";

interface InfoCardProps {
  title: string;
  children: ReactNode;
  action?: ReactNode;
}

export const InfoCard = ({ title, children, action }: InfoCardProps) => (
  <Card>
    <div className="mb-3 flex items-center justify-between">
      <h4 className="font-display text-base font-semibold text-ink">{title}</h4>
      {action}
    </div>
    <div className="text-sm text-ink/70">{children}</div>
  </Card>
);
