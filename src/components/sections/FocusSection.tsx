"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Layout, Cloud, Cpu } from "lucide-react";
import { focusAreas } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { TechBadge } from "@/components/ui/TechBadge";

export function FocusSection() {
  const getFocusIcon = (name: string) => {
    switch (name) {
      case "Server":
        return <Server className="w-6 h-6 text-indigo-400" />;
      case "Layout":
        return <Layout className="w-6 h-6 text-cyan-400" />;
      case "Cloud":
        return <Cloud className="w-6 h-6 text-sky-400" />;
      default:
        return <Cpu className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section id="focus" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          badge="Engineering Focus"
          title="What I Like Building"
          subtitle="Specialized in designing dependable backends, responsive client interfaces, and cloud-backed architectures."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="h-full p-6 sm:p-8 flex flex-col justify-between group hover:border-indigo-500/35">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
                      {getFocusIcon(area.iconName)}
                    </div>
                    <span className="text-xs font-mono text-slate-500 group-hover:text-indigo-400 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-200 transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-xs text-indigo-400 font-mono mb-4">
                    {area.tagline}
                  </p>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                    {area.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-indigo-500/15">
                  <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-3">
                    Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {area.technologies.map(tech => (
                      <TechBadge key={tech} name={tech} size="sm" />
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
