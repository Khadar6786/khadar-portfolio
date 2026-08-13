"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  interactive?: boolean;
  gradientBorder?: boolean;
}

export function GlassCard({
  children,
  className,
  glow = false,
  interactive = true,
  gradientBorder = false,
  ...props
}: GlassCardProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, isHovered: false });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isHovered: true
    });
  };

  const handleMouseLeave = () => {
    if (!interactive) return;
    setMousePos(prev => ({ ...prev, isHovered: false }));
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-indigo-500/15 overflow-hidden transition-all duration-300",
        interactive && "hover:border-indigo-500/35 hover:shadow-[0_12px_40px_-12px_rgba(99,102,241,0.2)] hover:-translate-y-0.5",
        gradientBorder && "glowing-border",
        glow && "shadow-[0_0_25px_-5px_rgba(99,102,241,0.15)]",
        className
      )}
      {...props}
    >
      {/* Subtle cursor spotlight effect */}
      {interactive && mousePos.isHovered && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.12), transparent 70%)`
          }}
        />
      )}

      {/* Internal subtle content container */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
