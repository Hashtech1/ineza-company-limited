import { env } from "./env";

export const API_CONFIG = {
  baseURL: env.apiBaseUrl,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
};
