import { apiClient } from "@/services/api/axios";
import { ENDPOINTS } from "@/services/api/endpoints";
import { UploadResult } from "@/types/api.types";
import { ApiResponse } from "@/types/common.types";

export const uploadService = {
  async uploadFile(file: File, onProgress?: (percent: number) => void) {
    const formData = new FormData();
    formData.append("file", file);

    const { data } = await apiClient.post<ApiResponse<UploadResult>>(
      ENDPOINTS.UPLOAD,
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (event) => {
          if (onProgress && event.total) {
            onProgress(Math.round((event.loaded * 100) / event.total));
          }
        },
      }
    );
    return data.data;
  },
};
