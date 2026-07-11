import { NotificationItem } from "@/types/dashboard.types";
import { timeAgo } from "@/utils/formatDate";
import { EmptyState } from "@/components/common/EmptyState";
import { Bell } from "lucide-react";
import { cn } from "@/utils/helpers";

export const NotificationsPanel = ({ notifications }: { notifications: NotificationItem[] }) => {
  if (notifications.length === 0) {
    return <EmptyState title="You're all caught up" description="New notifications will appear here." />;
  }

  return (
    <ul className="divide-y divide-ink/10 rounded-xl2 border border-ink/10">
      {notifications.map((n) => (
        <li key={n.id} className={cn("flex gap-3 px-4 py-3.5", !n.read && "bg-moss-50/50")}>
          <Bell className="mt-0.5 h-4 w-4 shrink-0 text-moss-700" />
          <div className="flex-1">
            <p className="text-sm font-medium text-ink">{n.title}</p>
            <p className="text-sm text-ink/60">{n.message}</p>
            <p className="mt-1 text-xs text-ink/40">{timeAgo(n.createdAt)}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
