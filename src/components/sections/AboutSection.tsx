"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  ShieldCheck,
  BookOpen,
  GraduationCap,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { personalInfo, engineeringPrinciples } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

export function AboutSection() {
  const [selectedPrinciple, setSelectedPrinciple] = useState<string>("clean-architecture");

  const getPrincipleIcon = (name: string) => {
    switch (name) {
      case "Layers":
        return <Layers className="w-5 h-5" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5" />;
      case "BookOpen":
        return <BookOpen className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          badge="Engineering Profile"
          title="About Me"
          subtitle="Combining strong Computer Science fundamentals with hands-on backend and full-stack engineering."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Academic & Bio Card */}
          <div className="lg:col-span-6 space-y-6">
            <GlassCard className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-indigo-500/15">
                <div className="p-2.5 rounded-xl bg-indigo-950/70 border border-indigo-500/30 text-indigo-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    VIT-AP University
                  </h3>
                  <p className="text-xs sm:text-sm text-indigo-300 font-mono">
                    Integrated M.Tech in CSE (2022–2027) • CGPA: 8.67 / 10
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {personalInfo.aboutText.map((paragraph, index) => (
                  <p key={index} className="font-normal text-slate-300">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-indigo-500/15 flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1 rounded-full bg-slate-900/90 text-indigo-300 border border-indigo-500/20">
                  Java & Spring Boot
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-900/90 text-cyan-300 border border-cyan-500/20">
                  REST APIs & MySQL
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-900/90 text-violet-300 border border-violet-500/20">
                  Next.js & TypeScript
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-900/90 text-emerald-300 border border-emerald-500/20">
                  DSA & OOP
                </span>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: 3 Interactive Engineering Principles */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400">
                Core Engineering Principles
              </h3>
              <span className="text-xs text-indigo-400 font-mono">
                Interactive Architecture
              </span>
            </div>

            <div className="space-y-4">
              {engineeringPrinciples.map((principle) => {
                const isSelected = selectedPrinciple === principle.id;
                return (
                  <div
                    key={principle.id}
                    onClick={() => setSelectedPrinciple(principle.id)}
                    className={`cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-300 border backdrop-blur-xl ${
                      isSelected
                        ? "bg-indigo-950/40 border-indigo-500/40 shadow-[0_10px_30px_-10px_rgba(99,102,241,0.25)]"
                        : "bg-slate-900/40 border-indigo-500/10 hover:border-indigo-500/25 hover:bg-slate-900/60"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-xl transition-colors ${
                            isSelected
                              ? "bg-indigo-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                              : "bg-slate-800 text-slate-400"
                          }`}
                        >
                          {getPrincipleIcon(principle.iconName)}
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-white">
                            {principle.title}
                          </h4>
                          <p className="text-xs text-indigo-300/90 font-mono">
                            {principle.tagline}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`text-xs font-mono transition-transform duration-200 ${
                          isSelected ? "text-indigo-400 rotate-90" : "text-slate-500"
                        }`}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>

                    <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {principle.description}
                    </p>

                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-indigo-500/20 space-y-2"
                      >
                        {principle.points.map((pt, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
