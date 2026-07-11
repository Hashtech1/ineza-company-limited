import { JobApplication } from "../types";
import { DataTable, Column } from "@/components/tables/DataTable";
import { ApplicationStatusBadge } from "./ApplicationStatusBadge";
import { formatDate } from "@/utils/formatDate";
import { Button } from "@/components/common/Button";

interface ApplicantTableProps {
  applications: JobApplication[];
  isLoading?: boolean;
  onView?: (application: JobApplication) => void;
}

export const ApplicantTable = ({ applications, isLoading, onView }: ApplicantTableProps) => {
  const columns: Column<JobApplication>[] = [
    { header: "Applicant", accessor: (row) => row.applicantName },
    { header: "Role", accessor: (row) => row.jobTitle },
    { header: "Applied", accessor: (row) => formatDate(row.appliedAt) },
    { header: "Status", accessor: (row) => <ApplicationStatusBadge status={row.status} /> },
    {
      header: "",
      accessor: (row) => (
        <Button size="sm" variant="ghost" onClick={() => onView?.(row)}>
          Review
        </Button>
      ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={applications}
      isLoading={isLoading}
      keyExtractor={(row) => row.id}
      emptyMessage="No applicants yet for this role."
    />
  );
};
