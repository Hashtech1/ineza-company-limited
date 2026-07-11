import { ForgotPasswordForm } from "../components/ForgotPasswordForm";

const ForgotPasswordPage = () => (
  <div>
    <h1 className="font-display text-2xl font-semibold text-ink">Reset your password</h1>
    <p className="mt-1.5 mb-8 text-sm text-ink/60">We'll email you a secure link.</p>
    <ForgotPasswordForm />
  </div>
);

export default ForgotPasswordPage;
