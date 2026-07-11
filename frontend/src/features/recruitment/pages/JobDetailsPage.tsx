import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { MapPin, Clock, Briefcase } from "lucide-react";
import { recruitmentService } from "../services/recruitment.service";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { Skeleton } from "@/components/common/Skeleton";
import { Link } from "react-router-dom";
import { buildRoute, ROUTES } from "@/constants/routes";

const JobDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: job, isLoading } = useQuery({
    queryKey: ["job", id],
    queryFn: () => recruitmentService.getJob(id as string),
    enabled: Boolean(id),
  });

  if (isLoading) {
    return (
      <Container className="py-14">
        <Skeleton className="h-8 w-1/2" />
        <Skeleton className="mt-4 h-40 w-full" />
      </Container>
    );
  }

  if (!job) return null;

  return (
    <Container className="max-w-3xl py-14">
      <Badge tone="success">{job.department}</Badge>
      <h1 className="mt-3 font-display text-3xl font-semibold text-ink">{job.title}</h1>
      <div className="mt-4 flex flex-wrap gap-5 text-sm text-ink/60">
        <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {job.location}</span>
        <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {job.type.replace("_", " ")}</span>
        <span className="flex items-center gap-1.5"><Briefcase className="h-4 w-4" /> {job.department}</span>
      </div>

      <div className="prose prose-sm mt-8 max-w-none text-ink/70">
        <p>{job.description}</p>

        <h3 className="font-display text-lg font-semibold text-ink">Responsibilities</h3>
        <ul>{job.responsibilities.map((r) => <li key={r}>{r}</li>)}</ul>

        <h3 className="font-display text-lg font-semibold text-ink">Requirements</h3>
        <ul>{job.requirements.map((r) => <li key={r}>{r}</li>)}</ul>
      </div>

      <Link to={buildRoute(ROUTES.APPLY_JOB, { id: job.id })}>
        <Button className="mt-6">Apply for this role</Button>
      </Link>
    </Container>
  );
};

export default JobDetailsPage;
