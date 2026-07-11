import { Link } from "react-router-dom";
import { ArrowUpRight, Truck, Users, GraduationCap, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/common/Button";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { ROUTES } from "@/constants/routes";

const SERVICES = [
  { icon: Users, title: "Recruitment", description: "We source, vet, and place candidates who stay — not just ones who start." },
  { icon: Truck, title: "Fleet management", description: "Dependable vehicle sourcing, maintenance, and driver placement for growing operations." },
  { icon: GraduationCap, title: "Training", description: "Structured onboarding and skills programs that get new hires productive fast." },
  { icon: ShieldCheck, title: "Compliance", description: "Contracts, background checks, and labor compliance handled end to end." },
];

const HomePage = () => (
  <>
    <section className="border-b border-ink/10 bg-sand">
      <Container className="grid gap-10 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-clay-600">
            Ineza Company Limited · Kigali, Rwanda
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
            The right people, in the right seats, moving the right way.
          </h1>
          <p className="mt-5 max-w-lg text-base text-ink/60">
            We recruit, train, and place dependable teams — and keep the fleets they run on the road.
            Fewer bad hires, fewer breakdowns, more momentum.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to={ROUTES.JOBS}>
              <Button size="lg">Browse open roles <ArrowUpRight className="h-4 w-4" /></Button>
            </Link>
            <Link to={ROUTES.CONTACT}>
              <Button size="lg" variant="outline">Talk to us</Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            ["120+", "Roles filled this year"],
            ["98%", "90-day retention"],
            ["40+", "Partner companies"],
            ["6", "Districts covered"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-xl2 border border-ink/10 bg-bone p-5 shadow-card">
              <p className="font-display text-3xl font-semibold text-moss-900">{value}</p>
              <p className="mt-1 text-sm text-ink/60">{label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>

    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="One partner for people and fleet"
          description="From first interview to first day on the road, we handle the parts that usually slow growing teams down."
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </Container>
    </section>

    <section className="bg-ink py-20 text-bone">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">Hiring, or looking to be hired?</h2>
        <p className="max-w-xl text-bone/60">
          Whether you're building a team or looking for your next role, we make the process feel less like a gamble.
        </p>
        <div className="flex gap-3">
          <Link to={ROUTES.JOBS}><Button size="lg">See open roles</Button></Link>
          <Link to={ROUTES.CONTACT}><Button size="lg" variant="ghost" className="text-bone hover:bg-bone/10">Partner with us</Button></Link>
        </div>
      </Container>
    </section>
  </>
);

export default HomePage;
