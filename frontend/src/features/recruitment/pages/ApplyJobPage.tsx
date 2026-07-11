import { useParams } from "react-router-dom";
import { ApplicationForm } from "../components/ApplicationForm";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";

const ApplyJobPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Container className="max-w-xl py-14">
      <PageHeader title="Apply for this role" description="Fill in your details and attach your resume." />
      <div className="mt-8">
        <ApplicationForm jobId={id as string} />
      </div>
    </Container>
  );
};

export default ApplyJobPage;
