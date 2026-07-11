import { createContext, useContext, ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { User } from "@/types/user.types";

interface AuthContextValue {
  user: User | null;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

/**
 * Lightweight read-only context mirroring the Redux auth slice, for components
 * that prefer context over selecting from the store directly.
 */
export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);
  return <AuthContext.Provider value={{ user, isAuthenticated }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuthContext must be used within AuthContextProvider");
  return ctx;
};
