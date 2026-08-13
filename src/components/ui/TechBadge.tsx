"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  variant?: "default" | "primary" | "secondary" | "accent" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function TechBadge({
  name,
  variant = "default",
  size = "md",
  className
}: TechBadgeProps) {
  const sizeClasses = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-xs sm:text-sm",
    lg: "px-3.5 py-1.5 text-sm"
  };

  const variantClasses = {
    default:
      "bg-slate-900/70 text-slate-300 border border-indigo-500/15 hover:border-indigo-500/40 hover:text-white hover:bg-slate-800/80",
    primary:
      "bg-indigo-950/60 text-indigo-200 border border-indigo-500/30 hover:border-indigo-400 hover:text-white hover:bg-indigo-900/60",
    secondary:
      "bg-cyan-950/50 text-cyan-200 border border-cyan-500/25 hover:border-cyan-400 hover:text-white hover:bg-cyan-900/50",
    accent:
      "bg-violet-950/50 text-violet-200 border border-violet-500/25 hover:border-violet-400 hover:text-white hover:bg-violet-900/50",
    outline:
      "bg-transparent text-slate-400 border border-slate-700/60 hover:text-slate-200 hover:border-slate-500"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-medium transition-all duration-200 select-none",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
      {name}
    </span>
  );
}
