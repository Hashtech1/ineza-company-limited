import { Users, Truck, GraduationCap, ShieldCheck, ClipboardCheck, HeadphonesIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/cards/ServiceCard";

const SERVICES = [
  { icon: Users, title: "Recruitment & staffing", description: "End-to-end hiring: sourcing, screening, interviews, and offer management." },
  { icon: Truck, title: "Fleet management", description: "Vehicle sourcing, maintenance scheduling, and driver assignment." },
  { icon: GraduationCap, title: "Training programs", description: "Role-specific onboarding and upskilling for new and existing staff." },
  { icon: ShieldCheck, title: "Compliance & contracts", description: "Employment contracts, background checks, and labor law compliance." },
  { icon: ClipboardCheck, title: "Performance management", description: "Structured reviews and improvement plans that actually get followed." },
  { icon: HeadphonesIcon, title: "Ongoing support", description: "A dedicated point of contact for as long as the placement lasts." },
];

const ServicesPage = () => (
  <Container className="py-20">
    <SectionHeading
      eyebrow="Services"
      title="Everything between hiring and keeping people"
      description="Pick what you need — a single hire, a full fleet team, or ongoing support for both."
    />
    <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((s) => (
        <ServiceCard key={s.title} {...s} />
      ))}
    </div>
  </Container>
);

export default ServicesPage;
