import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-white shadow-card">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.2),transparent_30%),linear-gradient(120deg,rgba(255,215,0,0.2),rgba(93,63,211,0.9),rgba(255,215,0,0.15))] bg-[length:200%_200%] animate-gradient-move opacity-80" />
        <div className="relative max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent animate-fade-up">
            Kōru Messaging
          </p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl animate-fade-up [animation-delay:0.08s]">
            Message anyone. Get a guaranteed reply.
          </h1>
          <p className="text-lg text-[#E2E8F0]/90 animate-fade-up [animation-delay:0.16s]">
            Built for creators, founders, and investors. Reach the people who
            move your world and skip the inbox lottery.
          </p>
          <div className="flex flex-wrap items-center gap-4 animate-fade-up [animation-delay:0.22s]">
            <Link
              href="/discover"
              className="group relative inline-flex items-center overflow-hidden rounded-full border border-accent px-5 py-3 text-sm font-semibold text-[#3b2c91] shadow-lg shadow-black/10"
            >
              <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-80 transition-all duration-700 group-hover:translate-x-[120%]" />
              <span className="transition-transform duration-300 group-hover:scale-[1.02]">
                Explore Koruns
              </span>
            </Link>
            <div className="flex items-center gap-2 text-sm text-[#E2E8F0]/80">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Guaranteed response or refund.
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl bg-white p-8 shadow-card transition hover:shadow-xl dark:bg-[#111827] dark:text-white">
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-2xl font-semibold text-[#0f172a] dark:text-white">
            Why Kōru works
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Koruns set their price and response time. You message with
            context and get a guaranteed reply. If they don&apos;t respond in
            time, you get refunded automatically.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { title: "Guaranteed", text: "Replies or refunds." },
              { title: "Signal", text: "Stand out with intent." },
              { title: "Aligned", text: "Their time is valued." }
            ].map((item) => (
              <div
                key={item.title}
                className="card rounded-2xl border border-primary/15 bg-primary/5 p-4 [animation-delay:0.18s] dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="font-semibold text-[#0f172a] dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-primary/15 bg-[#f9fafb] p-6 dark:border-white/10 dark:bg-[#0f172a]">
          <p className="text-sm font-semibold text-primary">Quick peek</p>
          <h3 className="mt-2 text-xl font-semibold text-[#0f172a] dark:text-white">
            Koruns you can reach
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-gray-700 dark:text-gray-200">
            <li>• Operators at breakout startups</li>
            <li>• Investors focused on your sector</li>
            <li>• Creators with real distribution</li>
            <li>• Advisors who actually reply</li>
          </ul>
          <Link
            href="/discover"
            className="mt-6 inline-flex rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-card transition hover:-translate-y-1 hover:shadow-lg"
          >
            Browse Koruns
          </Link>
        </div>
      </section>
    </div>
  );
}
