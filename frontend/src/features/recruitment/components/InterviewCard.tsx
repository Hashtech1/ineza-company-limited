import { Calendar, Clock, MapPin } from "lucide-react";
import { Card } from "@/components/common/Card";
import { Badge } from "@/components/common/Badge";
import { formatDate } from "@/utils/formatDate";

export interface Interview {
  id: string;
  candidateName: string;
  jobTitle: string;
  scheduledAt: string;
  location: string;
  mode: "in_person" | "video_call" | "phone";
}

const MODE_LABEL = { in_person: "In person", video_call: "Video call", phone: "Phone" };

export const InterviewCard = ({ interview }: { interview: Interview }) => (
  <Card className="flex items-center justify-between gap-4">
    <div>
      <p className="font-medium text-ink">{interview.candidateName}</p>
      <p className="text-sm text-ink/60">{interview.jobTitle}</p>
      <div className="mt-2 flex flex-wrap gap-3 text-xs text-ink/50">
        <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {formatDate(interview.scheduledAt)}</span>
        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {formatDate(interview.scheduledAt, "h:mm A")}</span>
        <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {interview.location}</span>
      </div>
    </div>
    <Badge tone="info">{MODE_LABEL[interview.mode]}</Badge>
  </Card>
);
