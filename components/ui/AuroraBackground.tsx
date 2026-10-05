"use client";

import React from "react";

export function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* Background base */}
      <div className="absolute inset-0 bg-[#0B1120]" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Aurora glow blobs */}
      <div className="absolute -top-[20%] left-[10%] h-[550px] w-[550px] rounded-full bg-gradient-to-tr from-[#4F46E5]/25 to-[#7C3AED]/20 blur-[130px] animate-pulse duration-[8000ms]" />
      <div className="absolute top-[20%] -right-[10%] h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-[#06B6D4]/20 via-[#4F46E5]/15 to-transparent blur-[140px]" />
      <div className="absolute top-[60%] left-[5%] h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#7C3AED]/15 via-[#06B6D4]/15 to-transparent blur-[140px]" />
      <div className="absolute bottom-[-10%] right-[15%] h-[550px] w-[550px] rounded-full bg-gradient-to-t from-[#4F46E5]/20 to-[#06B6D4]/10 blur-[150px]" />

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(11,17,32,0.6)_100%)]" />
    </div>
  );
}
