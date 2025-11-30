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
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-primary">HelpFinder</p>
          <h1 className="text-3xl font-semibold text-[#0f172a] dark:text-white">
            Describe your problem
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            We&apos;ll suggest the best Koruns to reach out to.
          </p>
        </div>
        <Link
          href="/discover"
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-card hover:-translate-y-[1px]"
        >
          View all
        </Link>
      </div>

      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#0f172a]">
        <label className="text-sm font-semibold text-[#0f172a] dark:text-white">
          What do you need help with?
        </label>
        <textarea
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          rows={3}
          placeholder="e.g., we need to improve onboarding activation for our B2B SaaS."
          className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-[#0f172a] shadow-inner focus:border-primary focus:ring-primary dark:border-white/10 dark:bg-[#111827] dark:text-white"
        />
        <p className="mt-2 text-xs text-gray-500 dark:text-gray-300">
          Smart suggestions use mock logic only. Message to start a real conversation.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {matches.map((m) => (
          <div
            key={m.id}
            className="card rounded-2xl border border-primary/20 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-card dark:border-white/10 dark:bg-[#0f172a]"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-[#0f172a] dark:text-white">
                  {m.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{m.title}</p>
                <p className="text-sm text-gray-500 dark:text-gray-200">
                  Focus: {m.focus}
                </p>
              </div>
              <span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-[#3b2c91]">
                {Math.round(m.match * 100)}% match
              </span>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Link
                href="/discover"
                className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white shadow-card hover:-translate-y-[1px]"
              >
                View profile
              </Link>
              <button className="group relative overflow-hidden rounded-full border border-accent px-4 py-2 text-xs font-semibold text-[#3b2c91]">
                <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-80 transition-all duration-700 group-hover:translate-x-[120%]" />
                Message
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
