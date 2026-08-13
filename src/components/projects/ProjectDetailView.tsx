"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Layers,
  Terminal,
  FileCode2,
  Sparkles
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { ProjectDetail } from "@/data/projectsData";
import { GlassCard } from "@/components/ui/GlassCard";
import { TechBadge } from "@/components/ui/TechBadge";
import {
  B2BSourcingFlowVisual,
  AuthRbacFlowVisual,
  CloudStorageFlowVisual
} from "@/components/ui/AbstractVisuals";

interface ProjectDetailViewProps {
  project: ProjectDetail;
}

export function ProjectDetailView({ project }: ProjectDetailViewProps) {
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
    <div className="min-h-screen bg-[#060813] text-slate-100 pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Top Back Navigation & Breadcrumb */}
        <div className="flex items-center justify-between pb-6 border-b border-indigo-500/15">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-indigo-300 hover:text-white px-3 py-1.5 rounded-lg bg-slate-900/80 border border-indigo-500/20 hover:border-indigo-500/40 transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Projects</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <span>Project</span>
            <span>/</span>
            <span className="text-cyan-400">{project.projectNumber}</span>
          </div>
        </div>

        {/* Project Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30">
              {project.category}
            </span>
            {project.label && (
              <span className="text-xs font-mono text-slate-400 bg-slate-900/90 px-3 py-1 rounded-full border border-slate-800">
                {project.label}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-indigo-300 font-mono">
            {project.tagline}
          </p>

          {/* Links Row */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.links.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900/90 text-white border border-indigo-500/25 hover:border-indigo-500/60 hover:bg-slate-800 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View GitHub Repository</span>
              </a>
            ) : null}

            {project.links.live ? (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-cyan-950/70 text-cyan-200 border border-cyan-500/30 hover:border-cyan-400 hover:text-white transition-all"
              >
                <ExternalLink className="w-4 h-4 text-cyan-400" />
                <span>Visit Live Application</span>
              </a>
            ) : null}
          </div>
        </div>

        {/* Conceptual Architecture Diagram */}
        <div className="space-y-3">
          <h2 className="text-sm font-mono uppercase tracking-wider text-slate-400">
            System & Flow Architecture
          </h2>
          <GlassCard className="p-4 sm:p-6 border-indigo-500/25">
            {getProjectVisual(project.id)}
          </GlassCard>
        </div>

        {/* Problem Statement & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard className="p-6">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-rose-400" /> Problem Context
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.problemStatement}
            </p>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" /> Engineering Solution
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.solutionOverview}
            </p>
          </GlassCard>
        </div>

        {/* Project Overview */}
        <GlassCard className="p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <FileCode2 className="w-5 h-5 text-indigo-400" /> Overview & Engineering Context
          </h2>
          <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            {project.overviewText.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </GlassCard>

        {/* Key Features */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-400" /> Key Features & Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.features.map((feat, idx) => (
              <GlassCard key={idx} className="p-5">
                <h4 className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  {feat.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {feat.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Architecture Breakdown */}
        <GlassCard className="p-6 sm:p-8 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-violet-400" /> Layered Architecture Breakdown
          </h2>
          <div className="divide-y divide-slate-800">
            {project.architecturePoints.map((arch, idx) => (
              <div key={idx} className="py-3.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-6">
                <span className="text-xs font-mono font-semibold text-indigo-300 shrink-0 sm:w-48">
                  {arch.layer}
                </span>
                <span className="text-xs sm:text-sm text-slate-300">
                  {arch.detail}
                </span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Technology Stack Tags */}
        <div className="space-y-3">
          <h2 className="text-sm font-mono uppercase tracking-wider text-slate-400">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(tech => (
              <TechBadge key={tech} name={tech} size="md" />
            ))}
          </div>
        </div>

        {/* Bottom Back CTA */}
        <div className="pt-8 border-t border-indigo-500/15 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/30 transition-colors"
          >
            <span>Contact Shaik Khadar Ahamad</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
