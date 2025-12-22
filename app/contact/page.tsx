import Button from "@/components/Button";
import Card from "@/components/Card";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";

const contacts = [
  {
    label: "Email",
    value: "ishneet.chadha@colorado.edu",
    href: "mailto:ishneet.chadha@colorado.edu",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="currentColor"
      >
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ishneet-kaur-chadha",
    href: "https://www.linkedin.com/in/ishneet-kaur-chadha",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="currentColor"
      >
        <path d="M20.447 20.452H16.89V14.89c0-1.326-.025-3.032-1.848-3.032-1.848 0-2.131 1.445-2.131 2.94v5.654H9.355V9h3.414v1.561h.049c.476-.9 1.637-1.848 3.366-1.848 3.6 0 4.265 2.37 4.265 5.455v6.284zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zm1.781 13.019H3.556V9h3.562v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/ishneet42",
    href: "https://github.com/ishneet42",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="currentColor"
      >
        <path d="M12 .5a11.5 11.5 0 0 0-3.636 22.4c.574.105.784-.25.784-.556v-2.01c-3.19.694-3.862-1.538-3.862-1.538-.522-1.326-1.276-1.68-1.276-1.68-1.043-.713.08-.699.08-.699 1.154.081 1.762 1.186 1.762 1.186 1.026 1.758 2.693 1.25 3.35.956.104-.744.401-1.25.73-1.536-2.548-.29-5.227-1.274-5.227-5.67 0-1.253.447-2.276 1.184-3.077-.12-.29-.514-1.46.112-3.043 0 0 .965-.309 3.162 1.175a10.95 10.95 0 0 1 2.88-.387c.978.004 1.963.132 2.88.387 2.196-1.484 3.16-1.175 3.16-1.175.628 1.583.234 2.753.115 3.043.737.801 1.183 1.824 1.183 3.077 0 4.406-2.683 5.377-5.238 5.663.412.356.78 1.058.78 2.134v3.164c0 .309.208.666.79.553A11.5 11.5 0 0 0 12 .5z" />
      </svg>
    ),
  },
  {
    label: "Google Scholar",
    value: "scholar.google.com",
    href: "https://scholar.google.com/citations?user=gvsF5X8AAAAJ&hl=en",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="currentColor"
      >
        <path d="M12 3L1 9l11 6 11-6-11-6zm0 8.75L5 9l7-3.75L19 9l-7 2.75z" />
        <path d="M6.5 12.5v3.5c0 2.071 2.46 3.75 5.5 3.75s5.5-1.679 5.5-3.75v-3.5l-5.5 2.5-5.5-2.5z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <PageLayout>
      <SectionHeading
        eyebrow="Contact"
        as="h1"
        title="Let’s connect"
        subtitle="Open to discussions and collaborative research—please reach out to connect."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <Card className="space-y-4">
          {contacts.map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-subtle">
                {item.label}
              </p>
              <a
                href={item.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <span className="text-accent">{item.icon}</span>
                {item.value}
              </a>
            </div>
          ))}
        </Card>
        <Card className="space-y-4 bg-accent-soft/40">
          <h3 className="text-lg font-semibold text-foreground">
            Resume and research materials
          </h3>
          <p className="text-sm text-subtle">Download my latest resume.</p>
          <Button href="/resume.pdf" download>
            Download Resume
          </Button>
        </Card>
      </div>
    </PageLayout>
  );
}
