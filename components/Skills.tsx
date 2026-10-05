"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Globe,
  Database,
  Cloud,
  Cpu,
  CheckCircle,
  Sparkles,
  Zap,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SKILL_CATEGORIES } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  Layers,
  Globe,
  Database,
  Cloud,
  Cpu,
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredCategories =
    activeCategory === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Skills"
          title="Engineered for Performance &"
          highlight="Enterprise Precision"
          description="Comprehensive proficiencies across Zoho CRM architecture, modern frontend frameworks, backend microservices, and relational databases."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all duration-200 ${
              activeCategory === "all"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400/40"
                : "bg-slate-900/60 text-slate-400 hover:text-white border border-white/10 hover:border-white/20"
            }`}
          >
            All Disciplines
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400/40"
                  : "bg-slate-900/60 text-slate-400 hover:text-white border border-white/10 hover:border-white/20"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = ICON_MAP[category.iconName] || Layers;
            return (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6 hover:border-indigo-500/40 hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Glow accent */}
                <div
                  className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10`}
                />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${category.accentColor}`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {category.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">
                      {category.skills.length} Competencies
                    </span>
                  </div>

                  {/* Skills List with descriptions (NO fake percentages) */}
                  <div className="mt-5 space-y-3.5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-slate-800/40 border border-white/5 hover:border-white/15 hover:bg-slate-800/70 transition-all duration-200"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-white group-hover/skill:text-cyan-300">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                    Practical Implementation
                  </span>
                  <span className="text-indigo-400">Recruiter Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
