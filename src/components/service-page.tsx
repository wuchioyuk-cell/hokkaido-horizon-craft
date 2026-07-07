import { Link } from "@tanstack/react-router";
import alphardSnow from "@/assets/alphard-snow.jpg";
import heroYotei from "@/assets/hero-yotei.jpg";
import propertyOriental from "@/assets/property-oriental.jpg";
import propertyShinka from "@/assets/property-shinka.jpg";
import seasonWinter from "@/assets/season-winter.jpg";
import { useLang, useT } from "@/lib/i18n";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type PageSlug =
  | "travel"
  | "privateCharter"
  | "airportTransfers"
  | "explore"
  | "experiences"
  | "skiSchool"
  | "ourStory"
  | "hotels"
  | "vacationRentals"
  | "reconnect";

type PageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  highlights: string[];
  sections: Array<{ title: string; body: string; href?: string }>;
};

const zhPages: Record<PageSlug, PageContent> = {
  travel: {
    eyebrow: "Transportation",
    title: "在北海道，路上的时间也很重要。",
    intro:
      "北海道很大，天气和路况也会影响一天的节奏。我们会把车辆、司机、行李、季节和路线一起考虑，让移动不再是旅程里最累的部分。",
    image: alphardSnow,
    highlights: ["绿牌营运车辆", "机场接送与跨城包车", "适合家庭与小团", "熟悉冬季道路"],
    sections: [
      {
        title: "适合哪些路段",
        body: "新千岁机场到札幌、札幌到二世古、富良野和美瑛一日路线、道央多日环线，以及雪季滑雪场接驳都可以安排。",
      },
      {
        title: "我们会先问清楚",
        body: "人数、行李、儿童座椅、停留时间和当天季节，都会影响用车。我们会先确认这些细节，再建议合适车型和时间。",
      },
    ],
  },
  privateCharter: {
    eyebrow: "Private Charter",
    title: "专人专车，让距离变得轻一点。",
    intro:
      "如果不想拖着行李换车、赶车、查时刻表，私人包车会轻松很多。车和司机可以跟着整段行程走，时间也更有弹性。",
    image: alphardSnow,
    highlights: ["一组客人一辆车", "可安排多日路线", "住宿与路线一起看", "没有购物站"],
    sections: [
      {
        title: "路线可以慢慢组合",
        body: "札幌、小樽、二世古、洞爷湖、富良野、美瑛、旭川都可以串起来。冬天我们会把路况和天黑时间一起算进去。",
      },
      {
        title: "适合谁",
        body: "家庭、情侣、商务客人和朋友小团都适合。比起把一天排满，我们更重视坐得舒服、走得顺。",
      },
    ],
  },
  airportTransfers: {
    eyebrow: "Airport Transfers",
    title: "落地之后，先有人接住你。",
    intro:
      "飞机落地后，不需要再临时找车。我们会提前确认航班、人数、行李和儿童座椅，把你直接送到酒店或下一站。",
    image: alphardSnow,
    highlights: ["新千岁机场接送", "航班信息提前确认", "冬季车辆安排", "可接续入住或包车"],
    sections: [
      {
        title: "抵达当天",
        body: "司机会按航班时间安排等候，协助行李，并直接送达住宿地点。遇到航班延误，我们也会同步调整。",
      },
      {
        title: "常见目的地",
        body: "札幌市区、中岛公园、薄野、小樽、二世古、留寿都、富良野及周边酒店。",
      },
    ],
  },
  explore: {
    eyebrow: "Tours",
    title: "不把北海道做成打卡清单。",
    intro:
      "真正舒服的路线，要看天气、季节、路况，也要看同行的人。我们更喜欢少而准的安排，而不是一天塞满景点。",
    image: heroYotei,
    highlights: ["四季路线规划", "小团与家庭友好", "温泉、湖泊、农场、花田", "本地团队建议"],
    sections: [
      {
        title: "每个季节都有自己的走法",
        body: "春天看海岸与樱花，夏天去花田和湖泊，秋天安排红叶与温泉，冬天则加入雪原、夜景和暖室内。",
      },
      {
        title: "不用赶",
        body: "移动时间、用餐、拍照、老人和孩子的体力，都应该放进行程里。路线不是景点清单，而是一天怎么舒服地过。",
      },
    ],
  },
  experiences: {
    eyebrow: "Featured Experiences",
    title: "路线不用多，刚好就好。",
    intro:
      "我们先看季节，再看你想住哪里、同行是谁、一天能走多远。住宿、车辆、餐厅和体验会一起考虑。",
    image: heroYotei,
    highlights: ["富良野与美瑛", "小樽与余市", "洞爷湖与温泉", "二世古与雪季路线"],
    sections: [
      {
        title: "可以这样走",
        body: "夏天花田与湖泊，秋天红叶与温泉，冬天粉雪与札幌夜晚，春天海岸樱花与安静温泉。",
      },
      {
        title: "你不用一次想清楚",
        body: "只要先告诉我们季节、人数和天数，我们会帮你把路线强度、住宿位置、车辆和体验慢慢配出来。",
      },
    ],
  },
  skiSchool: {
    eyebrow: "Snow Experiences",
    title: "雪季可以很专业，也可以很轻松。",
    intro: "有人想认真学滑雪，有人只是想带孩子看看雪。课程和体验会按语言、年龄、水平和目标来安排。",
    image: seasonWinter,
    highlights: ["专业教练", "亲子与初学者友好", "中文与英文支持", "车辆可同步安排"],
    sections: [
      {
        title: "适合哪些客人",
        body: "第一次滑雪、家庭亲子、想从绿道进阶到红道，或想体验北海道粉雪但希望有人稳定陪同的客人。",
      },
      {
        title: "不滑雪也可以",
        body: "雪地散步、雪原摄影、温泉、札幌夜景和轻户外路线，也能把冬天过得很好。",
      },
    ],
  },
  ourStory: {
    eyebrow: "Our Story",
    title: "我们想做的，是让北海道变得好抵达、好停留。",
    intro:
      "Hokkaido Horizon 不是只卖一段行程。我们更在意的是，客人从落地、入住、出门、回程，每一步都有人接得上。",
    image: propertyOriental,
    highlights: ["Premium", "Nature", "Warm", "Authentic"],
    sections: [
      {
        title: "我们的气质",
        body: "我们喜欢北欧自然网站的克制，也喜欢高端酒店的秩序感。但真正重要的，是做出来的服务要温暖、可靠、不浮夸。",
      },
      {
        title: "我们的做法",
        body: "少一点广告式承诺，多一点能兑现的细节。车是否合法、路线顺不顺、住处方不方便、沟通清不清楚，都比口号重要。",
      },
    ],
  },
  hotels: {
    eyebrow: "Hotels",
    title: "在札幌中心，留一个好好休息的地方。",
    intro:
      "两处酒店分别在中岛公园与薄野区域。适合第一晚落脚、雪季中转、家庭旅行，也适合把札幌作为路线起点。",
    image: propertyOriental,
    highlights: ["札幌东方酒店", "Shinka Hotel Susukino", "地铁与餐饮便利", "礼宾协助预订"],
    sections: [
      {
        title: "札幌东方酒店",
        body: "靠近中岛公园，地铁步行可达。房型有双人、三人、和式与带厨房选择，适合不同同行组合。",
      },
      {
        title: "Shinka Hotel Susukino",
        body: "位于薄野中心，吃饭、购物和夜间活动都方便。自助入住更灵活，适合城市短住。",
      },
    ],
  },
  vacationRentals: {
    eyebrow: "Vacation Rentals",
    title: "给家庭和小团，多一点生活空间。",
    intro:
      "如果停留时间较长，或同行人数较多，民宿会比普通客房更从容。后续房源增加后，这里可以继续扩展成独立展示页。",
    image: propertyShinka,
    highlights: ["家庭友好", "长住适合", "可配合包车", "后续可扩展房源"],
    sections: [
      {
        title: "先保留入口",
        body: "官网先保留民宿入口，未来新增房源时可以自然承接，也方便礼宾按家庭和小团需求推荐。",
      },
      {
        title: "适合客人",
        body: "亲子家庭、朋友小团、雪季长住，或希望能简单做饭、需要更多空间的客人。",
      },
    ],
  },
  reconnect: {
    eyebrow: "Contact",
    title: "联系我们",
    intro:
      "For stays, transfers and private journeys in Hokkaido. 关于札幌酒店及民宿预订、专车接驳、私人包车一日游及冰雪体验的合作与咨询，欢迎通过以下渠道与我们取得联络。",
    image: heroYotei,
    highlights: ["Email", "Tel", "Instagram"],
    sections: [
      {
        title: "Email",
        body: "jonesapporo@gmail.com",
        href: "mailto:jonesapporo@gmail.com",
      },
      {
        title: "Tel",
        body: "011-206-1360",
        href: "tel:011-206-1360",
      },
      {
        title: "Instagram",
        body: "@J_ONETRIP",
        href: "https://www.instagram.com/J_ONETRIP",
      },
    ],
  },
};

const enPages: Record<PageSlug, PageContent> = {
  travel: {
    eyebrow: "Transportation",
    title: "Hokkaido movement, calmly arranged.",
    intro:
      "Vehicles, drivers, timing, luggage, and seasonal road conditions are planned together so each transfer feels composed.",
    image: alphardSnow,
    highlights: [
      "Licensed green-plate vehicles",
      "Airport and cross-island transfers",
      "Family and small-group friendly",
      "Winter road experience",
    ],
    sections: [
      {
        title: "Best for",
        body: "New Chitose to Sapporo, Sapporo to Niseko, Furano and Biei day routes, multi-day central Hokkaido loops, and ski resort transfers.",
      },
      {
        title: "How it works",
        body: "Single transfers, half-day, full-day, and multi-day charters are available. We choose vehicles by party size, luggage, seats, and season.",
      },
    ],
  },
  privateCharter: {
    eyebrow: "Private Charter",
    title: "A private vehicle makes the island feel lighter.",
    intro:
      "For guests who prefer not to change cars, drag luggage, or follow public schedules, a dedicated vehicle keeps the journey flexible.",
    image: alphardSnow,
    highlights: [
      "One party, one vehicle",
      "Multi-day itineraries",
      "Connected with stays and tours",
      "No shopping stops",
    ],
    sections: [
      {
        title: "Route planning",
        body: "Sapporo, Otaru, Niseko, Toya, Furano, Biei, and Asahikawa can be combined. Winter itineraries include more road time.",
      },
      {
        title: "Vehicle standard",
        body: "Comfort, legality, and safety come first, with vehicles suited to families, couples, business guests, and small groups.",
      },
    ],
  },
  airportTransfers: {
    eyebrow: "Airport Transfers",
    title: "From arrival gate to a softer landing.",
    intro:
      "For New Chitose and nearby airports, we confirm flight times, luggage, party size, child seats, and the final hotel address in advance.",
    image: alphardSnow,
    highlights: [
      "New Chitose transfers",
      "Flight details confirmed",
      "Winter vehicle planning",
      "Can connect to stays or charters",
    ],
    sections: [
      {
        title: "Arrival",
        body: "Your driver waits according to the flight schedule, assists with luggage, and brings you directly to your stay.",
      },
      {
        title: "Destinations",
        body: "Sapporo, Nakajima Park, Susukino, Otaru, Niseko, Rusutsu, Furano, and surrounding hotels.",
      },
    ],
  },
  explore: {
    eyebrow: "Tours",
    title: "Hokkaido is not a checklist.",
    intro:
      "Good routes follow weather, season, road conditions, and the rhythm of the guests. We prefer fewer, better stops.",
    image: heroYotei,
    highlights: [
      "Seasonal route planning",
      "Small groups and families",
      "Onsen, lakes, farms, flowers",
      "Local team advice",
    ],
    sections: [
      {
        title: "Season by season",
        body: "Spring coast and sakura, summer flower fields and lakes, autumn maple and onsen, winter snowfields and city nights.",
      },
      {
        title: "Pace",
        body: "We plan drive time, meals, photos, children, and older travelers into the route, not just destination names.",
      },
    ],
  },
  experiences: {
    eyebrow: "Featured Experiences",
    title: "Seasonal routes designed with intention.",
    intro:
      "Each route begins with the season, then connects stays, transport, restaurants, activities, and pacing.",
    image: heroYotei,
    highlights: [
      "Furano and Biei",
      "Otaru and Yoichi",
      "Lake Toya and onsen",
      "Niseko and snow routes",
    ],
    sections: [
      {
        title: "Examples",
        body: "Summer flowers and lakes, autumn maple and onsen, winter powder and Sapporo nights, spring coast blossoms and quiet hot springs.",
      },
      {
        title: "Custom planning",
        body: "Share the season, party size, and number of days. We suggest pacing, stay locations, transport, and experiences.",
      },
    ],
  },
  skiSchool: {
    eyebrow: "Snow Experiences",
    title: "Snow is one strong chapter, not the whole story.",
    intro:
      "Private lessons, family clinics, snow play, and progression days are matched by language, age, level, and goals.",
    image: seasonWinter,
    highlights: [
      "Professional coaches",
      "Family and beginner friendly",
      "Chinese and English support",
      "Transport can be arranged",
    ],
    sections: [
      {
        title: "Best for",
        body: "First-time skiers, families, guests progressing from green to red runs, and powder-curious travelers who want steady support.",
      },
      {
        title: "Beyond skiing",
        body: "Snow walks, snowfield photography, onsen, Sapporo nights, and soft winter outdoor routes can also be arranged.",
      },
    ],
  },
  ourStory: {
    eyebrow: "Our Story",
    title: "A Hokkaido travel and hospitality company built for continuity.",
    intro:
      "Hokkaido Horizon is not about one-off transactions. We connect stays, vehicles, routes, and people into a dependable local system.",
    image: propertyOriental,
    highlights: ["Premium", "Nature", "Warm", "Authentic"],
    sections: [
      {
        title: "Positioning",
        body: "Premium Hokkaido travel and hospitality company. Nordic nature, high-end hotel order, and outdoor authenticity shape the tone.",
      },
      {
        title: "Our way",
        body: "Less advertising language, more details that can be delivered: licensed cars, smooth routes, useful stays, and clear communication.",
      },
    ],
  },
  hotels: {
    eyebrow: "Hotels",
    title: "Two Sapporo addresses for a calmer base.",
    intro:
      "Our hotels sit around Nakajima Park and Susukino, suited to city stays, snow-season transfers, families, and multi-day Hokkaido routes.",
    image: propertyOriental,
    highlights: [
      "Oriental Hotel Sapporo",
      "Shinka Hotel Susukino",
      "Metro, dining, and shopping access",
      "Concierge booking support",
    ],
    sections: [
      {
        title: "Oriental Hotel Sapporo",
        body: "Near Nakajima Park, with metro access and double, triple, Japanese-style, and kitchen-equipped room options.",
      },
      {
        title: "Shinka Hotel Susukino",
        body: "In central Susukino, suited to guests who want dining, shopping, nightlife, and flexible self check-in.",
      },
    ],
  },
  vacationRentals: {
    eyebrow: "Vacation Rentals",
    title: "More space for families and small groups.",
    intro:
      "Vacation rentals suit longer stays and guests who want more room and a residential feeling. This page is ready for future property expansion.",
    image: propertyShinka,
    highlights: [
      "Family friendly",
      "Long-stay suitable",
      "Can pair with transport",
      "Expandable property register",
    ],
    sections: [
      {
        title: "Current role",
        body: "This page keeps a clear place for future rental inventory and gives concierge a page to reference when recommending options.",
      },
      {
        title: "Best for",
        body: "Families, small friend groups, snow-season long stays, and guests who need more space or light cooking options.",
      },
    ],
  },
  reconnect: {
    eyebrow: "Contact",
    title: "Contact Us",
    intro:
      "For stays, transfers and private journeys in Hokkaido. For stays, private transfers, chartered day journeys, and snow experience inquiries, contact us by email, phone, or Instagram.",
    image: heroYotei,
    highlights: ["Email", "Tel", "Instagram"],
    sections: [
      { title: "Email", body: "jonesapporo@gmail.com", href: "mailto:jonesapporo@gmail.com" },
      { title: "Tel", body: "011-206-1360", href: "tel:011-206-1360" },
      { title: "Instagram", body: "@J_ONETRIP", href: "https://www.instagram.com/J_ONETRIP" },
    ],
  },
};

export function ServicePage({ slug }: { slug: PageSlug }) {
  const lang = useLang();
  const t = useT();
  const page = lang.startsWith("zh") ? zhPages[slug] : enPages[slug];

  return (
    <div className="min-h-screen bg-birch text-ink">
      <SiteHeader />

      <section className="px-6 pt-36 pb-20 md:px-12 md:pt-48 md:pb-28">
        <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="eyebrow">
              <span className="rule-line" />
              {page.eyebrow}
            </p>
            <h1 className="mt-6 font-display text-5xl leading-[1.02] md:text-7xl">{page.title}</h1>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-ink/72 md:text-lg">{page.intro}</p>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-12 md:pb-32">
        <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="relative aspect-[16/11] overflow-hidden bg-silt">
            <img
              src={page.image}
              alt={page.title}
              width={1600}
              height={1100}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="grid content-center gap-px bg-ink/10">
            {page.highlights.map((item) => (
              <div key={item} className="bg-birch p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-ink/75">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-silt/70 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-px bg-ink/10 md:grid-cols-2">
          {page.sections.map((section) => (
            <article key={section.title} className="bg-silt p-8 md:p-12">
              <h2 className="font-display text-3xl md:text-4xl">{section.title}</h2>
              {section.href ? (
                <a
                  href={section.href}
                  className="mt-6 inline-block text-sm leading-relaxed text-ink/70 underline-offset-4 transition-colors hover:text-moss hover:underline md:text-base"
                >
                  {section.body}
                </a>
              ) : (
                <p className="mt-6 text-sm leading-relaxed text-ink/70 md:text-base">
                  {section.body}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-10 border-t border-ink/15 pt-16 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="eyebrow">
              <span className="rule-line" />
              {t("common.speakConcierge")}
            </p>
            <h2 className="mt-5 font-display text-4xl md:text-6xl">
              {t("cta.title1")} <span className="italic text-moss">{t("cta.title2")}</span>
            </h2>
            <div className="mt-8 flex flex-wrap gap-5 text-sm text-ink/68">
              <a href={`mailto:${t("contact.email")}`}>{t("contact.email")}</a>
              <a href={`tel:${t("contact.phone")}`}>{t("contact.phone")}</a>
              <a href="https://www.instagram.com/J_ONETRIP">{t("contact.instagram")}</a>
            </div>
          </div>
          <Link
            to="/reconnect"
            search={(prev: Record<string, unknown>) => prev}
            className="hairline-btn-solid w-fit"
          >
            <span>{t("common.inquiry")}</span>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
