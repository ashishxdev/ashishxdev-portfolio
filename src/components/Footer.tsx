"use client";

import { Mail, Code2, Heart } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "./SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-indigo-500/10 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
              <Code2 size={16} className="text-white" />
            </div>
            <span className="font-bold text-lg gradient-text">aashish.dev</span>
          </div>

          {/* Copyright */}
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            Built with <Heart size={13} className="text-pink-500 fill-pink-500" /> by Aashish Rana · {year}
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              { icon: <GitHubIcon size={17} />, href: "https://github.com/ashishxdev", label: "GitHub" },
              { icon: <LinkedInIcon size={17} />, href: "https://linkedin.com/in/ashishxdev", label: "LinkedIn" },
              { icon: <Mail size={17} />, href: "mailto:ashishrana2004@gmail.com", label: "Email" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={item.label}
                className="w-9 h-9 rounded-lg glass border border-white/5 flex items-center justify-center text-slate-500 hover:text-indigo-400 hover:border-indigo-500/30 transition-all"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
