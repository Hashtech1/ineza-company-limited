interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export const SectionHeading = ({ eyebrow, title, description, align = "left" }: SectionHeadingProps) => (
  <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
    {eyebrow && (
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-clay-600">{eyebrow}</p>
    )}
    <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
    {description && <p className="mt-3 text-base text-ink/60">{description}</p>}
  </div>
);
