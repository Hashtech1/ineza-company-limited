import { useMutation, useQueryClient } from "@tanstack/react-query";
import { recruitmentService } from "../services/recruitment.service";
import { Job } from "../types";
import { notificationService } from "@/services/notification/notification.service";

/**
 * Admin/HR-side mutations for managing job postings.
 */
export function useRecruitment() {
  const queryClient = useQueryClient();

  const invalidate = () => queryClient.invalidateQueries({ queryKey: ["jobs"] });

  const createJob = useMutation({
    mutationFn: (payload: Partial<Job>) => recruitmentService.createJob(payload),
    onSuccess: () => {
      notificationService.success("Job posted successfully.");
      invalidate();
    },
  });

  const updateJob = useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: Partial<Job> }) =>
      recruitmentService.updateJob(id, payload),
    onSuccess: () => {
      notificationService.success("Job updated.");
      invalidate();
    },
  });

  const deleteJob = useMutation({
    mutationFn: (id: string) => recruitmentService.deleteJob(id),
    onSuccess: () => {
      notificationService.success("Job removed.");
      invalidate();
    },
  });

  return { createJob, updateJob, deleteJob };
}
