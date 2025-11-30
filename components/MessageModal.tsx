"use client";

import { useEffect, useState } from "react";

type MessageModalProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: (payload: { urgency: string; message: string }) => void;
};

export default function MessageModal({
  open,
  onClose,
  onConfirm
}: MessageModalProps) {
  const [urgency, setUrgency] = useState("Normal");
  const pricing: Record<string, string> = {
    Normal: "$5",
    Urgent: "$15",
    Critical: "$50"
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm">
      <div className="w-full max-w-lg transform rounded-2xl bg-white p-6 shadow-2xl transition-all duration-300 animate-fade-up dark:bg-[#0f172a]">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-[#0f172a] dark:text-white">
              Send a message
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Set urgency and craft your outreach. You can refine later.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 transition-colors hover:text-primary"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <form
          className="mt-4 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            onConfirm({
              urgency: (formData.get("urgency") as string) || "Normal",
              message: (formData.get("message") as string) || ""
            });
            onClose();
          }}
        >
          <label className="flex flex-col gap-2 text-sm font-medium text-[#0f172a]">
            Urgency
            <select
              name="urgency"
              value={urgency}
              onChange={(e) => setUrgency(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-[#0f172a] focus:border-primary focus:ring-primary dark:border-white/10 dark:bg-[#111827] dark:text-white"
            >
              <option value="Normal">Normal · $5</option>
              <option value="Urgent">Urgent · $15</option>
              <option value="Critical">Critical · $50</option>
            </select>
            <p className="text-xs font-normal text-gray-500 dark:text-gray-400">
              {pricing[urgency]} · Refunded if no reply in 24h.
            </p>
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium text-[#0f172a]">
            Message
            <textarea
              name="message"
              placeholder="Share context, goals, and what you need."
              rows={5}
              className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-[#0f172a] focus:border-primary focus:ring-primary dark:border-white/10 dark:bg-[#111827] dark:text-white"
              required
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-[1px] hover:shadow-card"
          >
            Confirm & Send
          </button>
        </form>
      </div>
    </div>
  );
}
