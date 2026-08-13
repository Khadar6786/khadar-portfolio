"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ExternalLink,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { projectsData } from "@/data/projectsData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { TechBadge } from "@/components/ui/TechBadge";
import {
  B2BSourcingFlowVisual,
  AuthRbacFlowVisual,
  CloudStorageFlowVisual
} from "@/components/ui/AbstractVisuals";

export function ProjectsSection() {
  const getProjectVisual = (id: string) => {
    switch (id) {
      case "dkb-polymers":
        return <B2BSourcingFlowVisual />;
      case "authentication-rbac":
        return <AuthRbacFlowVisual />;
      case "cloud-file-storage":
        return <CloudStorageFlowVisual />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          badge="Featured Engineering Works"
          title="Featured Projects"
          subtitle="Production-ready applications and backend systems highlighting practical engineering, architecture, and security."
        />

        <div className="space-y-16 lg:space-y-24">
          {projectsData.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <GlassCard className="p-6 sm:p-8 lg:p-10 border-indigo-500/20 hover:border-indigo-500/35">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left/Content Column */}
                    <div
                      className={`lg:col-span-6 flex flex-col justify-between ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div>
                        {/* Project Header Meta */}
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-2xl sm:text-3xl font-mono font-bold text-indigo-400">
                            {project.projectNumber}
                          </span>
                          <div className="h-4 w-px bg-slate-700" />
                          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/50 px-2.5 py-1 rounded border border-cyan-500/20">
                            {project.category}
                          </span>
                          {project.label && (
                            <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                              {project.label}
                            </span>
                          )}
                        </div>

                        {/* Title & Tagline */}
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-indigo-300 font-mono mb-4">
                          {project.tagline}
                        </p>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
                          {project.description}
                        </p>

                        {/* Key Implementation Highlights */}
                        <div className="mb-6 space-y-2">
                          <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400">
                            Key Implementation
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {project.keyImplementation.slice(0, 4).map((item, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tech Stack */}
                        <div className="mb-8">
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map(tech => (
                              <TechBadge key={tech} name={tech} size="sm" />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Action Links & Detail View */}
                      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-indigo-500/15">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600/90 text-white hover:bg-indigo-500 transition-colors shadow-sm"
                        >
                          <span>Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>

                        {/* Configurable GitHub Link */}
                        {project.links.github ? (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium bg-slate-900/90 text-slate-200 border border-slate-700 hover:border-indigo-500/40 hover:text-white transition-colors"
                          >
                            <GithubIcon className="w-3.5 h-3.5 text-slate-400" />
                            <span>Source Code</span>
                          </a>
                        ) : null}

                        {/* Configurable Live Website Link */}
                        {project.links.live ? (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium bg-cyan-950/70 text-cyan-200 border border-cyan-500/30 hover:border-cyan-400 hover:text-white transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                            <span>Live Application</span>
                          </a>
                        ) : null}
                      </div>
                    </div>

                    {/* Right/Visual Column: Conceptual Architecture Diagram */}
                    <div
                      className={`lg:col-span-6 w-full ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="rounded-2xl p-1 bg-gradient-to-b from-indigo-500/15 to-transparent">
                        {getProjectVisual(project.id)}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
