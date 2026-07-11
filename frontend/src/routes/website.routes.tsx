import { RouteObject } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import ContactPage from "@/pages/ContactPage";
import JobsPage from "@/features/recruitment/pages/JobsPage";
import JobDetailsPage from "@/features/recruitment/pages/JobDetailsPage";

export const websiteRoutes: RouteObject[] = [
  { path: ROUTES.HOME, element: <HomePage /> },
  { path: ROUTES.ABOUT, element: <AboutPage /> },
  { path: ROUTES.SERVICES, element: <ServicesPage /> },
  { path: ROUTES.CONTACT, element: <ContactPage /> },
  { path: ROUTES.JOBS, element: <JobsPage /> },
  { path: ROUTES.JOB_DETAILS, element: <JobDetailsPage /> },
];
