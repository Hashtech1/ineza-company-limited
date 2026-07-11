import { Routes, Route } from "react-router-dom";
import { PublicLayout } from "@/layouts/PublicLayout";
import { AuthLayout } from "@/layouts/AuthLayout";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { ProtectedRoute } from "@/app/routes/ProtectedRoute";
import { PublicOnlyRoute } from "@/app/routes/PublicRoute";
import { ROUTES } from "@/constants/routes";

import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import ContactPage from "@/pages/ContactPage";
import NotFoundPage from "@/pages/NotFoundPage";
import DashboardOverviewPage from "@/pages/DashboardOverviewPage";
import ProfilePage from "@/pages/ProfilePage";

import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import ForgotPasswordPage from "@/features/auth/pages/ForgotPasswordPage";
import ResetPasswordPage from "@/features/auth/pages/ResetPasswordPage";

import JobsPage from "@/features/recruitment/pages/JobsPage";
import JobDetailsPage from "@/features/recruitment/pages/JobDetailsPage";
import ApplyJobPage from "@/features/recruitment/pages/ApplyJobPage";
import MyApplicationsPage from "@/features/recruitment/pages/MyApplicationsPage";
import RecruitmentDashboardPage from "@/features/recruitment/pages/RecruitmentDashboardPage";

import "@/services/api/interceptors";

function App() {
  return (
    <Routes>
      {/* Public marketing site */}
      <Route element={<PublicLayout />}>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.SERVICES} element={<ServicesPage />} />
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
        <Route path={ROUTES.JOBS} element={<JobsPage />} />
        <Route path={ROUTES.JOB_DETAILS} element={<JobDetailsPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path={ROUTES.APPLY_JOB} element={<ApplyJobPage />} />
        </Route>
      </Route>

      {/* Auth flows */}
      <Route element={<PublicOnlyRoute />}>
        <Route element={<AuthLayout />}>
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
          <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
          <Route path={ROUTES.RESET_PASSWORD} element={<ResetPasswordPage />} />
        </Route>
      </Route>

      {/* Authenticated dashboard */}
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path={ROUTES.DASHBOARD} element={<DashboardOverviewPage />} />
          <Route path={ROUTES.DASHBOARD_RECRUITMENT} element={<RecruitmentDashboardPage />} />
          <Route path={ROUTES.DASHBOARD_MY_APPLICATIONS} element={<MyApplicationsPage />} />
          <Route path="/dashboard/profile" element={<ProfilePage />} />
        </Route>
      </Route>

      <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
