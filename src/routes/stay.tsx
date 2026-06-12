import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useT } from "@/lib/i18n";
import propertyOriental from "@/assets/property-oriental.jpg";
import propertyShinka from "@/assets/property-shinka.jpg";

export const Route = createFileRoute("/stay")({
  head: () => ({
    meta: [
      { title: "住宿 — Hokkaidō Horizon" },
      {
        name: "description",
        content: "浏览札幌东方酒店与 Shinka Hotel Susukino 的房型，直接咨询礼宾预订。",
      },
    ],
  }),
  component: Stay,
});

const CONTACT_EMAIL = "jone180312@gmail.com";

function Stay() {
  const t = useT();

  const orientalRooms = [
    { key: "tripleKitchen", guests: 3 },
    { key: "tripleKing", guests: 3 },
    { key: "japaneseTriple", guests: 3 },
    { key: "deluxeDouble", guests: 2 },
    { key: "standardDouble", guests: 2 },
  ];

  const shinkaRooms = [
    { key: "smallDouble", guests: 2 },
    { key: "largeDouble", guests: 2 },
    { key: "single", guests: 1 },
  ];

  const mailto = (hotel: string, room: string) =>
    `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`房型咨询：${hotel} — ${room}`)}&body=${encodeURIComponent("您好，我对以下房型感兴趣：\n\n酒店：")}`;

  return (
    <div className="min-h-screen bg-birch text-ink">
      <SiteHeader />

      {/* HERO */}
      <section className="px-6 pt-40 pb-20 md:px-12 md:pt-52 md:pb-32">
        <div className="mx-auto max-w-[1400px]">
          <p className="eyebrow">
            <span className="rule-line" />
            {t("nav.stay")}
          </p>
          <h1 className="mt-5 font-display text-4xl leading-[1.05] md:text-7xl">
            {t("estate.title")}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 md:text-lg">
            两处位于札幌市中心的居所——从热闹的薄野到安静的中岛公园，地铁步行可达。
          </p>
        </div>
      </section>

      {/* ORIENTAL HOTEL */}
      <section className="px-6 pb-20 md:px-12 md:pb-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            {/* Hotel image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-silt">
              <img
                src={propertyOriental}
                alt={t("property.oriental.name")}
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Hotel info */}
            <div className="flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.22em] text-moss">
                {t("property.oriental.location")}
              </p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">
                {t("property.oriental.name")}
              </h2>
              <p className="mt-4 text-sm text-ink/70">{t("property.oriental.rooms")}</p>

              <div className="mt-8 border-t border-ink/10 pt-8">
                <h3 className="font-display text-2xl">{t("room.oriental.heading")}</h3>
                <div className="mt-6 space-y-4">
                  {orientalRooms.map((r) => (
                    <div
                      key={r.key}
                      className="group flex items-center justify-between gap-4 border-b border-ink/8 pb-4"
                    >
                      <div className="min-w-0">
                        <p className="font-display text-lg">
                          {t(`room.oriental.${r.key}`)}
                        </p>
                        <p className="mt-0.5 text-xs text-ink/55">
                          {t(`room.oriental.${r.key}.desc`)}
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-4 text-right">
                        <span className="text-xs uppercase tracking-[0.18em] text-moss">
                          {`${t("room.label.guestsPrefix")}${r.guests}${t("room.label.guests")}`}
                        </span>
                        <a
                          href={mailto(
                            t("property.oriental.name"),
                            t(`room.oriental.${r.key}`),
                          )}
                          className="hairline-btn-solid shrink-0 text-xs"
                        >
                          <span>{t("room.cta")}</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHINKA HOTEL */}
      <section className="bg-silt/40 px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
            {/* Hotel info */}
            <div className="flex flex-col justify-center lg:order-2">
              <p className="text-xs uppercase tracking-[0.22em] text-moss">
                {t("property.shinka.location")}
              </p>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">
                {t("property.shinka.name")}
              </h2>
              <p className="mt-4 text-sm text-ink/70">{t("property.shinka.rooms")}</p>

              <div className="mt-8 border-t border-ink/10 pt-8">
                <h3 className="font-display text-2xl">{t("room.shinka.heading")}</h3>
                <div className="mt-6 space-y-4">
                  {shinkaRooms.map((r) => (
                    <div
                      key={r.key}
                      className="group flex items-center justify-between gap-4 border-b border-ink/8 pb-4"
                    >
                      <div className="min-w-0">
                        <p className="font-display text-lg">
                          {t(`room.shinka.${r.key}`)}
                        </p>
                        <p className="mt-0.5 text-xs text-ink/55">
                          {t(`room.shinka.${r.key}.desc`)}
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-4 text-right">
                        <span className="text-xs uppercase tracking-[0.18em] text-moss">
                          {`${t("room.label.guestsPrefix")}${r.guests}${t("room.label.guests")}`}
                        </span>
                        <a
                          href={mailto(
                            t("property.shinka.name"),
                            t(`room.shinka.${r.key}`),
                          )}
                          className="hairline-btn-solid shrink-0 text-xs"
                        >
                          <span>{t("room.cta")}</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hotel image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-silt lg:order-1">
              <img
                src={propertyShinka}
                alt={t("property.shinka.name")}
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">
            <span className="rule-line" />
            直接联系礼宾
          </p>
          <h2 className="mt-6 font-display text-3xl leading-tight md:text-5xl">
            不确定选哪个房型？
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink/70">
            告诉我们日期和人数，礼宾会根据您的需求推荐最适合的房型——通常几小时内回复。
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("住宿咨询")}`}
              className="hairline-btn-solid"
            >
              <span>邮件咨询</span>
            </a>
            <Link
              to="/reconnect"
              search={(prev: Record<string, unknown>) => prev}
              className="hairline-btn text-ink border-ink/40"
            >
              <span>留言表单</span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
