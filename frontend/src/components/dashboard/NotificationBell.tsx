import { Bell } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

export const NotificationBell = () => {
  const unread = useSelector(
    (state: RootState) => state.dashboard.notifications.filter((n) => !n.read).length
  );

  return (
    <button className="relative rounded-full p-2 hover:bg-moss-50" aria-label="Notifications">
      <Bell className="h-5 w-5 text-ink/60" />
      {unread > 0 && (
        <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-clay-500 px-1 text-[10px] font-semibold text-bone">
          {unread}
        </span>
      )}
    </button>
  );
};
