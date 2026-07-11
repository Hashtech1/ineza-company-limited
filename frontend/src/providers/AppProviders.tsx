import { ReactNode } from "react";
import { Provider } from "react-redux";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { store } from "@/store";
import { queryClient } from "@/lib/react-query";
import { ThemeContextProvider } from "@/contexts/ThemeContext";
import { NotificationProvider } from "@/contexts/NotificationContext";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";
import { ToastContainer } from "@/components/feedback/Toast";

export const AppProviders = ({ children }: { children: ReactNode }) => (
  <ErrorBoundary>
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ThemeContextProvider>
            <NotificationProvider>
              {children}
              <ToastContainer />
            </NotificationProvider>
          </ThemeContextProvider>
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  </ErrorBoundary>
);
