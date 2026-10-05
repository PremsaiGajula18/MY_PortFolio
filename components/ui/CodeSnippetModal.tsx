"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Check, Code2, Terminal } from "lucide-react";

interface CodeSnippetModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  snippet: string;
  language?: string;
  explanation?: string;
}

export function CodeSnippetModal({
  isOpen,
  onClose,
  title,
  snippet,
  language = "deluge",
  explanation,
}: CodeSnippetModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative z-10 w-full max-w-2xl max-h-[85vh] flex flex-col rounded-2xl border border-white/15 bg-slate-900 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-slate-950/60">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{title}</h3>
                  <p className="text-[11px] font-mono text-slate-400">
                    Language: {language.toUpperCase()} • Production Logic
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-xs text-slate-300 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Explanation if provided */}
            {explanation && (
              <div className="px-5 py-2.5 bg-indigo-950/30 border-b border-white/5 text-xs text-indigo-200">
                <span className="font-semibold text-cyan-300">Technical Context: </span>
                {explanation}
              </div>
            )}

            {/* Code Body */}
            <div className="p-5 overflow-auto flex-1 font-mono text-xs leading-relaxed bg-black/60 text-slate-200 select-text">
              <pre className="whitespace-pre-wrap">{snippet}</pre>
            </div>

            {/* Footer */}
            <div className="px-5 py-3 border-t border-white/10 bg-slate-950/80 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                Zoho CRM Deluge Execution Engine
              </span>
              <button
                onClick={onClose}
                className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
