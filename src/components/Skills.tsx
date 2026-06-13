"use client";

import { useInView } from "react-intersection-observer";

const skillCategories = [
  {
    label: "Languages",
    color: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/20",
    skills: ["TypeScript", "JavaScript", "SQL"],
    tagColor: "bg-violet-500/10 border-violet-500/25 text-violet-300",
  },
  {
    label: "Frontend",
    color: "from-cyan-500/20 to-blue-500/10",
    border: "border-cyan-500/20",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Zustand", "Redux Toolkit", "TanStack Query", "Shadcn/UI"],
    tagColor: "bg-cyan-500/10 border-cyan-500/25 text-cyan-300",
  },
  {
    label: "Backend",
    color: "from-indigo-500/20 to-blue-500/10",
    border: "border-indigo-500/20",
    skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "OAuth", "Zod"],
    tagColor: "bg-indigo-500/10 border-indigo-500/25 text-indigo-300",
  },
  {
    label: "Databases",
    color: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/20",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "Prisma", "Mongoose"],
    tagColor: "bg-emerald-500/10 border-emerald-500/25 text-emerald-300",
  },
  {
    label: "DevOps & Tools",
    color: "from-orange-500/20 to-amber-500/10",
    border: "border-orange-500/20",
    skills: ["Git", "GitHub", "Vercel", "Railway", "Render"],
    tagColor: "bg-orange-500/10 border-orange-500/25 text-orange-300",
  },
  {
    label: "AI & Integrations",
    color: "from-pink-500/20 to-rose-500/10",
    border: "border-pink-500/20",
    skills: ["Gemini AI", "PostHog", "Stream SDK", "TanStack Query"],
    tagColor: "bg-pink-500/10 border-pink-500/25 text-pink-300",
  },
];

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="skills" ref={ref} className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden">
      <div className="orb orb-cyan w-[400px] h-[400px] bottom-0 left-[-100px]" />

      <div className="max-w-6xl mx-auto">
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl">
            A curated set of tools I use to build fast, scalable, and beautiful products.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.label}
              className={`rounded-2xl p-6 bg-gradient-to-br ${cat.color} border ${cat.border} glass-hover transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <h3 className="text-white font-bold text-base sm:text-lg">{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border font-mono ${cat.tagColor} transition-all duration-200 hover:scale-105 cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
