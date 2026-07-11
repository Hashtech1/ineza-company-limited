import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/services/api/axios";
import { ENDPOINTS } from "@/services/api/endpoints";
import { StatisticsGrid } from "@/components/dashboard/StatisticsGrid";
import { NotificationsPanel } from "@/components/dashboard/NotificationsPanel";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { BarChart } from "@/components/charts/BarChart";
import { Card } from "@/components/common/Card";
import { PageHeader } from "@/components/ui/PageHeader";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const FALLBACK_STATS = [
  { label: "Open roles", value: 8, change: 12, trend: "up" as const },
  { label: "Applications", value: 143, change: 6, trend: "up" as const },
  { label: "Shortlisted", value: 21, change: 3, trend: "down" as const },
  { label: "Hires this month", value: 5, change: 0, trend: "flat" as const },
];

const FALLBACK_CHART = [
  { label: "Mon", value: 12 }, { label: "Tue", value: 19 }, { label: "Wed", value: 14 },
  { label: "Thu", value: 22 }, { label: "Fri", value: 18 }, { label: "Sat", value: 9 }, { label: "Sun", value: 6 },
];

const DashboardOverviewPage = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const { data: statistics } = useQuery({
    queryKey: ["dashboard-statistics"],
    queryFn: async () => {
      try {
        const { data } = await apiClient.get(ENDPOINTS.DASHBOARD.STATISTICS);
        return data.data;
      } catch {
        return FALLBACK_STATS;
      }
    },
  });

  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Dashboard"
        title={`Welcome back${user?.firstName ? `, ${user.firstName}` : ""}`}
        description="Here's how recruitment is trending this week."
      />

      <StatisticsGrid statistics={statistics ?? FALLBACK_STATS} />

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <h3 className="mb-4 font-display text-lg font-semibold text-ink">Applications this week</h3>
          <BarChart data={FALLBACK_CHART} />
        </Card>
        <Card>
          <h3 className="mb-4 font-display text-lg font-semibold text-ink">Notifications</h3>
          <NotificationsPanel notifications={[]} />
        </Card>
      </div>

      <Card>
        <h3 className="mb-4 font-display text-lg font-semibold text-ink">Recent activity</h3>
        <RecentActivity
          items={[
            { id: "1", message: "New application received for Fleet Coordinator", timestamp: new Date().toISOString() },
            { id: "2", message: "Interview scheduled with Eric N.", timestamp: new Date(Date.now() - 86400000).toISOString() },
          ]}
        />
      </Card>
    </div>
  );
};

export default DashboardOverviewPage;
