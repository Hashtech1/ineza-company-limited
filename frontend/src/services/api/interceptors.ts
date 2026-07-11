import { AxiosError, InternalAxiosRequestConfig } from "axios";
import { apiClient } from "./axios";
import { tokenStorage } from "@/utils/security";
import { notificationService } from "@/services/notification/notification.service";
import { MESSAGES } from "@/constants/messages";
import { HTTP_STATUS } from "@/constants/api";

apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = tokenStorage.getAccessToken();
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

let isRefreshing = false;

apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    if (!error.response) {
      notificationService.error(MESSAGES.NETWORK_ERROR);
      return Promise.reject(error);
    }

    if (
      error.response.status === HTTP_STATUS.UNAUTHORIZED &&
      originalRequest &&
      !originalRequest._retry &&
      !isRefreshing
    ) {
      originalRequest._retry = true;
      isRefreshing = true;
      try {
        const refreshToken = tokenStorage.getRefreshToken();
        if (!refreshToken) throw new Error("No refresh token");

        const { data } = await apiClient.post("/auth/refresh", { refreshToken });
        tokenStorage.setAccessToken(data.data.accessToken);
        isRefreshing = false;
        return apiClient(originalRequest);
      } catch (refreshError) {
        isRefreshing = false;
        tokenStorage.clear();
        window.location.href = "/auth/login";
        return Promise.reject(refreshError);
      }
    }

    const message =
      (error.response.data as { message?: string })?.message || MESSAGES.GENERIC_ERROR;
    notificationService.error(message);

    return Promise.reject(error);
  }
);

export default apiClient;
