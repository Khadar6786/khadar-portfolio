"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Terminal, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { personalInfo } from "@/data/portfolioData";
import { HeroMeshVisual } from "@/components/ui/AbstractVisuals";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 lg:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] hero-glow-1 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[350px] hero-glow-2 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Core Narrative & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 mb-6 shadow-[0_0_15px_rgba(99,102,241,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4" />
            <span>{personalInfo.status}</span>
          </motion.div>

          {/* Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-2"
          >
            <div className="flex items-center gap-2 text-slate-400 font-mono text-sm tracking-wide">
              <span>Hi, I&apos;m</span>
              <span className="text-indigo-400 font-semibold">{personalInfo.name}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] sm:leading-[1.12]">
              <span className="block text-gradient-subtle">Backend &</span>
              <span className="block text-gradient-cyan">Full-Stack Developer</span>
            </h1>
          </motion.div>

          {/* Supporting Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* Secondary Tech Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/60 border border-indigo-500/15 text-xs sm:text-sm font-mono text-indigo-300/90"
          >
            <Terminal className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>{personalInfo.secondaryTechLine}</span>
          </motion.div>

          {/* CTAs & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-[0_0_25px_rgba(99,102,241,0.35)] hover:shadow-[0_0_35px_rgba(99,102,241,0.5)] hover:from-indigo-500 hover:to-indigo-600 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/resume"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-cyan-950/70 text-cyan-200 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-900/60 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Resume</span>
            </Link>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/90 text-slate-200 border border-indigo-500/25 hover:border-indigo-500/60 hover:bg-slate-800/90 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4 text-indigo-400" />
              <span>Contact Me</span>
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-2 sm:ml-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3.5 rounded-xl bg-slate-900/80 text-slate-400 hover:text-white border border-indigo-500/15 hover:border-indigo-500/40 hover:bg-slate-800/90 transition-all duration-200"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3.5 rounded-xl bg-slate-900/80 text-slate-400 hover:text-white border border-indigo-500/15 hover:border-indigo-500/40 hover:bg-slate-800/90 transition-all duration-200"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Abstract Interactive Engineering Mesh & Visual System */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 w-full flex justify-center"
        >
          <HeroMeshVisual />
        </motion.div>
      </div>
    </section>
  );
}
