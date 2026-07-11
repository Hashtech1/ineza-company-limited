// Component form of the auth guard, for places that prefer wrapping
// children directly over the <ProtectedRoute /> outlet pattern.
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { ROUTES } from "@/constants/routes";

export const AuthMiddleware = ({ children }: { children: ReactNode }) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }
  return <>{children}</>;
};
