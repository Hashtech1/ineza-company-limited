import { useJobs } from "../hooks/useJobs";
import { JobList } from "../components/JobList";
import { JobFilterBar } from "../components/JobFilterBar";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";

const JobsPage = () => {
  const { jobs, isLoading, params, setParams } = useJobs();

  return (
    <Container className="py-14">
      <PageHeader
        eyebrow="Careers"
        title="Open roles at Ineza"
        description="We're building steady, capable teams across operations, fleet, and training. Find where you fit."
      />
      <div className="mt-8 space-y-6">
        <JobFilterBar params={params} onChange={setParams} />
        <JobList jobs={jobs} isLoading={isLoading} />
      </div>
    </Container>
  );
};

export default JobsPage;
