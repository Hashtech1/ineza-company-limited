import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeamMemberCard } from "@/components/cards/TeamMemberCard";

const TEAM = [
  { firstName: "Aline", lastName: "Mukamana", role: "Managing Director" },
  { firstName: "Eric", lastName: "Nshimiyimana", role: "Head of Recruitment" },
  { firstName: "Diane", lastName: "Ingabire", role: "Fleet Operations Lead" },
  { firstName: "Patrick", lastName: "Habimana", role: "Training Manager" },
];

const AboutPage = () => (
  <Container className="py-20">
    <SectionHeading
      eyebrow="About us"
      title="Built on doing the small things right"
      description="Ineza means 'goodness' in Kinyarwanda — the standard we hold every placement and every vehicle we manage to."
    />

    <div className="mt-12 grid gap-10 lg:grid-cols-2">
      <div className="space-y-4 text-sm leading-relaxed text-ink/70">
        <p>
          Ineza Company Limited started with a simple observation: most hiring failures and most fleet
          breakdowns come from the same place — skipped steps. We built our process around not skipping them.
        </p>
        <p>
          Today we work with operations, logistics, and service companies across Rwanda to recruit reliable
          staff, train them properly, and keep the vehicles they depend on running.
        </p>
        <p>
          We're small enough to know every candidate we place, and structured enough that nothing falls
          through the cracks.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[
          ["2018", "Founded in Kigali"],
          ["40+", "Partner companies"],
          ["500+", "People placed"],
          ["6", "Districts covered"],
        ].map(([value, label]) => (
          <div key={label} className="rounded-xl2 border border-ink/10 bg-sand p-5">
            <p className="font-display text-2xl font-semibold text-moss-900">{value}</p>
            <p className="mt-1 text-sm text-ink/60">{label}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-20">
      <SectionHeading eyebrow="The team" title="People behind the process" />
      <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
        {TEAM.map((m) => (
          <TeamMemberCard key={m.firstName} {...m} />
        ))}
      </div>
    </div>
  </Container>
);

export default AboutPage;
