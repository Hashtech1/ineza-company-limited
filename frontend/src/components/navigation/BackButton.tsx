import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const BackButton = ({ label = "Back" }: { label?: string }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-1.5 text-sm font-medium text-ink/60 hover:text-ink"
    >
      <ArrowLeft className="h-4 w-4" /> {label}
    </button>
  );
};
