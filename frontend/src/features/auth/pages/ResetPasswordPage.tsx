import { ResetPasswordForm } from "../components/ResetPasswordForm";

const ResetPasswordPage = () => (
  <div>
    <h1 className="font-display text-2xl font-semibold text-ink">Choose a new password</h1>
    <p className="mt-1.5 mb-8 text-sm text-ink/60">Make it something secure and memorable.</p>
    <ResetPasswordForm />
  </div>
);

export default ResetPasswordPage;
