import { RouteObject } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import DashboardOverviewPage from "@/pages/DashboardOverviewPage";
import ProfilePage from "@/pages/ProfilePage";
import RecruitmentDashboardPage from "@/features/recruitment/pages/RecruitmentDashboardPage";
import MyApplicationsPage from "@/features/recruitment/pages/MyApplicationsPage";

export const dashboardRoutes: RouteObject[] = [
  { path: ROUTES.DASHBOARD, element: <DashboardOverviewPage /> },
  { path: ROUTES.DASHBOARD_RECRUITMENT, element: <RecruitmentDashboardPage /> },
  { path: ROUTES.DASHBOARD_MY_APPLICATIONS, element: <MyApplicationsPage /> },
  { path: "/dashboard/profile", element: <ProfilePage /> },
];
