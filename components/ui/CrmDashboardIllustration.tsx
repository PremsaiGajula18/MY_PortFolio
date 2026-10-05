"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  TrendingUp,
  Workflow,
  Code2,
  Zap,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Layers,
  Database,
  Terminal,
} from "lucide-react";

const PIPELINE_STAGES = [
  { id: "lead", name: "Lead", count: "48 New", active: true, color: "text-blue-400" },
  { id: "contact", name: "Contact", count: "32 Qual", active: true, color: "text-indigo-400" },
  { id: "deal", name: "Deal", count: "19 In Prog", active: true, color: "text-purple-400" },
  { id: "quote", name: "Quote", count: "12 Generated", active: true, color: "text-cyan-400" },
  { id: "invoice", name: "Invoice", count: "8 Paid", active: true, color: "text-emerald-400" },
];

const FLOATING_BADGES = [
  { label: "Zoho CRM", icon: Layers, x: "-10%", y: "4%", color: "border-blue-500/40 text-blue-300 bg-blue-950/40" },
  { label: "Deluge", icon: Code2, x: "78%", y: "2%", color: "border-indigo-500/40 text-indigo-300 bg-indigo-950/40" },
  { label: "JavaScript", icon: Terminal, x: "-8%", y: "45%", color: "border-amber-500/40 text-amber-300 bg-amber-950/40" },
  { label: "Python", icon: Code2, x: "85%", y: "38%", color: "border-cyan-500/40 text-cyan-300 bg-cyan-950/40" },
  { label: "REST API", icon: Zap, x: "-6%", y: "82%", color: "border-emerald-500/40 text-emerald-300 bg-emerald-950/40" },
  { label: "MySQL", icon: Database, x: "75%", y: "80%", color: "border-purple-500/40 text-purple-300 bg-purple-950/40" },
  { label: "AI", icon: Sparkles, x: "42%", y: "-8%", color: "border-rose-500/40 text-rose-300 bg-rose-950/40" },
];

export function CrmDashboardIllustration() {
  const [activeStage, setActiveStage] = useState(2); // Deal stage
  const [automationCount, setAutomationCount] = useState(128);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % PIPELINE_STAGES.length);
      setAutomationCount((prev) => prev + 1);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Background glow behind dashboard */}
      <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/15 to-cyan-500/20 rounded-3xl blur-2xl opacity-75 animate-pulse" />

      {/* Floating Technology Pills */}
      {FLOATING_BADGES.map((badge, idx) => {
        const IconComponent = badge.icon;
        return (
          <motion.div
            key={badge.label}
            className={`hidden sm:flex absolute z-20 items-center gap-1.5 px-3 py-1.5 rounded-full border backdrop-blur-md shadow-lg text-xs font-mono font-medium ${badge.color}`}
            style={{ left: badge.x, top: badge.y }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, idx % 2 === 0 ? -6 : 6, 0],
            }}
            transition={{
              y: {
                duration: 4 + (idx % 3),
                repeat: Infinity,
                ease: "easeInOut",
              },
              opacity: { duration: 0.5, delay: idx * 0.1 },
            }}
          >
            <IconComponent className="w-3.5 h-3.5" />
            <span>{badge.label}</span>
          </motion.div>
        );
      })}

      {/* Main Glass CRM Dashboard Card */}
      <div className="relative z-10 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl p-5 md:p-6 shadow-2xl shadow-indigo-950/50">
        {/* Window Chrome Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs font-mono text-slate-400">
              Zoho CRM Enterprise • Deluge Orchestrator
            </span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Live Sync</span>
          </div>
        </div>

        {/* CRM Pipeline Lifecycle */}
        <div className="mt-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Workflow className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Automated Sales Pipeline
              </span>
            </div>
            <span className="text-xs font-mono text-indigo-400">Blueprint v3.2</span>
          </div>

          <div className="grid grid-cols-5 gap-1.5 md:gap-2">
            {PIPELINE_STAGES.map((stage, i) => {
              const isCurrent = i === activeStage;
              const isCompleted = i < activeStage;
              return (
                <div
                  key={stage.id}
                  onClick={() => setActiveStage(i)}
                  className={`cursor-pointer group relative flex flex-col items-center p-2 rounded-lg border text-center transition-all duration-300 ${
                    isCurrent
                      ? "bg-indigo-600/20 border-indigo-500/60 shadow-lg shadow-indigo-500/20 scale-105"
                      : isCompleted
                      ? "bg-slate-800/40 border-emerald-500/30 text-slate-300"
                      : "bg-slate-800/20 border-white/5 text-slate-400 hover:border-white/10"
                  }`}
                >
                  <div className="flex items-center gap-1 mb-1">
                    {isCompleted ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isCurrent ? "bg-indigo-400 animate-pulse" : "bg-slate-600"
                        }`}
                      />
                    )}
                  </div>
                  <span
                    className={`text-[11px] md:text-xs font-semibold ${
                      isCurrent ? "text-white" : "text-slate-300"
                    }`}
                  >
                    {stage.name}
                  </span>
                  <span className="text-[9px] md:text-[10px] font-mono text-slate-400 mt-0.5">
                    {stage.count}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Pipeline flow arrows */}
          <div className="flex justify-between items-center px-4 mt-2 text-slate-600 text-xs">
            <ArrowRight className="w-3 h-3 text-slate-500" />
            <ArrowRight className="w-3 h-3 text-slate-500" />
            <ArrowRight className="w-3 h-3 text-slate-500" />
            <ArrowRight className="w-3 h-3 text-slate-500" />
          </div>
        </div>

        {/* Live Metrics Row */}
        <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-white/10">
          <div className="p-2.5 rounded-xl bg-slate-800/40 border border-white/5">
            <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
              <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
              <span>Pipeline Value</span>
            </div>
            <div className="text-base md:text-lg font-bold text-white font-mono">
              ₹4.82 Cr
            </div>
            <div className="text-[10px] text-emerald-400 flex items-center gap-0.5 mt-0.5">
              <span>+18.4% this quarter</span>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-800/40 border border-white/5">
            <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Deluge Triggers</span>
            </div>
            <div className="text-base md:text-lg font-bold text-white font-mono">
              {automationCount} runs
            </div>
            <div className="text-[10px] text-amber-300 flex items-center gap-0.5 mt-0.5">
              <span>Zero drop rate</span>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-slate-800/40 border border-white/5">
            <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Quotation SLA</span>
            </div>
            <div className="text-base md:text-lg font-bold text-white font-mono">
              &lt; 3 mins
            </div>
            <div className="text-[10px] text-cyan-400 flex items-center gap-0.5 mt-0.5">
              <span>80% faster auto-gen</span>
            </div>
          </div>
        </div>

        {/* Deluge Script Quick Code Monitor */}
        <div className="mt-4 p-3 rounded-xl bg-black/50 border border-white/5 font-mono text-[11px] text-slate-300">
          <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1.5">
            <span className="text-indigo-400 font-semibold flex items-center gap-1">
              <Code2 className="w-3 h-3" /> QuotationAutoCalc.dg
            </span>
            <span className="text-emerald-400">Trigger: OnDealStageUpdate</span>
          </div>
          <div className="text-slate-400">
            <span className="text-purple-400">if</span> (dealStage =={" "}
            <span className="text-amber-300">&quot;Quote&quot;</span>) &#123;
            <br />
            &nbsp;&nbsp;calcGST = baseAmount *{" "}
            <span className="text-cyan-300">0.05</span>;
            <br />
            &nbsp;&nbsp;zoho.crm.updateRecord(
            <span className="text-amber-300">&quot;Deals&quot;</span>, dealId,
            mapData);
            <br />
            &#125;
          </div>
        </div>
      </div>
    </div>
  );
}
