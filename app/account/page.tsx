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
    <div className="space-y-6 sm:space-y-8">
      <div>
        <p className="text-xs font-semibold text-[#5D3FD3] sm:text-sm">Account</p>
        <h1 className="text-2xl font-semibold text-[#0f172a] dark:text-white sm:text-3xl">
          Your activity
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Track your outreach and rewards across Kōru.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        <StatCard icon="✉️" label="Messages sent" value={totals.messages} />
        <StatCard
          icon="💳"
          label="Amount spent"
          value={`$${totals.spent.toLocaleString()}`}
        />
        <StatCard icon="⭐" label="Points earned" value={totals.points} />
        <StatCard icon="✅" label="Reply success rate" value={`${successRate}%`} />
      </div>

      <div className="rounded-xl border border-gray-100 bg-white p-4 dark:border-white/10 dark:bg-[#111827] sm:rounded-2xl sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-[#0f172a] dark:text-white sm:text-xl">
              Koruns you&apos;ve messaged
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
              Progress to next tier
            </p>
          </div>
          <div className="text-sm font-semibold text-[#5D3FD3]">{nextTier}%</div>
        </div>
        <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-white/10 sm:h-3">
          <div
            className={`h-full rounded-full bg-gradient-to-r from-[#5D3FD3] to-[#FFD700] transition-all ${widthClass}`}
          />
        </div>
        <div className="mt-4 divide-y divide-gray-100 dark:divide-white/10 sm:mt-6">
          {koruns.map((g) => (
            <div
              key={g.name}
              className="flex items-center justify-between py-3 text-sm"
            >
              <div>
                <p className="font-medium text-[#0f172a] dark:text-white">
                  {g.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {g.messagesSent} messages
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium text-[#0f172a] dark:text-white">
                  {g.spent}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500">{g.points} pts</p>
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
    <div className="rounded-xl border border-gray-100 bg-white p-3 dark:border-white/10 dark:bg-[#111827] sm:p-4">
      <div className="flex items-center justify-between">
        <span className="text-base sm:text-lg">{icon}</span>
        <span className="hidden rounded-full bg-[#5D3FD3]/10 px-2 py-0.5 text-[10px] font-semibold text-[#5D3FD3] sm:inline-flex sm:px-3 sm:py-1 sm:text-xs">
          {typeof value === "number" ? "Live" : "Updated"}
        </span>
      </div>
      <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 sm:mt-4 sm:text-sm">{label}</p>
      <p className="text-xl font-semibold text-[#0f172a] dark:text-white sm:text-2xl">
        {value}
      </p>
      <div className="mt-2 h-1.5 w-full rounded-full bg-[#5D3FD3]/10 sm:mt-3 sm:h-2">
        <div className="h-full w-2/3 rounded-full bg-[#5D3FD3]" />
      </div>
    </div>
  );
}
