"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyEmailButtonProps {
  email: string;
  variant?: "button" | "badge" | "minimal";
  className?: string;
}

export function CopyEmailButton({
  email,
  variant = "button",
  className
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      if (navigator?.clipboard) {
        await navigator.clipboard.writeText(email);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  if (variant === "badge") {
    return (
      <button
        onClick={handleCopy}
        type="button"
        title="Click to copy email address"
        className={cn(
          "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-200",
          copied
            ? "bg-emerald-950/80 text-emerald-300 border border-emerald-500/40"
            : "bg-slate-900/80 text-slate-300 border border-indigo-500/20 hover:border-indigo-500/50 hover:text-white",
          className
        )}
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            <span>Copied to clipboard!</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5 opacity-60" />
            <span>{email}</span>
          </>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={handleCopy}
      type="button"
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200",
        copied
          ? "bg-emerald-950/70 text-emerald-300 border border-emerald-500/40"
          : "bg-slate-900/80 text-slate-200 border border-indigo-500/25 hover:border-indigo-500/60 hover:bg-slate-800/90 hover:text-white",
        className
      )}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-emerald-400" />
          <span>Email Copied!</span>
        </>
      ) : (
        <>
          <Copy className="w-4 h-4 text-indigo-400" />
          <span>Copy Email Address</span>
        </>
      )}
    </button>
  );
}
