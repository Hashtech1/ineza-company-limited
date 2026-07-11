import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useSearchParams } from "react-router-dom";
import { resetPasswordSchema, ResetPasswordFormData } from "../validation/authSchemas";
import { authService } from "../services/auth.service";
import { FormField } from "@/components/forms/FormField";
import { Input } from "@/components/common/Input";
import { Button } from "@/components/common/Button";
import { notificationService } from "@/services/notification/notification.service";
import { ROUTES } from "@/constants/routes";
import { useState } from "react";

export const ResetPasswordForm = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({ resolver: zodResolver(resetPasswordSchema) });

  const onSubmit = async (payload: ResetPasswordFormData) => {
    const token = params.get("token") ?? "";
    setIsSubmitting(true);
    try {
      await authService.resetPassword({ token, ...payload });
      notificationService.success("Password reset. You can sign in now.");
      navigate(ROUTES.LOGIN);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormField label="New password" htmlFor="password" required error={errors.password?.message}>
        <Input id="password" type="password" placeholder="••••••••" {...register("password")} />
      </FormField>
      <FormField label="Confirm password" htmlFor="confirmPassword" required error={errors.confirmPassword?.message}>
        <Input id="confirmPassword" type="password" placeholder="••••••••" {...register("confirmPassword")} />
      </FormField>
      <Button type="submit" fullWidth isLoading={isSubmitting}>
        Reset password
      </Button>
    </form>
  );
};
