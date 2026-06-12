import { Link } from "@tanstack/react-router";

const groups = [
  {
    title: "Stay",
    items: [
      { label: "Hotels", to: "/hotels" as const },
      { label: "Vacation Rentals", to: "/vacation-rentals" as const },
    ],
  },
  {
    title: "Travel",
    items: [
      { label: "Private Charter", to: "/private-charter" as const },
      { label: "Airport Transfers", to: "/airport-transfers" as const },
    ],
  },
  {
    title: "Explore",
    items: [
      { label: "Experiences", to: "/experiences" as const },
      { label: "Ski School", to: "/ski-school" as const },
    ],
  },
  {
    title: "House",
    items: [
      { label: "Our Story", to: "/our-story" as const },
      { label: "Reconnect", to: "/reconnect" as const },
    ],
  },
];

const languages = ["日本語", "English", "繁體中文", "ไทย", "Tiếng Việt", "Español"];

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/15 bg-birch px-6 pt-24 pb-10 md:px-12">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="block h-2 w-2 rounded-full bg-ink" />
              <span className="font-display text-2xl text-ink">
                Hokkaidō Horizon
              </span>
            </div>
            <p className="mt-6 max-w-sm font-display text-2xl italic leading-snug text-ink/80">
              The keys, the fleet, the path — owned, end to end, on a single
              northern island.
            </p>
            <p className="mt-8 text-xs uppercase tracking-[0.22em] text-moss">
              Sapporo · Niseko · Furano · Biei
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {groups.map((g) => (
              <div key={g.title}>
                <p className="eyebrow mb-5">{g.title}</p>
                <ul className="space-y-3">
                  {g.items.map((i) => (
                    <li key={i.to}>
                      <Link
                        to={i.to}
                        className="text-sm text-ink/80 transition-colors hover:text-ink"
                      >
                        {i.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-ink/15 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink/60">
            {languages.map((l, i) => (
              <span key={l} className="flex items-center gap-5">
                {i !== 0 ? <span className="text-ink/20">·</span> : null}
                <button className="transition-colors hover:text-ink">{l}</button>
              </span>
            ))}
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-ink/50">
            © {new Date().getFullYear()} Hokkaidō Horizon · All rights observed
          </p>
        </div>
      </div>
    </footer>
  );
}
