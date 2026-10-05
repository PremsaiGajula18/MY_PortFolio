"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Sparkles,
  CheckCircle2,
  GraduationCap,
  Layers,
  ArrowRight,
  Code2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { REALISTIC_STATS } from "@/lib/constants";

const SKILL_PILLS = [
  "Zoho CRM",
  "Deluge",
  "ZDK",
  "JavaScript",
  "Python",
  "Flask",
  "MySQL",
  "MongoDB",
  "REST APIs",
  "Data Analytics",
  "Excel",
  "Azure",
  "Git/GitHub",
  "AI Tools",
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 1600; // ms
    const increment = value / (duration / 25);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 25);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-mono">
      {count}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Premsai"
          title="Bridging Business Workflows with"
          highlight="Scalable Technical Systems"
          description="Transforming commercial requirements into automated, reliable CRM and web architectures."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative, Philosophy & Skill Pills */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-xl space-y-5">
              <div className="flex items-center gap-3 text-indigo-400 font-mono text-xs">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>B.Sc Computer Science Graduate • Solution Architect</span>
              </div>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                <strong className="text-white font-semibold">Premsai Gajula</strong> is a
                B.Sc Computer Science graduate passionate about building smart CRM solutions,
                business automation systems, modern web applications, and data-driven solutions.
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                He specializes in <strong className="text-indigo-300 font-medium">Zoho CRM Development</strong>,{" "}
                CRM Customization, Deluge scripting, Client Script (ZDK/JS), modern Web Development,
                Python, REST APIs, databases, and Data Analytics.
              </p>

              <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/20 text-indigo-200 text-sm flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <p>
                  <strong className="text-white">Core Engineering Philosophy: </strong>
                  He deeply enjoys converting messy, manual business operations into clean,
                  predictable, and fully automated CRM pipelines that save teams hundreds of operational hours.
                </p>
              </div>

              {/* Skill Pills */}
              <div className="pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono mb-3">
                  Core Technical Ecosystem
                </h4>
                <div className="flex flex-wrap gap-2">
                  {SKILL_PILLS.map((pill) => (
                    <span
                      key={pill}
                      className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-indigo-600/20 hover:border-indigo-500/40 text-xs font-mono text-slate-300 hover:text-white transition-all duration-200"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Realistic Statistics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <div className="grid grid-cols-2 gap-4">
              {REALISTIC_STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl hover:border-indigo-500/40 hover:bg-slate-800/60 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-3">
                    <div className="text-xs sm:text-sm font-semibold text-slate-200">
                      {stat.label}
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 mt-1">
                      {stat.subtext}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Recruiter Focus Callout Card */}
            <div className="p-5 sm:p-6 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-950/20 via-slate-900/60 to-indigo-950/20 backdrop-blur-xl">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Ready for Impact</span>
              </div>
              <h4 className="text-sm font-semibold text-white">
                Seeking Full-Time CRM & Software Roles
              </h4>
              <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                Available for immediate hire as a Zoho CRM Developer, CRM Administrator, Junior CRM Developer, Web Developer, or Python Developer.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-white mt-3 group"
              >
                <span>Initiate Discussion</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
