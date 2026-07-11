export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  SERVICES: "/services",
  CONTACT: "/contact",
  JOBS: "/jobs",
  JOB_DETAILS: "/jobs/:id",
  APPLY_JOB: "/jobs/:id/apply",
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  FORGOT_PASSWORD: "/auth/forgot-password",
  RESET_PASSWORD: "/auth/reset-password",
  DASHBOARD: "/dashboard",
  DASHBOARD_RECRUITMENT: "/dashboard/recruitment",
  DASHBOARD_MY_APPLICATIONS: "/dashboard/my-applications",
  NOT_FOUND: "*",
} as const;

export const buildRoute = (route: string, params: Record<string, string | number>) =>
  Object.entries(params).reduce(
    (acc, [key, value]) => acc.replace(`:${key}`, String(value)),
    route
  );
