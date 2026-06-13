"use client";

import { useInView } from "react-intersection-observer";
import { Mail, Phone, Send, MapPin, ArrowRight } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "./SocialIcons";

const contactLinks = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "ashishrana2004@gmail.com",
    href: "mailto:ashishrana2004@gmail.com",
    color: "from-indigo-500/20 to-indigo-500/5",
    border: "border-indigo-500/20",
    iconColor: "text-indigo-400",
    hoverBorder: "hover:border-indigo-500/50",
  },
  {
    icon: <Phone size={20} />,
    label: "Phone",
    value: "+91 8447345079",
    href: "tel:+918447345079",
    color: "from-cyan-500/20 to-cyan-500/5",
    border: "border-cyan-500/20",
    iconColor: "text-cyan-400",
    hoverBorder: "hover:border-cyan-500/50",
  },
  {
    icon: <GitHubIcon size={20} />,
    label: "GitHub",
    value: "github.com/ashishxdev",
    href: "https://github.com/ashishxdev",
    color: "from-slate-500/20 to-slate-500/5",
    border: "border-slate-500/20",
    iconColor: "text-slate-300",
    hoverBorder: "hover:border-slate-400/50",
  },
  {
    icon: <LinkedInIcon size={20} />,
    label: "LinkedIn",
    value: "linkedin.com/in/ashishxdev",
    href: "https://linkedin.com/in/ashishxdev",
    color: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/20",
    iconColor: "text-blue-400",
    hoverBorder: "hover:border-blue-500/50",
  },
];

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="contact" ref={ref} className="py-20 sm:py-28 px-4 sm:px-6 relative overflow-hidden">
      <div className="orb orb-cyan w-[400px] h-[400px] top-0 right-[-100px]" />
      <div className="orb orb-purple w-[300px] h-[300px] bottom-0 left-[-80px]" />

      <div className="max-w-6xl mx-auto">
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl text-lg">
            Open to full time roles, freelance projects, and exciting collaborations. Let's build something remarkable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left — CTA card */}
          <div className={`transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="glass rounded-2xl p-6 sm:p-8 md:p-10 border border-indigo-500/15 glow-primary h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center mb-6 float-animation">
                  <Send size={22} className="text-white" />
                </div>

                <h3 className="text-2xl font-black text-white mb-3">
                  Ready to work together?
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Whether it's a startup idea, a freelance gig, or a full-time role.
                  Currently based in <span className="text-indigo-400 font-medium">India</span> and open to remote opportunities worldwide.
                </p>

                <div className="flex items-center gap-2 text-slate-500 text-sm mb-8">
                  <MapPin size={14} className="text-indigo-400" />
                  <span>India · Open to Remote</span>
                </div>

                <a
                  href="mailto:ashishrana2004@gmail.com"
                  className="btn-primary text-base py-3 px-7 w-fit flex items-center gap-2"
                >
                  <span>Send me an email</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Right — Contact links */}
          <div className={`space-y-4 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`flex items-center gap-5 p-5 rounded-2xl bg-gradient-to-r ${link.color} border ${link.border} ${link.hoverBorder} transition-all duration-300 hover:translate-x-2 group`}
              >
                <div className={`w-11 h-11 rounded-xl glass flex items-center justify-center ${link.iconColor} flex-shrink-0`}>
                  {link.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">{link.label}</p>
                  <p className={`font-semibold ${link.iconColor} text-sm truncate`}>{link.value}</p>
                </div>
                <ArrowRight size={16} className="text-slate-600 group-hover:text-slate-400 transition-colors flex-shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
