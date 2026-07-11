import { Badge } from "@/components/common/Badge";
import { ApplicationStatus } from "../types";

const TONE: Record<ApplicationStatus, "neutral" | "success" | "warning" | "danger" | "info"> = {
  submitted: "info",
  under_review: "warning",
  shortlisted: "success",
  rejected: "danger",
  hired: "success",
};

const LABEL: Record<ApplicationStatus, string> = {
  submitted: "Submitted",
  under_review: "Under review",
  shortlisted: "Shortlisted",
  rejected: "Not selected",
  hired: "Hired",
};

export const ApplicationStatusBadge = ({ status }: { status: ApplicationStatus }) => (
  <Badge tone={TONE[status]}>{LABEL[status]}</Badge>
);
