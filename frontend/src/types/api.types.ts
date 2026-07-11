export interface RequestConfigMeta {
  skipAuth?: boolean;
  skipErrorToast?: boolean;
}

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface UploadResult {
  url: string;
  fileName: string;
  size: number;
  mimeType: string;
}
