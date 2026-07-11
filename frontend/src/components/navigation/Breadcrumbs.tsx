import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export const Breadcrumbs = () => {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="flex items-center gap-1.5 text-xs text-ink/50">
      <Link to="/" className="flex items-center hover:text-ink"><Home className="h-3.5 w-3.5" /></Link>
      {segments.map((seg, idx) => {
        const path = "/" + segments.slice(0, idx + 1).join("/");
        return (
          <span key={path} className="flex items-center gap-1.5">
            <ChevronRight className="h-3 w-3" />
            <Link to={path} className="capitalize hover:text-ink">{seg.replace(/-/g, " ")}</Link>
          </span>
        );
      })}
    </nav>
  );
};
