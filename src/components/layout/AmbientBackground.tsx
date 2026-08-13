"use client";

import React from "react";

export function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep midnight ambient color glows */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] animate-pulse-glow" />
      <div className="absolute top-[35%] -left-40 w-[600px] h-[500px] bg-cyan-600/8 rounded-full blur-[130px]" />
      <div className="absolute top-[65%] -right-40 w-[600px] h-[500px] bg-violet-600/10 rounded-full blur-[130px]" />
      <div className="absolute -bottom-40 left-1/3 w-[600px] h-[450px] bg-indigo-900/15 rounded-full blur-[120px]" />

      {/* Subtle technical background grid */}
      <div className="absolute inset-0 tech-grid-pattern opacity-40" />

      {/* Subtle gradient overlay to darken edges */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#060813]/40 to-[#060813]/90" />
    </div>
  );
}
