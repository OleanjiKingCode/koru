"use client";

import { useEffect, useMemo, useState } from "react";
import MessageModal from "../../components/MessageModal";
import KorunCard from "../../components/KorunCard";

type Korun = {
  id: string;
  name: string;
  title: string;
  bio: string;
  responseTime: string;
  responseHours: number;
  price: { Normal: number; Urgent: number; Critical: number };
  categories: string[];
  region: "Nigeria" | "Global";
  speed: "Fast" | "Standard" | "Deliberate";
  timesMessaged: number;
};

const baseKoruns: Korun[] = [
  {
    id: "cz",
    name: "CZ",
    title: "Founder, Binance",
    bio: "Crypto operator and investor",
    responseTime: "Replies within 12h",
    responseHours: 12,
    price: { Normal: 75, Urgent: 180, Critical: 400 },
    categories: ["Investor", "Builder"],
    region: "Global",
    speed: "Standard",
    timesMessaged: 1200
  },
  {
    id: "vitalik",
    name: "Vitalik Buterin",
    title: "Co-founder, Ethereum",
    bio: "Protocol design, crypto economics",
    responseTime: "Replies within 8h",
    responseHours: 8,
    price: { Normal: 90, Urgent: 220, Critical: 500 },
    categories: ["Builder", "Investor"],
    region: "Global",
    speed: "Fast",
    timesMessaged: 1500
  },
  {
    id: "rihanna",
    name: "Rihanna",
    title: "Musician, Fenty Founder",
    bio: "Brand, product, culture",
    responseTime: "Replies within 24h",
    responseHours: 24,
    price: { Normal: 60, Urgent: 140, Critical: 320 },
    categories: ["Creator", "Investor"],
    region: "Global",
    speed: "Deliberate",
    timesMessaged: 1100
  },
  {
    id: "davido",
    name: "Davido",
    title: "Artist, Timeless",
    bio: "Music, touring, entertainment",
    responseTime: "Replies within 10h",
    responseHours: 10,
    price: { Normal: 55, Urgent: 120, Critical: 260 },
    categories: ["Creator"],
    region: "Nigeria",
    speed: "Fast",
    timesMessaged: 980
  },
  {
    id: "prudent",
    name: "Prudent Sammy",
    title: "Web3 Angel (NG)",
    bio: "Backing African founders",
    responseTime: "Replies within 6h",
    responseHours: 6,
    price: { Normal: 25, Urgent: 60, Critical: 120 },
    categories: ["Investor", "Nigeria"],
    region: "Nigeria",
    speed: "Fast",
    timesMessaged: 620
  },
  {
    id: "balaji",
    name: "Balaji Srinivasan",
    title: "Angel, Author",
    bio: "Crypto, bio, networks",
    responseTime: "Replies within 5h",
    responseHours: 5,
    price: { Normal: 85, Urgent: 180, Critical: 360 },
    categories: ["Investor", "Builder"],
    region: "Global",
    speed: "Fast",
    timesMessaged: 1300
  },
  {
    id: "satoshi",
    name: "Satoshi Ghost",
    title: "Anonymous coder",
    bio: "Privacy, cypherpunk, protocol reviews",
    responseTime: "Replies within 18h",
    responseHours: 18,
    price: { Normal: 40, Urgent: 90, Critical: 200 },
    categories: ["Builder"],
    region: "Global",
    speed: "Standard",
    timesMessaged: 700
  },
  {
    id: "amina",
    name: "Amina Yusuf",
    title: "Founder, Lagos AI Studio",
    bio: "AI products for Africa",
    responseTime: "Replies within 4h",
    responseHours: 4,
    price: { Normal: 35, Urgent: 80, Critical: 180 },
    categories: ["Builder", "Nigeria"],
    region: "Nigeria",
    speed: "Fast",
    timesMessaged: 540
  },
  {
    id: "liwei",
    name: "Li Wei",
    title: "Creator, 2.5M audience",
    bio: "Short-form content & brand deals",
    responseTime: "Replies within 9h",
    responseHours: 9,
    price: { Normal: 30, Urgent: 70, Critical: 160 },
    categories: ["Creator", "Global"],
    region: "Global",
    speed: "Standard",
    timesMessaged: 480
  }
];

const tagFilters = [
  { label: "💼 Investor", value: "Investor" },
  { label: "🎤 Creator", value: "Creator" },
  { label: "🛠️ Builder", value: "Builder" },
  { label: "🇳🇬 Nigeria", value: "Nigeria" },
  { label: "🌍 Global", value: "Global" }
];

export default function DiscoverPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 500 });
  const [urgencyFilter, setUrgencyFilter] = useState("All");
  const [filtersOpen, setFiltersOpen] = useState(true);
  const [list, setList] = useState<Korun[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  useEffect(() => {
    const shuffled = [...baseKoruns].sort(() => Math.random() - 0.5);
    setList(shuffled);
  }, []);

  const trendingIds = useMemo(() => {
    const sorted = [...list].sort((a, b) => b.timesMessaged - a.timesMessaged);
    return sorted.slice(0, 3).map((g) => g.id);
  }, [list]);

  const selected = useMemo(
    () => list.find((g) => g.id === selectedId),
    [selectedId, list]
  );

  const filtered = useMemo(() => {
    return list.filter((g) => {
      const normalPrice = g.price.Normal;
      const matchTags =
        selectedTags.length === 0 ||
        selectedTags.every((tag) =>
          tag === "Nigeria" || tag === "Global"
            ? g.region === tag
            : g.categories.includes(tag)
        );
      const matchUrgency =
        urgencyFilter === "All" ||
        (urgencyFilter === "Fastest" && g.responseHours <= 6) ||
        (urgencyFilter === "Fast" && g.responseHours <= 10) ||
        (urgencyFilter === "Standard" && g.responseHours <= 18) ||
        (urgencyFilter === "Deliberate" && g.responseHours > 18);
      const matchPrice =
        normalPrice >= priceRange.min && normalPrice <= priceRange.max;
      return matchTags && matchUrgency && matchPrice;
    });
  }, [list, selectedTags, urgencyFilter, priceRange]);

  const urgencyOptions = ["All", "Fastest", "Fast", "Standard", "Deliberate"];

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
      <div className="space-y-8">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold text-primary">Discover</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-[#0f172a] dark:text-white">
              Explore Koruns
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Curated operators, investors, and creators who commit to replying.
            </p>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
              <div>Showing {filtered.length} Koruns</div>
              <div className="flex items-center gap-1 rounded-full bg-[#f7f7fb] px-2 py-1 text-xs font-semibold shadow-sm ring-1 ring-gray-200 dark:bg-white/5 dark:text-white dark:ring-white/10">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`rounded-full px-2 py-1 transition-all duration-300 ${
                    viewMode === "grid"
                      ? "bg-primary text-white"
                      : "text-[#0f172a] dark:text-white"
                  }`}
                >
                  <span className="flex h-4 w-4 flex-wrap gap-[1px]">
                    <span className="h-[7px] w-[7px] rounded-sm bg-current" />
                    <span className="h-[7px] w-[7px] rounded-sm bg-current" />
                    <span className="h-[7px] w-[7px] rounded-sm bg-current" />
                    <span className="h-[7px] w-[7px] rounded-sm bg-current" />
                  </span>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`rounded-full px-2 py-1 transition-all duration-300 ${
                    viewMode === "list"
                      ? "bg-primary text-white"
                      : "text-[#0f172a] dark:text-white"
                  }`}
                >
                  <span className="flex h-4 w-4 flex-col justify-between">
                    <span className="h-[2px] w-full rounded-full bg-current" />
                    <span className="h-[2px] w-full rounded-full bg-current" />
                    <span className="h-[2px] w-full rounded-full bg-current" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white p-4 shadow-card transition hover:shadow-xl dark:border-white/10 dark:bg-[#0f172a]">
          <button
            onClick={() => setFiltersOpen((v) => !v)}
            className="flex w-full items-center justify-between rounded-2xl bg-[#f8f9fb] px-4 py-3 text-sm font-semibold text-[#0f172a] shadow-inner hover:opacity-90 dark:bg-white/5 dark:text-white sm:hidden"
          >
            <span>Filters</span>
            <span>{filtersOpen ? "−" : "+"}</span>
          </button>
          <div className={`${filtersOpen ? "mt-4 block" : "hidden sm:block"}`}>
            <div className="flex flex-wrap gap-2">
              {tagFilters.map((tag) => (
                <button
                  key={tag.value}
                  onClick={() => toggleTag(tag.value)}
                  className={`flex items-center gap-1 rounded-full px-4 py-2 text-xs font-semibold ${
                    selectedTags.includes(tag.value)
                      ? "bg-primary text-white shadow-card"
                      : "bg-[#f7f7fb] text-[#0f172a] hover:bg-primary/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
                  }`}
                >
                  {tag.label}
                </button>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gradient-to-r from-white via-[#f8f9ff] to-white px-4 py-3 text-sm text-gray-700 shadow-inner dark:border-white/10 dark:from-[#0f172a] dark:via-[#0f172a] dark:to-[#0f172a] dark:text-gray-100">
                <span className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-300">
                  💰 Price
                </span>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min={0}
                    max={500}
                    value={priceRange.min}
                    onChange={(e) =>
                      setPriceRange((prev) => ({
                        ...prev,
                        min: Math.min(Number(e.target.value), prev.max - 5)
                      }))
                    }
                    className="accent-primary [accent-color:#5D3FD3]"
                  />
                  <input
                    type="range"
                    min={0}
                    max={500}
                    value={priceRange.max}
                    onChange={(e) =>
                      setPriceRange((prev) => ({
                        ...prev,
                        max: Math.max(Number(e.target.value), prev.min + 5)
                      }))
                    }
                    className="accent-primary [accent-color:#5D3FD3]"
                  />
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#0f172a] shadow-sm ring-1 ring-gray-200 dark:bg-[#0f172a] dark:text-white dark:ring-white/10">
                  ${priceRange.min} - ${priceRange.max}
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-[#f7f7fb] px-3 py-2 text-sm shadow-sm ring-1 ring-gray-200 dark:bg-white/5 dark:text-white dark:ring-white/10">
                <span className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-300">
                  ⚡ Response
                </span>
                <select
                  value={urgencyFilter}
                  onChange={(e) => setUrgencyFilter(e.target.value)}
                  className="rounded-full border border-gray-200 bg-white px-3 py-2 text-sm text-[#0f172a] shadow-sm focus:border-primary focus:ring-primary dark:border-white/10 dark:bg-[#0f172a] dark:text-white"
                >
                  {urgencyOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`grid gap-6 ${
            viewMode === "grid"
              ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
              : "grid-cols-1"
          }`}
        >
          {filtered.map((g) => (
            <KorunCard
              key={g.id}
              view={viewMode}
              name={g.name}
              title={g.title}
              description={g.bio}
              avatarLetter={g.name.charAt(0)}
              price={g.price.Normal}
              tags={[...g.categories, g.region]}
              responseTime={g.responseTime}
              trending={trendingIds.includes(g.id)}
              onMessage={() => setSelectedId(g.id)}
            />
          ))}
        </div>

      <MessageModal
        open={Boolean(selected)}
        onClose={() => setSelectedId(null)}
        onConfirm={(payload) => {
          console.log("Send to", selected?.name, payload);
        }}
      />
    </div>
  );
}
