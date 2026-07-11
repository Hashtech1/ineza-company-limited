import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { Permission, ROLE_PERMISSIONS } from "@/constants/permissions";

export function usePermission() {
  const role = useSelector((state: RootState) => state.auth.user?.role);

  const can = (permission: Permission) => {
    if (!role) return false;
    return ROLE_PERMISSIONS[role]?.includes(permission) ?? false;
  };

  return { can, role };
}
