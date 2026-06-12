import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useT } from "@/lib/i18n";

type StubSlug =
  | "stay"
  | "hotels"
  | "vacationRentals"
  | "travel"
  | "privateCharter"
  | "airportTransfers"
  | "explore"
  | "experiences"
  | "skiSchool"
  | "ourStory"
  | "reconnect";

export function ComingSoon({ slug }: { slug: StubSlug }) {
  const t = useT();
  return (
    <div className="min-h-screen bg-birch text-ink">
      <SiteHeader />
      <section className="px-6 pt-48 pb-32 md:px-12 md:pt-56 md:pb-48">
        <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-[1fr_2fr]">
          <p className="eyebrow">
            <span className="rule-line" />
            {t(`stub.${slug}.eyebrow`)}
          </p>
          <div>
            <h1 className="font-display text-5xl leading-[1.05] md:text-7xl">
              {t(`stub.${slug}.title`)}
            </h1>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink/75">
              {t(`stub.${slug}.body`)}
            </p>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-moss">
              {t("common.comingSoonNote")}
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                to="/reconnect"
                search={(prev: Record<string, unknown>) => prev}
                className="hairline-btn-solid"
              >
                <span>{t("common.speakConcierge")}</span>
              </Link>
              <Link
                to="/"
                search={(prev: Record<string, unknown>) => prev}
                className="hairline-btn text-ink border-ink/40"
              >
                <span>{t("common.returnHome")}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
