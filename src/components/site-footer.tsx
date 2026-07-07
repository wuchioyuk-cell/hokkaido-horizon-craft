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

export function SiteFooter({ variant = "default" }: { variant?: "default" | "dark" }) {
  const t = useT();
  const currentLang = useLang();
  const isDark = variant === "dark";

  const navigation = [
    { label: "Accommodation", to: "/stay" as const },
    { label: "Private Transport", to: "/private-charter" as const },
    { label: "Seasonal Routes", to: "/experiences" as const },
    { label: "Snow Experiences", to: "/ski-school" as const },
    { label: "About", to: "/our-story" as const },
  ];

  const contact = [
    { label: "Contact", to: "/reconnect" as const },
    { label: "Reservation", to: "/stay" as const },
  ];

  return (
    <footer
      className={`border-t px-6 pt-28 pb-10 md:px-12 md:pt-36 ${
        isDark ? "border-white/10 bg-[#101210] text-white" : "border-ink/12 bg-white text-ink"
      }`}
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-20 lg:grid-cols-[1.35fr_0.75fr_0.75fr]">
          <div className="max-w-xl">
            <div className="flex items-center gap-2.5">
              <span className={`block h-2 w-2 rounded-full ${isDark ? "bg-white" : "bg-ink"}`} />
              <span className={`font-display text-3xl ${isDark ? "text-white" : "text-ink"}`}>
                J-ONE Horizon
              </span>
            </div>
            <p
              className={`mt-10 max-w-lg font-display text-[clamp(2.7rem,4.8vw,5.6rem)] leading-[0.95] ${
                isDark ? "text-white/88" : "text-ink"
              }`}
            >
              Hokkaido,
              <br />
              don't rush.
            </p>
            <p className={`mt-10 max-w-md text-base leading-loose ${isDark ? "text-white/58" : "text-ink/62"}`}>
              A Sapporo-based travel studio connecting places to stay, ways to move, and seasonal routes across Hokkaido.
            </p>
            <div className={`mt-12 space-y-3 text-sm leading-relaxed ${isDark ? "text-white/52" : "text-ink/60"}`}>
              <p>J-ONE CO., LTD. / J-ONE株式会社</p>
              <p>{t("contact.address")}</p>
              <p>
                <a href={`mailto:${t("contact.email")}`} className={isDark ? "hover:text-white" : "hover:text-ink"}>
                  {t("contact.email")}
                </a>
                <span className={`mx-2 ${isDark ? "text-white/20" : "text-ink/25"}`}>·</span>
                <a href={`tel:${t("contact.phone")}`} className={isDark ? "hover:text-white" : "hover:text-ink"}>
                  {t("contact.phone")}
                </a>
              </p>
              <p>
                {t("contact.instagram")}
              </p>
            </div>
          </div>

          <div>
            <p className={`eyebrow mb-8 ${isDark ? "text-white/42" : ""}`}>Explore</p>
            <ul className="space-y-5">
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    search={(prev: Record<string, unknown>) => prev}
                    className={`font-display text-2xl leading-tight transition-colors ${
                      isDark ? "text-white/72 hover:text-white" : "text-ink/76 hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={`eyebrow mb-8 ${isDark ? "text-white/42" : ""}`}>Contact</p>
            <ul className="space-y-5">
              {contact.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    search={(prev: Record<string, unknown>) => prev}
                    className={`font-display text-2xl leading-tight transition-colors ${
                      isDark ? "text-white/72 hover:text-white" : "text-ink/76 hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://www.instagram.com/J_ONETRIP"
                  className={`font-display text-2xl leading-tight transition-colors ${
                    isDark ? "text-white/72 hover:text-white" : "text-ink/76 hover:text-ink"
                  }`}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${t("contact.email")}`}
                  className={`font-display text-2xl leading-tight transition-colors ${
                    isDark ? "text-white/72 hover:text-white" : "text-ink/76 hover:text-ink"
                  }`}
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`mt-28 flex flex-col gap-8 border-t pt-8 md:flex-row md:items-center md:justify-between ${
            isDark ? "border-white/10" : "border-ink/15"
          }`}
        >
          <div
            className={`flex flex-wrap items-center gap-x-5 gap-y-2 text-xs ${
              isDark ? "text-white/45" : "text-ink/60"
            }`}
            aria-label={t("common.language")}
          >
            {LANGUAGES.map((l, i) => {
              const isActive = l.code === currentLang;
              return (
                <span key={l.code} className="flex items-center gap-5">
                  {i !== 0 ? <span className={isDark ? "text-white/18" : "text-ink/20"}>·</span> : null}
                  <Link
                    to="."
                    search={(prev: Record<string, unknown>) => ({
                      ...prev,
                      lang: l.code,
                    })}
                    data-testid={`lang-${l.code}`}
                    hrefLang={l.code}
                    aria-current={isActive ? "true" : undefined}
                    className={`transition-colors ${
                      isDark ? "hover:text-white" : "hover:text-ink"
                    } ${isActive ? `${isDark ? "text-white" : "text-ink"} underline underline-offset-4` : ""}`}
                  >
                    {l.label}
                  </Link>
                </span>
              );
            })}
          </div>
          <p className={`text-xs uppercase tracking-[0.2em] ${isDark ? "text-white/40" : "text-ink/50"}`}>
            © {new Date().getFullYear()} {t("common.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
