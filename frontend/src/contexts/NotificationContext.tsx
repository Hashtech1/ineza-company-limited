import { createContext, useCallback, useContext, useEffect, useState, ReactNode } from "react";
import { notificationService, ToastPayload } from "@/services/notification/notification.service";

interface NotificationContextValue {
  toasts: ToastPayload[];
  dismiss: (id: string) => void;
}

const NotificationContext = createContext<NotificationContextValue | undefined>(undefined);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastPayload[]>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  useEffect(() => {
    const unsubscribe = notificationService.subscribe((toast) => {
      setToasts((prev) => [...prev, toast]);
      setTimeout(() => dismiss(toast.id), 4000);
    });
    return unsubscribe;
  }, [dismiss]);

  return (
    <NotificationContext.Provider value={{ toasts, dismiss }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => {
  const ctx = useContext(NotificationContext);
  if (!ctx) throw new Error("useNotificationContext must be used within NotificationProvider");
  return ctx;
};
