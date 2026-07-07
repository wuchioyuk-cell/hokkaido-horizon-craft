import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useT } from "@/lib/i18n";

export function SiteHeader({ variant = "default" }: { variant?: "default" | "overlay" | "hero-balanced" }) {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHeroBalanced = variant === "hero-balanced";
  const isOverlay = (variant === "overlay" || variant === "hero-balanced") && !scrolled;

  const nav = [
    { label: t("nav.stay"), to: "/stay" as const },
    { label: t("nav.travel"), to: "/travel" as const },
    { label: t("nav.explore"), to: "/explore" as const },
    { label: t("nav.ski"), to: "/ski-school" as const },
    { label: t("nav.ourStory"), to: "/our-story" as const },
  ];

  const heroPrimaryNav = [
    { label: "Stay", to: "/stay" as const },
    { label: "Journeys", to: "/travel" as const },
    { label: "Experiences", to: "/experiences" as const },
    { label: "Snow", to: "/ski-school" as const },
  ];

  const heroUtilityNav = [
    { label: "Language", to: "." as const },
    { label: "Contact", to: "/reconnect" as const },
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
        scrolled ? "bg-white/92 backdrop-blur-xl border-b border-black/10" : "bg-transparent"
      }`}
    >
      {isHeroBalanced ? (
        <div className="mx-auto grid max-w-[1600px] grid-cols-[1fr_auto_1fr] items-center gap-6 px-6 py-5 md:px-12">
          <nav className="hidden items-center gap-9 lg:flex">
            {heroPrimaryNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                search={(prev: Record<string, unknown>) => prev}
                className={`text-[0.7rem] uppercase tracking-[0.22em] transition-colors ${
                  isOverlay ? "text-white/78 hover:text-white" : "text-ink/68 hover:text-ink"
                }`}
                activeProps={{ className: isOverlay ? "text-white" : "text-ink" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/"
            search={(prev: Record<string, unknown>) => prev}
            className="group justify-self-center"
          >
            <span
              className={`font-display text-2xl tracking-tight transition-colors ${
                isOverlay ? "text-white" : "text-ink"
              }`}
            >
              J-ONE Horizon
            </span>
          </Link>

          <div className="flex items-center justify-end gap-6">
            <div className="hidden items-center gap-6 lg:flex">
              {heroUtilityNav.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  search={(prev: Record<string, unknown>) => prev}
                  className={`text-[0.7rem] uppercase tracking-[0.22em] transition-colors ${
                    isOverlay ? "text-white/72 hover:text-white" : "text-ink/64 hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://www.instagram.com/J_ONETRIP"
                className={`text-[0.7rem] uppercase tracking-[0.22em] transition-colors ${
                  isOverlay ? "text-white/72 hover:text-white" : "text-ink/64 hover:text-ink"
                }`}
              >
                Instagram
              </a>
              <Link
                to="/stay"
                search={(prev: Record<string, unknown>) => prev}
                className={`border px-5 py-3 text-[0.68rem] uppercase tracking-[0.22em] transition-all duration-500 ${
                  isOverlay
                    ? "border-white/70 text-white hover:bg-white hover:text-ink"
                    : "border-ink bg-ink text-white hover:bg-transparent hover:text-ink"
                }`}
              >
                Reservation
              </Link>
            </div>
            <button
              type="button"
              aria-label={t("common.menu")}
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center lg:hidden"
            >
              <span className="flex flex-col gap-1.5">
                <span className={`block h-px w-5 ${isOverlay ? "bg-white" : "bg-ink"}`} />
                <span className={`block h-px w-5 ${isOverlay ? "bg-white" : "bg-ink"}`} />
              </span>
            </button>
          </div>
        </div>
      ) : (
      <div className="mx-auto grid max-w-[1600px] grid-cols-[auto_1fr_auto] items-center gap-6 px-6 py-5 md:px-12">
        <Link
          to="/"
          search={(prev: Record<string, unknown>) => prev}
          className="group flex items-center gap-2.5"
        >
          <span
            className={`block h-2 w-2 rounded-full transition-transform duration-500 group-hover:scale-150 ${
              isOverlay ? "bg-white" : "bg-ink"
            }`}
          />
          <span
            className={`font-display text-xl tracking-tight ${
              isOverlay ? "text-white" : "text-ink"
            }`}
          >
            Hokkaidō Horizon
          </span>
        </Link>

        <nav className="hidden items-center justify-center gap-10 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              search={(prev: Record<string, unknown>) => prev}
              className={`text-[0.72rem] uppercase tracking-[0.22em] transition-colors ${
                isOverlay ? "text-white/78 hover:text-white" : "text-ink/70 hover:text-ink"
              }`}
              activeProps={{ className: isOverlay ? "text-white" : "text-ink" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/reconnect"
            search={(prev: Record<string, unknown>) => prev}
            className={`hidden md:inline-flex ${
              isOverlay
                ? "hairline-btn border-white/70 text-white hover:bg-white"
                : "hairline-btn-solid"
            }`}
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
              <span className={`block h-px w-5 ${isOverlay ? "bg-white" : "bg-ink"}`} />
              <span className={`block h-px w-5 ${isOverlay ? "bg-white" : "bg-ink"}`} />
            </span>
          </button>
        </div>
      </div>
      )}

      {open ? (
        <div className="border-t border-border bg-white px-6 py-8 lg:hidden">
          <nav className="flex flex-col gap-5">
            {(isHeroBalanced ? [...heroPrimaryNav, { label: "Contact", to: "/reconnect" as const }] : nav).map((item) => (
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
              to={isHeroBalanced ? "/stay" : "/reconnect"}
              search={(prev: Record<string, unknown>) => prev}
              onClick={() => setOpen(false)}
              className="mt-4 hairline-btn-solid w-fit"
            >
              <span>{isHeroBalanced ? "Reservation" : t("common.inquiry")}</span>
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
