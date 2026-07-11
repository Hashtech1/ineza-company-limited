import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Permission } from "@/constants/permissions";
import { hasPermission } from "@/middleware/roleGuard";
import { ROUTES } from "@/constants/routes";

export const RoleRoute = ({ permission }: { permission: Permission }) => {
  const role = useSelector((state: RootState) => state.auth.user?.role);
  if (!hasPermission(role, permission)) {
    return <Navigate to={ROUTES.DASHBOARD} replace />;
  }
  return <Outlet />;
};
