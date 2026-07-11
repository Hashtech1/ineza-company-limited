import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { loginSchema, LoginFormData } from "../validation/authSchemas";
import { useAuth } from "../hooks/useAuth";
import { FormField } from "@/components/forms/FormField";
import { Input } from "@/components/common/Input";
import { Checkbox } from "@/components/common/Checkbox";
import { Button } from "@/components/common/Button";
import { ROUTES } from "@/constants/routes";

export const LoginForm = () => {
  const { login, isSubmitting } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });

  return (
    <form className="space-y-5" onSubmit={handleSubmit(login)} noValidate>
      <FormField label="Email address" htmlFor="email" required error={errors.email?.message}>
        <Input id="email" type="email" placeholder="you@company.com" {...register("email")} />
      </FormField>

      <FormField label="Password" htmlFor="password" required error={errors.password?.message}>
        <Input id="password" type="password" placeholder="••••••••" {...register("password")} />
      </FormField>

      <div className="flex items-center justify-between">
        <Checkbox id="remember" label="Remember me" {...register("remember")} />
        <Link to={ROUTES.FORGOT_PASSWORD} className="text-sm font-medium text-moss-800 hover:underline">
          Forgot password?
        </Link>
      </div>

      <Button type="submit" fullWidth isLoading={isSubmitting}>
        Sign in
      </Button>

      <p className="text-center text-sm text-ink/60">
        Don't have an account?{" "}
        <Link to={ROUTES.REGISTER} className="font-medium text-moss-800 hover:underline">
          Create one
        </Link>
      </p>
    </form>
  );
};
