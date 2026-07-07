import { createFileRoute, Link } from "@tanstack/react-router";
import heroYotei from "@/assets/hero-yotei.jpg";
import orientalDoubleRefined from "@/assets/oriental-double-refined.png";
import orientalExteriorRefined from "@/assets/oriental-exterior-refined.png";
import orientalTwinRefined from "@/assets/oriental-twin-refined.png";
import seasonWinter from "@/assets/season-winter.jpg";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Hokkaido Horizon — Curated Hokkaido Travel Concierge",
      },
      {
        name: "description",
        content:
          "札幌住宿、机场接送、私人包车、四季路线、雪季体验和本地旅行支持，由生活在北海道的团队一起整理。",
      },
      {
        property: "og:title",
        content: "Hokkaido Horizon · 北海道在地旅行与住宿服务",
      },
      {
        property: "og:description",
        content:
          "我们不把旅行包装成奢华，而是帮你把北海道走得更合适。",
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

const startPoints = [
  {
    num: "01",
    label: "Stay",
    title: "札幌自营住宿",
    body: "先判断住哪里更省路。酒店与特色民宿都在札幌市区，适合城市停留、雪季中转，也适合作为多日路线的出发点。",
    to: "/stay",
  },
  {
    num: "02",
    label: "Private Mobility",
    title: "机场接送与包车",
    body: "不是只安排一台车，而是把人数、行李、儿童座椅、路况和当天停留节奏一起考虑。",
    to: "/private-charter",
  },
  {
    num: "03",
    label: "Seasonal Routes",
    title: "四季路线",
    body: "北海道不只属于冬季。花海、湖泊、海岸、红叶、温泉与城市散步，都需要按季节重新取舍。",
    to: "/experiences",
  },
  {
    num: "04",
    label: "Snow Experiences",
    title: "雪季体验",
    body: "适合第一次滑雪和亲子雪地体验。我们会把雪场、交通、课程和不滑雪同行人的安排一起看。",
    to: "/ski-school",
  },
] as const;

const seasons = [
  {
    label: "Spring",
    title: "春｜晚樱与温泉",
    bestFor: "雪融之后的北国，适合晚樱、温泉和海岸短线。行程不需要太满，留一点天气变化的余地更好。",
    direction: "从札幌出发，可连接小樽、余市、洞爷湖、函馆或樱花季短线。",
  },
  {
    label: "Summer",
    title: "夏｜花田湖风",
    bestFor: "盛夏适合花田、湖泊与乡间道路。家庭、朋友和第一次来北海道的旅人，都可以把路线走得轻一点。",
    direction: "富良野、美瑛、支笏湖、洞爷湖与牧场路线，可以搭配包车减少换乘。",
  },
  {
    label: "Autumn",
    title: "秋｜红叶与温泉",
    bestFor: "秋天适合红叶、温泉和摄影。与其赶多个地点，不如把停留时间留给山路、湖边和傍晚。",
    direction: "可把札幌、定山溪、洞爷湖、登别或层云峡串成更舒展的节奏。",
  },
  {
    label: "Winter",
    title: "冬｜粉雪与冬夜",
    bestFor: "冬天需要更细的判断。雪景、滑雪、温泉和札幌夜晚都好，但交通、装备和体力要提前想清楚。",
    direction: "即使第一次接触雪季，也可以从轻松课程、雪地体验和包车接送开始。",
  },
] as const;

const inspirations = [
  {
    title: "经典北国初见",
    days: "5-7 日方向",
    body: "以札幌为落脚点，连接小樽、余市、富良野或美瑛，再留出温泉、用餐和城市散步的时间。",
    points: ["适合第一次来北海道", "减少频繁换住", "经典风景与休息节奏更平衡"],
  },
  {
    title: "阖家松弛之行",
    days: "4-6 日方向",
    body: "机场接驳、札幌酒店或民宿、私人包车一日游组合。每天只聚焦一到两个核心景致。",
    points: ["照顾长辈与孩子节奏", "减少拖行李和换乘", "把时间留给用餐、休息和停留"],
  },
  {
    title: "冬日滑雪初探",
    days: "5-6 日方向",
    body: "住在札幌市中心，搭配雪场车辆接送、零基础入门课程、装备租赁与不滑雪同行人的替代安排。",
    points: ["适合第一次接触雪季", "交通、装备和课程一起整理", "可搭配温泉、雪景或札幌夜晚"],
  },
] as const;

const supportItems = [
  {
    title: "先选对落脚点",
    body: "我们更重视地段、洁净度与出发便利性。酒店房间与特色民宿，不是为了展示奢华，而是为了让每天出发更轻松。",
  },
  {
    title: "机场接送与私人包车",
    body: "根据同行人数、行李数量、儿童座椅需求和目的地特性，判断适合接送、包车，还是保留公共交通。",
  },
  {
    title: "住宿、车辆与路线一起计划",
    body: "住宿、车辆、司机、雪季课程和一日游不割裂处理。时间、路线和行李动线，会在出发前一起整理。",
  },
] as const;

const whyUs = [
  ["Based in Sapporo", "我们知道住在哪里更容易出发，也知道季节、天气和道路会怎样改变一段旅程。"],
  ["One connected journey", "住宿、机场接送、包车和路线一起计划，而不是分开预订之后再临时衔接。"],
  ["Local flexibility", "北海道的计划常常会因为天气改变。我们会把这种变化当成行程的一部分，而不是意外。"],
  ["Travel at your own pace", "不是每位旅人都想赶完十个景点。我们帮助你把节奏放慢，把重要的地方走好。"],
  ["Support before and during travel", "问题不会在预订后停止。路线、车辆、雪季体验和临时调整，都可以继续一起确认。"],
] as const;

const inquiryPrompts = ["大致日期", "同行人数", "向往的风景", "是否有长辈或孩童", "行李情况", "旅行节奏"];

function Index() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <SiteHeader variant="hero-balanced" />

      <section className="relative min-h-screen overflow-hidden bg-ink text-white">
        <img
          src={heroYotei}
          alt="Hokkaido landscape"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full scale-[1.04] object-cover"
        />
        <div className="absolute inset-0 bg-black/34" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/42 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] items-center justify-center px-6 pt-28 pb-14 text-center md:px-12">
          <div className="mx-auto max-w-5xl rise">
            <p className="text-xs uppercase tracking-[0.36em] text-white/68 md:text-sm">
              Local Hokkaido Travel Studio
            </p>
            <h1 className="mt-8 font-display text-[clamp(4.8rem,10.5vw,12rem)] font-light leading-[0.86] text-white">
              Hokkaido,
              <br />
              Don't Rush.
            </h1>
            <p className="mx-auto mt-10 max-w-2xl text-base leading-loose text-white/78 md:text-xl">
              Starting from where you stay,
              <br />
              how you move, and how the seasons unfold,
              <br />
              we help you experience Hokkaido at a slower pace.
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/reconnect"
                search={(prev: Record<string, unknown>) => prev}
                className="inline-flex border border-white bg-white px-8 py-4 text-xs font-medium uppercase tracking-[0.24em] text-ink transition-all duration-500 hover:bg-transparent hover:text-white"
              >
                <span>Start Planning</span>
              </Link>
              <Link
                to="/travel"
                search={(prev: Record<string, unknown>) => prev}
                className="inline-flex border border-white/62 px-8 py-4 text-xs font-medium uppercase tracking-[0.24em] text-white transition-all duration-500 hover:border-white hover:bg-white hover:text-ink"
              >
                <span>Explore Journeys</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-32 md:px-12 md:py-44">
        <div className="mx-auto grid max-w-[1600px] items-center gap-20 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="reveal max-w-2xl">
            <p className="eyebrow">
              <span className="rule-line" />
              Thoughtful Travel
            </p>
            <h2 className="mt-7 max-w-3xl font-display text-[clamp(3rem,5.1vw,6.2rem)] leading-[0.98]">
              慢一点，走得更好。
            </h2>
            <div className="mt-12 space-y-7 text-lg leading-loose text-ink/66">
              <p>
                好的北海道行程，不是把地点排满，而是知道哪些地方值得去，哪些移动可以省下，哪一天应该留给天气和体力。
              </p>
              <p>
                我们从落脚点开始看一段旅程：住在札幌哪里，早上几点出发，行李是否需要跟车，晚餐后还能不能轻松回到住处。
              </p>
              <p>
                住宿、车辆和路线放在同一张地图里，旅程才会自然地连起来。
              </p>
            </div>
            <p className="mt-12 max-w-md border-t border-ink/12 pt-6 text-sm leading-relaxed text-ink/48">
              We don't help you travel in luxury. We help you travel thoughtfully.
            </p>
          </div>

          <div className="group relative min-h-[40rem] overflow-hidden bg-[#FAFAFA]">
            <img
              src={seasonWinter}
              alt="Hokkaido winter forest"
              width={1400}
              height={1050}
              loading="lazy"
              className="h-full min-h-[40rem] w-full object-cover transition-transform duration-1000 group-hover:scale-[1.025]"
            />
          </div>
        </div>

        <div className="mx-auto mt-28 grid max-w-[1600px] border-t border-ink/12 lg:grid-cols-4">
          {startPoints.map((item) => (
            <Link
              key={item.num}
              to={item.to}
              search={(prev: Record<string, unknown>) => prev}
              className="group border-b border-ink/12 px-0 py-12 transition-colors duration-500 hover:bg-[#FAFAFA] lg:border-r lg:px-8 last:lg:border-r-0"
            >
              <div className="flex items-center justify-between gap-6">
                <span className="font-display text-4xl text-ink/22 transition-colors group-hover:text-ink">
                  {item.num}
                </span>
                <span className="text-[0.65rem] uppercase tracking-[0.28em] text-ink/42">{item.label}</span>
              </div>
              <h3 className="mt-14 font-display text-[2.15rem] leading-tight">{item.title}</h3>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/62">{item.body}</p>
              <p className="mt-9 text-xs uppercase tracking-[0.22em] text-moss transition-colors group-hover:text-ink">
                从这里开始 /
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#FAFAFA] px-6 py-28 md:px-12 md:py-40">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="reveal">
              <p className="eyebrow">
                <span className="rule-line" />
                Seasons
              </p>
              <h2 className="mt-7 font-display text-[clamp(3rem,4.8vw,6rem)] leading-[0.98]">
                按季节，重新取舍。
              </h2>
              <p className="mt-9 max-w-md text-base leading-loose text-ink/64">
                同一座岛，春夏秋冬的路况、日照、风景和体力消耗都不同。季节不是装饰，而是计划行程时最重要的线索。
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="group relative min-h-[44rem] overflow-hidden bg-white">
                <img
                  src={heroYotei}
                  alt="Four season Hokkaido landscape"
                  width={1600}
                  height={1200}
                  loading="lazy"
                  className="h-full min-h-[44rem] w-full object-cover transition-transform duration-1000 group-hover:scale-[1.035]"
                />
              </div>

              <div className="grid content-between gap-3">
                {seasons.map((season, index) => (
                  <article
                    key={season.label}
                    className={`bg-white p-7 transition-transform duration-500 hover:-translate-y-1 md:p-8 ${
                      index === 1 || index === 2 ? "lg:ml-10" : ""
                    }`}
                  >
                    <p className="text-[0.65rem] uppercase tracking-[0.28em] text-moss">{season.label}</p>
                    <h3 className="mt-4 font-display text-3xl leading-tight md:text-4xl">{season.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-ink/66">{season.bestFor}</p>
                    <p className="mt-3 text-sm leading-relaxed text-ink/48">{season.direction}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-28 md:px-12 md:py-40">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-20 max-w-5xl reveal">
            <p className="eyebrow">
              <span className="rule-line" />
              Travel Ideas
            </p>
            <h2 className="mt-7 font-display text-[clamp(3rem,5.6vw,7rem)] leading-[0.98]">
              不是套餐，是判断方向。
            </h2>
            <p className="mt-9 max-w-3xl text-base leading-loose text-ink/64">
              下面不是固定产品，而是三种常见的旅行判断。真正安排时，我们会根据日期、人数、体力、天气和预算感重新整理。
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {inspirations.map((idea, index) => (
              <article
                key={idea.title}
                className={`group bg-[#FAFAFA] p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-ink hover:text-white md:p-10 ${
                  index === 1 ? "lg:mt-14" : index === 2 ? "lg:mt-28" : ""
                }`}
              >
                <p className="text-xs uppercase tracking-[0.24em] text-moss transition-colors group-hover:text-white/55">
                  {idea.days}
                </p>
                <h3 className="mt-7 font-display text-[2.4rem] leading-tight md:text-[3rem]">{idea.title}</h3>
                <p className="mt-7 text-sm leading-loose text-ink/66 transition-colors group-hover:text-white/68">
                  {idea.body}
                </p>
                <div className="mt-10 grid gap-3">
                  {idea.points.map((point) => (
                    <p
                      key={point}
                      className="border-t border-ink/12 pt-3 text-sm text-ink/68 transition-colors group-hover:border-white/14 group-hover:text-white/72"
                    >
                      {point}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFA] px-6 py-28 md:px-12 md:py-40">
        <div className="mx-auto grid max-w-[1600px] items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-5">
            <div className="group relative aspect-[5/4] overflow-hidden bg-white">
              <img
                src={orientalExteriorRefined}
                alt="Sapporo Oriental Hotel exterior"
                width={1200}
                height={960}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.035]"
              />
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="group relative aspect-[4/3] overflow-hidden bg-white">
                <img
                  src={orientalTwinRefined}
                  alt="Sapporo Oriental Hotel twin room"
                  width={900}
                  height={675}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                />
              </div>
              <div className="group relative aspect-[4/3] overflow-hidden bg-white">
                <img
                  src={orientalDoubleRefined}
                  alt="Sapporo Oriental Hotel double room"
                  width={900}
                  height={675}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                />
              </div>
            </div>
          </div>

          <div className="reveal">
            <p className="eyebrow">
              <span className="rule-line" />
              Stay, Move, Route
            </p>
            <h2 className="mt-7 font-display text-[clamp(3rem,5.5vw,6.8rem)] leading-[0.98]">
              住哪里，怎么走，要一起想。
            </h2>
            <p className="mt-9 max-w-xl text-base leading-loose text-ink/64">
              在北海道，旅程是否轻松，常常取决于那些不显眼的决定：住在札幌哪里、车几点接、行李怎么放、当天路线是否顺路。这些细节，我们会一起看。
            </p>

            <div className="mt-12 grid gap-px bg-ink/12">
              {supportItems.map((item) => (
                <div key={item.title} className="bg-[#FAFAFA] py-8">
                  <h3 className="font-display text-3xl">{item.title}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/64">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                to="/stay"
                search={(prev: Record<string, unknown>) => prev}
                className="inline-flex border border-ink bg-ink px-7 py-4 text-xs font-medium uppercase tracking-[0.22em] text-white transition-all duration-500 hover:bg-transparent hover:text-ink"
              >
                <span>了解住宿选择</span>
              </Link>
              <Link
                to="/private-charter"
                search={(prev: Record<string, unknown>) => prev}
                className="inline-flex border border-ink/32 px-7 py-4 text-xs font-medium uppercase tracking-[0.22em] text-ink transition-all duration-500 hover:border-ink hover:bg-ink hover:text-white"
              >
                <span>了解移动安排</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-28 md:px-12 md:py-40">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-24 grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <p className="eyebrow">
              <span className="rule-line" />
              Why Journey With Us
            </p>
            <h2 className="font-display text-[clamp(3rem,5.5vw,6.8rem)] leading-[0.98]">
              少一点不确定。
            </h2>
          </div>

          <div className="grid border-t border-ink/12">
            {whyUs.map(([title, body], index) => (
              <div
                key={title}
                className="grid gap-8 border-b border-ink/12 py-11 transition-colors duration-500 hover:bg-[#FAFAFA] md:grid-cols-[8rem_0.8fr_1.2fr] md:items-start md:px-8"
              >
                <p className="font-display text-4xl text-ink/18">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="font-display text-3xl leading-tight md:text-[2.35rem]">{title}</h3>
                <p className="max-w-2xl text-base leading-loose text-ink/62">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFA] px-6 py-32 md:px-12 md:py-44">
        <div className="mx-auto grid max-w-[1400px] gap-20 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="eyebrow">
              <span className="rule-line" />
              Begin The Conversation
            </p>
            <h2 className="mt-7 max-w-4xl font-display text-[clamp(3rem,5.2vw,6.4rem)] leading-[0.98]">
              Tell us how you hope to experience Hokkaido.
            </h2>
            <p className="mt-10 max-w-2xl text-lg leading-loose text-ink/64">
              你不需要一开始就准备好完整行程。只要告诉我们大致日期、同行的人、想看的风景，以及你希望旅行轻松一点还是丰富一点。
            </p>
            <p className="mt-6 max-w-2xl text-base leading-loose text-ink/52">
              我们会从这些真实信息开始，把住宿、移动方式和路线慢慢连接起来。
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                to="/reconnect"
                search={(prev: Record<string, unknown>) => prev}
                className="inline-flex border border-ink bg-ink px-7 py-4 text-xs font-medium uppercase tracking-[0.22em] text-white transition-all duration-500 hover:bg-transparent hover:text-ink"
              >
                <span>告诉我们你的计划</span>
              </Link>
              <a
                href="mailto:jonesapporo@gmail.com"
                className="inline-flex border border-ink/32 px-7 py-4 text-xs font-medium uppercase tracking-[0.22em] text-ink transition-all duration-500 hover:border-ink hover:bg-ink hover:text-white"
              >
                <span>发送邮件</span>
              </a>
              <a
                href="https://www.instagram.com/J_ONETRIP"
                className="inline-flex border border-ink/32 px-7 py-4 text-xs font-medium uppercase tracking-[0.22em] text-ink transition-all duration-500 hover:border-ink hover:bg-ink hover:text-white"
              >
                <span>Instagram</span>
              </a>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12">
            <h3 className="font-display text-4xl leading-tight">不用写得很完整</h3>
            <div className="mt-10 grid gap-px bg-ink/10">
              {inquiryPrompts.map((item) => (
                <div key={item} className="bg-white px-5 py-5 text-sm text-ink/68">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-10 text-sm leading-relaxed text-ink/52">
              如果还没有确定目的地，也可以只说“第一次来北海道”“想看雪”“带父母孩子”“不想太赶”。我们会先帮你判断大方向，而不是急着推一个行程。
            </p>
          </div>
        </div>
      </section>

      <SiteFooter variant="dark" />
    </div>
  );
}
