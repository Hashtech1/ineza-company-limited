import { useQuery } from "@tanstack/react-query";
import { recruitmentService } from "../services/recruitment.service";
import { DataTable, Column } from "@/components/tables/DataTable";
import { ApplicationStatusBadge } from "../components/ApplicationStatusBadge";
import { PageHeader } from "@/components/ui/PageHeader";
import { formatDate } from "@/utils/formatDate";
import { JobApplication } from "../types";

const MyApplicationsPage = () => {
  const { data: applications = [], isLoading } = useQuery({
    queryKey: ["my-applications"],
    queryFn: recruitmentService.myApplications,
  });

  const columns: Column<JobApplication>[] = [
    { header: "Role", accessor: (row) => row.jobTitle },
    { header: "Applied", accessor: (row) => formatDate(row.appliedAt) },
    { header: "Status", accessor: (row) => <ApplicationStatusBadge status={row.status} /> },
  ];

  return (
    <div>
      <PageHeader title="My applications" description="Track where each of your applications stands." />
      <div className="mt-6">
        <DataTable
          columns={columns}
          data={applications}
          isLoading={isLoading}
          keyExtractor={(row) => row.id}
          emptyMessage="You haven't applied to any roles yet."
        />
      </div>
    </div>
  );
};

export default MyApplicationsPage;
