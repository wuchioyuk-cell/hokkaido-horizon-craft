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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hokkaidō Horizon — Hotels, Private Transit & Curated Journeys" },
      {
        name: "description",
        content:
          "The definitive gateway to Hokkaido. Owned boutique stays, a private Alphard fleet, and local masters of all four seasons — from Niseko to Biei.",
      },
      { property: "og:title", content: "Hokkaidō Horizon — In Its Purest Element" },
      {
        property: "og:description",
        content:
          "Boutique hotels, private charters, and four-season expeditions across Japan's northern island.",
      },
      { property: "og:image", content: heroYotei },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroYotei },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

const pillars = [
  {
    num: "01",
    label: "Stay",
    title: "Boutique Hotels & Private Chalets",
    body: "Owned-and-operated properties from the birch forests of Niseko to the stone-walled retreats of Otaru.",
    to: "/stay" as const,
  },
  {
    num: "02",
    label: "Travel",
    title: "The Alphard Fleet",
    body: "A first-class airline experience on land. Winter-rated, professionally chauffeured, all-island.",
    to: "/private-charter" as const,
  },
  {
    num: "03",
    label: "Explore",
    title: "Private Seasonal Expeditions",
    body: "Master guides who unlock backcountry powder, summer mist on the calderas, and amber autumn canopies.",
    to: "/experiences" as const,
  },
  {
    num: "04",
    label: "Snow",
    title: "Elite Ski Instruction",
    body: "Multilingual certified instructors. Powder, backcountry, progression — for soloists and families alike.",
    to: "/ski-school" as const,
  },
];

const properties = [
  {
    name: "The Sanctuary Villa",
    location: "Niseko · Hirafu",
    season: "Year-round",
    image: propertySanctuary,
    rooms: "4 Suites · Private Onsen",
  },
  {
    name: "Asahidake Lodge",
    location: "Daisetsuzan",
    season: "Autumn · Winter",
    image: propertyAsahidake,
    rooms: "8 Suites · Forest Sauna",
  },
  {
    name: "Otaru Retreat",
    location: "Otaru Coast",
    season: "Spring · Autumn",
    image: propertyOtaru,
    rooms: "6 Suites · Stone Bath",
  },
];

const seasons = [
  {
    key: "spring",
    label: "Spring",
    title: "The Melting Quiet",
    copy: "Earth surfaces beneath retreating snow. Cherry begins on the coast while peaks hold their white.",
  },
  {
    key: "summer",
    label: "Summer",
    title: "The Long Green Horizon",
    copy: "Lavender fields, mist-shrouded lakes, and the bright agricultural openness of Biei and Furano.",
  },
  {
    key: "autumn",
    label: "Autumn",
    title: "The Amber Canopy",
    copy: "Maple and birch ignite around volcanic steam. Harvest, hot springs, and the year's clearest light.",
  },
  {
    key: "winter",
    label: "Winter",
    title: "The Deepening Dusk",
    copy: "Witness Hokkaido's transition into absolute white. Architectural silhouettes, world-class powder.",
  },
];

function Index() {
  const [season, setSeason] = useState("winter");
  const active = seasons.find((s) => s.key === season) ?? seasons[3];

  return (
    <div className="min-h-screen bg-birch text-ink">
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden">
        <img
          src={heroYotei}
          alt="Mount Yotei dusted with first snow, framed by golden birch leaves at dusk."
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/10 to-ink/60" />

        <div className="relative z-10 mx-auto grid h-full max-w-[1600px] grid-rows-[1fr_auto] px-6 pt-32 pb-16 md:px-12">
          <div className="self-end max-w-3xl rise">
            <p className="eyebrow text-birch/80">
              <span className="rule-line bg-birch/80" />
              Est. on the 43rd parallel
            </p>
            <h1 className="mt-6 font-display text-[clamp(2.6rem,7vw,6.5rem)] font-light leading-[1.02] text-birch">
              Hokkaido in its
              <br />
              <span className="italic">purest element.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-birch/85 md:text-lg">
              The keys to the island's finest stays. The fleet that moves you
              across its changing terrains. The local hands that unlock its
              four seasons. End to end — ours.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/stay" className="hairline-btn-solid bg-birch text-ink border-birch">
                <span>Experience Stay</span>
              </Link>
              <Link
                to="/private-charter"
                className="hairline-btn text-birch border-birch/70 hover:bg-birch hover:text-ink"
              >
                <span>Plan Transit</span>
              </Link>
            </div>
          </div>

          <div className="mt-12 hidden items-end justify-between text-birch/70 md:flex">
            <p className="max-w-xs text-xs uppercase tracking-[0.28em]">
              Scroll · 滑り降りる
            </p>
            <div className="flex gap-12 text-xs uppercase tracking-[0.22em]">
              <span>43.0°N</span>
              <span>142.0°E</span>
              <span>Hokkaidō, Japan</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONCIERGE BAR */}
      <section className="relative -mt-12 px-6 md:px-12">
        <div className="mx-auto max-w-[1400px] border border-ink/15 bg-alpine shadow-[0_30px_80px_-40px_rgba(26,28,30,0.35)]">
          <div className="grid items-center gap-px bg-ink/10 md:grid-cols-[1fr_1fr_1fr_auto]">
            <ConciergeField label="Where" value="Niseko" hint="Stay" />
            <ConciergeField label="When" value="Feb 14 — Feb 21" hint="Dates" />
            <ConciergeField label="Party" value="2 Guests" hint="Composition" />
            <Link
              to="/reconnect"
              className="hairline-btn-solid w-full justify-center bg-ink text-birch md:w-auto md:px-10"
            >
              <span>Begin</span>
            </Link>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="px-6 py-32 md:px-12 md:py-48">
        <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-[1fr_2fr]">
          <p className="eyebrow text-moss">
            <span className="rule-line" />
            Our Position
          </p>
          <div>
            <h2 className="font-display text-3xl leading-[1.2] text-ink md:text-5xl">
              We do not simply book journeys. We{" "}
              <span className="italic text-moss">own</span> the accommodations,
              steer the fleet, and guide your path across our home island.
            </h2>
            <div className="mt-12 grid gap-10 text-sm leading-relaxed text-ink/75 md:grid-cols-2">
              <p>
                For three decades, the same families and crews have lived these
                roads. Where mass-market platforms aggregate, we cultivate —
                one estate, one chauffeur, one mountain at a time.
              </p>
              <p>
                The result is a singular, continuous ecosystem: from the
                Alphard at New Chitose to the backcountry guide at first light,
                no handoff is ever to a stranger.
              </p>
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
                Four Pillars
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.1] md:text-6xl">
                An island, fully composed.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-ink/70">
              Each pillar is owned and operated — never resold, never
              outsourced. Together they form a single instrument tuned to your
              stay.
            </p>
          </div>

          <div className="grid gap-px bg-ink/10 md:grid-cols-2">
            {pillars.map((p) => (
              <Link
                key={p.num}
                to={p.to}
                className="group relative grid grid-cols-[auto_1fr] gap-6 bg-birch p-10 transition-colors hover:bg-ink hover:text-birch md:p-14"
              >
                <span className="font-display text-2xl text-moss transition-colors group-hover:text-birch/60">
                  {p.num}
                </span>
                <div>
                  <p className="eyebrow text-moss transition-colors group-hover:text-birch/60">
                    {p.label}
                  </p>
                  <h3 className="mt-3 font-display text-3xl md:text-4xl">
                    {p.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/70 transition-colors group-hover:text-birch/70">
                    {p.body}
                  </p>
                  <p className="mt-8 text-[0.72rem] uppercase tracking-[0.24em]">
                    Discover →
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
                The Four-Season Rule
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.1] md:text-6xl">
                One island, four entirely different countries.
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
                alt="Hokkaido seasonal landscape"
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
                className="mt-10 inline-flex w-fit items-center gap-3 border-b border-ink pb-2 text-[0.72rem] uppercase tracking-[0.22em]"
              >
                See the season's itineraries →
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
                The Estate Register
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.1] md:text-6xl">
                Three keys, three landscapes.
              </h2>
            </div>
            <Link
              to="/hotels"
              className="hairline-btn border-birch/60 text-birch hover:bg-birch hover:text-ink w-fit"
            >
              <span>All Properties</span>
            </Link>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            {properties.map((p) => (
              <article key={p.name} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-birch/5">
                  <img
                    src={p.image}
                    alt={`${p.name} in ${p.location}`}
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
                    <h3 className="mt-2 font-display text-2xl text-birch">
                      {p.name}
                    </h3>
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
              alt="A black Toyota Alphard on a snow-covered Hokkaido road"
              width={1600}
              height={1200}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">
              <span className="rule-line" />
              Movement
            </p>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] md:text-6xl">
              First class.
              <br />
              <span className="italic text-moss">Across all terrains.</span>
            </h2>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-ink/75">
              A purpose-built fleet of high-spec Toyota Alphards and Hiace
              vans, winter-rated and chauffeured by drivers who have run these
              passes since long before the first ski lift.
            </p>
            <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-ink/15 pt-10">
              {[
                ["28", "Vehicles in fleet"],
                ["12", "Languages spoken"],
                ["365", "Days operating"],
                ["0", "Subcontractors"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="font-display text-4xl text-ink md:text-5xl">
                    {n}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.22em] text-moss">
                    {l}
                  </p>
                </div>
              ))}
            </dl>
            <Link to="/private-charter" className="mt-12 hairline-btn-solid">
              <span>Reserve the Fleet</span>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-silt/60 px-6 py-32 md:px-12 md:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow">
            <span className="rule-line" />
            From a guest of three winters
          </p>
          <blockquote className="mt-10 font-display text-3xl leading-[1.3] italic text-ink md:text-5xl">
            “A flawless ecosystem. From the airport pickup to our backcountry
            guide, every hand felt like one continuous resort experience.”
          </blockquote>
          <p className="mt-10 text-xs uppercase tracking-[0.22em] text-moss">
            M. Lindqvist — Stockholm
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-32 md:px-12 md:py-40">
        <div className="mx-auto grid max-w-[1400px] gap-16 border-t border-ink/15 pt-20 md:grid-cols-[2fr_1fr] md:items-end">
          <h2 className="font-display text-4xl leading-[1.05] md:text-7xl">
            Begin a journey
            <br />
            <span className="italic text-moss">on the 43rd parallel.</span>
          </h2>
          <div className="flex flex-col gap-4">
            <Link to="/reconnect" className="hairline-btn-solid">
              <span>Speak With a Concierge</span>
            </Link>
            <Link to="/stay" className="hairline-btn text-ink border-ink/40">
              <span>Browse the Estate Register</span>
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
