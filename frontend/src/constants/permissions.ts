import { ROLES } from "./roles";

export const PERMISSIONS = {
  MANAGE_USERS: "manage_users",
  MANAGE_JOBS: "manage_jobs",
  REVIEW_APPLICATIONS: "review_applications",
  VIEW_DASHBOARD: "view_dashboard",
  APPLY_JOBS: "apply_jobs",
} as const;

export type Permission = (typeof PERMISSIONS)[keyof typeof PERMISSIONS];

export const ROLE_PERMISSIONS: Record<string, Permission[]> = {
  [ROLES.ADMIN]: [
    PERMISSIONS.MANAGE_USERS,
    PERMISSIONS.MANAGE_JOBS,
    PERMISSIONS.REVIEW_APPLICATIONS,
    PERMISSIONS.VIEW_DASHBOARD,
  ],
  [ROLES.HR]: [
    PERMISSIONS.MANAGE_JOBS,
    PERMISSIONS.REVIEW_APPLICATIONS,
    PERMISSIONS.VIEW_DASHBOARD,
  ],
  [ROLES.EMPLOYEE]: [PERMISSIONS.VIEW_DASHBOARD],
  [ROLES.APPLICANT]: [PERMISSIONS.APPLY_JOBS],
};
