import type { Metadata } from "next";
import { Container } from "../components/container";
import { ExperienceCard, type Experience } from "../components/experience-card";

export const metadata: Metadata = {
  title: "Experience | Aashish Rana",
  description: "Aashish Rana's professional experience.",
};

const experiences: Experience[] = [
  {
    company: "Medit",
    position: "Full Stack Developer Intern",
    image: "/medit-logo.jpeg",
    description: [
      "Developed a full-stack admin dashboard for Medit, a home healthcare platform, to manage patient bookings, service requests, preferred time slots, and booking statuses.",
      "Built and integrated backend APIs for creating, updating, and tracking home nursing service bookings.",
      "Designed responsive UI components and improved the booking management workflow for admins to view customer details, assign service requests, and track fulfillment progress.",
    ],
    startDate: "May 2026",
    endDate: "July 2026",
    technologies: [
      {
        name: "JavaScript",
        href: "https://www.javascript.com/",
        icon: "javascript",
      },
      {
        name: "React",
        href: "https://react.dev/",
        icon: "react",
      },
      {
        name: "Next.js",
        href: "https://nextjs.org/",
        icon: "nextjs",
      },
      {
        name: "Node.js",
        href: "https://nodejs.org/",
        icon: "node",
      },
      {
        name: "Express.js",
        href: "https://expressjs.com/",
        icon: "express",
      },
      {
        name: "SupaBase",
        href: "https://supabase.com/",
        icon: "supabase",
      },
    ],
  },
];

export default function ExperiencePage() {
  return (
    <main>
      <Container className="min-h-[calc(100vh-94px)] px-5 py-16 md:px-[7vw]">
        <div className="space-y-8">
          <header className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Work Experience
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-[var(--muted)]">
              My work experiences across different companies and roles.
            </p>
          </header>

          <hr className="border-0 border-t border-[var(--line)]" />

          <section className="space-y-6" aria-labelledby="all-experiences">
            <h2 id="all-experiences" className="text-2xl font-semibold">
              All Experiences
            </h2>

            <div className="flex flex-col">
              {experiences.map((experience, index) => (
                <div key={`${experience.company}-${index}`}>
                  <ExperienceCard experience={experience} />
                  {index < experiences.length - 1 && (
                    <hr className="my-8 border-0 border-t border-[var(--line)]" />
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
