import { Skeleton } from "@/components/common/Skeleton";

export const LoadingDashboard = () => (
  <div className="space-y-8">
    <Skeleton className="h-8 w-64" />
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {[...Array(4)].map((_, i) => (
        <Skeleton key={i} className="h-28 w-full rounded-xl2" />
      ))}
    </div>
    <Skeleton className="h-72 w-full rounded-xl2" />
  </div>
);
