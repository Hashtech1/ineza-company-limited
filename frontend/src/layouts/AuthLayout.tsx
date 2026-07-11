import { Link, Outlet } from "react-router-dom";
import { ROUTES } from "@/constants/routes";

export const AuthLayout = () => (
  <div className="grid min-h-screen lg:grid-cols-2">
    <div className="relative hidden flex-col justify-between bg-ink p-10 text-bone lg:flex">
      <Link to={ROUTES.HOME} className="flex items-center gap-2">
        <img src="/logo.svg" alt="Ineza" className="h-9 w-9" />
        <span className="font-display text-lg font-semibold">Ineza Co. Ltd</span>
      </Link>
      <div>
        <p className="font-display text-3xl leading-snug">
          "The right people, in the right seats, moving the right way."
        </p>
        <p className="mt-4 text-sm text-bone/60">Recruitment & fleet services built on trust.</p>
      </div>
      <p className="text-xs text-bone/40">© {new Date().getFullYear()} Ineza Company Limited</p>
    </div>
    <div className="flex items-center justify-center p-6 sm:p-10">
      <div className="w-full max-w-sm">
        <Outlet />
      </div>
    </div>
  </div>
);
