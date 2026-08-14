"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Menu, X, Terminal, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { personalInfo } from "@/data/portfolioData";

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Focus", href: "/#focus" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Education", href: "/#education" },
  { name: "Contact", href: "/#contact" }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = ["about", "focus", "skills", "projects", "education", "contact"];
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#060813]/85 backdrop-blur-xl border-b border-indigo-500/15 py-3 shadow-[0_10px_30px_-10px_rgba(6,8,19,0.9)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-white font-bold tracking-tight text-base sm:text-lg focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-cyan-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(99,102,241,0.4)] group-hover:scale-105 transition-transform">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="leading-tight group-hover:text-indigo-200 transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[10px] font-mono font-normal text-slate-400">
              Backend & Full-Stack
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-950/60 p-1.5 rounded-full border border-indigo-500/15 backdrop-blur-md">
          {navLinks.map(link => {
            const sectionName = link.href.replace("/#", "");
            const isActive = activeSection === sectionName;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-600/90 text-white shadow-[0_0_12px_rgba(99,102,241,0.4)] font-semibold"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                {link.name}
              </a>
            );
          })}

          <Link
            href="/resume"
            className="px-3 py-1.5 rounded-full text-xs font-mono text-cyan-300 hover:text-white hover:bg-cyan-950/50 transition-all flex items-center gap-1"
          >
            <FileText className="w-3 h-3" />
            <span>Resume</span>
          </Link>
        </nav>

        {/* Desktop Socials & Action */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900/80 border border-transparent hover:border-indigo-500/25 transition-all duration-200"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900/80 border border-transparent hover:border-indigo-500/25 transition-all duration-200"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <Link
            href="/resume"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-900/90 text-slate-200 border border-indigo-500/30 hover:border-indigo-500/60 hover:text-white transition-all duration-200"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>Resume</span>
          </Link>

          <a
            href={`mailto:${personalInfo.email}`}
            className="ml-1 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-indigo-600 to-indigo-700 text-white hover:from-indigo-500 hover:to-indigo-600 shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all duration-200 hover:-translate-y-0.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/resume"
            className="p-2 rounded-lg bg-cyan-950/60 text-cyan-300 border border-cyan-500/30 text-xs font-mono flex items-center gap-1"
          >
            <FileText className="w-3.5 h-3.5" />
          </Link>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Send Email"
            className="p-2 rounded-lg bg-indigo-950/70 text-indigo-300 border border-indigo-500/30"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg bg-slate-900/80 border border-indigo-500/20 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-[#060813]/95 border-b border-indigo-500/20 backdrop-blur-2xl px-6 pt-4 pb-6 overflow-hidden"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map(link => {
                const sectionName = link.href.replace("/#", "");
                const isActive = activeSection === sectionName;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-indigo-600/30 text-indigo-300 border border-indigo-500/40"
                        : "text-slate-300 hover:text-white hover:bg-slate-900/70"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}

              <Link
                href="/resume"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between"
              >
                <span>View Full Resume</span>
                <FileText className="w-4 h-4" />
              </Link>

              <div className="pt-4 mt-2 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900/90 text-slate-300 border border-slate-800 hover:text-white"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900/90 text-slate-300 border border-slate-800 hover:text-white"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>

                <a
                  href={`mailto:${personalInfo.email}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-indigo-600 text-white"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Me</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
