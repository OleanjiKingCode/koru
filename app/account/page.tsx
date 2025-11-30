const koruns = [
  { name: "Alexa Quinn", messagesSent: 3, spent: "$195", points: 30 },
  { name: "Darius Lee", messagesSent: 2, spent: "$240", points: 45 },
  { name: "Maya Chen", messagesSent: 1, spent: "$85", points: 15 }
];

export default function AccountPage() {
  const totals = koruns.reduce(
    (acc, g) => {
      acc.messages += g.messagesSent;
      acc.spent += Number(g.spent.replace("$", ""));
      acc.points += g.points;
      return acc;
    },
    { messages: 0, spent: 0, points: 0 }
  );
  const successRate = 88;
  const nextTier = Math.min(100, Math.round((totals.points / 200) * 100));
  const widthClass =
    nextTier >= 90
      ? "w-[90%]"
      : nextTier >= 75
      ? "w-[75%]"
      : nextTier >= 60
      ? "w-[60%]"
      : nextTier >= 45
      ? "w-[45%]"
      : nextTier >= 30
      ? "w-[30%]"
      : nextTier >= 15
      ? "w-[15%]"
      : "w-[8%]";

  return (
    <div className="space-y-8">
      <div className="flex items-baseline justify-between">
        <div>
          <p className="text-sm font-semibold text-primary">Account</p>
          <h1 className="text-3xl font-semibold text-[#0f172a] dark:text-white">
            Your activity
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Track your outreach and rewards across Kōru.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-4">
        <StatCard icon="✉️" label="Messages sent" value={totals.messages} />
        <StatCard
          icon="💳"
          label="Amount spent"
          value={`$${totals.spent.toLocaleString()}`}
        />
        <StatCard icon="⭐" label="Points earned" value={totals.points} />
        <StatCard icon="✅" label="Reply success rate" value={`${successRate}%`} />
      </div>

      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#0f172a]">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-[#0f172a] dark:text-white">
              Koruns you&apos;ve messaged
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Progress to next tier
            </p>
          </div>
          <div className="text-sm font-semibold text-primary">{nextTier}%</div>
        </div>
        <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-white/10">
          <div
            className={`h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all ${widthClass}`}
          />
        </div>
        <div className="mt-6 divide-y divide-gray-200 dark:divide-white/10">
          {koruns.map((g) => (
            <div
              key={g.name}
              className="flex items-center justify-between py-3 text-sm"
            >
              <div>
                <p className="font-semibold text-[#0f172a] dark:text-white">
                  {g.name}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {g.messagesSent} messages
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-[#0f172a] dark:text-white">
                  {g.spent}
                </p>
                <p className="text-gray-500 dark:text-gray-300">{g.points} pts</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  icon
}: {
  label: string;
  value: string | number;
  icon: string;
}) {
  return (
    <div className="rounded-2xl border border-primary/20 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-card dark:border-white/10 dark:bg-[#0f172a]">
      <div className="flex items-center justify-between">
        <span className="text-lg">{icon}</span>
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          {typeof value === "number" ? "Live" : "Updated"}
        </span>
      </div>
      <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">{label}</p>
      <p className="text-2xl font-semibold text-[#0f172a] dark:text-white">
        {value}
      </p>
      <div className="mt-3 h-2 w-full rounded-full bg-primary/10">
        <div className="h-full w-2/3 rounded-full bg-primary" />
      </div>
    </div>
  );
}
