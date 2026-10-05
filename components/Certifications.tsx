"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  ExternalLink,
  Calendar,
  CheckCircle,
  Building,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CERTIFICATIONS_DATA } from "@/lib/constants";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Credentials & Certifications"
          title="Verified Competencies &"
          highlight="Continuous Learning"
          description="Formal academic and industrial certifications validating core technical foundations in Data Science, Cloud Systems, and Advanced Python."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {CERTIFICATIONS_DATA.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6 sm:p-8 hover:border-indigo-500/40 hover:bg-slate-900/85 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header with Badge & Duration */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                      <Award className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400 font-medium">
                      {cert.badge}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{cert.duration}</span>
                  </div>
                </div>

                {/* Title & Issuer */}
                <div className="mt-5">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-indigo-200 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 mt-1.5">
                    <Building className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{cert.issuer}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3">
                    {cert.description}
                  </p>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[11px] font-mono text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Certificate Drive Link if available */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">
                  Institutional Verification
                </span>
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-white transition-colors"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-xs font-mono text-slate-400">
                    Curriculum Credential
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
