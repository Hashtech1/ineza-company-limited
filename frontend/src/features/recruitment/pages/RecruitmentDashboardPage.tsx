import { useQuery } from "@tanstack/react-query";
import { recruitmentService } from "../services/recruitment.service";
import { DataTable, Column } from "@/components/tables/DataTable";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/common/Button";
import { Job } from "../types";
import { Badge } from "@/components/common/Badge";
import { formatDate } from "@/utils/formatDate";

const RecruitmentDashboardPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["jobs", "manage"],
    queryFn: () => recruitmentService.listJobs({ pageSize: 50 }),
  });

  const columns: Column<Job>[] = [
    { header: "Title", accessor: (row) => row.title },
    { header: "Department", accessor: (row) => row.department },
    { header: "Posted", accessor: (row) => formatDate(row.postedAt) },
    {
      header: "Status",
      accessor: (row) => <Badge tone={row.isOpen ? "success" : "neutral"}>{row.isOpen ? "Open" : "Closed"}</Badge>,
    },
  ];

  return (
    <div>
      <PageHeader
        title="Recruitment"
        description="Manage open roles and review incoming applications."
        actions={<Button>Post a new role</Button>}
      />
      <div className="mt-6">
        <DataTable
          columns={columns}
          data={data?.items ?? []}
          isLoading={isLoading}
          keyExtractor={(row) => row.id}
          emptyMessage="No roles have been posted yet."
        />
      </div>
    </div>
  );
};

export default RecruitmentDashboardPage;
