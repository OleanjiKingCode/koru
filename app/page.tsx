"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const stats = [
  { value: "2,400+", label: "Messages sent" },
  { value: "98%", label: "Response rate" },
  { value: "< 8h", label: "Avg reply time" },
  { value: "$0", label: "If no reply" },
];

const steps = [
  {
    num: "01",
    title: "Find your Korun",
    desc: "Browse curated operators, investors, and creators who've committed to replying.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Send with context",
    desc: "Craft your message with real intent. No spam, just signal.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
        />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Get your reply",
    desc: "Guaranteed response within their stated timeframe, or full refund.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const featuredKoruns = [
  {
    name: "CZ",
    title: "Founder, Binance",
    price: 75,
    time: "12h",
    letter: "C",
  },
  {
    name: "Vitalik B.",
    title: "Co-founder, Ethereum",
    price: 90,
    time: "8h",
    letter: "V",
  },
  {
    name: "Balaji S.",
    title: "Angel, Author",
    price: 85,
    time: "5h",
    letter: "B",
  },
];

const testimonials = [
  {
    quote:
      "Got a warm intro to my lead investor through Kōru. Worth every penny.",
    author: "Sarah K.",
    role: "Founder, Series A",
  },
  {
    quote: "Finally, a way to reach people that respects everyone's time.",
    author: "James M.",
    role: "Product Lead",
  },
  {
    quote:
      "The guaranteed response changed how I network. No more cold email limbo.",
    author: "Amara O.",
    role: "Creator, 500K+",
  },
];

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section - Full width breakout */}
      <section className="relative -mx-6 -mt-6 w-[100vw] left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] overflow-hidden bg-gradient-to-b from-[#f8f9fa] via-[#eef0f5] to-[#f8f9fa] py-20 dark:from-[#0f172a] dark:via-[#0f172a] dark:to-[#0f172a] sm:py-28">
        {/* Grid pattern overlay - Light mode */}
        <div
          className="absolute inset-0 dark:hidden"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Grid pattern overlay - Dark mode */}
        <div
          className="absolute inset-0 hidden dark:block"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Animated gradient background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-[10%] -top-[20%] h-[600px] w-[600px] rounded-full bg-[#5D3FD3]/10 blur-[120px] dark:bg-[#5D3FD3]/30" />
          <div className="absolute -bottom-[20%] -right-[10%] h-[500px] w-[500px] rounded-full bg-[#FFD700]/10 blur-[100px] dark:bg-[#FFD700]/20" />
          <div className="absolute left-[40%] top-[30%] h-[400px] w-[400px] rounded-full bg-[#7C5CE7]/10 blur-[80px] dark:bg-[#7C5CE7]/20" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#0f172a]/10 bg-white/50 px-4 py-2 text-sm text-[#0f172a]/70 backdrop-blur-md dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-white/70">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5D3FD3] opacity-75 dark:bg-[#FFD700]" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#5D3FD3] dark:bg-[#FFD700]" />
            </span>
            Now live with 50+ Koruns
          </div>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#0f172a] dark:text-white sm:text-5xl md:text-6xl">
            Message anyone.
            <br />
            <span className="bg-gradient-to-r from-[#5D3FD3] via-[#7C5CE7] to-[#5D3FD3] bg-clip-text text-transparent dark:from-[#FFD700] dark:via-[#FFAA00] dark:to-[#FF8C00]">
              Get a guaranteed reply.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#0f172a]/60 dark:text-white/50 sm:text-lg">
            Built for founders, creators, and investors. Reach the people who
            move your world—skip the inbox lottery.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/discover"
              className="group inline-flex items-center gap-2 rounded-full bg-[#5D3FD3] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#5D3FD3]/20 transition-all hover:bg-[#6B4DE0] hover:shadow-xl hover:shadow-[#5D3FD3]/30"
            >
              Explore Koruns
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-[#0f172a]/10 bg-white/50 px-7 py-3.5 text-sm font-medium text-[#0f172a]/80 backdrop-blur-sm transition-all hover:border-[#0f172a]/20 hover:bg-white/70 dark:border-white/10 dark:bg-white/[0.03] dark:text-white/80 dark:hover:border-white/20 dark:hover:bg-white/[0.06]"
            >
              How it works
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[#0f172a]/10 bg-white/60 p-5 backdrop-blur-md dark:border-white/[0.08] dark:bg-white/[0.03]"
              >
                <p className="text-2xl font-bold text-[#0f172a] dark:text-white sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-[#0f172a]/50 dark:text-white/40 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="space-y-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#5D3FD3]">
            Simple process
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[#0f172a] dark:text-white sm:text-3xl">
            How Kōru works
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 sm:gap-6">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="group relative rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:border-[#5D3FD3]/20 hover:shadow-lg dark:border-white/10 dark:bg-[#111827] dark:hover:border-[#5D3FD3]/30"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-4xl font-bold text-gray-100 dark:text-white/10">
                  {step.num}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5D3FD3]/10 text-[#5D3FD3] transition-colors group-hover:bg-[#5D3FD3] group-hover:text-white">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#0f172a] dark:text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {step.desc}
              </p>

              {/* Connector line on desktop */}
              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gray-200 dark:bg-white/10 sm:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Featured Koruns */}
      <section className="space-y-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#5D3FD3]">
              Featured
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#0f172a] dark:text-white sm:text-3xl">
              Popular Koruns
            </h2>
          </div>
          <Link
            href="/discover"
            className="hidden items-center gap-1 text-sm font-medium text-[#5D3FD3] transition-colors hover:text-[#4c33b3] sm:flex"
          >
            View all
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {featuredKoruns.map((korun) => (
            <Link
              key={korun.name}
              href="/discover"
              className="group flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4 transition-all hover:border-[#5D3FD3]/20 hover:shadow-md dark:border-white/10 dark:bg-[#111827]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#5D3FD3] to-[#7C5CE7] text-lg font-bold text-white">
                {korun.letter}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-[#0f172a] dark:text-white">
                  {korun.name}
                </p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                  {korun.title}
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-[#0f172a] dark:text-white">
                  ${korun.price}
                </p>
                <p className="text-xs text-gray-400">{korun.time}</p>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/discover"
          className="flex items-center justify-center gap-1 text-sm font-medium text-[#5D3FD3] transition-colors hover:text-[#4c33b3] sm:hidden"
        >
          View all Koruns
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </section>

      {/* Testimonials */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#5D3FD3] to-[#7C5CE7] p-8 sm:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />

        <div className="relative">
          <div className="mb-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`h-2 rounded-full transition-all ${
                  i === activeTestimonial ? "w-8 bg-white" : "w-2 bg-white/30"
                }`}
              />
            ))}
          </div>

          <div className="mx-auto max-w-2xl text-center">
            <svg
              className="mx-auto mb-4 h-8 w-8 text-white/30"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <p className="text-xl font-medium text-white sm:text-2xl">
              &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
            </p>

            <div className="mt-6">
              <p className="font-semibold text-white">
                {testimonials[activeTestimonial].author}
              </p>
              <p className="text-sm text-white/60">
                {testimonials[activeTestimonial].role}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="grid gap-4 sm:grid-cols-3">
        {[
          {
            icon: (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
            ),
            title: "Guaranteed or refunded",
            desc: "No response = automatic refund. Zero risk.",
          },
          {
            icon: (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ),
            title: "Time-bound responses",
            desc: "Koruns commit to reply within their stated window.",
          },
          {
            icon: (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                />
              </svg>
            ),
            title: "Transparent pricing",
            desc: "See costs upfront. No hidden fees or surprises.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-5 dark:border-white/10 dark:bg-[#111827]"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#5D3FD3]/10 text-[#5D3FD3]">
              {item.icon}
            </div>
            <div>
              <h3 className="font-semibold text-[#0f172a] dark:text-white">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Final CTA */}
      <section className="rounded-2xl border border-gray-100 bg-white p-8 text-center dark:border-white/10 dark:bg-[#111827] sm:p-12">
        <h2 className="text-2xl font-bold text-[#0f172a] dark:text-white sm:text-3xl">
          Ready to reach the unreachable?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-gray-500 dark:text-gray-400">
          Stop waiting in inbox limbo. Connect with operators, investors, and
          creators who've committed to reply.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/discover"
            className="inline-flex items-center gap-2 rounded-full bg-[#5D3FD3] px-8 py-3 font-semibold text-white transition-all hover:bg-[#4c33b3] hover:shadow-lg"
          >
            Start exploring
          </Link>
          <p className="text-sm text-gray-400">No account needed to browse</p>
        </div>
      </section>
    </div>
  );
}
