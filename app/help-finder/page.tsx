"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const helpers = [
  {
    id: "growth",
    name: "Maya Chen",
    title: "Head of Growth @ Studio",
    focus: "Retention, activation",
    match: 0.92
  },
  {
    id: "fundraising",
    name: "Darius Lee",
    title: "Investor @ Vertex Capital",
    focus: "Fundraising, AI infra",
    match: 0.86
  },
  {
    id: "product",
    name: "Alexa Quinn",
    title: "Founder @ Orbit Labs",
    focus: "Product strategy, GTM",
    match: 0.8
  }
];

export default function HelpFinderPage() {
  const [problem, setProblem] = useState("");

  const matches = useMemo(() => {
    if (!problem) return helpers;
    return helpers
      .map((h) => ({
        ...h,
        match:
          h.match +
          (problem.toLowerCase().includes(h.focus.split(",")[0].split(" ")[0].toLowerCase())
            ? 0.05
            : 0)
      }))
      .sort((a, b) => b.match - a.match);
  }, [problem]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold text-[#5D3FD3] sm:text-sm">HelpFinder</p>
          <h1 className="text-2xl font-semibold text-[#0f172a] dark:text-white sm:text-3xl">
            Describe your problem
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            We&apos;ll suggest the best Koruns to reach out to.
          </p>
        </div>
        <Link
          href="/discover"
          className="w-full rounded-full bg-[#5D3FD3] px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#4c33b3] sm:w-auto"
        >
          View all
        </Link>
      </div>

      <div className="rounded-xl border border-gray-100 bg-white p-4 dark:border-white/10 dark:bg-[#111827] sm:rounded-2xl sm:p-6">
        <label className="text-sm font-semibold text-[#0f172a] dark:text-white">
          What do you need help with?
        </label>
        <textarea
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          rows={3}
          placeholder="e.g., we need to improve onboarding activation for our B2B SaaS."
          className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#0f172a] focus:border-[#5D3FD3] focus:outline-none focus:ring-1 focus:ring-[#5D3FD3] dark:border-white/10 dark:bg-[#0f172a] dark:text-white"
        />
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
          Smart suggestions use mock logic only. Message to start a real conversation.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {matches.map((m) => (
          <div
            key={m.id}
            className="rounded-xl border border-gray-100 bg-white p-4 dark:border-white/10 dark:bg-[#111827] sm:p-5"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-semibold text-[#0f172a] dark:text-white sm:text-lg">
                  {m.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{m.title}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  Focus: {m.focus}
                </p>
              </div>
              <span className="self-start rounded-full bg-[#5D3FD3]/10 px-3 py-1 text-xs font-semibold text-[#5D3FD3]">
                {Math.round(m.match * 100)}% match
              </span>
            </div>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
              <Link
                href="/discover"
                className="rounded-full bg-[#5D3FD3] px-4 py-2 text-center text-xs font-semibold text-white transition-colors hover:bg-[#4c33b3]"
              >
                View profile
              </Link>
              <button className="rounded-full border border-[#5D3FD3]/30 px-4 py-2 text-xs font-semibold text-[#5D3FD3] transition-colors hover:bg-[#5D3FD3]/5">
                Message
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
