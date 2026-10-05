"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText, Sparkles, ChevronRight } from "lucide-react";
import { NAV_LINKS, PERSONAL_INFO } from "@/lib/constants";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { ResumeModal } from "@/components/ui/ResumeModal";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [resumeOpen, setResumeOpen] = useState(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect current section
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#0B1120]/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20 py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        {/* Top Reading Progress Bar */}
        <div
          className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo / Personal Brand */}
            <a
              href="#hero"
              className="group flex flex-col focus:outline-none"
              aria-label="Premsai Gajula Portfolio Home"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                  {PERSONAL_INFO.name}
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  <Sparkles className="w-2.5 h-2.5 mr-1 text-cyan-400" />
                  CRM
                </span>
              </div>
              <span className="text-[11px] font-mono text-cyan-400/90 font-medium tracking-wide">
                Zoho CRM Developer
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative px-3 py-1.5 text-xs xl:text-sm font-medium transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setResumeOpen(true)}
                className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600/90 hover:bg-indigo-600 border border-indigo-400/30 shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/40 transition-all duration-200"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-300 group-hover:rotate-6 transition-transform" />
                <span>Resume</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setResumeOpen(true)}
                className="p-2 rounded-lg bg-indigo-600/80 text-white text-xs font-medium"
                aria-label="View Resume"
              >
                <FileText className="w-4 h-4" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-b border-white/10 bg-[#0B1120]/95 backdrop-blur-2xl px-5 pt-3 pb-6 shadow-2xl"
            >
              <div className="flex flex-col space-y-1">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-indigo-600/20 text-cyan-300 border border-indigo-500/30"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </a>
                  );
                })}
              </div>

              <div className="pt-4 mt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setResumeOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors"
                >
                  <FileText className="w-4 h-4 text-cyan-300" />
                  <span>View & Download Resume</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
