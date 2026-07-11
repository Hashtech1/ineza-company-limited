export const ROLES = {
  ADMIN: "admin",
  HR: "hr",
  APPLICANT: "applicant",
  EMPLOYEE: "employee",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];

export const ROLE_LABELS: Record<Role, string> = {
  [ROLES.ADMIN]: "Administrator",
  [ROLES.HR]: "HR Manager",
  [ROLES.APPLICANT]: "Applicant",
  [ROLES.EMPLOYEE]: "Employee",
};
