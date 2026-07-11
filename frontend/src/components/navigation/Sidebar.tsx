import { NavLink } from "react-router-dom";
import { LayoutDashboard, Briefcase, FileText, User } from "lucide-react";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/utils/helpers";

const ITEMS = [
  { label: "Overview", to: ROUTES.DASHBOARD, icon: LayoutDashboard },
  { label: "Recruitment", to: ROUTES.DASHBOARD_RECRUITMENT, icon: Briefcase },
  { label: "My applications", to: ROUTES.DASHBOARD_MY_APPLICATIONS, icon: FileText },
  { label: "Profile", to: "/dashboard/profile", icon: User },
];

export const Sidebar = () => (
  <aside className="hidden w-64 shrink-0 border-r border-ink/10 bg-bone px-4 py-6 lg:block">
    <nav className="flex flex-col gap-1">
      {ITEMS.map(({ label, to, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          end
          className={({ isActive }) =>
            cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-ink/70 hover:bg-moss-50",
              isActive && "bg-moss-900 text-bone hover:bg-moss-900"
            )
          }
        >
          <Icon className="h-4 w-4" />
          {label}
        </NavLink>
      ))}
    </nav>
  </aside>
);
