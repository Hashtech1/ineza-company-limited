import { StatisticSummary } from "@/types/dashboard.types";
import { StatCard } from "@/components/cards/StatCard";
import { Briefcase, Users, FileCheck, Clock } from "lucide-react";

const ICONS = [Briefcase, Users, FileCheck, Clock];

export const StatisticsGrid = ({ statistics }: { statistics: StatisticSummary[] }) => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {statistics.map((stat, idx) => (
      <StatCard
        key={stat.label}
        label={stat.label}
        value={stat.value}
        change={stat.change}
        trend={stat.trend}
        icon={ICONS[idx % ICONS.length]}
      />
    ))}
  </div>
);
