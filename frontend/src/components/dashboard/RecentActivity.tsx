import { timeAgo } from "@/utils/formatDate";

export interface ActivityItem {
  id: string;
  message: string;
  timestamp: string;
}

export const RecentActivity = ({ items }: { items: ActivityItem[] }) => (
  <ol className="space-y-4">
    {items.map((item, idx) => (
      <li key={item.id} className="flex gap-3">
        <div className="flex flex-col items-center">
          <span className="h-2 w-2 rounded-full bg-moss-700" />
          {idx < items.length - 1 && <span className="mt-1 h-full w-px flex-1 bg-ink/10" />}
        </div>
        <div className="pb-4">
          <p className="text-sm text-ink/80">{item.message}</p>
          <p className="text-xs text-ink/40">{timeAgo(item.timestamp)}</p>
        </div>
      </li>
    ))}
  </ol>
);
