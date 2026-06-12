"use client";

import { useEffect, useState } from "react";
import { Mail, Phone, ArrowDown, Sparkles } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "./SocialIcons";

const titles = [
  "Software Engineer",
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer"
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setTitleIndex((i) => (i + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, titleIndex]);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern"
    >
      {/* Background orbs */}
      <div className="orb orb-purple w-[500px] h-[500px] top-[-100px] left-[-100px]" />
      <div className="orb orb-cyan w-[400px] h-[400px] bottom-[-50px] right-[-80px]" />
      <div className="orb orb-pink w-[300px] h-[300px] top-[40%] right-[20%]" />

      {/* Floating code elements */}
      <div className="absolute top-32 right-16 hidden lg:block opacity-20 float-animation" style={{ animationDelay: "0s" }}>
        <div className="text-indigo-400 font-mono text-xs">
          <div>{"const dev = {"}</div>
          <div className="ml-4">{"name: 'Aashish',"}</div>
          <div className="ml-4">{"stack: 'FullStack',"}</div>
          <div className="ml-4">{"passion: '∞'"}</div>
          <div>{"}"}</div>
        </div>
      </div>

      <div className="absolute bottom-32 left-16 hidden lg:block opacity-20 float-animation" style={{ animationDelay: "2s" }}>
        <div className="text-cyan-400 font-mono text-xs">
          <div>{"async function build() {"}</div>
          <div className="ml-4">{"const idea = await think();"}</div>
          <div className="ml-4">{"return ship(idea);"}</div>
          <div>{"}"}</div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32 text-center">
        {/* Available badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-500/20 mb-8 group cursor-default">
          <div className="w-2 h-2 rounded-full bg-green-400 pulse-ring" />
          <span className="text-sm text-green-400 font-medium">Open to opportunities</span>
          <Sparkles size={14} className="text-green-400 opacity-70" />
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight mb-4 leading-none">
          <span className="text-white">Aashish</span>
          <br />
          <span className="gradient-text">Rana</span>
        </h1>

        {/* Typewriter title */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-300">
            {displayed}
            <span className="cursor-blink" />
          </p>
        </div>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed mb-10">
          Building{" "}
          <span className="text-indigo-400 font-semibold">production-ready SaaS products</span>,{" "}
          <span className="text-cyan-400 font-semibold">AI-powered applications</span>, and{" "}
          <span className="text-pink-400 font-semibold">database-driven systems</span> that scale.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-14 w-full">
          <button onClick={scrollToProjects} className="btn-primary text-sm sm:text-base py-3 px-7 w-full sm:w-auto">
            <span>View Projects</span>
          </button>
          <button onClick={scrollToContact} className="btn-outline text-sm sm:text-base py-3 px-7 w-full sm:w-auto">
            Let's Talk
          </button>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-5 mb-20">
          {[
            { icon: <GitHubIcon size={20} />, href: "https://github.com/ashishxdev", label: "GitHub" },
            { icon: <LinkedInIcon size={20} />, href: "https://linkedin.com/in/ashishxdev/", label: "LinkedIn" },
            { icon: <Mail size={20} />, href: "mailto:ashishrana2004@gmail.com", label: "Email" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={item.label}
              className="w-11 h-11 rounded-xl glass glass-hover flex items-center justify-center text-slate-400 hover:text-indigo-400 transition-colors"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-lg mx-auto glass rounded-2xl p-4 sm:p-6 border border-indigo-500/10">
          {[
            { value: "3+", label: "Projects Shipped" },
            { value: "200+", label: "Daily Active Users" },
            { value: "8.53", label: "CGPA" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="stat-number">{stat.value}</div>
              <div className="text-xs text-slate-500 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs text-slate-500 tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} className="text-slate-500 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
