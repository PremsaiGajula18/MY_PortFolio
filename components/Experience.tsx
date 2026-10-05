"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  CheckCircle2,
  Calendar,
  Layers,
  Code2,
  Workflow,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROJECT_BASED_EXPERIENCE } from "@/lib/constants";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Project-Based Experience"
          title="Practical Engineering &"
          highlight="CRM Solution Delivery"
          description="Direct hands-on experience building enterprise-grade Zoho CRM automations, Deluge algorithms, and client scripts for commercial business scenarios."
        />

        {/* Experience Timeline Card */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Guide Line */}
          <div className="hidden sm:block absolute left-8 top-10 bottom-10 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500/20" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative sm:pl-20"
          >
            {/* Timeline Node Icon */}
            <div className="hidden sm:flex absolute left-4 top-8 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-900 border-2 border-indigo-400 items-center justify-center shadow-lg shadow-indigo-500/40 z-10">
              <Layers className="w-4 h-4 text-cyan-300" />
            </div>

            {/* Experience Body */}
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl p-6 sm:p-8 shadow-2xl space-y-6">
              {/* Header Badge & Title */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/10">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-medium mb-2">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>{PROJECT_BASED_EXPERIENCE.type}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {PROJECT_BASED_EXPERIENCE.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-cyan-400 mt-1">
                    {PROJECT_BASED_EXPERIENCE.subtitle}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg w-fit">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{PROJECT_BASED_EXPERIENCE.period}</span>
                </div>
              </div>

              {/* Overview statement */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {PROJECT_BASED_EXPERIENCE.overview}
              </p>

              {/* Focus Areas Pills */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono mb-3">
                  Core Architectural Focus Areas
                </h4>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {[
                    "CRM Administration",
                    "CRM Customization",
                    "Deluge Scripting",
                    "Client Script / ZDK",
                    "Workflows",
                    "Blueprints",
                    "Business Process Automation",
                    "REST API Integration",
                    "CRM Data Management",
                  ].map((focus) => (
                    <span
                      key={focus}
                      className="px-2.5 py-1 rounded-lg bg-indigo-950/40 border border-indigo-500/30 text-indigo-200"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Responsibilities Grid */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono mb-3">
                  Technical Responsibilities & Practice
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {PROJECT_BASED_EXPERIENCE.responsibilities.map((resp, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/40 border border-white/5 hover:border-white/10 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-300 leading-snug">
                        {resp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recruiter Transparency Banner */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <span className="text-slate-400">
                  <strong className="text-white">Note to Recruiters: </strong>
                  This candidate upholds complete transparency. No fictitious companies or inflated employment dates are claimed. All capabilities stem from rigorous project execution and deep system building.
                </span>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-1 font-semibold text-cyan-400 hover:text-cyan-300 shrink-0"
                >
                  <span>Inspect Projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
