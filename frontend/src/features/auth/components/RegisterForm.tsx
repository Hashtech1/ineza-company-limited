import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { registerSchema, RegisterFormData } from "../validation/authSchemas";
import { useAuth } from "../hooks/useAuth";
import { FormField } from "@/components/forms/FormField";
import { Input } from "@/components/common/Input";
import { Button } from "@/components/common/Button";
import { ROUTES } from "@/constants/routes";

export const RegisterForm = () => {
  const { register: registerUser, isSubmitting } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({ resolver: zodResolver(registerSchema) });

  return (
    <form className="space-y-5" onSubmit={handleSubmit(registerUser)} noValidate>
      <div className="grid grid-cols-2 gap-4">
        <FormField label="First name" htmlFor="firstName" required error={errors.firstName?.message}>
          <Input id="firstName" placeholder="Jane" {...register("firstName")} />
        </FormField>
        <FormField label="Last name" htmlFor="lastName" required error={errors.lastName?.message}>
          <Input id="lastName" placeholder="Uwase" {...register("lastName")} />
        </FormField>
      </div>

      <FormField label="Email address" htmlFor="email" required error={errors.email?.message}>
        <Input id="email" type="email" placeholder="you@company.com" {...register("email")} />
      </FormField>

      <FormField label="Phone number" htmlFor="phone" required error={errors.phone?.message}>
        <Input id="phone" placeholder="078 000 0000" {...register("phone")} />
      </FormField>

      <FormField label="Password" htmlFor="password" required error={errors.password?.message}>
        <Input id="password" type="password" placeholder="••••••••" {...register("password")} />
      </FormField>

      <FormField label="Confirm password" htmlFor="confirmPassword" required error={errors.confirmPassword?.message}>
        <Input id="confirmPassword" type="password" placeholder="••••••••" {...register("confirmPassword")} />
      </FormField>

      <Button type="submit" fullWidth isLoading={isSubmitting}>
        Create account
      </Button>

      <p className="text-center text-sm text-ink/60">
        Already have an account?{" "}
        <Link to={ROUTES.LOGIN} className="font-medium text-moss-800 hover:underline">
          Sign in
        </Link>
      </p>
    </form>
  );
};
