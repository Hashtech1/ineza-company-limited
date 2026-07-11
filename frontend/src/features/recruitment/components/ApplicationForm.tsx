import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { applicationSchema, ApplicationFormData } from "../validation/recruitmentSchemas";
import { useApplication } from "../hooks/useApplication";
import { FormField } from "@/components/forms/FormField";
import { Input } from "@/components/common/Input";
import { TextArea } from "@/components/common/TextArea";
import { FileUploadField } from "@/components/forms/FileUploadField";
import { Button } from "@/components/common/Button";
import { Alert } from "@/components/feedback/Alert";

export const ApplicationForm = ({ jobId }: { jobId: string }) => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const { submitApplication, isSubmitting, uploadProgress } = useApplication();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplicationFormData>({ resolver: zodResolver(applicationSchema) });

  const onSubmit = async (data: ApplicationFormData) => {
    if (!resumeFile) {
      setResumeError("Please attach your resume");
      return;
    }
    setResumeError(null);
    await submitApplication({ jobId, ...data }, resumeFile);
    setSubmitted(true);
  };

  if (submitted) {
    return <Alert tone="success">Thanks — your application is in. We'll be in touch soon.</Alert>;
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormField label="Full name" htmlFor="fullName" required error={errors.fullName?.message}>
        <Input id="fullName" placeholder="Jane Uwase" {...register("fullName")} />
      </FormField>
      <FormField label="Email address" htmlFor="email" required error={errors.email?.message}>
        <Input id="email" type="email" placeholder="you@company.com" {...register("email")} />
      </FormField>
      <FormField label="Phone number" htmlFor="phone" required error={errors.phone?.message}>
        <Input id="phone" placeholder="078 000 0000" {...register("phone")} />
      </FormField>
      <FormField label="Cover letter" htmlFor="coverLetter" error={errors.coverLetter?.message}>
        <TextArea id="coverLetter" placeholder="Tell us why you're a great fit…" {...register("coverLetter")} />
      </FormField>
      <FormField label="Resume" required error={resumeError ?? undefined}>
        <FileUploadField onFileSelect={setResumeFile} progress={uploadProgress} />
      </FormField>
      <Button type="submit" fullWidth isLoading={isSubmitting}>
        Submit application
      </Button>
    </form>
  );
};
