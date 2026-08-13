"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Printer,
  Mail,
  Phone,
  ExternalLink
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { personalInfo, educationList, certificationsList } from "@/data/portfolioData";
import { projectsData } from "@/data/projectsData";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#060813] text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Top Action Bar (hidden when printing) */}
      <div className="max-w-4xl mx-auto mb-8 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-indigo-300 hover:text-white px-3.5 py-2 rounded-xl bg-slate-900/80 border border-indigo-500/20 hover:border-indigo-500/40 transition-all"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm transition-all"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save as PDF</span>
          </button>
        </div>
      </div>

      {/* Resume Document Sheet */}
      <main className="max-w-4xl mx-auto bg-slate-950/90 border border-indigo-500/20 rounded-2xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(6,8,19,0.9)] print:bg-white print:text-black print:p-0 print:border-none print:shadow-none space-y-8 font-sans">
        {/* Header */}
        <header className="border-b border-slate-800 pb-6 print:border-black/20 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white print:text-black">
            {personalInfo.name}
          </h1>
          <p className="text-sm font-mono text-indigo-400 print:text-gray-700 mt-1">
            {personalInfo.headline}
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-mono text-slate-300 print:text-gray-800">
            {personalInfo.phone && (
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-1.5 hover:text-white print:text-gray-800"
              >
                <Phone className="w-3.5 h-3.5 text-indigo-400 print:hidden" />
                <span>{personalInfo.phone}</span>
              </a>
            )}

            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-1.5 hover:text-white print:text-gray-800"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400 print:hidden" />
              <span>{personalInfo.email}</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white print:text-gray-800"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-indigo-400 print:hidden" />
              <span>linkedin.com/in/shaik-khadar-ahamad</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white print:text-gray-800"
            >
              <GithubIcon className="w-3.5 h-3.5 text-indigo-400 print:hidden" />
              <span>github.com/Khadar6786</span>
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="space-y-2">
          <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-400 print:text-gray-900 font-bold border-b border-indigo-500/20 print:border-black/20 pb-1">
            Summary
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800 leading-relaxed font-normal">
            Integrated M.Tech Computer Science student focused on backend and full-stack development with hands-on experience building REST APIs, database-driven applications, cloud-integrated systems, and production web applications. Experienced with Java, Spring Boot, MySQL, AWS S3, TypeScript, Next.js, React, and secure backend development. Strong foundation in Data Structures & Algorithms, OOP, Operating Systems, and Computer Networks.
          </p>
        </section>

        {/* Education */}
        <section className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-400 print:text-gray-900 font-bold border-b border-indigo-500/20 print:border-black/20 pb-1">
            Education
          </h2>
          <div className="space-y-4">
            {educationList.map((edu, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                <div>
                  <h3 className="text-sm font-bold text-white print:text-black">
                    {edu.institution}
                    <span className="font-normal text-xs text-slate-400 print:text-gray-600 sm:ml-2">
                      ({edu.location})
                    </span>
                  </h3>
                  <p className="text-xs text-slate-300 print:text-gray-800">
                    {edu.degree}
                  </p>
                </div>
                <div className="sm:text-right shrink-0">
                  <span className="text-xs font-mono text-indigo-300 print:text-gray-700 block">
                    {edu.period}
                  </span>
                  <span className="text-xs font-mono font-semibold text-emerald-400 print:text-gray-900">
                    {edu.scoreType === "CGPA" ? `CGPA: ${edu.score}` : `Percentage: ${edu.score}`}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-400 print:text-gray-900 font-bold border-b border-indigo-500/20 print:border-black/20 pb-1">
            Technical Skills
          </h2>
          <div className="text-xs text-slate-300 print:text-gray-800 space-y-1.5">
            <p>
              <strong className="text-white print:text-black">Languages:</strong> Java, Python, TypeScript
            </p>
            <p>
              <strong className="text-white print:text-black">Core Concepts:</strong> Data Structures & Algorithms, Operating Systems, Computer Networks, OOP
            </p>
            <p>
              <strong className="text-white print:text-black">Backend Development:</strong> Spring Boot, REST APIs, Spring Data JPA, Server-Side APIs
            </p>
            <p>
              <strong className="text-white print:text-black">Database:</strong> MySQL (CRUD Operations, Entity Mapping)
            </p>
            <p>
              <strong className="text-white print:text-black">Cloud:</strong> AWS (S3, IAM), Vercel
            </p>
            <p>
              <strong className="text-white print:text-black">Security Concepts:</strong> Authentication, Authorization, RBAC, BCrypt, Input Validation
            </p>
            <p>
              <strong className="text-white print:text-black">Tools:</strong> Git, GitHub, Maven, Linux Basics, Resend
            </p>
          </div>
        </section>

        {/* Projects */}
        <section className="space-y-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-400 print:text-gray-900 font-bold border-b border-indigo-500/20 print:border-black/20 pb-1">
            Projects
          </h2>
          <div className="space-y-5">
            {projectsData.map(proj => (
              <div key={proj.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-sm font-bold text-white print:text-black flex items-center gap-2">
                    <span>{proj.title}</span>
                    {proj.label && (
                      <span className="text-[11px] font-normal text-slate-400 print:text-gray-600">
                        — {proj.label}
                      </span>
                    )}
                  </h3>

                  {proj.links.github && (
                    <a
                      href={proj.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono text-cyan-400 print:text-blue-700 hover:underline flex items-center gap-1 shrink-0"
                    >
                      <span>Repository</span>
                      <ExternalLink className="w-2.5 h-2.5 print:hidden" />
                    </a>
                  )}
                </div>

                <p className="text-xs font-mono text-indigo-300 print:text-gray-700">
                  Tech Stack: {proj.technologies.join(", ")}
                </p>

                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-300 print:text-gray-800">
                  {proj.keyImplementation.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-widest text-indigo-400 print:text-gray-900 font-bold border-b border-indigo-500/20 print:border-black/20 pb-1">
            Certifications
          </h2>
          <div className="space-y-2 text-xs text-slate-300 print:text-gray-800">
            {certificationsList.map((cert, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <span className="font-semibold text-white print:text-black">• {cert.title}</span>
                  <span className="text-slate-400 print:text-gray-600 sm:ml-2">— {cert.issuer}</span>
                </div>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono text-indigo-400 print:text-blue-700 hover:underline flex items-center gap-1 shrink-0"
                  >
                    <span>View Credential</span>
                    <ExternalLink className="w-2.5 h-2.5 print:hidden" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
