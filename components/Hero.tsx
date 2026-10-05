"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Sparkles,
  ChevronDown,
  Terminal,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";
import { CrmDashboardIllustration } from "@/components/ui/CrmDashboardIllustration";
import { ResumeModal } from "@/components/ui/ResumeModal";

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const roles = PERSONAL_INFO.roles;
    const currentRole = roles[currentRoleIndex];
    let typingSpeed = isDeleting ? 38 : 75;

    if (!isDeleting && displayedText === currentRole) {
      typingSpeed = 2200; // Pause at full word
      const timeout = setTimeout(() => setIsDeleting(true), typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      typingSpeed = 400; // Pause before typing next
      const timeout = setTimeout(() => {}, typingSpeed);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? currentRole.substring(0, prev.length - 1)
          : currentRole.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 lg:py-32 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio & Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-mono font-medium text-indigo-300">
                {PERSONAL_INFO.badge}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Dynamic Typing Title */}
            <div className="h-12 sm:h-14 flex items-center mt-3 sm:mt-4">
              <span className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent font-mono">
                {displayedText}
              </span>
              <span className="inline-block w-1 h-7 sm:h-8 ml-1 bg-cyan-400 animate-pulse" />
            </div>

            {/* Exact Required Hero Description */}
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {PERSONAL_INFO.heroDescription}
            </p>

            {/* Credential highlights */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mt-6 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Deluge Scripting & ZDK</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Process Automation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>REST APIs & Python</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-8 w-full sm:w-auto">
              {/* Primary: View Projects */}
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-500 border border-indigo-400/30 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary: Download Resume */}
              <button
                onClick={() => setResumeOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <Download className="w-4 h-4 text-cyan-300" />
                <span>Download Resume</span>
              </button>

              {/* Ghost: Contact Me */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-400 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Contact Me</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive CRM Workspace Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative mt-6 lg:mt-0"
          >
            <CrmDashboardIllustration />
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
}
