import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import heroYotei from "@/assets/hero-yotei.jpg";
import alphardSnow from "@/assets/alphard-snow.jpg";
import propertySanctuary from "@/assets/property-sanctuary.jpg";
import propertyAsahidake from "@/assets/property-asahidake.jpg";
import propertyOtaru from "@/assets/property-otaru.jpg";
import seasonWinter from "@/assets/season-winter.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hokkaidō Horizon — 北海道精品酒店 · 私人车队 · 四季体验" },
      {
        name: "description",
        content:
          "通往北海道的旗舰门户。亲自拥有的精品酒店、私人阿尔法车队,以及深谙四季的本地团队——从二世古到美瑛。",
      },
      { property: "og:title", content: "Hokkaidō Horizon · 北海道,最本真的模样" },
      {
        property: "og:description",
        content: "精品酒店、私人包车,以及横跨北海道四季的体验之旅。",
      },
      { property: "og:image", content: heroYotei },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroYotei },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Noto+Serif+SC:wght@400;500&family=Noto+Serif+TC:wght@400;500&family=Noto+Sans+SC:wght@300;400;500&family=Noto+Sans+TC:wght@300;400;500&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const t = useT();
  const [season, setSeason] = useState<"spring" | "summer" | "autumn" | "winter">("winter");

  const pillars = [
    {
      num: "01",
      label: t("pillar.stay.label"),
      title: t("pillar.stay.title"),
      body: t("pillar.stay.body"),
      to: "/stay" as const,
    },
    {
      num: "02",
      label: t("pillar.travel.label"),
      title: t("pillar.travel.title"),
      body: t("pillar.travel.body"),
      to: "/private-charter" as const,
    },
    {
      num: "03",
      label: t("pillar.explore.label"),
      title: t("pillar.explore.title"),
      body: t("pillar.explore.body"),
      to: "/experiences" as const,
    },
    {
      num: "04",
      label: t("pillar.snow.label"),
      title: t("pillar.snow.title"),
      body: t("pillar.snow.body"),
      to: "/ski-school" as const,
    },
  ];

  const properties = [
    {
      name: t("property.sanctuary.name"),
      location: t("property.sanctuary.location"),
      season: t("estate.season.year"),
      image: propertySanctuary,
      rooms: t("property.sanctuary.rooms"),
    },
    {
      name: t("property.asahidake.name"),
      location: t("property.asahidake.location"),
      season: t("estate.season.autumnWinter"),
      image: propertyAsahidake,
      rooms: t("property.asahidake.rooms"),
    },
    {
      name: t("property.otaru.name"),
      location: t("property.otaru.location"),
      season: t("estate.season.springAutumn"),
      image: propertyOtaru,
      rooms: t("property.otaru.rooms"),
    },
  ];

  const seasons = [
    { key: "spring" as const, label: t("season.spring.label"), title: t("season.spring.title"), copy: t("season.spring.copy") },
    { key: "summer" as const, label: t("season.summer.label"), title: t("season.summer.title"), copy: t("season.summer.copy") },
    { key: "autumn" as const, label: t("season.autumn.label"), title: t("season.autumn.title"), copy: t("season.autumn.copy") },
    { key: "winter" as const, label: t("season.winter.label"), title: t("season.winter.title"), copy: t("season.winter.copy") },
  ];

  const active = seasons.find((s) => s.key === season) ?? seasons[3];

  return (
    <div className="min-h-screen bg-birch text-ink">
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden">
        <img
          src={heroYotei}
          alt="羊蹄山初雪,金黄白桦林前景"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/10 to-ink/60" />

        <div className="relative z-10 mx-auto grid h-full max-w-[1600px] grid-rows-[1fr_auto] px-6 pt-32 pb-16 md:px-12">
          <div className="self-end max-w-3xl rise">
            <p className="eyebrow text-birch/80">
              <span className="rule-line bg-birch/80" />
              {t("hero.eyebrow")}
            </p>
            <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,6.5rem)] font-light leading-[1.05] text-birch">
              {t("hero.title1")}
              <br />
              <span className="italic">{t("hero.title2")}</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-birch/85 md:text-lg">
              {t("hero.body")}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/stay"
                search={(prev: Record<string, unknown>) => prev}
                className="hairline-btn-solid bg-birch text-ink border-birch"
              >
                <span>{t("hero.cta1")}</span>
              </Link>
              <Link
                to="/private-charter"
                search={(prev: Record<string, unknown>) => prev}
                className="hairline-btn text-birch border-birch/70 hover:bg-birch hover:text-ink"
              >
                <span>{t("hero.cta2")}</span>
              </Link>
            </div>
          </div>

          <div className="mt-12 hidden items-end justify-between text-birch/70 md:flex">
            <p className="max-w-xs text-xs uppercase tracking-[0.28em]">
              {t("hero.scroll")}
            </p>
            <div className="flex gap-12 text-xs uppercase tracking-[0.22em]">
              <span>43.0°N</span>
              <span>142.0°E</span>
              <span>{t("hero.locationLabel")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONCIERGE BAR */}
      <section className="relative -mt-12 px-6 md:px-12">
        <div className="mx-auto max-w-[1400px] border border-ink/15 bg-alpine shadow-[0_30px_80px_-40px_rgba(26,28,30,0.35)]">
          <div className="grid items-center gap-px bg-ink/10 md:grid-cols-[1fr_1fr_1fr_auto]">
            <ConciergeField label={t("concierge.where")} value={t("concierge.whereVal")} hint={t("concierge.whereHint")} />
            <ConciergeField label={t("concierge.when")} value={t("concierge.whenVal")} hint={t("concierge.whenHint")} />
            <ConciergeField label={t("concierge.party")} value={t("concierge.partyVal")} hint={t("concierge.partyHint")} />
            <Link
              to="/reconnect"
              search={(prev: Record<string, unknown>) => prev}
              className="hairline-btn-solid w-full justify-center bg-ink text-birch md:w-auto md:px-10"
            >
              <span>{t("concierge.begin")}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="px-6 py-32 md:px-12 md:py-48">
        <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-[1fr_2fr]">
          <p className="eyebrow text-moss">
            <span className="rule-line" />
            {t("mission.eyebrow")}
          </p>
          <div>
            <h2 className="font-display text-3xl leading-[1.2] text-ink md:text-5xl">
              {t("mission.titlePre")}{" "}
              <span className="italic text-moss">{t("mission.titleHighlight")}</span>{" "}
              {t("mission.titlePost")}
            </h2>
            <div className="mt-12 grid gap-10 text-sm leading-relaxed text-ink/75 md:grid-cols-2">
              <p>{t("mission.body1")}</p>
              <p>{t("mission.body2")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-silt/60 px-6 py-32 md:px-12 md:py-40">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">
                <span className="rule-line" />
                {t("pillars.eyebrow")}
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.1] md:text-6xl">
                {t("pillars.title")}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-ink/70">
              {t("pillars.subtitle")}
            </p>
          </div>

          <div className="grid gap-px bg-ink/10 md:grid-cols-2">
            {pillars.map((p) => (
              <Link
                key={p.num}
                to={p.to}
                search={(prev: Record<string, unknown>) => prev}
                className="group relative grid grid-cols-[auto_1fr] gap-6 bg-birch p-10 transition-colors hover:bg-ink hover:text-birch md:p-14"
              >
                <span className="font-display text-2xl text-moss transition-colors group-hover:text-birch/60">
                  {p.num}
                </span>
                <div>
                  <p className="eyebrow text-moss transition-colors group-hover:text-birch/60">
                    {p.label}
                  </p>
                  <h3 className="mt-3 font-display text-3xl md:text-4xl">{p.title}</h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/70 transition-colors group-hover:text-birch/70">
                    {p.body}
                  </p>
                  <p className="mt-8 text-[0.72rem] uppercase tracking-[0.24em]">
                    {t("common.discover")} →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEASONAL HIGHLIGHTS */}
      <section className="px-6 py-32 md:px-12 md:py-40">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-12 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="eyebrow">
                <span className="rule-line" />
                {t("season.eyebrow")}
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.1] md:text-6xl">
                {t("season.title")}
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {seasons.map((s) => (
                <button
                  key={s.key}
                  onClick={() => setSeason(s.key)}
                  className={`px-5 py-3 text-[0.72rem] uppercase tracking-[0.22em] transition-all ${
                    season === s.key
                      ? "bg-ink text-birch"
                      : "border border-ink/20 text-ink/70 hover:border-ink"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
            <div className="relative aspect-[4/3] overflow-hidden bg-ink/5">
              <img
                key={season}
                src={season === "winter" ? seasonWinter : heroYotei}
                alt="北海道四季景观"
                width={1600}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover fade-slow"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-display text-6xl italic text-moss md:text-8xl">
                {active.label}.
              </p>
              <h3 className="mt-6 font-display text-3xl leading-tight md:text-4xl">
                {active.title}
              </h3>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink/75">
                {active.copy}
              </p>
              <Link
                to="/experiences"
                search={(prev: Record<string, unknown>) => prev}
                className="mt-10 inline-flex w-fit items-center gap-3 border-b border-ink pb-2 text-[0.72rem] uppercase tracking-[0.22em]"
              >
                {t("season.cta")} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTIES */}
      <section className="bg-ink px-6 py-32 text-birch md:px-12 md:py-40">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-birch/60">
                <span className="rule-line bg-birch/60" />
                {t("estate.eyebrow")}
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.1] md:text-6xl">
                {t("estate.title")}
              </h2>
            </div>
            <Link
              to="/hotels"
              search={(prev: Record<string, unknown>) => prev}
              className="hairline-btn border-birch/60 text-birch hover:bg-birch hover:text-ink w-fit"
            >
              <span>{t("estate.cta")}</span>
            </Link>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {properties.map((p) => (
              <article key={p.name} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-birch/5">
                  <img
                    src={p.image}
                    alt={`${p.name} · ${p.location}`}
                    width={1200}
                    height={1500}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-5 top-5 bg-birch px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.22em] text-ink">
                    {p.season}
                  </span>
                </div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.22em] text-birch/55">
                      {p.location}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-birch">{p.name}</h3>
                    <p className="mt-2 text-sm text-birch/65">{p.rooms}</p>
                  </div>
                  <span className="shrink-0 font-display text-xl text-birch/60 transition-transform duration-500 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSPORTATION */}
      <section className="px-6 py-32 md:px-12 md:py-48">
        <div className="mx-auto grid max-w-[1600px] items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="relative aspect-[4/3] overflow-hidden bg-silt">
            <img
              src={alphardSnow}
              alt="北海道雪路上的黑色丰田阿尔法"
              width={1600}
              height={1200}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">
              <span className="rule-line" />
              {t("transport.eyebrow")}
            </p>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] md:text-6xl">
              {t("transport.title1")}
              <br />
              <span className="italic text-moss">{t("transport.title2")}</span>
            </h2>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-ink/75">
              {t("transport.body")}
            </p>
            <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-ink/15 pt-10">
              {[
                [t("transport.stat1Val"), t("transport.stat1Label")],
                [t("transport.stat2Val"), t("transport.stat2Label")],
                [t("transport.stat3Val"), t("transport.stat3Label")],
                [t("transport.stat4Val"), t("transport.stat4Label")],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="font-display text-4xl text-ink md:text-5xl">{n}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.22em] text-moss">{l}</p>
                </div>
              ))}
            </dl>
            <Link
              to="/private-charter"
              search={(prev: Record<string, unknown>) => prev}
              className="mt-12 hairline-btn-solid"
            >
              <span>{t("transport.cta")}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-silt/60 px-6 py-32 md:px-12 md:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">
            <span className="rule-line" />
            {t("testimonial.eyebrow")}
          </p>
          <blockquote className="mt-10 font-display text-3xl leading-[1.3] italic text-ink md:text-5xl">
            {t("testimonial.quote")}
          </blockquote>
          <p className="mt-10 text-xs uppercase tracking-[0.22em] text-moss">
            {t("testimonial.author")}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-32 md:px-12 md:py-40">
        <div className="mx-auto grid max-w-[1400px] gap-16 border-t border-ink/15 pt-20 md:grid-cols-[2fr_1fr] md:items-end">
          <h2 className="font-display text-4xl leading-[1.05] md:text-7xl">
            {t("cta.title1")}
            <br />
            <span className="italic text-moss">{t("cta.title2")}</span>
          </h2>
          <div className="flex flex-col gap-4">
            <Link
              to="/reconnect"
              search={(prev: Record<string, unknown>) => prev}
              className="hairline-btn-solid"
            >
              <span>{t("cta.speak")}</span>
            </Link>
            <Link
              to="/stay"
              search={(prev: Record<string, unknown>) => prev}
              className="hairline-btn text-ink border-ink/40"
            >
              <span>{t("cta.browse")}</span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function ConciergeField({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <button className="group flex flex-col items-start gap-2 bg-alpine px-8 py-7 text-left transition-colors hover:bg-birch">
      <span className="text-[0.65rem] uppercase tracking-[0.28em] text-moss">
        {label}
      </span>
      <span className="font-display text-xl text-ink">{value}</span>
      <span className="text-[0.65rem] uppercase tracking-[0.22em] text-ink/40">
        {hint} ▾
      </span>
    </button>
  );
}
