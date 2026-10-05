"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Zap,
  Code2,
  Workflow,
  Globe,
  Database,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICES_DATA } from "@/lib/constants";

const SERVICE_ICONS = [
  Layers,
  Zap,
  Code2,
  Workflow,
  Globe,
  Database,
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Specialized Services"
          title="High-Value Technical &"
          highlight="Automation Solutions"
          description="Tailored engineering services designed to streamline business workflows, eliminate manual operational debt, and connect disparate digital systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const Icon = SERVICE_ICONS[index] || Layers;
            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6 sm:p-8 hover:border-indigo-500/40 hover:bg-slate-900/85 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between pb-6 border-b border-white/10">
                    <span className="text-2xl font-black font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                      {service.number}
                    </span>
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-600/20 group-hover:border-indigo-500/30 transition-all duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-200 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed mt-3">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Tags & Action Link */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[10px] font-mono text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-white transition-colors"
                  >
                    <span>Request Collaboration</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
