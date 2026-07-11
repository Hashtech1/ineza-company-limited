import { Link } from "react-router-dom";
import { Compass } from "lucide-react";
import { Button } from "@/components/common/Button";
import { ROUTES } from "@/constants/routes";

const NotFoundPage = () => (
  <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-6 text-center">
    <Compass className="h-10 w-10 text-clay-500" />
    <p className="font-display text-6xl font-semibold text-ink">404</p>
    <h1 className="font-display text-xl font-semibold text-ink">This page took a wrong turn</h1>
    <p className="max-w-sm text-sm text-ink/60">
      The page you're looking for doesn't exist or may have moved.
    </p>
    <Link to={ROUTES.HOME}>
      <Button>Back to home</Button>
    </Link>
  </div>
);

export default NotFoundPage;
