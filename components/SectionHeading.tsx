type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  as?: "h1" | "h2";
  id?: string;
};

export default function SectionHeading({
  title,
  subtitle,
  eyebrow,
  as = "h2",
  id,
}: SectionHeadingProps) {
  const HeadingTag = as;
  return (
    <header className="space-y-3">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-subtle">
          {eyebrow}
        </p>
      ) : null}
      <HeadingTag
        id={id}
        className="text-3xl font-semibold text-foreground sm:text-4xl font-[var(--font-heading)]"
      >
        {title}
      </HeadingTag>
      {subtitle ? (
        <p className="max-w-3xl text-base text-subtle sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
