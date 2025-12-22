import Card from "@/components/Card";
import PageLayout from "@/components/PageLayout";
import SectionHeading from "@/components/SectionHeading";

const communitySections = [
  {
    title: "Leadership through Women in Engineering",
    description:
      " A defining part of my journey has been building and sustaining communities that support women in engineering. Over multiple years, I’ve been deeply involved with IEEE’s Women in Engineering (WIE) initiatives, focusing on leadership, mentorship, and creating inclusive spaces for learning and growth.",
  },
  {
    title: "Vice Chairperson, WIE Affinity Group",
    description:
      "I helped lead and organize inclusive technical events, hackathons, and outreach initiatives aimed at increasing participation and visibility of women in engineering. This work involved coordinating across technical and non-technical teams, designing programs that were accessible without compromising depth, and ensuring initiatives translated into sustained engagement.",
  },
  {
    title: "Organizational leadership & global perspective",
    description:
      "Beyond WIE, I held leadership roles within IEEE student organizations, working with large, diverse teams across multiple departments. Leading initiatives at this scale strengthened my ability to communicate across roles, align stakeholders, and manage complexity in collaborative environments. I also hold the German Language Diploma (DSD-I) with B1 proficiency, shaping how I approach cross-cultural teamwork.",
  },
  {
    title: "Community outreach & mentorship",
    description:
      "Through the STAR program, I worked for three consecutive years with female students in government schools to encourage interest in STEM and promote long-term empowerment. These experiences reinforced my belief that access, mentorship, and representation are essential to building strong engineering ecosystems.",
  },
  {
    title: "Recognition",
    description:
      "I was honored to receive the Outstanding Women in Engineering Student Volunteer Award from the IEEE Delhi Section, recognizing collective efforts toward mentorship, outreach, and inclusive community-building. This acknowledgment reflects the work of the teams and volunteers I had the opportunity to collaborate with.",
  },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <SectionHeading
        eyebrow="Community Involvement"
        as="h1"
        title="Building inclusive engineering communities"
        subtitle="Coming from spaces where I was often one of the few women, I learned early to let my work speak for itself. That experience shaped how I approach engineering and why building inclusive technical communities matters to me."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {communitySections.map((section) => (
          <Card key={section.title}>
            <h2 className="text-lg font-semibold text-foreground">
              {section.title}
            </h2>
            <p className="mt-3 text-sm text-subtle">{section.description}</p>
          </Card>
        ))}
      </div>
    </PageLayout>
  );
}
