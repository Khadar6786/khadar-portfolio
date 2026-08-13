"use client";

import React, { useState } from "react";
import {
  Server,
  Database,
  Shield,
  Cloud,
  Send,
  Lock,
  FileText,
  Key,
  Layers,
  Terminal,
  Code
} from "lucide-react";

/**
 * Interactive Hero Visual: Abstract Backend & Systems Architecture Matrix
 */
export function HeroMeshVisual() {
  const [activeTab, setActiveTab] = useState<"api" | "architecture" | "telemetry">("api");

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none rounded-2xl bg-slate-950/80 border border-indigo-500/20 backdrop-blur-xl p-5 shadow-[0_20px_50px_rgba(6,8,19,0.8)] overflow-hidden group">
      {/* Background glow & subtle technical grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-cyan-500/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Terminal / Card Header */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-indigo-500/15 mb-4">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-xs font-mono text-slate-400 ml-2">backend-engine // live-runtime</span>
        </div>

        <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-indigo-500/20 text-xs">
          <button
            type="button"
            onClick={() => setActiveTab("api")}
            className={`px-2.5 py-1 rounded transition-all font-mono ${
              activeTab === "api"
                ? "bg-indigo-600/80 text-white shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            API Flow
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("architecture")}
            className={`px-2.5 py-1 rounded transition-all font-mono ${
              activeTab === "architecture"
                ? "bg-indigo-600/80 text-white shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Stack
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("telemetry")}
            className={`px-2.5 py-1 rounded transition-all font-mono ${
              activeTab === "telemetry"
                ? "bg-indigo-600/80 text-white shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Status
          </button>
        </div>
      </div>

      {/* Tab Content: API Lifecycle */}
      {activeTab === "api" && (
        <div className="relative z-10 space-y-3 font-mono text-xs">
          <div className="p-3 rounded-xl bg-slate-900/90 border border-indigo-500/20">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                <Terminal className="w-3.5 h-3.5" /> POST /api/v1/auth/authenticate
              </span>
              <span className="text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded text-[10px] border border-emerald-500/30">
                200 OK
              </span>
            </div>
            <div className="text-slate-400 space-y-1 text-[11px] leading-relaxed">
              <p className="text-slate-500">{"// Request Pipeline Processing"}</p>
              <p className="flex items-center gap-2">
                <span className="text-indigo-400">1. Controller:</span> Request received & DTO validated
              </p>
              <p className="flex items-center gap-2">
                <span className="text-indigo-400">2. Security:</span> BCrypt salt verification matched
              </p>
              <p className="flex items-center gap-2">
                <span className="text-cyan-400">3. RBAC:</span> Roles validated [USER, ADMIN]
              </p>
              <p className="flex items-center gap-2">
                <span className="text-emerald-400">4. JPA/MySQL:</span> User session & profile resolved
              </p>
            </div>
          </div>

          {/* S3 Storage Node Flow */}
          <div className="p-3 rounded-xl bg-slate-900/90 border border-indigo-500/20">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="flex items-center gap-1.5 text-indigo-300 font-semibold">
                <Cloud className="w-3.5 h-3.5 text-sky-400" /> PUT /api/v1/storage/upload
              </span>
              <span className="text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded text-[10px] border border-cyan-500/30">
                AWS S3 • IAM
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
              <div className="p-2 rounded bg-slate-950/60 border border-slate-800">
                <span className="block text-slate-500">Validation</span>
                <span className="text-slate-300 font-medium">MIME & Size</span>
              </div>
              <div className="p-2 rounded bg-slate-950/60 border border-slate-800">
                <span className="block text-slate-500">Object Store</span>
                <span className="text-cyan-300 font-medium">Amazon S3</span>
              </div>
              <div className="p-2 rounded bg-slate-950/60 border border-slate-800">
                <span className="block text-slate-500">Metadata</span>
                <span className="text-indigo-300 font-medium">MySQL DB</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab Content: Core Architecture Stack */}
      {activeTab === "architecture" && (
        <div className="relative z-10 space-y-2.5">
          <div className="p-3 rounded-xl bg-slate-900/90 border border-indigo-500/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-indigo-950/80 text-indigo-400 border border-indigo-500/30">
                <Server className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white">Spring Boot Core Engine</h4>
                <p className="text-[11px] text-slate-400">Java • RESTful Services • Spring Data JPA</p>
              </div>
            </div>
            <span className="text-[11px] font-mono text-indigo-300 bg-indigo-950/50 px-2 py-1 rounded">
              Backend
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/90 border border-indigo-500/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-950/80 text-cyan-400 border border-cyan-500/30">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white">Modern Full-Stack Client</h4>
                <p className="text-[11px] text-slate-400">Next.js • TypeScript • React • Tailwind CSS</p>
              </div>
            </div>
            <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950/50 px-2 py-1 rounded">
              Frontend
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/90 border border-indigo-500/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-violet-950/80 text-violet-400 border border-violet-500/30">
                <Database className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white">Data & Cloud Infrastructure</h4>
                <p className="text-[11px] text-slate-400">MySQL • AWS S3 • AWS IAM • Vercel</p>
              </div>
            </div>
            <span className="text-[11px] font-mono text-violet-300 bg-violet-950/50 px-2 py-1 rounded">
              Infra
            </span>
          </div>
        </div>
      )}

      {/* Tab Content: System Telemetry */}
      {activeTab === "telemetry" && (
        <div className="relative z-10 space-y-3 font-mono text-xs">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-slate-900/90 border border-indigo-500/20">
              <span className="text-[11px] text-slate-400 block mb-1">Architecture Pattern</span>
              <span className="text-white font-semibold flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-indigo-400" /> Controller-Service-Repo
              </span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/90 border border-indigo-500/20">
              <span className="text-[11px] text-slate-400 block mb-1">Security Standard</span>
              <span className="text-white font-semibold flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-400" /> BCrypt & RBAC
              </span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/90 border border-indigo-500/20">
            <div className="flex items-center justify-between mb-2">
              <span className="text-slate-400 text-[11px]">Academic Foundation</span>
              <span className="text-indigo-300 text-[11px] font-bold">VIT-AP University</span>
            </div>
            <p className="text-[11px] text-slate-300">
              Integrated M.Tech in CSE (2022–2027) • CGPA: 8.67/10
            </p>
            <p className="text-[10px] text-slate-400 mt-1">
              DSA • OOP • Operating Systems • Computer Networks
            </p>
          </div>
        </div>
      )}

      {/* Interactive Footer Indicator */}
      <div className="relative z-10 mt-4 pt-3 border-t border-indigo-500/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Clean Code & Scalable Backend
        </span>
        <span className="text-indigo-400">Java • Spring • Next.js</span>
      </div>
    </div>
  );
}

/**
 * Visual Diagram for Project 01: DKB POLYMERS B2B Materials Sourcing & Enquiry Pipeline
 */
export function B2BSourcingFlowVisual() {
  return (
    <div className="w-full rounded-xl bg-slate-950/90 border border-indigo-500/20 p-4 font-mono text-xs space-y-4">
      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
        <span className="text-slate-400 flex items-center gap-2">
          <FileText className="w-3.5 h-3.5 text-cyan-400" /> Sourcing & Enquiry Flow
        </span>
        <span className="text-[10px] text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20">
          Next.js + Resend + Vercel
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-2.5 text-center">
        <div className="p-3 rounded-lg bg-slate-900/90 border border-indigo-500/20 flex flex-col items-center justify-center">
          <Code className="w-4 h-4 text-indigo-400 mb-1" />
          <span className="text-[11px] font-semibold text-white">Client Form</span>
          <span className="text-[10px] text-slate-400 mt-0.5">React Component</span>
        </div>

        <div className="p-3 rounded-lg bg-slate-900/90 border border-indigo-500/20 flex flex-col items-center justify-center">
          <Shield className="w-4 h-4 text-emerald-400 mb-1" />
          <span className="text-[11px] font-semibold text-white">Validation</span>
          <span className="text-[10px] text-slate-400 mt-0.5">HTML Escaping & Rules</span>
        </div>

        <div className="p-3 rounded-lg bg-slate-900/90 border border-indigo-500/20 flex flex-col items-center justify-center">
          <Server className="w-4 h-4 text-cyan-400 mb-1" />
          <span className="text-[11px] font-semibold text-white">Server API</span>
          <span className="text-[10px] text-slate-400 mt-0.5">Next.js Route Handler</span>
        </div>

        <div className="p-3 rounded-lg bg-slate-900/90 border border-indigo-500/20 flex flex-col items-center justify-center">
          <Send className="w-4 h-4 text-violet-400 mb-1" />
          <span className="text-[11px] font-semibold text-white">Resend Dispatch</span>
          <span className="text-[10px] text-slate-400 mt-0.5">Commercial Enquiry</span>
        </div>
      </div>

      <div className="p-2.5 rounded bg-slate-900/50 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
        <span>Payload Sanitized & Securely Transmitted</span>
        <span className="text-emerald-400 font-medium">Production Deployed</span>
      </div>
    </div>
  );
}

/**
 * Visual Diagram for Project 02: Secure Auth & RBAC Pipeline
 */
export function AuthRbacFlowVisual() {
  return (
    <div className="w-full rounded-xl bg-slate-950/90 border border-indigo-500/20 p-4 font-mono text-xs space-y-4">
      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
        <span className="text-slate-400 flex items-center gap-2">
          <Shield className="w-3.5 h-3.5 text-indigo-400" /> Authentication & RBAC Architecture
        </span>
        <span className="text-[10px] text-indigo-400 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-500/20">
          Java + Spring Boot + BCrypt
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-2.5 text-center">
        <div className="p-3 rounded-lg bg-slate-900/90 border border-indigo-500/20 flex flex-col items-center justify-center">
          <Key className="w-4 h-4 text-amber-400 mb-1" />
          <span className="text-[11px] font-semibold text-white">REST Controller</span>
          <span className="text-[10px] text-slate-400 mt-0.5">Payload DTO & Validation</span>
        </div>

        <div className="p-3 rounded-lg bg-slate-900/90 border border-indigo-500/20 flex flex-col items-center justify-center">
          <Lock className="w-4 h-4 text-emerald-400 mb-1" />
          <span className="text-[11px] font-semibold text-white">BCrypt Hashing</span>
          <span className="text-[10px] text-slate-400 mt-0.5">Salted Cryptographic Hash</span>
        </div>

        <div className="p-3 rounded-lg bg-slate-900/90 border border-indigo-500/20 flex flex-col items-center justify-center">
          <Shield className="w-4 h-4 text-indigo-400 mb-1" />
          <span className="text-[11px] font-semibold text-white">RBAC Service</span>
          <span className="text-[10px] text-slate-400 mt-0.5">USER / ADMIN Roles</span>
        </div>

        <div className="p-3 rounded-lg bg-slate-900/90 border border-indigo-500/20 flex flex-col items-center justify-center">
          <Database className="w-4 h-4 text-cyan-400 mb-1" />
          <span className="text-[11px] font-semibold text-white">JPA / MySQL</span>
          <span className="text-[10px] text-slate-400 mt-0.5">Persistent Storage</span>
        </div>
      </div>

      <div className="p-2.5 rounded bg-slate-900/50 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
        <span>Multi-Tier Controller-Service-Repository Pattern</span>
        <span className="text-indigo-300 font-medium">Zero Plaintext Passwords</span>
      </div>
    </div>
  );
}

/**
 * Visual Diagram for Project 03: AWS S3 Cloud File Storage Pipeline
 */
export function CloudStorageFlowVisual() {
  return (
    <div className="w-full rounded-xl bg-slate-950/90 border border-indigo-500/20 p-4 font-mono text-xs space-y-4">
      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
        <span className="text-slate-400 flex items-center gap-2">
          <Cloud className="w-3.5 h-3.5 text-sky-400" /> Cloud Storage & Metadata Pipeline
        </span>
        <span className="text-[10px] text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-500/20">
          Spring Boot + AWS S3 + IAM
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-2.5 text-center">
        <div className="p-3 rounded-lg bg-slate-900/90 border border-indigo-500/20 flex flex-col items-center justify-center">
          <FileText className="w-4 h-4 text-cyan-400 mb-1" />
          <span className="text-[11px] font-semibold text-white">Multipart Upload</span>
          <span className="text-[10px] text-slate-400 mt-0.5">MIME & Boundary Check</span>
        </div>

        <div className="p-3 rounded-lg bg-slate-900/90 border border-indigo-500/20 flex flex-col items-center justify-center">
          <Shield className="w-4 h-4 text-emerald-400 mb-1" />
          <span className="text-[11px] font-semibold text-white">AWS IAM Auth</span>
          <span className="text-[10px] text-slate-400 mt-0.5">Least-Privilege Policy</span>
        </div>

        <div className="p-3 rounded-lg bg-slate-900/90 border border-indigo-500/20 flex flex-col items-center justify-center">
          <Cloud className="w-4 h-4 text-sky-400 mb-1" />
          <span className="text-[11px] font-semibold text-white">Amazon S3</span>
          <span className="text-[10px] text-slate-400 mt-0.5">Binary Object Bucket</span>
        </div>

        <div className="p-3 rounded-lg bg-slate-900/90 border border-indigo-500/20 flex flex-col items-center justify-center">
          <Database className="w-4 h-4 text-indigo-400 mb-1" />
          <span className="text-[11px] font-semibold text-white">MySQL Index</span>
          <span className="text-[10px] text-slate-400 mt-0.5">Metadata & File Path</span>
        </div>
      </div>

      <div className="p-2.5 rounded bg-slate-900/50 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
        <span>Decoupled Binary Storage & Relational Metadata</span>
        <span className="text-sky-300 font-medium">Scalable Architecture</span>
      </div>
    </div>
  );
}
