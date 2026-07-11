import { RegisterForm } from "../components/RegisterForm";

const RegisterPage = () => (
  <div>
    <h1 className="font-display text-2xl font-semibold text-ink">Create your account</h1>
    <p className="mt-1.5 mb-8 text-sm text-ink/60">Join Ineza to apply for roles and track your progress.</p>
    <RegisterForm />
  </div>
);

export default RegisterPage;
