import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useT } from "@/lib/i18n";

export function SiteHeader() {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const nav = [
    { label: t("nav.stay"), to: "/stay" as const },
    { label: t("nav.travel"), to: "/travel" as const },
    { label: t("nav.explore"), to: "/explore" as const },
    { label: t("nav.ski"), to: "/ski-school" as const },
    { label: t("nav.ourStory"), to: "/our-story" as const },
  ];

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
        <Link
          to="/"
          search={(prev: Record<string, unknown>) => prev}
          className="group flex items-center gap-2.5"
        >
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
              search={(prev: Record<string, unknown>) => prev}
              className="text-[0.72rem] uppercase tracking-[0.22em] text-ink/70 transition-colors hover:text-ink"
              activeProps={{ className: "text-ink" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/reconnect"
            search={(prev: Record<string, unknown>) => prev}
            className="hidden hairline-btn-solid md:inline-flex"
          >
            <span>{t("common.inquiry")}</span>
          </Link>
          <button
            type="button"
            aria-label={t("common.menu")}
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
                search={(prev: Record<string, unknown>) => prev}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/reconnect"
              search={(prev: Record<string, unknown>) => prev}
              onClick={() => setOpen(false)}
              className="mt-4 hairline-btn-solid w-fit"
            >
              <span>{t("common.inquiry")}</span>
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
