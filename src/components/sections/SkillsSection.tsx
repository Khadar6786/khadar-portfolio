"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Server,
  Database,
  Cloud,
  Layout,
  Shield,
  Wrench,
  Cpu,
  Terminal
} from "lucide-react";
import { skillCategories } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

const categoryIcons: Record<string, React.ReactNode> = {
  backend: <Server className="w-4 h-4 text-indigo-400" />,
  languages: <Code className="w-4 h-4 text-cyan-400" />,
  "core-concepts": <Cpu className="w-4 h-4 text-violet-400" />,
  database: <Database className="w-4 h-4 text-sky-400" />,
  cloud: <Cloud className="w-4 h-4 text-blue-400" />,
  frontend: <Layout className="w-4 h-4 text-teal-400" />,
  security: <Shield className="w-4 h-4 text-emerald-400" />,
  tools: <Wrench className="w-4 h-4 text-amber-400" />
};

export function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Skills" },
    { id: "backend", label: "Backend" },
    { id: "languages", label: "Languages" },
    { id: "core-concepts", label: "Core CS" },
    { id: "cloud", label: "Cloud & DB" },
    { id: "frontend", label: "Frontend" },
    { id: "security", label: "Security & RBAC" }
  ];

  const filteredCategories = skillCategories.filter(cat => {
    if (activeFilter === "all") return true;
    if (activeFilter === "cloud") return cat.id === "cloud" || cat.id === "database";
    return cat.id === activeFilter;
  });

  return (
    <section id="skills" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          badge="Technical Competencies"
          title="Technical Skills"
          subtitle="Core engineering proficiencies grounded in computer science fundamentals, enterprise Java ecosystems, and modern web architectures."
        />

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {filterTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 ${
                activeFilter === tab.id
                  ? "bg-indigo-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.35)] font-semibold"
                  : "bg-slate-900/70 text-slate-300 border border-indigo-500/15 hover:border-indigo-500/40 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard className="h-full p-6 flex flex-col justify-between group hover:border-indigo-500/35">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-slate-950/80 border border-indigo-500/20">
                        {categoryIcons[category.id] || <Terminal className="w-4 h-4 text-indigo-400" />}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white group-hover:text-indigo-200 transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-[11px] text-slate-400 font-mono">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 space-y-2.5">
                      {category.skills.map(skill => (
                        <div
                          key={skill.name}
                          className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-indigo-500/30 transition-all flex flex-col gap-0.5"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-slate-200">
                              {skill.name}
                            </span>
                            {skill.isPrimary && (
                              <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950/60 px-1.5 py-0.5 rounded border border-indigo-500/20">
                                Core
                              </span>
                            )}
                          </div>
                          {skill.description && (
                            <span className="text-[11px] text-slate-400 font-normal">
                              {skill.description}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
