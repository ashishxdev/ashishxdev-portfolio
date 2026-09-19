import type { Metadata } from "next";
import { Container } from "../components/container";
import { ProjectCard, type Project } from "../components/project-card";

export const metadata: Metadata = {
  title: "Projects | Aashish Rana",
  description: "Selected projects by Aashish Rana.",
};

const projects: Project[] = [
  {
    number: "01",
    title: "Interview AI",
    description: [
      "Built and deployed a full-stack AI voice mock interview platform with secure JWT authentication, Gemini-powered personalized question generation and answer evaluation, real-time voice interviews with Web Speech API, proctoring, webcam monitoring and per-question timers, a PostgreSQL database with Prisma for managing resumes, interviews, questions, answers, and reports, and a responsive React frontend using Redux Toolkit, TanStack Query, and React Hook Form.",
    ],
    tags: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
    ],
    image: "/interview-ai.png",
    imageAlt: "Interview AI dashboard preview",
    liveUrl: "https://interview-ai-nu-ten.vercel.app/",
    githubUrl: "https://github.com/ashishxdev/interview-ai",
  },
  {
    number: "02",
    title: "MyJEEPredictor",
    description: [
      "Built and deployed a full-stack JEE prediction platform serving 200+ daily active users, processing 1,000+ JoSAA cutoff records for college predictions, with 4 prediction tools powered by a custom 3-tier probability algorithm, personalized category, gender, and state quota filtering, and optimized PostgreSQL queries using CTEs, window functions, and materialized views.",
    ],
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Tailwind CSS"],
    liveUrl: "https://www.myjeepredictor.in/",
    image: "/myjeepredictor.png",
    imageAlt: "MyJEE Predictor dashboard preview",
  },
  {
    number: "03",
    title: "Connectly",
    description: [
      "Built a social networking platform with real-time messaging and video calling, featuring a multi-step onboarding flow, friend request system, dynamic user discovery feed, and personalized user recommendations to improve engagement, with secure session management using JWT authentication, httpOnly cookies, and protected routes.",
    ],
    tags: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "TanStack Query",
      "Zustand",
    ],
    liveUrl: "https://connectly-33lb.onrender.com/",
    image: "/connectly.png",
    imageAlt: "Connectly dashboard preview",
    githubUrl: "https://github.com/ashishxdev/connectly",
  },
];

export default function ProjectsPage() {
  return (
    <main>
      <Container className="min-h-[calc(100vh-94px)] px-5 py-16 md:px-[7vw]">
        <div className="space-y-8">
          <header className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
              Projects
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-[var(--muted)]">
              Selected projects built across different technologies and ideas.
            </p>
          </header>

          <hr className="border-0 border-t border-[var(--line)]" />

          <div className="flex flex-col">
            {projects.map((project, index) => (
              <div key={project.number}>
                <ProjectCard project={project} />
                {index < projects.length - 1 && (
                  <hr className="my-8 border-0 border-t border-[var(--line)]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
