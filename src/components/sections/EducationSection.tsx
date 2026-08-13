"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  Cloud,
  Database,
  School,
  ExternalLink
} from "lucide-react";
import { educationList, certificationsList } from "@/data/portfolioData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

export function EducationSection() {
  const primaryEducation = educationList.find(e => e.isPrimary);
  const secondaryEducations = educationList.filter(e => !e.isPrimary);

  return (
    <section id="education" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          badge="Academic Background & Credentials"
          title="Education & Certifications"
          subtitle="Formal computer science education and cloud credentials from AWS Educate."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Academic Degrees */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Academic Milestones
            </h3>

            {/* Dominant VIT-AP University Card */}
            {primaryEducation && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <GlassCard className="p-6 sm:p-8 border-indigo-500/30 shadow-[0_15px_40px_-15px_rgba(99,102,241,0.25)] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono uppercase text-indigo-400 tracking-wider">
                          Primary Degree
                        </span>
                        <h4 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                          {primaryEducation.institution}
                        </h4>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-mono font-bold bg-emerald-950/70 text-emerald-300 border border-emerald-500/40 shadow-sm">
                        CGPA: {primaryEducation.score}
                      </span>
                    </div>
                  </div>

                  <p className="text-base font-semibold text-slate-200 mb-3">
                    {primaryEducation.degree}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono mb-6">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      {primaryEducation.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      {primaryEducation.location}
                    </span>
                  </div>

                  {primaryEducation.highlights && (
                    <div className="space-y-2 pt-4 border-t border-indigo-500/15">
                      {primaryEducation.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </GlassCard>
              </motion.div>
            )}

            {/* School Education Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {secondaryEducations.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <GlassCard className="p-5 h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400">
                          <School className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-200 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800">
                          {item.score}
                        </span>
                      </div>

                      <h5 className="text-sm font-bold text-white mb-1">
                        {item.institution}
                      </h5>
                      <p className="text-xs text-slate-400 mb-2">{item.degree}</p>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono pt-3 border-t border-slate-800">
                      <span>{item.location}</span>
                      <span>{item.period}</span>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: AWS Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Certifications & Cloud Badges
            </h3>

            <div className="space-y-4">
              {certificationsList.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <GlassCard className="p-5 group hover:border-indigo-500/35">
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-xl bg-slate-950 text-indigo-400 border border-indigo-500/20 group-hover:scale-105 transition-transform">
                        {cert.badgeType === "cloud" ? (
                          <Cloud className="w-5 h-5 text-sky-400" />
                        ) : (
                          <Database className="w-5 h-5 text-indigo-400" />
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-white group-hover:text-indigo-200 transition-colors">
                            {cert.title}
                          </h4>
                          {cert.credentialUrl && (
                            <a
                              href={cert.credentialUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Verify ${cert.title} credential`}
                              title="View Credential / Certificate"
                              className="text-slate-400 hover:text-cyan-300 transition-colors p-1"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                        <p className="text-xs text-cyan-400 font-mono mt-0.5">
                          {cert.issuer}
                        </p>
                        {cert.description && (
                          <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                            {cert.description}
                          </p>
                        )}

                        {cert.credentialUrl && (
                          <div className="mt-3 pt-2.5 border-t border-slate-800/80">
                            <a
                              href={cert.credentialUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-300 hover:text-white transition-colors"
                            >
                              <span>View Verified Credential</span>
                              <ExternalLink className="w-3 h-3 text-cyan-400" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}

              {/* Verified Credential Summary Card */}
              <div className="p-5 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 text-xs text-slate-300 space-y-2">
                <div className="flex items-center gap-2 text-indigo-300 font-semibold font-mono">
                  <Award className="w-4 h-4 text-indigo-400" /> Verified Cloud Credentials
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Credentials verified on Credly and AWS Cloud Practitioner Essentials covering cloud infrastructure, databases, IAM security policies, and AWS S3 storage concepts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
