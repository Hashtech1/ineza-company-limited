import { Avatar } from "@/components/common/Avatar";

interface TeamMemberCardProps {
  firstName: string;
  lastName: string;
  role: string;
  photoUrl?: string;
}

export const TeamMemberCard = ({ firstName, lastName, role, photoUrl }: TeamMemberCardProps) => (
  <div className="flex flex-col items-center gap-3 text-center">
    <Avatar firstName={firstName} lastName={lastName} src={photoUrl} size="lg" />
    <div>
      <p className="font-medium text-ink">{firstName} {lastName}</p>
      <p className="text-sm text-ink/50">{role}</p>
    </div>
  </div>
);
