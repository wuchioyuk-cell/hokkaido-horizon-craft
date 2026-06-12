import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const nav = [
  { label: "Stay", to: "/stay" as const },
  { label: "Travel", to: "/travel" as const },
  { label: "Explore", to: "/explore" as const },
  { label: "Ski", to: "/ski-school" as const },
  { label: "Our Story", to: "/our-story" as const },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-birch/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-[auto_1fr_auto] items-center gap-6 px-6 py-5 md:px-12">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="block h-2 w-2 rounded-full bg-ink transition-transform duration-500 group-hover:scale-150" />
          <span className="font-display text-xl tracking-tight text-ink">
            Hokkaidō Horizon
          </span>
        </Link>

        <nav className="hidden items-center justify-center gap-10 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[0.72rem] uppercase tracking-[0.22em] text-ink/70 transition-colors hover:text-ink"
              activeProps={{ className: "text-ink" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden items-center gap-2 border-b border-ink/30 pb-1 text-[0.7rem] uppercase tracking-[0.22em] text-ink/80 transition-colors hover:text-ink md:inline-flex"
          >
            EN <span className="text-ink/30">/</span> USD
          </button>
          <Link
            to="/reconnect"
            className="hidden hairline-btn-solid md:inline-flex"
          >
            <span>Inquiry</span>
          </Link>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center lg:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <span className="block h-px w-5 bg-ink" />
              <span className="block h-px w-5 bg-ink" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-birch px-6 py-8 lg:hidden">
          <nav className="flex flex-col gap-5">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/reconnect"
              onClick={() => setOpen(false)}
              className="mt-4 hairline-btn-solid w-fit"
            >
              <span>Inquiry</span>
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
