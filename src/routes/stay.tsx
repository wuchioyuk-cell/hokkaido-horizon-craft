import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useT } from "@/lib/i18n";
import orientalTwinRefined from "@/assets/oriental-twin-refined.png";
import shinkaRoomRefined from "@/assets/shinka-room-refined.png";

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

const CONTACT_EMAIL = "jonesapporo@gmail.com";
const HOTEL_PHONE = "011-206-1360";
const ORIENTAL_AGODA_URL =
  "https://www.agoda.com/zh-cn/sapporo-oriental-hotel/hotel/sapporo-jp.html";
const SHINKA_AGODA_URL =
  "https://www.agoda.com/zh-cn/shinka-hotel-susukino/hotel/all/sapporo-jp.html";

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

  const rateRows = [
    {
      period: "4/1 - 4/28",
      day: "平日",
      orientalTwin: "¥4,300",
      orientalTriple: "¥3,300",
      shinkaSd: "¥4,800",
      shinkaTwin03: "¥5,300",
      shinkaTwin0102: "¥5,800",
    },
    {
      period: "4/29 - 5/6",
      day: "全日",
      orientalTwin: "¥9,300",
      orientalTriple: "¥8,300",
      shinkaSd: "¥9,800",
      shinkaTwin03: "¥10,300",
      shinkaTwin0102: "¥10,800",
      highlight: true,
    },
    {
      period: "5/7 - 5/31",
      day: "平日",
      orientalTwin: "¥6,300",
      orientalTriple: "¥5,300",
      shinkaSd: "¥6,800",
      shinkaTwin03: "¥7,300",
      shinkaTwin0102: "¥7,800",
    },
    {
      period: "6/1 - 6/9",
      day: "平日",
      orientalTwin: "¥7,300",
      orientalTriple: "¥6,300",
      shinkaSd: "¥7,800",
      shinkaTwin03: "¥8,300",
      shinkaTwin0102: "¥8,800",
    },
    {
      period: "6/10 - 6/14",
      day: "全日 / YOSAKOI",
      orientalTwin: "¥8,300",
      orientalTriple: "¥7,300",
      shinkaSd: "¥8,800",
      shinkaTwin03: "¥9,300",
      shinkaTwin0102: "¥9,800",
      highlight: true,
    },
    {
      period: "6/15 - 6/30",
      day: "平日",
      orientalTwin: "¥7,300",
      orientalTriple: "¥6,300",
      shinkaSd: "¥7,800",
      shinkaTwin03: "¥8,300",
      shinkaTwin0102: "¥8,800",
    },
    {
      period: "7月",
      day: "平日",
      orientalTwin: "¥8,300",
      orientalTriple: "¥7,300",
      shinkaSd: "¥8,800",
      shinkaTwin03: "¥9,300",
      shinkaTwin0102: "¥9,800",
    },
    {
      period: "8/1 - 8/12",
      day: "平日",
      orientalTwin: "¥8,300",
      orientalTriple: "¥7,300",
      shinkaSd: "¥8,800",
      shinkaTwin03: "¥9,300",
      shinkaTwin0102: "¥9,800",
    },
    {
      period: "8/13 - 8/16",
      day: "全日 / お盆",
      orientalTwin: "¥9,300",
      orientalTriple: "¥8,300",
      shinkaSd: "¥9,800",
      shinkaTwin03: "¥10,300",
      shinkaTwin0102: "¥10,800",
      highlight: true,
    },
    {
      period: "8/17 - 8/31",
      day: "平日",
      orientalTwin: "¥8,300",
      orientalTriple: "¥7,300",
      shinkaSd: "¥8,800",
      shinkaTwin03: "¥9,300",
      shinkaTwin0102: "¥9,800",
    },
    {
      period: "9月",
      day: "平日",
      orientalTwin: "¥8,300",
      orientalTriple: "¥7,300",
      shinkaSd: "¥8,800",
      shinkaTwin03: "¥9,300",
      shinkaTwin0102: "¥9,800",
    },
    {
      period: "10月",
      day: "平日",
      orientalTwin: "¥6,300",
      orientalTriple: "¥5,300",
      shinkaSd: "¥6,800",
      shinkaTwin03: "¥7,300",
      shinkaTwin0102: "¥7,800",
    },
    {
      period: "11月",
      day: "平日",
      orientalTwin: "¥5,300",
      orientalTriple: "¥4,300",
      shinkaSd: "¥5,800",
      shinkaTwin03: "¥6,300",
      shinkaTwin0102: "¥6,800",
    },
    {
      period: "12/1 - 12/25",
      day: "平日",
      orientalTwin: "¥7,300",
      orientalTriple: "¥6,300",
      shinkaSd: "¥7,800",
      shinkaTwin03: "¥8,300",
      shinkaTwin0102: "¥8,800",
    },
    {
      period: "12/26 - 1/3",
      day: "全日 / 年末年始",
      orientalTwin: "¥9,300",
      orientalTriple: "¥8,300",
      shinkaSd: "¥9,800",
      shinkaTwin03: "¥10,300",
      shinkaTwin0102: "¥10,800",
      highlight: true,
    },
    {
      period: "1/4 - 1/31",
      day: "平日",
      orientalTwin: "¥7,300",
      orientalTriple: "¥6,300",
      shinkaSd: "¥7,800",
      shinkaTwin03: "¥8,300",
      shinkaTwin0102: "¥8,800",
    },
    {
      period: "2/1 - 2/3",
      day: "平日",
      orientalTwin: "¥9,300",
      orientalTriple: "¥8,300",
      shinkaSd: "¥9,800",
      shinkaTwin03: "¥10,300",
      shinkaTwin0102: "¥10,800",
    },
    {
      period: "2/4 - 2/11",
      day: "全日 / 雪祭り",
      orientalTwin: "¥18,300",
      orientalTriple: "¥17,300",
      shinkaSd: "¥18,800",
      shinkaTwin03: "¥19,300",
      shinkaTwin0102: "¥19,800",
      highlight: true,
    },
    {
      period: "2/12 - 2/末",
      day: "平日",
      orientalTwin: "¥9,300",
      orientalTriple: "¥8,300",
      shinkaSd: "¥9,800",
      shinkaTwin03: "¥10,300",
      shinkaTwin0102: "¥10,800",
    },
    {
      period: "3月",
      day: "平日",
      orientalTwin: "¥5,300",
      orientalTriple: "¥4,300",
      shinkaSd: "¥5,800",
      shinkaTwin03: "¥6,300",
      shinkaTwin0102: "¥6,800",
    },
  ];

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
            两处住处都在札幌市中心。一处靠近中岛公园，安静、方便；一处在薄野中心，适合想把城市夜晚留在步行范围内的客人。
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
                src={orientalTwinRefined}
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
                        <p className="font-display text-lg">{t(`room.oriental.${r.key}`)}</p>
                        <p className="mt-0.5 text-xs text-ink/55">
                          {t(`room.oriental.${r.key}.desc`)}
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-4 text-right">
                        <a
                          href={ORIENTAL_AGODA_URL}
                          target="_blank"
                          rel="noreferrer"
                          className="hairline-btn-solid shrink-0 text-xs"
                        >
                          <span>查看预订</span>
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
                        <p className="font-display text-lg">{t(`room.shinka.${r.key}`)}</p>
                        <p className="mt-0.5 text-xs text-ink/55">
                          {t(`room.shinka.${r.key}.desc`)}
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-4 text-right">
                        <a
                          href={SHINKA_AGODA_URL}
                          target="_blank"
                          rel="noreferrer"
                          className="hairline-btn-solid shrink-0 text-xs"
                        >
                          <span>查看预订</span>
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
                src={shinkaRoomRefined}
                alt={t("property.shinka.name")}
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING FLOW */}
      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 grid gap-8 md:grid-cols-[1fr_1.4fr]">
            <p className="eyebrow">
              <span className="rule-line" />
              Agoda
            </p>
            <div>
              <h2 className="font-display text-4xl leading-tight md:text-6xl">
                实时房价和规则，
                <span className="text-moss"> 以 Agoda 页面为准。</span>
              </h2>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink/68 md:text-base">
                官网先负责说明两家住宿的气质、位置和适合人群。具体价格、库存、取消规则和入住细节，请以
                Agoda 平台页面为准。
              </p>
            </div>
          </div>

          <div className="grid gap-px bg-ink/10 md:grid-cols-3">
            {[
              [
                "查看实时房价",
                "两家住宿的价格、空房和取消规则通过 Agoda 页面承接，避免官网价格过期。",
              ],
              [
                "机场接送优惠",
                "预订 Oriental Hotel 或 Shinka Hotel 的客人，可同步咨询新千岁机场接送优惠。",
              ],
              ["团队餐说明", "Oriental Hotel 餐厅可承接团餐；暂不接待个人散客餐食。"],
            ].map(([label, value]) => (
              <div key={label} className="bg-alpine p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-moss">{label}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink/72">{value}</p>
              </div>
            ))}
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
            不确定哪一间更适合？
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink/70">
            把日期、人数和大致行程告诉我们就好。礼宾会根据你的停留方式，帮你推荐更合适的酒店与房型。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-ink/65">
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <a href={`tel:${HOTEL_PHONE}`}>{HOTEL_PHONE}</a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("住宿咨询")}`}
              className="hairline-btn-solid"
            >
              <span>写邮件咨询</span>
            </a>
            <Link
              to="/reconnect"
              search={(prev: Record<string, unknown>) => prev}
              className="hairline-btn text-ink border-ink/40"
            >
              <span>联系礼宾</span>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
