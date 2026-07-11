import { Role } from "@/constants/roles";
import { Permission, ROLE_PERMISSIONS } from "@/constants/permissions";

export const hasPermission = (role: Role | undefined, permission: Permission) => {
  if (!role) return false;
  return ROLE_PERMISSIONS[role]?.includes(permission) ?? false;
};
