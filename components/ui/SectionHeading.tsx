"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge: string;
  title: string;
  highlight?: string;
  description?: string;
  center?: boolean;
}

export function SectionHeading({
  badge,
  title,
  highlight,
  description,
  center = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-12 md:mb-16 ${center ? "text-center mx-auto" : ""} max-w-3xl`}
    >
      <div
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-mono font-medium mb-4 ${
          center ? "mx-auto" : ""
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span>{badge}</span>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}
