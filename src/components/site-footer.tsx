import { Link } from "@tanstack/react-router";
import { useLang, useT } from "@/lib/i18n";

export const LANGUAGES = [
  { code: "ja", label: "日本語" },
  { code: "en", label: "English" },
  { code: "zh-cn", label: "简体中文" },
  { code: "zh-hk", label: "繁體中文（香港）" },
  { code: "zh-tw", label: "繁體中文（台灣）" },
  { code: "th", label: "ไทย" },
  { code: "vi", label: "Tiếng Việt" },
  { code: "es", label: "Español" },
] as const;

export type LanguageCode = (typeof LANGUAGES)[number]["code"];

export function SiteFooter() {
  const t = useT();
  const currentLang = useLang();

  const groups = [
    {
      title: t("footer.group.stay"),
      items: [
        { label: t("route.hotels"), to: "/hotels" as const },
        { label: t("route.vacationRentals"), to: "/vacation-rentals" as const },
      ],
    },
    {
      title: t("footer.group.travel"),
      items: [
        { label: t("route.privateCharter"), to: "/private-charter" as const },
        { label: t("route.airportTransfers"), to: "/airport-transfers" as const },
      ],
    },
    {
      title: t("footer.group.explore"),
      items: [
        { label: t("route.experiences"), to: "/experiences" as const },
        { label: t("route.skiSchool"), to: "/ski-school" as const },
      ],
    },
    {
      title: t("footer.group.house"),
      items: [
        { label: t("route.ourStory"), to: "/our-story" as const },
        { label: t("route.reconnect"), to: "/reconnect" as const },
      ],
    },
  ];

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
              {t("footer.tagline")}
            </p>
            <p className="mt-8 text-xs uppercase tracking-[0.22em] text-moss">
              {t("footer.regions")}
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
                        search={(prev: Record<string, unknown>) => prev}
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
          <div
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink/60"
            aria-label={t("common.language")}
          >
            {LANGUAGES.map((l, i) => {
              const isActive = l.code === currentLang;
              return (
                <span key={l.code} className="flex items-center gap-5">
                  {i !== 0 ? <span className="text-ink/20">·</span> : null}
                  <Link
                    to="."
                    search={(prev: Record<string, unknown>) => ({
                      ...prev,
                      lang: l.code,
                    })}
                    data-testid={`lang-${l.code}`}
                    hrefLang={l.code}
                    aria-current={isActive ? "true" : undefined}
                    className={`transition-colors hover:text-ink ${
                      isActive ? "text-ink underline underline-offset-4" : ""
                    }`}
                  >
                    {l.label}
                  </Link>
                </span>
              );
            })}
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-ink/50">
            © {new Date().getFullYear()} {t("common.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
