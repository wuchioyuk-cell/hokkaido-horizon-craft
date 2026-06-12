import { Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export function ComingSoon({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="min-h-screen bg-birch text-ink">
      <SiteHeader />
      <section className="px-6 pt-48 pb-32 md:px-12 md:pt-56 md:pb-48">
        <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-[1fr_2fr]">
          <p className="eyebrow">
            <span className="rule-line" />
            {eyebrow}
          </p>
          <div>
            <h1 className="font-display text-5xl leading-[1.05] md:text-7xl">
              {title}
            </h1>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink/75">
              {body}
            </p>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-moss">
              This chapter is being composed. In the meantime, our concierge
              already holds every detail — speak with us directly.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link to="/reconnect" className="hairline-btn-solid">
                <span>Speak With a Concierge</span>
              </Link>
              <Link to="/" className="hairline-btn text-ink border-ink/40">
                <span>Return Home</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
