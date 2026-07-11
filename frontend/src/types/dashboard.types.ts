export interface StatisticSummary {
  label: string;
  value: number | string;
  change?: number;
  trend?: "up" | "down" | "flat";
  icon?: string;
}

export interface ChartPoint {
  label: string;
  value: number;
  [key: string]: string | number;
}

export interface DashboardState {
  statistics: StatisticSummary[];
  notifications: NotificationItem[];
  isLoading: boolean;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
}
