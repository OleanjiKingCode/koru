interface KorunCardProps {
  view: "grid" | "list";
  name: string;
  title: string;
  description: string;
  avatarLetter: string;
  price: number;
  tags: string[];
  responseTime: string;
  trending?: boolean;
  onMessage?: () => void;
}

export default function KorunCard({
  view,
  name,
  title,
  description,
  avatarLetter,
  price,
  tags,
  responseTime,
  trending,
  onMessage,
}: KorunCardProps) {
  if (view === "list") {
    return (
      <div className="flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4 dark:border-white/10 dark:bg-[#111827]">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F0EFFF] text-base font-semibold text-[#5D3FD3]">
          {avatarLetter}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="font-medium text-[#0f172a] dark:text-white truncate">
              {name}
            </p>
            {trending && (
              <span className="shrink-0 rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-medium text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
                🔥 Trending
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
          <p className="mt-1 text-xs text-gray-400 line-clamp-1 dark:text-gray-500">
            {description}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            <span className="rounded-full bg-[#5D3FD3]/10 px-2 py-0.5 text-[10px] font-medium text-[#5D3FD3]">
              {responseTime}
            </span>
            {tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] text-gray-600 dark:bg-white/5 dark:text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-end gap-2 shrink-0">
          <p className="text-sm font-medium text-[#0f172a] dark:text-white">
            ${price}
          </p>
          <button
            onClick={onMessage}
            className="rounded-full bg-[#5D3FD3] px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[#4c33b3]"
          >
            Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col rounded-xl border border-gray-100 bg-white p-5 dark:border-white/10 dark:bg-[#111827]">
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F0EFFF] text-base font-semibold text-[#5D3FD3]">
          {avatarLetter}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-[#0f172a] dark:text-white truncate">
              {name}
            </h3>
            {trending && (
              <span className="shrink-0 rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-medium text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
                🔥
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
        </div>
      </div>

      <p className="mt-3 text-sm text-gray-500 line-clamp-2 dark:text-gray-400">
        {description}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-1.5">
        <span className="rounded-full bg-[#5D3FD3]/10 px-2.5 py-1 text-[11px] font-medium text-[#5D3FD3]">
          {responseTime}
        </span>
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 px-2.5 py-1 text-[11px] text-gray-600 dark:bg-white/5 dark:text-gray-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100 dark:border-white/5">
        <div className="text-sm">
          <span className="text-gray-400 dark:text-gray-500">From </span>
          <span className="font-medium text-[#0f172a] dark:text-white">
            ${price}
          </span>
          <span className="text-gray-400 dark:text-gray-500"> / msg</span>
        </div>
        <button
          onClick={onMessage}
          className="rounded-full bg-[#5D3FD3] px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[#4c33b3]"
        >
          Message
        </button>
      </div>
    </div>
  );
}
