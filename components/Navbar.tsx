"use client";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "./theme-provider";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/discover", label: "Discover" },
  { href: "/inbox", label: "Inbox" },
  { href: "/account", label: "Account" },
];

function ThemeToggle({ theme, toggle }: { theme: string; toggle: () => void }) {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-gray-200 text-gray-600 transition-colors hover:border-[#5D3FD3] hover:text-[#5D3FD3] dark:border-white/10 dark:text-gray-300 dark:hover:border-[#5D3FD3] dark:hover:text-[#5D3FD3]"
    >
      {/* Sun icon */}
      <svg
        className={`absolute h-4 w-4 transition-all duration-300 ease-in-out ${
          theme === "dark"
            ? "rotate-0 scale-100 opacity-100"
            : "rotate-90 scale-0 opacity-0"
        }`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
      {/* Moon icon */}
      <svg
        className={`absolute h-4 w-4 transition-all duration-300 ease-in-out ${
          theme === "dark"
            ? "-rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
        }`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-gray-100 bg-white/90 backdrop-blur-md dark:border-white/10 dark:bg-[#0f172a]/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link href="/" className="flex items-center gap-2 hover:opacity-90">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#5D3FD3] text-sm font-bold text-white sm:h-10 sm:w-10">
            K
          </div>
          <div>
            <p className="text-base font-semibold text-[#0f172a] dark:text-white sm:text-lg">
              Kōru
            </p>
            <p className="hidden text-xs text-gray-500 dark:text-gray-400 sm:block">
              Guaranteed replies
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-[#0f172a] dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-2">
            <ThemeToggle theme={theme} toggle={toggle} />
          </div>
          <button className="ml-2 rounded-lg bg-[#5D3FD3] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#4c33b3]">
            Connect Wallet
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle theme={theme} toggle={toggle} />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-gray-200 text-gray-600 transition-colors dark:border-white/10 dark:text-gray-300"
          >
            <MenuIcon
              className={`absolute h-4 w-4 transition-all duration-300 ${
                mobileMenuOpen
                  ? "rotate-90 scale-0 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }`}
            />
            <CloseIcon
              className={`absolute h-4 w-4 transition-all duration-300 ${
                mobileMenuOpen
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-0 opacity-0"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 ease-in-out dark:border-white/10 dark:bg-[#0f172a] md:hidden ${
          mobileMenuOpen
            ? "max-h-64 opacity-100"
            : "max-h-0 border-t-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 pb-4 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5"
            >
              {link.label}
            </Link>
          ))}
          <button className="mt-2 rounded-lg bg-[#5D3FD3] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#4c33b3]">
            Connect Wallet
          </button>
        </nav>
      </div>
    </header>
  );
}
