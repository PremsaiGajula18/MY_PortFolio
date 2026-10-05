"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Printer, CheckCircle, Mail, Phone, MapPin, Award, BookOpen, Layers } from "lucide-react";
import { PERSONAL_INFO, PROJECT_BASED_EXPERIENCE, PROJECTS_DATA, CERTIFICATIONS_DATA } from "@/lib/constants";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl border border-white/15 bg-slate-900 shadow-2xl overflow-hidden my-auto"
          >
            {/* Action Bar Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-950/80">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <h3 className="text-sm font-semibold text-white">
                  Premsai Gajula — Professional Resume Preview
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs text-slate-200 transition-colors"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / PDF</span>
                </button>
                <a
                  href="/resume.pdf"
                  download="Premsai_Gajula_Resume.pdf"
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resume</span>
                </a>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors ml-1"
                  aria-label="Close resume preview"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Scrollable Printable Document */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6 bg-slate-900/90 text-slate-200 text-sm">
              {/* Header Info */}
              <div className="border-b border-white/10 pb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-indigo-400 font-semibold mt-1">
                  Aspiring Zoho CRM Developer | Web Developer | Computer Science Graduate
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 mt-3">
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    {PERSONAL_INFO.email}
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    {PERSONAL_INFO.phone}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    {PERSONAL_INFO.location}
                  </span>
                </div>
                <p className="mt-3 text-xs md:text-sm text-slate-300 leading-relaxed italic border-l-2 border-indigo-500 pl-3">
                  &ldquo;{PERSONAL_INFO.heroDescription}&rdquo;
                </p>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  Education
                </h2>
                <div className="p-3.5 rounded-xl bg-slate-800/50 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="font-semibold text-white">Bachelor of Science in Computer Science (B.Sc)</h3>
                    <p className="text-xs text-slate-300 mt-0.5">Focus: Software Development, Relational Databases, Web Technologies & Algorithms</p>
                  </div>
                  <span className="text-xs font-mono text-cyan-300 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-800/40 w-fit">
                    Graduated
                  </span>
                </div>
              </div>

              {/* Technical Experience (Project-Based) */}
              <div>
                <h2 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2 mb-3">
                  <Layers className="w-4 h-4 text-indigo-400" />
                  {PROJECT_BASED_EXPERIENCE.title}
                </h2>
                <div className="p-4 rounded-xl bg-slate-800/50 border border-white/5 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-300 border-b border-white/5 pb-2">
                    <span className="font-semibold text-indigo-300">
                      Technical Practice & Solution Architecture
                    </span>
                    <span className="font-mono text-slate-400">{PROJECT_BASED_EXPERIENCE.period}</span>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300">
                    {PROJECT_BASED_EXPERIENCE.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Featured Technical Projects */}
              <div>
                <h2 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-purple-400" />
                  Key Projects & Architectural Deliverables
                </h2>
                <div className="space-y-3">
                  {PROJECTS_DATA.map((proj) => (
                    <div
                      key={proj.id}
                      className="p-3.5 rounded-xl bg-slate-800/40 border border-white/5 space-y-1.5"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h3 className="font-semibold text-white text-sm">
                          {proj.title} <span className="text-xs font-normal text-slate-400">— {proj.tagline}</span>
                        </h3>
                        <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40 w-fit">
                          {proj.highlight}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300">{proj.solution}</p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {proj.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h2 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-amber-400" />
                  Certifications & Specialized Credentials
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {CERTIFICATIONS_DATA.map((cert) => (
                    <div
                      key={cert.id}
                      className="p-3 rounded-xl bg-slate-800/40 border border-white/5"
                    >
                      <div className="font-semibold text-white">{cert.title}</div>
                      <div className="text-slate-400 text-[11px] mt-0.5">{cert.issuer}</div>
                      <div className="text-indigo-400 font-mono text-[10px] mt-1">{cert.duration}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
