import { Job } from "../types";
import { JobCard } from "@/components/cards/JobCard";
import { EmptyState } from "@/components/common/EmptyState";
import { Skeleton } from "@/components/common/Skeleton";

interface JobListProps {
  jobs: Job[];
  isLoading?: boolean;
}

export const JobList = ({ jobs, isLoading }: JobListProps) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-52 w-full rounded-xl2" />
        ))}
      </div>
    );
  }

  if (jobs.length === 0) {
    return <EmptyState title="No open roles right now" description="Check back soon — new roles post frequently." />;
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={{
            id: job.id,
            title: job.title,
            department: job.department,
            location: job.location,
            type: job.type.replace("_", " "),
            postedAt: job.postedAt,
          }}
        />
      ))}
    </div>
  );
};
