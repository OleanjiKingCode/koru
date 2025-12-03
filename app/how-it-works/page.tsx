"use client";

import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Browse Koruns",
    description: "Explore our curated network of operators, investors, creators, and advisors. Each Korun sets their own price and guaranteed response time.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Craft Your Message",
    description: "Write a thoughtful message with context about who you are and what you need. Quality messages get quality responses.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Choose Your Tier",
    description: "Select Normal, Urgent, or Critical based on how quickly you need a response. Higher tiers mean faster guaranteed replies.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Pay & Send",
    description: "Complete payment to send your message. Your funds are held in escrow until the Korun responds within their committed timeframe.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Get Your Reply",
    description: "Receive a guaranteed response within the stated timeframe. If the Korun doesn't reply in time, you get a full automatic refund.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "What happens if I don't get a response?",
    a: "You get a full automatic refund. No questions asked. This is the core promise of Kōru.",
  },
  {
    q: "How do Koruns set their prices?",
    a: "Each Korun sets their own pricing across three tiers: Normal, Urgent, and Critical. Prices reflect their time value and expertise.",
  },
  {
    q: "Can I message anyone?",
    a: "You can message any Korun on the platform. They've opted in to receive paid messages and committed to responding.",
  },
  {
    q: "How long do responses take?",
    a: "Response times vary by Korun and tier. Each Korun displays their guaranteed response window (e.g., 'Replies within 12h').",
  },
  {
    q: "Is my payment secure?",
    a: "Yes. Payments are held in escrow and only released to the Korun after they respond. If they don't respond, you're refunded.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#5D3FD3] sm:text-sm">
          How It Works
        </p>
        <h1 className="mt-2 text-3xl font-bold text-[#0f172a] dark:text-white sm:text-4xl">
          Guaranteed replies, every time
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-500 dark:text-gray-400 sm:text-base">
          Kōru connects you with busy people who commit to responding. No more cold email limbo—just meaningful conversations with the people who matter.
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-6">
        {steps.map((step, i) => (
          <div
            key={step.num}
            className={`flex flex-col gap-6 rounded-2xl border border-gray-100 bg-white p-6 dark:border-white/10 dark:bg-[#111827] sm:flex-row sm:items-start sm:p-8 ${
              i % 2 === 1 ? "sm:flex-row-reverse" : ""
            }`}
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#5D3FD3]/10 text-[#5D3FD3] sm:h-20 sm:w-20">
              {step.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-gray-100 dark:text-white/10 sm:text-4xl">
                  {step.num}
                </span>
                <h3 className="text-xl font-semibold text-[#0f172a] dark:text-white sm:text-2xl">
                  {step.title}
                </h3>
              </div>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 sm:text-base">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Value Props */}
      <div className="rounded-2xl bg-gradient-to-br from-[#5D3FD3] to-[#7C5CE7] p-8 text-white sm:p-12">
        <h2 className="text-center text-2xl font-bold sm:text-3xl">
          Why Kōru works
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3 sm:gap-8">
          {[
            {
              title: "Skin in the Game",
              desc: "When you pay to message, your intent is clear. No spam, just signal.",
            },
            {
              title: "Aligned Incentives",
              desc: "Koruns earn by responding. Non-response means no payment.",
            },
            {
              title: "Zero Risk",
              desc: "Full refund if no response. You only pay for actual replies.",
            },
          ].map((item) => (
            <div key={item.title} className="text-center">
              <h3 className="text-lg font-semibold sm:text-xl">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70 sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div>
        <h2 className="text-center text-2xl font-bold text-[#0f172a] dark:text-white sm:text-3xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-xl border border-gray-100 bg-white p-5 dark:border-white/10 dark:bg-[#111827] sm:p-6"
            >
              <h3 className="font-semibold text-[#0f172a] dark:text-white">
                {faq.q}
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center dark:border-white/10 dark:bg-[#111827] sm:p-12">
        <h2 className="text-2xl font-bold text-[#0f172a] dark:text-white sm:text-3xl">
          Ready to get started?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-gray-500 dark:text-gray-400 sm:text-base">
          Browse Koruns and send your first message. No account needed to explore.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/discover"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#5D3FD3] px-8 py-3 font-semibold text-white transition-all hover:bg-[#4c33b3] sm:w-auto"
          >
            Explore Koruns
          </Link>
          <Link
            href="/help-finder"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 px-8 py-3 font-medium text-[#0f172a] transition-all hover:border-[#5D3FD3] hover:text-[#5D3FD3] dark:border-white/10 dark:text-white dark:hover:border-[#5D3FD3] sm:w-auto"
          >
            Try HelpFinder
          </Link>
        </div>
      </div>
    </div>
  );
}


