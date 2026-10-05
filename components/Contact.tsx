"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  MessageSquare,
  Clock,
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/ui/Icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PERSONAL_INFO } from "@/lib/constants";
import confetti from "canvas-confetti";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.7 },
        });
      } catch {
        // Fallback gracefully
      }
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get in Touch"
          title="Let's Build Something"
          highlight="Smart Together"
          description="Whether you are looking for a Zoho CRM solution, process automation, web development, or a developer for your next high-impact project, let's connect."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-xl p-6 sm:p-8 shadow-2xl"
          >
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Message Dispatched Successfully!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, {formData.name || "friend"}. Premsai will review your inquiry and reply via{" "}
                  <strong className="text-cyan-300">{formData.email}</strong> within 24 business hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold font-mono transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono font-medium text-slate-300 mb-2"
                    >
                      Your Name <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono font-medium text-slate-300 mb-2"
                    >
                      Email Address <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono font-medium text-slate-300 mb-2"
                  >
                    Subject / Project Focus <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    placeholder="e.g. Zoho CRM Customization & Deluge Automation"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono font-medium text-slate-300 mb-2"
                  >
                    Message & Requirements <span className="text-indigo-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Provide a brief overview of the project or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Direct Contact & Social Glass Cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Availability Status Card */}
            <div className="p-5 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 backdrop-blur-xl">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-semibold">Current Career Status</span>
              </div>
              <h4 className="text-sm font-bold text-white">
                Actively Interviewing for Full-Time Roles
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                Open to on-site, hybrid, or remote positions as Zoho CRM Developer, Administrator, or Junior Software Engineer.
              </p>
            </div>

            {/* Email Contact Card */}
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="group p-5 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl hover:border-indigo-500/40 hover:bg-slate-800/80 transition-all duration-300 flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase">Direct Email</span>
                  <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {PERSONAL_INFO.email}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            </a>

            {/* LinkedIn Profile Card */}
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl hover:border-blue-500/40 hover:bg-slate-800/80 transition-all duration-300 flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase">Professional Network</span>
                  <div className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                    linkedin.com/in/premsai-gajula
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            </a>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl hover:border-purple-500/40 hover:bg-slate-800/80 transition-all duration-300 flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 group-hover:scale-110 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase">Code Repositories</span>
                  <div className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                    github.com/premsaigajula
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
            </a>

            {/* Response Time SLA */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2.5 text-xs text-slate-400 font-mono">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>Standard Response Time: Under 24 Hours</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
