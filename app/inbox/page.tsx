 "use client";

import Link from "next/link";
import { useState } from "react";

const inboxItems = [
  {
    id: "alexa",
    name: "Alexa Quinn",
    lastMessage: "Sure, send me your deck and the KPIs.",
    status: "replied",
    time: "2h ago",
    amount: "$65"
  },
  {
    id: "darius",
    name: "Darius Lee",
    lastMessage: "Can you share traction numbers over the last 6 months?",
    status: "pending",
    time: "4h ago",
    amount: "$120"
  },
  {
    id: "maya",
    name: "Maya Chen",
    lastMessage: "Refund initiated—outside of focus for now.",
    status: "refunded",
    time: "1d ago",
    amount: "$85"
  }
];

const statusStyles: Record<string, string> = {
  replied: "bg-green-100 text-green-700",
  pending: "bg-yellow-100 text-yellow-700",
  refunded: "bg-gray-100 text-gray-700",
  base: "bg-gray-100 text-gray-700"
};

export default function InboxPage() {
  const [search, setSearch] = useState("");

  const groups = ["replied", "pending", "refunded"] as const;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-semibold text-[#0f172a] dark:text-white">
          Inbox
        </h1>
        <div className="flex items-center gap-2">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name"
            className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-[#0f172a] shadow-sm focus:border-primary focus:ring-primary dark:border-white/10 dark:bg-[#0f172a] dark:text-white"
          />
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {inboxItems.length} conversations
          </p>
        </div>
      </div>

      {groups.map((group) => {
        const filtered = inboxItems.filter(
          (item) =>
            item.status === group &&
            item.name.toLowerCase().includes(search.toLowerCase())
        );
        if (filtered.length === 0) return null;
        return (
          <div
            key={group}
            className="rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-card dark:border-white/10 dark:bg-[#0f172a]"
          >
            <div className="flex items-center justify-between px-5 py-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300">
                {group}
              </p>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                {filtered.length} thread(s)
              </span>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-white/10">
              {filtered.map((item) => (
                <Link
                  key={item.id}
                  href={`/chat/${item.id}`}
                  className="flex items-center justify-between px-5 py-4 transition hover:bg-gray-50 dark:hover:bg-white/5"
                >
                  <div className="space-y-1">
                    <p className="text-base font-semibold text-[#0f172a] dark:text-white">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-1">
                      {item.lastMessage}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {item.time} · {item.amount}
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[item.status]}`}
                  >
                    {item.status}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
