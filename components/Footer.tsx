"use client";

import React from "react";
import { ArrowUp, Mail, Sparkles, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { PERSONAL_INFO, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#070b14] pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold tracking-tight text-white">
                {PERSONAL_INFO.name}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                CRM
              </span>
            </div>
            <p className="text-sm font-mono text-cyan-400">
              Zoho CRM Developer | Web Developer
            </p>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Transforming commercial requirements into automated, high-precision Zoho CRM
              architectures, Deluge scripts, and modern web applications.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Navigation */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-400 hover:text-cyan-300 transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Target Roles Focus */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono">
              Target Opportunities
            </h4>
            <ul className="text-xs font-mono text-slate-400 space-y-1.5">
              <li>• Zoho CRM Developer</li>
              <li>• Zoho CRM Administrator</li>
              <li>• Junior CRM Developer</li>
              <li>• Web Developer</li>
              <li>• Python Developer</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top Button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © 2026 {PERSONAL_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <span>Built with Next.js, TypeScript & Tailwind CSS</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
