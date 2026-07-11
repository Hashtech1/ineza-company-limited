import { useSelector, useDispatch } from "react-redux";
import { LogOut } from "lucide-react";
import { RootState } from "@/store";
import { logout } from "@/store/slices/auth.slice";
import { Avatar } from "@/components/common/Avatar";
import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import { NotificationBell } from "@/components/dashboard/NotificationBell";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/constants/routes";

export const DashboardHeader = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate(ROUTES.LOGIN);
  };

  return (
    <header className="flex h-16 items-center justify-between border-b border-ink/10 bg-bone px-5 sm:px-8">
      <Breadcrumbs />
      <div className="flex items-center gap-4">
        <NotificationBell />
        <div className="flex items-center gap-2">
          <Avatar firstName={user?.firstName} lastName={user?.lastName} size="sm" />
          <span className="hidden text-sm font-medium text-ink/80 sm:inline">
            {user?.firstName} {user?.lastName}
          </span>
        </div>
        <button onClick={handleLogout} aria-label="Sign out" className="rounded-full p-2 hover:bg-moss-50">
          <LogOut className="h-4 w-4 text-ink/60" />
        </button>
      </div>
    </header>
  );
};
