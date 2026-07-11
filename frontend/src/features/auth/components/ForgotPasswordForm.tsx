import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { forgotPasswordSchema, ForgotPasswordFormData } from "../validation/authSchemas";
import { authService } from "../services/auth.service";
import { FormField } from "@/components/forms/FormField";
import { Input } from "@/components/common/Input";
import { Button } from "@/components/common/Button";
import { Alert } from "@/components/feedback/Alert";

export const ForgotPasswordForm = () => {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({ resolver: zodResolver(forgotPasswordSchema) });

  const onSubmit = async (payload: ForgotPasswordFormData) => {
    setIsSubmitting(true);
    try {
      await authService.forgotPassword(payload);
      setSent(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (sent) {
    return <Alert tone="success">Check your inbox for a link to reset your password.</Alert>;
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormField label="Email address" htmlFor="email" required error={errors.email?.message}>
        <Input id="email" type="email" placeholder="you@company.com" {...register("email")} />
      </FormField>
      <Button type="submit" fullWidth isLoading={isSubmitting}>
        Send reset link
      </Button>
    </form>
  );
};
