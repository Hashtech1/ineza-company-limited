import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { recruitmentService } from "../services/recruitment.service";
import { QueryParams } from "@/types/common.types";

export function useJobs(initialParams: QueryParams = {}) {
  const [params, setParams] = useState<QueryParams>(initialParams);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["jobs", params],
    queryFn: () => recruitmentService.listJobs(params),
  });

  return { jobs: data?.items ?? [], total: data?.total ?? 0, isLoading, error, params, setParams, refetch };
}
