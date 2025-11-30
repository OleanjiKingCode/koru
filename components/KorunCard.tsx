import clsx from "clsx";

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
  onMessage
}: KorunCardProps) {
  const baseCard =
    "card rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-[#f9f9ff] shadow-md transition-all duration-300 hover:-translate-y-[4px] hover:scale-[1.01] hover:shadow-lg dark:border-white/10 dark:from-[#0d1324] dark:to-[#0b1120]";
  const avatar =
    "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F0EFFF] text-[#5D3FD3] text-lg font-bold shadow-inner ring-2 ring-primary/20";

  if (view === "list") {
    return (
      <div className={clsx(baseCard, "flex items-center gap-4 p-4")}>
        <div className={avatar}>{avatarLetter}</div>
        <div className="flex-1 space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-base font-semibold text-[#0f172a] dark:text-white">
              {name}
            </p>
            {trending && (
              <span className="flex items-center gap-1 rounded-full bg-accent/20 px-2 py-1 text-[10px] font-bold uppercase text-[#3b2c91]">
                <span className="animate-pulse">🔥</span> Trending
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">{title}</p>
          <p className="text-xs text-gray-500 line-clamp-2 dark:text-gray-300">
            {description}
          </p>
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold text-[#0f172a] dark:text-gray-200">
            <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">
              {responseTime}
            </span>
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-2 py-1 text-[#0f172a] dark:bg-white/10 dark:text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <p className="text-sm font-semibold text-[#0f172a] dark:text-white">
            From ${price} / msg
          </p>
          <button
            onClick={onMessage}
            className="relative overflow-hidden rounded-full bg-[#FFD700] px-5 py-2 text-xs font-semibold text-black shadow-lg transition-all duration-300 hover:-translate-y-[1px]"
          >
            <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-80 transition-all duration-700 hover:translate-x-[120%]" />
            Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={clsx(baseCard, "flex h-full flex-col justify-between p-6")}>
      <div className="space-y-4 animate-fade-up">
        <div className="flex items-start gap-4">
          <div className={avatar}>{avatarLetter}</div>
          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-[#0f172a] dark:text-white">
                {name}
              </h3>
              {trending && (
                <span className="flex items-center gap-1 rounded-full bg-accent/20 px-2 py-1 text-[10px] font-bold uppercase text-[#3b2c91]">
                  <span className="animate-pulse">🔥</span> Trending
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">{title}</p>
            <p className="text-sm text-gray-500 line-clamp-2 dark:text-gray-300">
              {description}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#0f172a] dark:text-gray-200">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">
            {responseTime}
          </span>
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-[#0f172a] dark:bg-white/10 dark:text-white"
            >
              {tag}
            </span>
          ))}
        </div>

      </div>

      <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4 dark:border-white/10">
        <div className="text-sm font-semibold text-[#0f172a] dark:text-white">
          From ${price} / msg
        </div>
        <button
          onClick={onMessage}
          className="group relative overflow-hidden rounded-full bg-[#FFD700] px-5 py-2 text-xs font-semibold text-black shadow-lg transition-all duration-300 hover:-translate-y-[1px]"
        >
          <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-80 transition-all duration-700 group-hover:translate-x-[120%]" />
          Message
        </button>
      </div>
    </div>
  );
}
