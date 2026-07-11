import { apiClient } from "@/services/api/axios";
import { ENDPOINTS } from "@/services/api/endpoints";
import { ApiResponse } from "@/types/common.types";
import {
  AuthResponse,
  ForgotPasswordPayload,
  LoginPayload,
  RegisterPayload,
  ResetPasswordPayload,
} from "@/types/auth.types";
import { User } from "@/types/user.types";

export const authService = {
  async login(payload: LoginPayload) {
    const { data } = await apiClient.post<ApiResponse<AuthResponse>>(ENDPOINTS.AUTH.LOGIN, payload);
    return data.data;
  },
  async register(payload: RegisterPayload) {
    const { data } = await apiClient.post<ApiResponse<AuthResponse>>(ENDPOINTS.AUTH.REGISTER, payload);
    return data.data;
  },
  async logout() {
    await apiClient.post(ENDPOINTS.AUTH.LOGOUT);
  },
  async forgotPassword(payload: ForgotPasswordPayload) {
    const { data } = await apiClient.post<ApiResponse<null>>(ENDPOINTS.AUTH.FORGOT_PASSWORD, payload);
    return data;
  },
  async resetPassword(payload: ResetPasswordPayload) {
    const { data } = await apiClient.post<ApiResponse<null>>(ENDPOINTS.AUTH.RESET_PASSWORD, payload);
    return data;
  },
  async me() {
    const { data } = await apiClient.get<ApiResponse<User>>(ENDPOINTS.AUTH.ME);
    return data.data;
  },
};
