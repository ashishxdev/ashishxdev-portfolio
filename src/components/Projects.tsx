"use client";

import { useInView } from "react-intersection-observer";
import { ExternalLink, Calendar, Users, Zap } from "lucide-react";
import { GitHubIcon } from "./SocialIcons";

const projects = [
  {
    title: "MyJEEPredictor",
    subtitle: "College & Rank Prediction Platform",
    period: "March 2026",
    liveUrl: "https://www.myjeepredictor.in/",
    gradient: "from-indigo-600/20 via-purple-600/10 to-cyan-600/10",
    accentColor: "text-indigo-400",
    borderColor: "border-indigo-500/20",
    glowColor: "hover:shadow-indigo-500/10",
    badge: "🎓 EdTech",
    badgeColor: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
    stats: [
      { icon: <Users size={14} />, value: "200+", label: "Daily Users" },
      { icon: <Zap size={14} />, value: "1,000+", label: "JoSAA Cutoffs" },
    ],
    description:
      "A full-stack JEE predictor serving 200+ daily active users. Queries 1,000+ JoSAA cutoffs using PostgreSQL optimized with CTEs, window functions, and materialized views.",
    highlights: [
      "3-tier probability algorithm filtering across category, gender, and state quotas",
      "4 integrated prediction tools with real-time data processing",
      "PostgreSQL optimized with CTEs and materialized views for performance",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Tailwind CSS", "TanStack Query", "Zod", "PostHog"],
  },
  {
    title: "Spur Support",
    subtitle: "AI Customer Support Agent",
    period: "June 2026",
    liveUrl: "https://ai-support-coral-psi.vercel.app/",
    githubUrl: "https://github.com/ashishxdev/ai-support",
    gradient: "from-emerald-600/20 via-cyan-600/10 to-blue-600/10",
    accentColor: "text-emerald-400",
    borderColor: "border-emerald-500/20",
    glowColor: "hover:shadow-emerald-500/10",
    badge: "🤖 AI/LLM",
    badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    stats: [
      { icon: <Zap size={14} />, value: "4", label: "Gemini Models" },
      { icon: <Users size={14} />, value: "100%", label: "Uptime SLA" },
    ],
    description:
      "A full-stack real-time support widget with a layered Express.js backend. Engineered an automated LLM fallback handler to dynamically rotate through 4 Gemini models on API rate limits.",
    highlights: [
      "LLM fallback handler rotating through 4 Gemini AI models for 100% uptime",
      "Domain grounding with Zod validation to prevent hallucinations",
      "Prisma ORM + PostgreSQL for session persistence and analytics",
    ],
    stack: ["React", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL", "Gemini AI", "Zod"],
  },
  {
    title: "Connectly",
    subtitle: "Real-Time Social Platform",
    period: "Jan 2026 – Feb 2026",
    liveUrl: "https://connectly-33lb.onrender.com",
    githubUrl: "https://github.com/ashishxdev/connectly",
    gradient: "from-pink-600/20 via-rose-600/10 to-orange-600/10",
    accentColor: "text-pink-400",
    borderColor: "border-pink-500/20",
    glowColor: "hover:shadow-pink-500/10",
    badge: "💬 Social",
    badgeColor: "bg-pink-500/10 text-pink-300 border-pink-500/20",
    stats: [
      { icon: <Zap size={14} />, value: "Real-time", label: "Chat & Video" },
      { icon: <Users size={14} />, value: "JWT", label: "Secure Auth" },
    ],
    description:
      "A full-stack social platform featuring real-time chat and video calls using React, Node.js, MongoDB, and Stream SDK. Built with secure JWT auth and httpOnly cookies.",
    highlights: [
      "Real-time chat and video calls powered by Stream SDK",
      "Secure JWT authentication with httpOnly cookies + protected routes",
      "Dynamic friend request system with user discovery feed",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "TanStack Query", "Zustand", "Tailwind CSS", "Stream SDK"],
  },
];

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="projects" ref={ref} className="py-20 sm:py-28 px-4 sm:px-6 relative">
      <div className="orb orb-pink w-[350px] h-[350px] top-20 right-[-50px]" />

      <div className="max-w-6xl mx-auto">
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl">
            Real products shipped to real users from AI agents to social platforms.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`project-card bg-gradient-to-br ${project.gradient} ${project.borderColor} hover:shadow-2xl ${project.glowColor} transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } !p-5 sm:!p-7`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="relative z-10">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className={`text-xs px-3 py-1 rounded-full border font-medium ${project.badgeColor}`}>
                        {project.badge}
                      </span>
                      <div className="flex items-center gap-1 text-slate-500 text-xs">
                        <Calendar size={12} />
                        <span>{project.period}</span>
                      </div>
                    </div>
                    <h3 className={`text-2xl font-black ${project.accentColor}`}>{project.title}</h3>
                    <p className="text-slate-400 font-medium">{project.subtitle}</p>
                  </div>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-3 items-start">
                    {project.stats.map((stat) => (
                      <div key={stat.label} className="glass rounded-xl px-3 py-2 sm:px-4 sm:py-3 text-center border border-white/5">
                        <div className={`flex items-center gap-1 justify-center mb-1 ${project.accentColor}`}>
                          {stat.icon}
                          <span className="font-bold text-xs sm:text-sm text-white">{stat.value}</span>
                        </div>
                        <p className="text-xs text-slate-500">{stat.label}</p>
                      </div>
                    ))}
                    <div className="flex gap-2 items-start">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl glass border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all"
                        title="Live Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-xl glass border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all"
                          title="GitHub"
                        >
                          <GitHubIcon size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 leading-relaxed mb-5">{project.description}</p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-slate-400 text-sm">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-current ${project.accentColor}`} />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="skill-tag text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
