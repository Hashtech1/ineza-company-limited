import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { ROUTES } from "@/constants/routes";
import { Button } from "@/components/common/Button";
import { Avatar } from "@/components/common/Avatar";
import { cn } from "@/utils/helpers";

const LINKS = [
  { label: "Home", to: ROUTES.HOME },
  { label: "About", to: ROUTES.ABOUT },
  { label: "Services", to: ROUTES.SERVICES },
  { label: "Careers", to: ROUTES.JOBS },
  { label: "Contact", to: ROUTES.CONTACT },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-bone/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to={ROUTES.HOME} className="flex items-center gap-2">
          <img src="/logo.svg" alt="Ineza" className="h-9 w-9" />
          <span className="font-display text-lg font-semibold text-ink">Ineza Co. Ltd</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium text-ink/70 transition-colors hover:text-ink",
                  isActive && "text-moss-800"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {isAuthenticated ? (
            <Link to={ROUTES.DASHBOARD} className="flex items-center gap-2">
              <Avatar firstName={user?.firstName} lastName={user?.lastName} size="sm" />
            </Link>
          ) : (
            <>
              <Link to={ROUTES.LOGIN} className="text-sm font-medium text-ink/70 hover:text-ink">
                Sign in
              </Link>
              <Link to={ROUTES.REGISTER}>
                <Button size="sm">Get started</Button>
              </Link>
            </>
          )}
        </div>

        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-bone md:hidden">
          <div className="container-page flex flex-col gap-1 py-3">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-ink/80 hover:bg-moss-50"
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-2 flex gap-2 px-3">
              {isAuthenticated ? (
                <Link to={ROUTES.DASHBOARD} className="w-full">
                  <Button fullWidth size="sm">Dashboard</Button>
                </Link>
              ) : (
                <>
                  <Link to={ROUTES.LOGIN} className="w-full">
                    <Button variant="outline" fullWidth size="sm">Sign in</Button>
                  </Link>
                  <Link to={ROUTES.REGISTER} className="w-full">
                    <Button fullWidth size="sm">Get started</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
