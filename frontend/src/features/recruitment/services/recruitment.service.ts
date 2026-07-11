import { apiClient } from "@/services/api/axios";
import { ENDPOINTS } from "@/services/api/endpoints";
import { ApiResponse, PaginatedResponse, QueryParams } from "@/types/common.types";
import { ApplyPayload, Job, JobApplication } from "../types";

export const recruitmentService = {
  async listJobs(params?: QueryParams) {
    const { data } = await apiClient.get<ApiResponse<PaginatedResponse<Job>>>(ENDPOINTS.JOBS.BASE, { params });
    return data.data;
  },
  async getJob(id: string) {
    const { data } = await apiClient.get<ApiResponse<Job>>(ENDPOINTS.JOBS.BY_ID(id));
    return data.data;
  },
  async apply(payload: ApplyPayload) {
    const { data } = await apiClient.post<ApiResponse<JobApplication>>(ENDPOINTS.APPLICATIONS.BASE, payload);
    return data.data;
  },
  async myApplications() {
    const { data } = await apiClient.get<ApiResponse<JobApplication[]>>(ENDPOINTS.APPLICATIONS.MINE);
    return data.data;
  },
  async createJob(payload: Partial<Job>) {
    const { data } = await apiClient.post<ApiResponse<Job>>(ENDPOINTS.JOBS.BASE, payload);
    return data.data;
  },
  async updateJob(id: string, payload: Partial<Job>) {
    const { data } = await apiClient.put<ApiResponse<Job>>(ENDPOINTS.JOBS.BY_ID(id), payload);
    return data.data;
  },
  async deleteJob(id: string) {
    await apiClient.delete(ENDPOINTS.JOBS.BY_ID(id));
  },
};
