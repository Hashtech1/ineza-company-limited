import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/navigation/Sidebar";
import { DashboardHeader } from "@/layouts/DashboardHeader";

export const DashboardLayout = () => (
  <div className="flex min-h-screen bg-sand">
    <Sidebar />
    <div className="flex flex-1 flex-col">
      <DashboardHeader />
      <main className="flex-1 p-5 sm:p-8">
        <Outlet />
      </main>
    </div>
  </div>
);
