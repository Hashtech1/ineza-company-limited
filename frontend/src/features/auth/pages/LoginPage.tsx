import { LoginForm } from "../components/LoginForm";

const LoginPage = () => (
  <div>
    <h1 className="font-display text-2xl font-semibold text-ink">Welcome back</h1>
    <p className="mt-1.5 mb-8 text-sm text-ink/60">Sign in to manage your applications and profile.</p>
    <LoginForm />
  </div>
);

export default LoginPage;
