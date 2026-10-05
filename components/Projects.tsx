"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Code2,
  CheckCircle2,
  Workflow,
  Sparkles,
  Layers,
  ArrowUpRight,
  TrendingUp,
  FolderGit2,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROJECTS_DATA, ProjectItem } from "@/lib/constants";
import { CodeSnippetModal } from "@/components/ui/CodeSnippetModal";

export function Projects() {
  const [selectedSnippet, setSelectedSnippet] = useState<{
    title: string;
    snippet: string;
    explanation?: string;
  } | null>(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Projects"
          title="Engineered Solutions &"
          highlight="Architectural Impact"
          description="Production-oriented CRM systems, automation engines, and data pipelines built to solve high-friction enterprise operations."
        />

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl hover:border-indigo-500/50 hover:bg-slate-900/85 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xl"
            >
              {/* Top ambient hover glow */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-indigo-500/10 group-hover:bg-indigo-500/20 blur-3xl transition-all duration-500 pointer-events-none" />

              <div className="p-6 sm:p-8 space-y-6">
                {/* Header Category and Metrics */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    {project.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-2.5 py-1 rounded-full">
                    <TrendingUp className="w-3 h-3" />
                    <span>{project.highlight}</span>
                  </div>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-indigo-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-indigo-400 mt-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Problem & Solution Accordion/Callout */}
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-slate-800/40 border border-white/5 space-y-1">
                    <span className="font-semibold text-rose-400 text-xs font-mono uppercase tracking-wider">
                      The Operational Problem:
                    </span>
                    <p className="text-slate-300 leading-relaxed">{project.problem}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-indigo-950/30 border border-indigo-500/20 space-y-1">
                    <span className="font-semibold text-emerald-400 text-xs font-mono uppercase tracking-wider">
                      The Technical Architecture:
                    </span>
                    <p className="text-slate-300 leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                {/* Key Features List */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono mb-2.5">
                    Architectural Deliverables:
                  </h4>
                  <ul className="space-y-1.5">
                    {project.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="px-6 sm:px-8 py-4 bg-slate-950/80 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                {/* Code Snippet Button */}
                {project.delugeSnippet ? (
                  <button
                    onClick={() =>
                      setSelectedSnippet({
                        title: `${project.title} — Deluge Script Logic`,
                        snippet: project.delugeSnippet!,
                        explanation: `This script handles real-time execution for ${project.title}, enforcing validation, database lookups, and lifecycle state changes.`,
                      })
                    }
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 font-mono transition-colors"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>View Deluge Logic</span>
                  </button>
                ) : (
                  <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                    <Workflow className="w-3.5 h-3.5" />
                    Full Pipeline Ready
                  </span>
                )}

                {/* Link to Drive / Repo */}
                <div className="flex items-center gap-2">
                  {project.projectLink && (
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>Drive Architecture</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Code Snippet Modal */}
      {selectedSnippet && (
        <CodeSnippetModal
          isOpen={!!selectedSnippet}
          onClose={() => setSelectedSnippet(null)}
          title={selectedSnippet.title}
          snippet={selectedSnippet.snippet}
          explanation={selectedSnippet.explanation}
        />
      )}
    </section>
  );
}
