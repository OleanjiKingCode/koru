"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

const chatData: Record<
  string,
  {
    name: string;
    role: string;
    messages: { from: "me" | "them"; text: string; time: string }[];
  }
> = {
  alexa: {
    name: "Alexa Quinn",
    role: "Founder @ Orbit Labs",
    messages: [
      { from: "me", text: "Hey Alexa! Loved your recent post on GTM.", time: "09:00" },
      { from: "them", text: "Thanks! What are you building?", time: "09:12" },
      { from: "me", text: "A SaaS tool for async user interviews.", time: "09:20" },
      { from: "them", text: "Nice. What traction do you have so far?", time: "09:45" }
    ]
  },
  darius: {
    name: "Darius Lee",
    role: "Investor @ Vertex Capital",
    messages: [
      { from: "me", text: "Would love to share our AI infra stack with you.", time: "11:10" },
      { from: "them", text: "Happy to review. Send a brief and metrics.", time: "12:05" }
    ]
  },
  maya: {
    name: "Maya Chen",
    role: "Head of Growth @ Studio",
    messages: [
      { from: "them", text: "Let me know how you’re thinking about retention.", time: "08:22" },
      { from: "me", text: "We’re building loops around workspace invites.", time: "08:31" }
    ]
  }
};

export default function ChatPage() {
  const params = useParams();
  const chatId = (params?.id as string) || "alexa";
  const defaultChat = useMemo(
    () =>
      chatData[chatId] || {
        name: "Unknown Korun",
        role: "Operator",
        messages: []
      },
    [chatId]
  );

  const [messages, setMessages] = useState(defaultChat.messages);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  // Reset messages when switching chats.
  useEffect(() => {
    setMessages(defaultChat.messages);
    setTyping(false);
  }, [defaultChat]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-primary">Chat</p>
          <h1 className="text-2xl font-semibold text-[#0f172a] dark:text-white">
            {defaultChat.name}
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-300">{defaultChat.role}</p>
        </div>
        <Link
          href="/inbox"
          className="text-sm font-semibold text-primary hover:underline"
        >
          Back to Inbox
        </Link>
      </div>

      <div className="flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#0f172a]">
        <div className="space-y-3">
          {messages.length === 0 && (
            <p className="text-sm text-gray-500">No messages yet.</p>
          )}
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.from === "me" ? "justify-end" : "justify-start"}`}
            >
              <div
              className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm shadow-sm ${
                  msg.from === "me"
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-[#0f172a] dark:bg-white/10 dark:text-white"
                }`}
              >
                <p>{msg.text}</p>
                <p
                  className={`mt-1 text-[11px] ${
                    msg.from === "me" ? "text-white/70" : "text-gray-500"
                  }`}
                >
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        <form
          className="flex items-center gap-3 border-t border-gray-200 pt-3"
          onSubmit={(e) => {
            e.preventDefault();
            const value = input.trim();
            if (!value) return;
            setMessages((prev) => [...prev, { from: "me", text: value, time: "Now" }]);
            setInput("");
            setTyping(true);
            setTimeout(() => {
              setMessages((prev) => [
                ...prev,
                {
                  from: "them",
                  text: "Typing this out... appreciate the context!",
                  time: "Soon"
                }
              ]);
              setTyping(false);
            }, 1200);
          }}
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 rounded-full border border-gray-200 bg-white px-4 py-3 text-sm text-[#0f172a] shadow-inner focus:border-primary focus:ring-primary dark:border-white/10 dark:bg-[#0f172a] dark:text-white"
          />
          <button
            type="submit"
            className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-card transition-all hover:-translate-y-[1px] hover:shadow-glow active:scale-95"
          >
            Send ➜
          </button>
        </form>
        {typing && (
          <div className="flex justify-start">
            <div className="flex items-center gap-2 rounded-2xl bg-gray-100 px-4 py-2 text-xs text-gray-600 shadow-sm dark:bg-white/10 dark:text-gray-200">
              <span className="flex gap-1">
                <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:0ms]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:120ms]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:240ms]" />
              </span>
              typing...
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
