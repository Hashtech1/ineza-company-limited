# Ineza Company Limited — Frontend

Corporate website and recruitment portal for Ineza Company Limited, built with React, TypeScript, Vite, Tailwind CSS, Redux Toolkit, and React Query.

## Getting started

```bash
npm install
npm run dev
```

The app runs at http://localhost:5173. Copy `.env.example` to `.env` and point `VITE_API_BASE_URL` at your backend.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — type-check and build for production
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint

## Project structure

```
src/
  app/            App shell, routing, route guards
  assets/         Images, icons, fonts, videos
  components/     Shared UI building blocks (common, ui, cards, charts, forms, modals, navigation, tables, dashboard, feedback)
  config/         Environment and API configuration
  constants/      Roles, permissions, routes, messages
  contexts/       React context providers (theme, notifications)
  features/       Feature modules (auth, recruitment) — each with its own components, hooks, pages, services, types, validation
  hooks/          Shared hooks
  layouts/        Page layouts (public site, auth, dashboard)
  lib/            Third-party client setup (dayjs, react-query)
  middleware/     Route guard logic
  pages/          Standalone marketing pages
  providers/      App-wide provider composition
  routes/         Declarative route configuration
  services/       API client, notifications, storage, uploads
  store/          Redux Toolkit store and slices
  styles/         Global CSS and design tokens
  types/          Shared TypeScript types
  utils/          Formatting, validation, and helper functions
```

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Redux Toolkit + React Redux
- TanStack Query
- React Hook Form + Zod
- Axios
- Recharts
