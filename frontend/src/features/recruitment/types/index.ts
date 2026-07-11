export type JobType = "full_time" | "part_time" | "contract" | "internship";
export type ApplicationStatus = "submitted" | "under_review" | "shortlisted" | "rejected" | "hired";

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: JobType;
  description: string;
  responsibilities: string[];
  requirements: string[];
  postedAt: string;
  closingAt?: string;
  isOpen: boolean;
}

export interface JobApplication {
  id: string;
  jobId: string;
  jobTitle: string;
  applicantName: string;
  status: ApplicationStatus;
  resumeUrl: string;
  coverLetter?: string;
  appliedAt: string;
}

export interface ApplyPayload {
  jobId: string;
  fullName: string;
  email: string;
  phone: string;
  coverLetter?: string;
  resumeUrl: string;
}
