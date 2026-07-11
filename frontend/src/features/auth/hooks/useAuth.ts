import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RootState } from "@/store";
import { authService } from "../services/auth.service";
import { setCredentials, logout as logoutAction } from "@/store/slices/auth.slice";
import { LoginPayload, RegisterPayload } from "@/types/auth.types";
import { notificationService } from "@/services/notification/notification.service";
import { MESSAGES } from "@/constants/messages";
import { ROUTES } from "@/constants/routes";

export function useAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const authState = useSelector((state: RootState) => state.auth);

  const login = async (payload: LoginPayload) => {
    setIsSubmitting(true);
    try {
      const result = await authService.login(payload);
      dispatch(setCredentials(result));
      notificationService.success(MESSAGES.LOGIN_SUCCESS);
      navigate(ROUTES.DASHBOARD);
    } finally {
      setIsSubmitting(false);
    }
  };

  const register = async (payload: RegisterPayload) => {
    setIsSubmitting(true);
    try {
      await authService.register(payload);
      notificationService.success(MESSAGES.REGISTER_SUCCESS);
      navigate(ROUTES.LOGIN);
    } finally {
      setIsSubmitting(false);
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
    } finally {
      dispatch(logoutAction());
      notificationService.info(MESSAGES.LOGOUT_SUCCESS);
      navigate(ROUTES.LOGIN);
    }
  };

  return { ...authState, login, register, logout, isSubmitting };
}
