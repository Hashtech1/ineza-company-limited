import { tokenStorage } from "@/utils/security";

export const isAuthenticatedGuard = () => Boolean(tokenStorage.getAccessToken());
