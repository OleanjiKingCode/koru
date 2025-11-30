"use client";

import Link from "next/link";
import { useState } from "react";

export default function KoruAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {open && (
        <div className="w-72 rounded-2xl border border-primary/20 bg-white p-4 text-sm text-[#0f172a] shadow-card transition-all duration-300 dark:border-white/10 dark:bg-[#0f172a] dark:text-white">
          <p className="text-xs font-semibold text-primary">Kōru Assistant</p>
          <p className="mt-1 text-sm">
            Tell me what you need and I&apos;ll suggest the right Korun.
          </p>
          <Link
            href="/help-finder"
            className="mt-3 inline-flex rounded-full bg-primary px-3 py-2 text-xs font-semibold text-white shadow-card hover:-translate-y-[1px]"
            onClick={() => setOpen(false)}
          >
            Open HelpFinder
          </Link>
        </div>
      )}

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="group relative flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-[#3b2c91] px-4 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-card"
      >
        <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-60 transition-all duration-700 group-hover:translate-x-[120%]" />
        <span className="relative z-10">{open ? "Close" : "Koru Assistant"}</span>
      </button>
    </div>
  );
}
