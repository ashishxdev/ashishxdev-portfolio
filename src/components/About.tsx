"use client";

import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { User, MapPin, GraduationCap, Briefcase } from "lucide-react";

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" ref={ref} className="py-20 sm:py-28 px-4 sm:px-6 relative">
      {/* Orb */}
      <div className="orb orb-purple w-[350px] h-[350px] top-10 right-0 opacity-8" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Text content */}
          <div
            className={`space-y-6 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              Hey! I'm{" "}
              <span className="text-indigo-400 font-semibold">Aashish Rana</span>, a Full Stack
              Software Engineer from Delhi, India. I specialize in building
              scalable web applications with modern tech stacks.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I love turning complex ideas into elegant, production-ready products. From
              AI powered support agents to JEE college predictors serving 200+ daily users.
              I ship things that actually matter and scale.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Currently pursuing my B.Tech in Information Technology at HMRITM, GGSIPU
              with a CGPA of{" "}
              <span className="text-cyan-400 font-semibold">8.53 / 10.0</span> (graduating 2026).
            </p>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { icon: <MapPin size={16} />, label: "Location", value: "Delhi, India" },
                { icon: <GraduationCap size={16} />, label: "Education", value: "B.Tech IT, 2026" },
                { icon: <Briefcase size={16} />, label: "Focus", value: "Full Stack + AI" },
                { icon: <User size={16} />, label: "Status", value: "Open to Work" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass rounded-xl p-4 border border-indigo-500/10 glass-hover"
                >
                  <div className="flex items-center gap-2 text-indigo-400 mb-1">
                    {item.icon}
                    <span className="text-xs text-slate-500 font-mono uppercase tracking-wider">{item.label}</span>
                  </div>
                  <p className="text-white font-semibold text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual card */}
          <div
            className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="glass rounded-2xl p-5 sm:p-8 border border-indigo-500/15 glow-primary relative overflow-hidden">
              {/* Decorative top bar */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <div className="ml-3 flex-1 h-6 rounded glass border border-white/5 flex items-center px-3">
                  <span className="text-xs text-slate-600 font-mono">aashish.tsx</span>
                </div>
              </div>

              <div className="font-mono text-xs sm:text-sm space-y-1 overflow-x-auto">
                <div><span className="text-purple-400">const</span> <span className="text-cyan-300">developer</span> <span className="text-white">=</span> <span className="text-yellow-300">{"{"}</span></div>
                <div className="ml-4"><span className="text-blue-300">name</span><span className="text-white">:</span> <span className="text-green-300">"Aashish Rana"</span><span className="text-white">,</span></div>
                <div className="ml-4"><span className="text-blue-300">role</span><span className="text-white">:</span> <span className="text-green-300">"Full Stack Engineer"</span><span className="text-white">,</span></div>
                <div className="ml-4"><span className="text-blue-300">location</span><span className="text-white">:</span> <span className="text-green-300">"Delhi, India 🇮🇳"</span><span className="text-white">,</span></div>
                <div className="ml-4"><span className="text-blue-300">languages</span><span className="text-white">: [</span></div>
                <div className="ml-8"><span className="text-green-300">"TypeScript"</span><span className="text-white">,</span></div>
                <div className="ml-8"><span className="text-green-300">"JavaScript"</span><span className="text-white">,</span></div>
                <div className="ml-8"><span className="text-green-300">"SQL"</span><span className="text-white">,</span></div>
                <div className="ml-4"><span className="text-white">],</span></div>
                <div className="ml-4"><span className="text-blue-300">isAvailable</span><span className="text-white">:</span> <span className="text-orange-400">true</span><span className="text-white">,</span></div>
                <div className="ml-4"><span className="text-blue-300">cgpa</span><span className="text-white">:</span> <span className="text-orange-400">8.53</span><span className="text-white">,</span></div>
                <div><span className="text-yellow-300">{"}"}</span><span className="text-white">;</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
