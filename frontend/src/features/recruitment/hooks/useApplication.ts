import { useState } from "react";
import { recruitmentService } from "../services/recruitment.service";
import { ApplyPayload } from "../types";
import { notificationService } from "@/services/notification/notification.service";
import { MESSAGES } from "@/constants/messages";
import { uploadService } from "@/services/upload/upload.service";

export function useApplication() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const submitApplication = async (payload: Omit<ApplyPayload, "resumeUrl">, resumeFile: File) => {
    setIsSubmitting(true);
    try {
      const uploaded = await uploadService.uploadFile(resumeFile, setUploadProgress);
      const result = await recruitmentService.apply({ ...payload, resumeUrl: uploaded.url });
      notificationService.success(MESSAGES.APPLICATION_SUBMITTED);
      return result;
    } finally {
      setIsSubmitting(false);
      setUploadProgress(0);
    }
  };

  return { submitApplication, isSubmitting, uploadProgress };
}
