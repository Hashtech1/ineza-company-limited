import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Permission } from "@/constants/permissions";
import { hasPermission } from "./roleGuard";
import { ROUTES } from "@/constants/routes";

export const RoleMiddleware = ({ permission, children }: { permission: Permission; children: ReactNode }) => {
  const role = useSelector((state: RootState) => state.auth.user?.role);
  if (!hasPermission(role, permission)) {
    return <Navigate to={ROUTES.DASHBOARD} replace />;
  }
  return <>{children}</>;
};
