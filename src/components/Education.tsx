"use client";

import { useInView } from "react-intersection-observer";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export default function Education() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="education" ref={ref} className="py-20 sm:py-28 px-4 sm:px-6 relative">
      <div className="orb orb-purple w-[300px] h-[300px] bottom-10 right-10" />

      <div className="max-w-6xl mx-auto">
        <div className={`mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Edu<span className="gradient-text">cation</span>
          </h2>
        </div>

        <div className={`transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="glass rounded-2xl p-8 md:p-10 border border-indigo-500/15 glow-primary max-w-3xl relative overflow-hidden">
            {/* Decorative gradient blob */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-2xl pointer-events-none" />

            <div className="relative z-10">
              {/* Degree header */}
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 mb-7">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center flex-shrink-0 float-animation">
                  <GraduationCap size={26} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-white mb-1">
                    B.Tech in Information Technology
                  </h3>
                  <p className="text-indigo-400 font-semibold">HMRITM, GGSIPU · Delhi</p>
                  <p className="text-slate-500 text-sm mt-1 font-mono">2022 – 2026</p>
                </div>
              </div>

              {/* CGPA highlight */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-7">
                <div className="glass rounded-xl p-5 border border-indigo-500/15 text-center col-span-1">
                  <div className="text-3xl font-black gradient-text mb-1">8.53</div>
                  <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">CGPA / 10.0</p>
                </div>
                <div className="glass rounded-xl p-5 border border-cyan-500/15 text-center">
                  <div className="text-3xl font-black text-cyan-400 mb-1">4th</div>
                  <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Year Student</p>
                </div>
                <div className="glass rounded-xl p-5 border border-purple-500/15 text-center">
                  <div className="text-3xl font-black text-purple-400 mb-1">2026</div>
                  <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Graduating</p>
                </div>
              </div>

              {/* Key points */}
              <div className="space-y-3">
                {[
                  { icon: <BookOpen size={15} />, text: "Specializing in Information Technology with focus on software engineering" },
                  { icon: <Award size={15} />, text: "Strong academic record with consistent performance across all semesters" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-400 text-sm">
                    <span className="text-indigo-400 flex-shrink-0">{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
