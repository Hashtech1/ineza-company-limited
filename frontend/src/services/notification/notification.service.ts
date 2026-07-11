type Listener = (toast: ToastPayload) => void;

export interface ToastPayload {
  id: string;
  type: "success" | "error" | "info" | "warning";
  message: string;
}

class NotificationService {
  private listeners: Listener[] = [];

  subscribe(listener: Listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private emit(type: ToastPayload["type"], message: string) {
    const payload: ToastPayload = { id: crypto.randomUUID(), type, message };
    this.listeners.forEach((listener) => listener(payload));
  }

  success(message: string) {
    this.emit("success", message);
  }
  error(message: string) {
    this.emit("error", message);
  }
  info(message: string) {
    this.emit("info", message);
  }
  warning(message: string) {
    this.emit("warning", message);
  }
}

export const notificationService = new NotificationService();
