import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/theme-provider";
import KoruAssistant from "../components/KoruAssistant";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Kōru | Messaging",
  description: "Message anyone and get a guaranteed reply."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-[var(--bg)] transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main className="max-w-6xl mx-auto px-6 pb-20 pt-6">{children}</main>
          <Footer />
          <KoruAssistant />
        </ThemeProvider>
      </body>
    </html>
  );
}
