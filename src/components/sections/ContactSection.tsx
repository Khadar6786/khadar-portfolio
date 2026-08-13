"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Send, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { personalInfo } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <SectionHeading
          badge="Get in Touch"
          title="Let's build something useful."
          subtitle="Open to software engineering, backend development, and full-stack opportunities."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard className="p-8 sm:p-12 border-indigo-500/30 shadow-[0_20px_50px_rgba(6,8,19,0.9)] relative overflow-hidden">
            {/* Subtle background radiant glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center shadow-inner">
                <Mail className="w-7 h-7" />
              </div>

              <div className="space-y-2">
                <p className="text-xs sm:text-sm font-mono text-indigo-300 uppercase tracking-wider">
                  Direct Inquiries & Collaboration
                </p>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
                  {personalInfo.email}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-300 max-w-lg leading-relaxed font-normal">
                Whether you have a software engineering role, backend project, or want to discuss system architectures, feel free to reach out directly.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(99,102,241,0.6)] hover:from-indigo-500 hover:to-indigo-600 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Email Me</span>
                </a>

                <CopyEmailButton email={personalInfo.email} variant="button" />
              </div>

              {/* Social Channels */}
              <div className="pt-8 mt-6 border-t border-indigo-500/15 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-indigo-500/30 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-indigo-500/30 hover:text-white transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
