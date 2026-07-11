import { useForm } from "react-hook-form";
import { FormField } from "@/components/forms/FormField";
import { Input } from "@/components/common/Input";
import { TextArea } from "@/components/common/TextArea";
import { Select } from "@/components/common/Select";
import { Button } from "@/components/common/Button";
import { Job, JobType } from "../types";
import { useRecruitment } from "../hooks/useRecruitment";

const JOB_TYPES: { label: string; value: JobType }[] = [
  { label: "Full time", value: "full_time" },
  { label: "Part time", value: "part_time" },
  { label: "Contract", value: "contract" },
  { label: "Internship", value: "internship" },
];

interface JobFormValues {
  title: string;
  department: string;
  location: string;
  type: JobType;
  description: string;
}

export const JobForm = ({ job, onSuccess }: { job?: Job; onSuccess?: () => void }) => {
  const { createJob, updateJob } = useRecruitment();
  const { register, handleSubmit } = useForm<JobFormValues>({
    defaultValues: job ?? { type: "full_time" },
  });

  const isSubmitting = createJob.isPending || updateJob.isPending;

  const onSubmit = async (data: JobFormValues) => {
    if (job) {
      await updateJob.mutateAsync({ id: job.id, payload: data });
    } else {
      await createJob.mutateAsync({ ...data, responsibilities: [], requirements: [], isOpen: true });
    }
    onSuccess?.();
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <FormField label="Job title" htmlFor="title" required>
        <Input id="title" placeholder="Fleet Coordinator" {...register("title", { required: true })} />
      </FormField>
      <div className="grid grid-cols-2 gap-4">
        <FormField label="Department" htmlFor="department" required>
          <Input id="department" placeholder="Operations" {...register("department", { required: true })} />
        </FormField>
        <FormField label="Location" htmlFor="location" required>
          <Input id="location" placeholder="Kigali" {...register("location", { required: true })} />
        </FormField>
      </div>
      <FormField label="Employment type" htmlFor="type" required>
        <Select id="type" options={JOB_TYPES} {...register("type", { required: true })} />
      </FormField>
      <FormField label="Description" htmlFor="description" required>
        <TextArea id="description" rows={5} placeholder="What will this person be doing?" {...register("description", { required: true })} />
      </FormField>
      <Button type="submit" isLoading={isSubmitting}>
        {job ? "Save changes" : "Post role"}
      </Button>
    </form>
  );
};
