"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  ExternalLink,
  Laptop,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Maximize2,
  RefreshCw,
  Code2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WEB_DEV_CARDS, FEATURED_WEBSITE } from "@/lib/constants";

export function WebDevelopment() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  return (
    <section id="web-dev" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Web Engineering"
          title="Modern Frontend &"
          highlight="Web Architectures"
          description="Crafting responsive, high-performance web applications, API integrations, and content management solutions."
        />

        {/* Interactive Technology Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 mb-16">
          {WEB_DEV_CARDS.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group p-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl hover:border-indigo-500/40 hover:bg-slate-800/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                  {tech.category}
                </span>
                <h4 className="text-base font-bold text-white group-hover:text-indigo-200 transition-colors mt-0.5">
                  {tech.name}
                </h4>
              </div>
              <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                {tech.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Featured Website Section in Browser Window Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/15 bg-slate-900/80 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Details */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>Featured Live Production Website</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {FEATURED_WEBSITE.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-indigo-400 mt-1">
                  {FEATURED_WEBSITE.tagline} • Built with {FEATURED_WEBSITE.platform}
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {FEATURED_WEBSITE.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {FEATURED_WEBSITE.features.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <a
                  href={FEATURED_WEBSITE.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Globe className="w-4 h-4 text-cyan-300" />
                  <span>Visit Live Website</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>

            {/* Right: Premium Browser-Window Mockup */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-white/15 bg-slate-950 shadow-2xl overflow-hidden group">
                {/* Browser Top Navigation Bar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-slate-900/90">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>

                  {/* Browser URL Input Bar */}
                  <div className="flex-1 max-w-sm mx-3 flex items-center gap-2 px-3 py-1 rounded-lg bg-black/40 border border-white/10 text-[11px] font-mono text-slate-300">
                    <span className="text-emerald-400">🔒</span>
                    <span className="truncate">{FEATURED_WEBSITE.url}</span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-400">
                    <button
                      onClick={handleRefresh}
                      className="p-1 hover:text-white transition-colors"
                      aria-label="Refresh preview"
                    >
                      <RefreshCw
                        className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin text-cyan-400" : ""}`}
                      />
                    </button>
                    <a
                      href={FEATURED_WEBSITE.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 hover:text-white transition-colors"
                      aria-label="Open website in new tab"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Browser Body Mockup Graphic */}
                <div className="relative p-6 sm:p-8 bg-gradient-to-br from-slate-900 to-slate-950 aspect-[16/10] flex flex-col justify-between overflow-hidden">
                  {/* Subtle decorative grid */}
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:16px_16px]" />

                  {/* Mock Site Header */}
                  <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center text-[10px] font-bold text-white">
                        CG
                      </div>
                      <span className="text-xs font-bold text-white">
                        Government Degree College Portal
                      </span>
                    </div>
                    <div className="hidden sm:flex items-center gap-3 text-[10px] font-mono text-slate-400">
                      <span>Home</span>
                      <span>Departments</span>
                      <span>Admissions</span>
                      <span>Notices</span>
                    </div>
                  </div>

                  {/* Mock Hero Banner */}
                  <div className="relative z-10 my-auto text-center space-y-2 py-4">
                    <div className="inline-block px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 text-[10px] font-mono">
                      Institutional Web Portal • WordPress CMS
                    </div>
                    <h4 className="text-lg sm:text-2xl font-black text-white">
                      Empowering Education & Digital Campus Access
                    </h4>
                    <p className="text-xs text-slate-400 max-w-md mx-auto">
                      Online noticeboard, faculty profiles, syllabus updates, and student inquiry portal.
                    </p>
                  </div>

                  {/* Mock Department Cards */}
                  <div className="relative z-10 grid grid-cols-3 gap-2 pt-2 border-t border-white/10">
                    <div className="p-2 rounded bg-white/5 border border-white/5 text-center">
                      <span className="text-[10px] font-semibold text-white block">
                        Computer Science
                      </span>
                      <span className="text-[8px] text-slate-400 font-mono">
                        Lab & Faculty
                      </span>
                    </div>
                    <div className="p-2 rounded bg-white/5 border border-white/5 text-center">
                      <span className="text-[10px] font-semibold text-white block">
                        Admissions 2026
                      </span>
                      <span className="text-[8px] text-emerald-400 font-mono">
                        Applications Open
                      </span>
                    </div>
                    <div className="p-2 rounded bg-white/5 border border-white/5 text-center">
                      <span className="text-[10px] font-semibold text-white block">
                        Examination Cell
                      </span>
                      <span className="text-[8px] text-cyan-400 font-mono">
                        Hall Tickets
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
