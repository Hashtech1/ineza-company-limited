import { getInitials } from "@/utils/helpers";
import { cn } from "@/utils/helpers";

interface AvatarProps {
  firstName?: string;
  lastName?: string;
  src?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const SIZE_MAP = { sm: "h-8 w-8 text-xs", md: "h-10 w-10 text-sm", lg: "h-14 w-14 text-lg" };

export const Avatar = ({ firstName, lastName, src, size = "md", className }: AvatarProps) => {
  if (src) {
    return (
      <img
        src={src}
        alt={`${firstName ?? ""} ${lastName ?? ""}`}
        className={cn("rounded-full object-cover", SIZE_MAP[size], className)}
      />
    );
  }
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full bg-moss-900 font-semibold text-bone",
        SIZE_MAP[size],
        className
      )}
    >
      {getInitials(firstName, lastName) || "?"}
    </div>
  );
};
