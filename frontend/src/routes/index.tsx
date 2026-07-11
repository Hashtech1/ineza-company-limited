// Declarative route tables, grouped by area of the app.
// App.tsx composes these areas with their respective layouts and guards;
// these exports are also handy for tests or for rendering route lists
// (e.g. a sitemap) without pulling in layout/guard concerns.
export { websiteRoutes } from "./website.routes";
export { authRoutes } from "./auth.routes";
export { dashboardRoutes } from "./dashboard.routes";
