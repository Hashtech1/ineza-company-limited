export const ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
    REFRESH: "/auth/refresh",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
    ME: "/auth/me",
  },
  USERS: {
    BASE: "/users",
    BY_ID: (id: string) => `/users/${id}`,
  },
  JOBS: {
    BASE: "/jobs",
    BY_ID: (id: string) => `/jobs/${id}`,
  },
  APPLICATIONS: {
    BASE: "/applications",
    BY_ID: (id: string) => `/applications/${id}`,
    MINE: "/applications/mine",
  },
  DASHBOARD: {
    STATISTICS: "/dashboard/statistics",
    NOTIFICATIONS: "/dashboard/notifications",
  },
  UPLOAD: "/uploads",
};
