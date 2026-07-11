import { Link } from "react-router-dom";
import { MapPin, Clock, ArrowUpRight } from "lucide-react";
import { Card } from "@/components/common/Card";
import { Badge } from "@/components/common/Badge";
import { buildRoute, ROUTES } from "@/constants/routes";
import { timeAgo } from "@/utils/formatDate";

export interface JobSummary {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  postedAt: string;
}

export const JobCard = ({ job }: { job: JobSummary }) => (
  <Card className="group flex flex-col gap-4 transition-shadow hover:shadow-lg">
    <div className="flex items-start justify-between">
      <div>
        <Badge tone="success">{job.department}</Badge>
        <h3 className="mt-3 font-display text-lg font-semibold text-ink">{job.title}</h3>
      </div>
      <ArrowUpRight className="h-5 w-5 text-ink/30 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-moss-700" />
    </div>
    <div className="flex flex-wrap gap-4 text-sm text-ink/60">
      <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {job.location}</span>
      <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {job.type}</span>
    </div>
    <div className="flex items-center justify-between border-t border-ink/10 pt-4">
      <span className="text-xs text-ink/40">Posted {timeAgo(job.postedAt)}</span>
      <Link
        to={buildRoute(ROUTES.JOB_DETAILS, { id: job.id })}
        className="text-sm font-medium text-moss-800 hover:underline"
      >
        View role
      </Link>
    </div>
  </Card>
);
