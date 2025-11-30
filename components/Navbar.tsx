"use client";
import Link from "next/link";
import { useTheme } from "./theme-provider";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/discover", label: "Discover" },
  { href: "/inbox", label: "Inbox" },
  { href: "/account", label: "Account" }
];

export default function Navbar() {
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-30 border-b border-[#e2e8f0] bg-white/80 backdrop-blur transition-colors duration-300 dark:border-white/10 dark:bg-[#0f172a]/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 hover:opacity-90">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-card">
            K
          </div>
          <div>
            <p className="text-lg font-semibold text-[#0f172a] dark:text-white">
              Kōru
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Guaranteed replies
            </p>
          </div>
        </Link>
        <nav className="flex items-center gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#0f172a] transition-all hover:text-primary dark:text-slate-100 dark:hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-sm font-semibold text-[#0f172a] hover:border-primary hover:text-primary dark:border-white/20 dark:text-slate-100 dark:hover:border-accent dark:hover:text-accent"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
          <button className="ml-1 rounded-full border border-primary/30 px-4 py-2 text-sm font-semibold text-primary shadow-sm hover:-translate-y-[1px] hover:bg-primary hover:text-white dark:border-accent/40 dark:text-accent dark:hover:bg-accent dark:hover:text-[#0f172a]">
            Connect Wallet
          </button>
        </nav>
      </div>
    </header>
  );
}
