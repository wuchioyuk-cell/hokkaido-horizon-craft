// Translation dictionaries for Hokkaidō Horizon.
// Default language is zh-cn. zh-hk and zh-tw are full Traditional variants.
// Other languages fall back to English.

export const LANG_CODES = [
  "ja",
  "en",
  "zh-cn",
  "zh-hk",
  "zh-tw",
  "th",
  "vi",
  "es",
] as const;

export type LangCode = (typeof LANG_CODES)[number];

type Dict = Record<string, string>;

// ---------- 简体中文 ----------
const zhCN: Dict = {
  "common.inquiry": "预约咨询",
  "common.menu": "菜单",
  "common.speakConcierge": "联系客服",
  "common.returnHome": "返回首页",
  "common.discover": "了解详情",
  "common.browseRegister": "浏览庄园名录",
  "common.comingSoonNote":
    "此章节正在编撰中。我们的礼宾团队已掌握全部细节——欢迎直接与我们联系。",
  "common.copyright": "Hokkaidō Horizon · 保留所有权利",
  "common.language": "语言",

  "nav.stay": "住宿",
  "nav.travel": "出行",
  "nav.explore": "探索",
  "nav.ski": "滑雪",
  "nav.ourStory": "品牌故事",

  "footer.tagline":
    "钥匙、车队、路径——从抵达到离别,皆由我们亲自掌持,一座北方之岛,从头到尾。",
  "footer.regions": "札幌 · 小樽 · 洞爷湖 · 富良野 · 美瑛",
  "footer.group.stay": "住宿",
  "footer.group.travel": "出行",
  "footer.group.explore": "探索",
  "footer.group.house": "本舍",

  "route.hotels": "精品酒店",
  "route.vacationRentals": "私人别墅",
  "route.privateCharter": "私人包车",
  "route.airportTransfers": "机场接送",
  "route.experiences": "体验之旅",
  "route.skiSchool": "滑雪学校",
  "route.ourStory": "品牌故事",
  "route.reconnect": "联系我们",

  "hero.eyebrow": "始于北纬四十三度",
  "hero.title1": "北海道,",
  "hero.title2": "最本真的模样。",
  "hero.body":
    "岛上最佳居所的钥匙。穿越四季地貌的车队。开启此地秘境的本地之手。从头到尾——皆为我们所有。",
  "hero.cta1": "甄选入住",
  "hero.cta2": "规划行程",
  "hero.scroll": "向下滑动 · 滑り降りる",
  "hero.locationLabel": "日本 · 北海道",

  "concierge.where": "目的地",
  "concierge.whereVal": "二世古",
  "concierge.whereHint": "住宿",
  "concierge.when": "日期",
  "concierge.whenVal": "2 月 14 日 — 2 月 21 日",
  "concierge.whenHint": "选择日期",
  "concierge.party": "人数",
  "concierge.partyVal": "2 位宾客",
  "concierge.partyHint": "组成",
  "concierge.begin": "开始",

  "mission.eyebrow": "我们的立场",
  "mission.titlePre": "我们不仅仅是预订旅程。我们",
  "mission.titleHighlight": "亲自拥有",
  "mission.titlePost": "住所,亲自驾驭车队,引领您走过这座家乡之岛。",
  "mission.body1":
    "三十年间,同样的家族与团队走过这些山路。当大众平台只做聚合时,我们一处庄园、一位司机、一座山地——亲手培育。",
  "mission.body2":
    "由此而成的,是一个完整且连续的生态:从新千岁机场的阿尔法到清晨的越野向导,没有一次交接是陌生人。",

  "pillars.eyebrow": "四大基石",
  "pillars.title": "一座岛屿,完整成型。",
  "pillars.subtitle":
    "每一项基石均由本舍亲自拥有与运营——绝不外包,绝不转售。它们共同构成一件为您而调音的乐器。",
  "pillar.stay.label": "住宿",
  "pillar.stay.title": "精品酒店与私人山居",
  "pillar.stay.body":
    "由二世古的白桦林到小樽的石墙古宅,皆为我们亲自经营的资产。",
  "pillar.travel.label": "出行",
  "pillar.travel.title": "阿尔法私人车队",
  "pillar.travel.body":
    "陆上的头等舱体验。专为冬季打造,专业司机,通行全岛。",
  "pillar.explore.label": "探索",
  "pillar.explore.title": "四季私人远征",
  "pillar.explore.body":
    "由资深向导带您深入越野粉雪、夏季火山口的薄雾,与秋日琥珀色的林冠。",
  "pillar.snow.label": "雪季",
  "pillar.snow.title": "精英滑雪教学",
  "pillar.snow.body":
    "多语种持证教练。粉雪、越野、进阶——独行者与家庭皆能各得其所。",

  "season.eyebrow": "四季法则",
  "season.title": "一座岛屿,四个全然不同的国度。",
  "season.spring.label": "春",
  "season.spring.title": "融雪的静谧",
  "season.spring.copy":
    "积雪退去,大地浮现。海岸樱花初绽,而山巅仍执守着白色。",
  "season.summer.label": "夏",
  "season.summer.title": "悠长的绿色地平线",
  "season.summer.copy":
    "薰衣草田、雾笼的湖面,以及美瑛与富良野那明亮开阔的农野。",
  "season.autumn.label": "秋",
  "season.autumn.title": "琥珀色的林冠",
  "season.autumn.copy":
    "枫与桦在火山蒸汽间燃烧。丰收、温泉,以及一年中最清澈的光线。",
  "season.winter.label": "冬",
  "season.winter.title": "渐深的暮色",
  "season.winter.copy":
    "见证北海道走入纯白。建筑轮廓的剪影,世界级的粉雪。",
  "season.cta": "查看本季行程",

  "estate.eyebrow": "庄园名录",
  "estate.title": "三把钥匙,三种景观。",
  "estate.cta": "所有居所",
  "estate.season.year": "全年",
  "estate.season.autumnWinter": "秋 · 冬",
  "estate.season.springAutumn": "春 · 秋",
  "property.sanctuary.name": "庇护别墅",
  "property.sanctuary.location": "二世古 · 比羅夫",
  "property.sanctuary.rooms": "4 间套房 · 私人温泉",
  "property.asahidake.name": "旭岳山居",
  "property.asahidake.location": "大雪山",
  "property.asahidake.rooms": "8 间套房 · 森林桑拿",
  "property.otaru.name": "小樽隐所",
  "property.otaru.location": "小樽海岸",
  "property.otaru.rooms": "6 间套房 · 石造浴室",

  "transport.eyebrow": "移动",
  "transport.title1": "头等舱级。",
  "transport.title2": "穿越每一种地形。",
  "transport.body":
    "由高规格丰田阿尔法与海狮组成的专属车队,通过冬季认证,司机们走这些山路远早于第一座缆车。",
  "transport.stat1Val": "28",
  "transport.stat1Label": "车队规模",
  "transport.stat2Val": "12",
  "transport.stat2Label": "可服务语种",
  "transport.stat3Val": "365",
  "transport.stat3Label": "全年运营天数",
  "transport.stat4Val": "0",
  "transport.stat4Label": "外包承运",
  "transport.cta": "预订车队",

  "testimonial.eyebrow": "来自一位连续三冬的宾客",
  "testimonial.quote":
    "“一个无瑕的生态。从机场接机到越野向导,每一双手都让人觉得像同一处度假村的延续。”",
  "testimonial.author": "M. Lindqvist — 斯德哥尔摩",

  "cta.title1": "在北纬四十三度",
  "cta.title2": "开启一段旅程。",
  "cta.speak": "与客服对话",
  "cta.browse": "浏览庄园名录",

  // Sub-route stubs
  "stub.stay.eyebrow": "住宿",
  "stub.stay.title": "精品酒店与私人山居,从头至尾。",
  "stub.stay.body":
    "由二世古的白桦套房到小樽的石墙隐所,每一处皆由本舍亲自拥有与运营。",
  "stub.hotels.eyebrow": "精品酒店",
  "stub.hotels.title": "一份小而精的住址名录。",
  "stub.hotels.body":
    "每一处住所皆细小、刻意,由本舍亲自配置人手。配套疗养、御任厨房,以及直通车队与向导的便利。",
  "stub.vacationRentals.eyebrow": "私人别墅",
  "stub.vacationRentals.title": "预订一座庄园,而非一间客房。",
  "stub.vacationRentals.body":
    "私人山居、滑雪入户别墅、农场居所——配私人温泉、可选私厨,以及完整的礼宾联通。",
  "stub.travel.eyebrow": "出行",
  "stub.travel.title": "陆上的头等舱体验。",
  "stub.travel.body":
    "我们专属的阿尔法与海狮车队,司机们流利掌握十二种语言,与这些山路有三十年之缘。",
  "stub.privateCharter.eyebrow": "私人包车",
  "stub.privateCharter.title": "载您穿越此岛的车队。",
  "stub.privateCharter.body":
    "跨岛行程、多日专属司机服务,以及从抵达到离开始终如一的座驾——无任何交接。",
  "stub.airportTransfers.eyebrow": "机场接送",
  "stub.airportTransfers.title": "从舷桥直达山居。",
  "stub.airportTransfers.body":
    "新千岁、札幌或旭川机场迎接服务。固定价格、冬季认证车辆,以及一位已熟知您姓名的司机。",
  "stub.explore.eyebrow": "探索",
  "stub.explore.title": "为您开启此岛的本地之手。",
  "stub.explore.body":
    "由越野粉雪到夏日火山口的薄雾——皆由数十年走过这些山地的私人向导带您前往。",
  "stub.experiences.eyebrow": "体验之旅",
  "stub.experiences.title": "量身定制的远征,逐季展开。",
  "stub.experiences.body":
    "春日采撷、夏日海上独木舟、秋日丰收餐桌、冬日越野穿越。每次仅服务一组宾客。",
  "stub.skiSchool.eyebrow": "滑雪学校",
  "stub.skiSchool.title": "母语授课的精英教学。",
  "stub.skiSchool.body":
    "粉雪进阶、越野安全、儿童与家庭班——由能流利使用您语言的持证教练亲授。",
  "stub.ourStory.eyebrow": "品牌故事",
  "stub.ourStory.title": "在这座岛上,由住在这里的人亲手建造。",
  "stub.ourStory.body":
    "创办人哲学、司机与向导的人员名录,以及我们在本地保育与可持续方面的工作。",
  "stub.reconnect.eyebrow": "联系我们",
  "stub.reconnect.title": "通向本舍的一条直线。",
  "stub.reconnect.body":
    "WhatsApp、语音,或一份极度简化的咨询表单。每一则讯息都由人亲自阅读——通常在同一日内回覆。",
};

// ---------- 繁體中文(香港) ----------
const zhHK: Dict = {
  "common.inquiry": "預約查詢",
  "common.menu": "選單",
  "common.speakConcierge": "聯絡客服",
  "common.returnHome": "返回首頁",
  "common.discover": "了解詳情",
  "common.browseRegister": "瀏覽莊園名錄",
  "common.comingSoonNote":
    "此章節正在編撰中。我們的禮賓團隊已掌握全部細節——歡迎直接與我們聯絡。",
  "common.copyright": "Hokkaidō Horizon · 保留一切權利",
  "common.language": "語言",

  "nav.stay": "住宿",
  "nav.travel": "出行",
  "nav.explore": "探索",
  "nav.ski": "滑雪",
  "nav.ourStory": "品牌故事",

  "footer.tagline":
    "鎖匙、車隊、路徑——由抵達至離別,皆由我們親自掌持,一座北方之島,自始至終。",
  "footer.regions": "札幌 · 小樽 · 洞爺湖 · 富良野 · 美瑛",
  "footer.group.stay": "住宿",
  "footer.group.travel": "出行",
  "footer.group.explore": "探索",
  "footer.group.house": "本舍",

  "route.hotels": "精品酒店",
  "route.vacationRentals": "私人別墅",
  "route.privateCharter": "私人包車",
  "route.airportTransfers": "機場接送",
  "route.experiences": "體驗之旅",
  "route.skiSchool": "滑雪學校",
  "route.ourStory": "品牌故事",
  "route.reconnect": "聯絡我們",

  "hero.eyebrow": "始於北緯四十三度",
  "hero.title1": "北海道,",
  "hero.title2": "最本真的模樣。",
  "hero.body":
    "島上最佳居所的鎖匙。穿越四季地貌的車隊。開啟此地秘境的本地之手。由始至終——皆為我們所有。",
  "hero.cta1": "甄選入住",
  "hero.cta2": "規劃行程",
  "hero.scroll": "向下滑動 · 滑り降りる",
  "hero.locationLabel": "日本 · 北海道",

  "concierge.where": "目的地",
  "concierge.whereVal": "二世古",
  "concierge.whereHint": "住宿",
  "concierge.when": "日期",
  "concierge.whenVal": "2 月 14 日 — 2 月 21 日",
  "concierge.whenHint": "選擇日期",
  "concierge.party": "人數",
  "concierge.partyVal": "2 位賓客",
  "concierge.partyHint": "組成",
  "concierge.begin": "開始",

  "mission.eyebrow": "我們的立場",
  "mission.titlePre": "我們不僅僅是預訂旅程。我們",
  "mission.titleHighlight": "親自擁有",
  "mission.titlePost": "住所,親自駕馭車隊,引領您走過這座家鄉之島。",
  "mission.body1":
    "三十年間,同樣的家族與團隊走過這些山路。當大眾平台只做聚合時,我們以一處莊園、一位司機、一座山地——親手培育。",
  "mission.body2":
    "由此而成的,是一個完整且連續的生態:由新千歲機場的 Alphard 到清晨的越野嚮導,從無一次交接予陌生人。",

  "pillars.eyebrow": "四大基石",
  "pillars.title": "一座島嶼,完整成型。",
  "pillars.subtitle":
    "每一項基石均由本舍親自擁有與營運——絕不外判,絕不轉售。它們共同構成一件為您而調音的樂器。",
  "pillar.stay.label": "住宿",
  "pillar.stay.title": "精品酒店與私人山居",
  "pillar.stay.body":
    "由二世古的白樺林至小樽的石牆古宅,皆為我們親自經營的資產。",
  "pillar.travel.label": "出行",
  "pillar.travel.title": "Alphard 私人車隊",
  "pillar.travel.body":
    "陸上的頭等艙體驗。專為冬季打造,專業司機,通行全島。",
  "pillar.explore.label": "探索",
  "pillar.explore.title": "四季私人遠征",
  "pillar.explore.body":
    "由資深嚮導帶您深入越野粉雪、夏季火山口的薄霧,與秋日琥珀色的林冠。",
  "pillar.snow.label": "雪季",
  "pillar.snow.title": "精英滑雪教學",
  "pillar.snow.body":
    "多語種持證教練。粉雪、越野、進階——獨行者與家庭皆能各得其所。",

  "season.eyebrow": "四季法則",
  "season.title": "一座島嶼,四個全然不同的國度。",
  "season.spring.label": "春",
  "season.spring.title": "融雪的靜謐",
  "season.spring.copy":
    "積雪退去,大地浮現。海岸的櫻初綻,而山巔仍執守著白色。",
  "season.summer.label": "夏",
  "season.summer.title": "悠長的綠色地平線",
  "season.summer.copy":
    "薰衣草田、霧籠的湖面,以及美瑛與富良野那明亮開闊的農野。",
  "season.autumn.label": "秋",
  "season.autumn.title": "琥珀色的林冠",
  "season.autumn.copy":
    "楓與樺在火山蒸氣間燃燒。豐收、溫泉,以及一年中最清澈的光線。",
  "season.winter.label": "冬",
  "season.winter.title": "漸深的暮色",
  "season.winter.copy":
    "見證北海道步入純白。建築輪廓的剪影,世界級的粉雪。",
  "season.cta": "查看本季行程",

  "estate.eyebrow": "莊園名錄",
  "estate.title": "三把鎖匙,三種景觀。",
  "estate.cta": "所有居所",
  "estate.season.year": "全年",
  "estate.season.autumnWinter": "秋 · 冬",
  "estate.season.springAutumn": "春 · 秋",
  "property.sanctuary.name": "庇護別墅",
  "property.sanctuary.location": "二世古 · 比羅夫",
  "property.sanctuary.rooms": "4 間套房 · 私人溫泉",
  "property.asahidake.name": "旭岳山居",
  "property.asahidake.location": "大雪山",
  "property.asahidake.rooms": "8 間套房 · 森林桑拿",
  "property.otaru.name": "小樽隱所",
  "property.otaru.location": "小樽海岸",
  "property.otaru.rooms": "6 間套房 · 石造浴室",

  "transport.eyebrow": "移動",
  "transport.title1": "頭等艙級。",
  "transport.title2": "穿越每一種地形。",
  "transport.body":
    "由高規格 Toyota Alphard 與 Hiace 組成的專屬車隊,通過冬季認證,司機們走這些山路遠早於第一座纜車。",
  "transport.stat1Val": "28",
  "transport.stat1Label": "車隊規模",
  "transport.stat2Val": "12",
  "transport.stat2Label": "可服務語種",
  "transport.stat3Val": "365",
  "transport.stat3Label": "全年營運日數",
  "transport.stat4Val": "0",
  "transport.stat4Label": "外判承運",
  "transport.cta": "預訂車隊",

  "testimonial.eyebrow": "來自一位連續三冬的賓客",
  "testimonial.quote":
    "「一個無瑕的生態。由機場接機到越野嚮導,每一雙手都讓人覺得像同一處度假村的延續。」",
  "testimonial.author": "M. Lindqvist — 斯德哥爾摩",

  "cta.title1": "於北緯四十三度",
  "cta.title2": "開啟一段旅程。",
  "cta.speak": "與客服對話",
  "cta.browse": "瀏覽莊園名錄",

  "stub.stay.eyebrow": "住宿",
  "stub.stay.title": "精品酒店與私人山居,自始至終。",
  "stub.stay.body":
    "由二世古的白樺套房至小樽的石牆隱所,每一處皆由本舍親自擁有與營運。",
  "stub.hotels.eyebrow": "精品酒店",
  "stub.hotels.title": "一份小而精的住址名錄。",
  "stub.hotels.body":
    "每一處住所皆細小、刻意,由本舍親自配置人手。配套療養、御任廚房,以及直通車隊與嚮導的便利。",
  "stub.vacationRentals.eyebrow": "私人別墅",
  "stub.vacationRentals.title": "預訂一座莊園,而非一間客房。",
  "stub.vacationRentals.body":
    "私人山居、滑雪入戶別墅、農場居所——配私人溫泉、可選私廚,以及完整的禮賓聯通。",
  "stub.travel.eyebrow": "出行",
  "stub.travel.title": "陸上的頭等艙體驗。",
  "stub.travel.body":
    "我們專屬的 Alphard 與 Hiace 車隊,司機們流利掌握十二種語言,與這些山路有三十年之緣。",
  "stub.privateCharter.eyebrow": "私人包車",
  "stub.privateCharter.title": "載您穿越此島的車隊。",
  "stub.privateCharter.body":
    "跨島行程、多日專屬司機服務,以及由抵達至離開始終如一的座駕——並無任何交接。",
  "stub.airportTransfers.eyebrow": "機場接送",
  "stub.airportTransfers.title": "由舷橋直達山居。",
  "stub.airportTransfers.body":
    "新千歲、札幌或旭川機場迎接服務。固定價格、冬季認證車輛,以及一位已熟知您姓名的司機。",
  "stub.explore.eyebrow": "探索",
  "stub.explore.title": "為您開啟此島的本地之手。",
  "stub.explore.body":
    "由越野粉雪到夏日火山口的薄霧——皆由數十年走過這些山地的私人嚮導帶您前往。",
  "stub.experiences.eyebrow": "體驗之旅",
  "stub.experiences.title": "量身訂製的遠征,逐季展開。",
  "stub.experiences.body":
    "春日採擷、夏日海上獨木舟、秋日豐收餐桌、冬日越野穿越。每次僅服務一組賓客。",
  "stub.skiSchool.eyebrow": "滑雪學校",
  "stub.skiSchool.title": "母語授課的精英教學。",
  "stub.skiSchool.body":
    "粉雪進階、越野安全、兒童與家庭班——由能流利使用您語言的持證教練親授。",
  "stub.ourStory.eyebrow": "品牌故事",
  "stub.ourStory.title": "在這座島上,由住在這裡的人親手建造。",
  "stub.ourStory.body":
    "創辦人哲學、司機與嚮導的人員名錄,以及我們在本地保育與可持續方面的工作。",
  "stub.reconnect.eyebrow": "聯絡我們",
  "stub.reconnect.title": "通向本舍的一條直線。",
  "stub.reconnect.body":
    "WhatsApp、語音,或一份極度簡化的查詢表單。每一則訊息都由人親自閱讀——通常於同一日內回覆。",
};

// ---------- 繁體中文(台灣) ----------
const zhTW: Dict = {
  ...zhHK,
  "common.inquiry": "預約洽詢",
  "common.menu": "選單",
  "common.speakConcierge": "聯繫客服",
  "common.returnHome": "返回首頁",
  "common.comingSoonNote":
    "此章節正在編撰中。我們的禮賓團隊已掌握全部細節——歡迎直接與我們聯繫。",
  "route.reconnect": "聯繫我們",
  "stub.reconnect.eyebrow": "聯繫我們",
  "stub.reconnect.body":
    "WhatsApp、語音,或一份極度簡化的洽詢表單。每一則訊息皆由真人閱讀——通常於同一日內回覆。",

  "hero.body":
    "島上頂級居所的鑰匙。穿越四季地貌的車隊。開啟此地秘境的在地之手。從頭到尾——皆為我們所有。",
  "hero.locationLabel": "日本 · 北海道",

  "footer.tagline":
    "鑰匙、車隊、路徑——從抵達到離別,皆由我們親自掌持,一座北方之島,從頭到尾。",
  "pillar.stay.body":
    "從二世古的白樺林到小樽的石牆古宅,皆為我們親自經營的資產。",
  "pillar.travel.body":
    "陸上的頭等艙體驗。專為冬季打造、專業司機、通行全島。",
  "pillar.explore.body":
    "由資深嚮導帶您深入越野粉雪、夏季火山口的薄霧,與秋日琥珀色的林冠。",
  "transport.body":
    "由高規格 Toyota Alphard 與 Hiace 組成的專屬車隊,通過冬季認證,司機們走這些山路遠早於第一座纜車的時代。",
  "mission.body1":
    "三十年來,同樣的家族與團隊走過這些山路。當大眾平台僅做聚合時,我們以一處莊園、一位司機、一座山地——親手孕育。",
  "mission.body2":
    "由此而成的,是一個完整且連續的生態:從新千歲機場的 Alphard 到清晨的越野嚮導,從無一次交接予陌生人。",
};

// ---------- English (base / fallback) ----------
const en: Dict = {
  "common.inquiry": "Inquiry",
  "common.menu": "Menu",
  "common.speakConcierge": "Speak With a Concierge",
  "common.returnHome": "Return Home",
  "common.discover": "Discover",
  "common.browseRegister": "Browse the Estate Register",
  "common.comingSoonNote":
    "This chapter is being composed. In the meantime, our concierge already holds every detail — speak with us directly.",
  "common.copyright": "Hokkaidō Horizon · All rights observed",
  "common.language": "Language",

  "nav.stay": "Stay",
  "nav.travel": "Travel",
  "nav.explore": "Explore",
  "nav.ski": "Ski",
  "nav.ourStory": "Our Story",

  "footer.tagline":
    "The keys, the fleet, the path — owned, end to end, on a single northern island.",
  "footer.regions": "Sapporo · Otaru · Lake Toya · Furano · Biei",
  "footer.group.stay": "Stay",
  "footer.group.travel": "Travel",
  "footer.group.explore": "Explore",
  "footer.group.house": "House",

  "route.hotels": "Hotels",
  "route.vacationRentals": "Vacation Rentals",
  "route.privateCharter": "Private Charter",
  "route.airportTransfers": "Airport Transfers",
  "route.experiences": "Experiences",
  "route.skiSchool": "Ski School",
  "route.ourStory": "Our Story",
  "route.reconnect": "Reconnect",

  "hero.eyebrow": "Est. on the 43rd parallel",
  "hero.title1": "Hokkaido in its",
  "hero.title2": "purest element.",
  "hero.body":
    "The keys to the island's finest stays. The fleet that moves you across its changing terrains. The local hands that unlock its four seasons. End to end — ours.",
  "hero.cta1": "Experience Stay",
  "hero.cta2": "Plan Transit",
  "hero.scroll": "Scroll · 滑り降りる",
  "hero.locationLabel": "Hokkaidō, Japan",

  "concierge.where": "Where",
  "concierge.whereVal": "Sapporo\n",
  "concierge.whereHint": "Stay",
  "concierge.when": "When",
  "concierge.whenVal": "Feb 14 — Feb 21",
  "concierge.whenHint": "Dates",
  "concierge.party": "Party",
  "concierge.partyVal": "2 Guests",
  "concierge.partyHint": "Composition",
  "concierge.begin": "Begin",

  "mission.eyebrow": "Our Position",
  "mission.titlePre": "We do not simply book journeys. We",
  "mission.titleHighlight": "own",
  "mission.titlePost":
    "the accommodations, steer the fleet, and guide your path across our home island.",
  "mission.body1":
    "For three decades, the same families and crews have lived these roads. Where mass-market platforms aggregate, we cultivate — one estate, one chauffeur, one mountain at a time.",
  "mission.body2":
    "The result is a singular, continuous ecosystem: from the Alphard at New Chitose to the backcountry guide at first light, no handoff is ever to a stranger.",

  "pillars.eyebrow": "Four Pillars",
  "pillars.title": "An island, fully composed.",
  "pillars.subtitle":
    "Each pillar is owned and operated — never resold, never outsourced. Together they form a single instrument tuned to your stay.",
  "pillar.stay.label": "Stay",
  "pillar.stay.title": "Boutique Hotels & Private Chalets",
  "pillar.stay.body":
    "Owned-and-operated properties from the birch forests of Sapporo\n to the stone-walled retreats of Otaru.",
  "pillar.travel.label": "Travel",
  "pillar.travel.title": "The Alphard Fleet",
  "pillar.travel.body":
    "A first-class airline experience on land. Winter-rated, professionally chauffeured, all-island.",
  "pillar.explore.label": "Explore",
  "pillar.explore.title": "Private Seasonal Expeditions",
  "pillar.explore.body":
    "Master guides who unlock backcountry powder, summer mist on the calderas, and amber autumn canopies.",
  "pillar.snow.label": "Snow",
  "pillar.snow.title": "Elite Ski Instruction",
  "pillar.snow.body":
    "Multilingual certified instructors. Powder, backcountry, progression — for soloists and families alike.",

  "season.eyebrow": "The Four-Season Rule",
  "season.title": "One island, four entirely different countries.",
  "season.spring.label": "Spring",
  "season.spring.title": "The Melting Quiet",
  "season.spring.copy":
    "Earth surfaces beneath retreating snow. Cherry begins on the coast while peaks hold their white.",
  "season.summer.label": "Summer",
  "season.summer.title": "The Long Green Horizon",
  "season.summer.copy":
    "Lavender fields, mist-shrouded lakes, and the bright agricultural openness of Biei and Furano.",
  "season.autumn.label": "Autumn",
  "season.autumn.title": "The Amber Canopy",
  "season.autumn.copy":
    "Maple and birch ignite around volcanic steam. Harvest, hot springs, and the year's clearest light.",
  "season.winter.label": "Winter",
  "season.winter.title": "The Deepening Dusk",
  "season.winter.copy":
    "Witness Hokkaido's transition into absolute white. Architectural silhouettes, world-class powder.",
  "season.cta": "See the season's itineraries",

  "estate.eyebrow": "The Estate Register",
  "estate.title": "Three keys, three landscapes.",
  "estate.cta": "All Properties",
  "estate.season.year": "Year-round",
  "estate.season.autumnWinter": "Autumn · Winter",
  "estate.season.springAutumn": "Spring · Autumn",
  "property.sanctuary.name": "The Sanctuary Villa",
  "property.sanctuary.location": "Sapporo\n · Hirafu",
  "property.sanctuary.rooms": "4 Suites · Private Onsen",
  "property.asahidake.name": "Asahidake Lodge",
  "property.asahidake.location": "Daisetsuzan",
  "property.asahidake.rooms": "8 Suites · Forest Sauna",
  "property.otaru.name": "Otaru Retreat",
  "property.otaru.location": "Otaru Coast",
  "property.otaru.rooms": "6 Suites · Stone Bath",

  "transport.eyebrow": "Movement",
  "transport.title1": "First class.",
  "transport.title2": "Across all terrains.",
  "transport.body":
    "A purpose-built fleet of high-spec Toyota Alphards and Hiace vans, winter-rated and chauffeured by drivers who have run these passes since long before the first ski lift.",
  "transport.stat1Val": "28",
  "transport.stat1Label": "Vehicles in fleet",
  "transport.stat2Val": "12",
  "transport.stat2Label": "Languages spoken",
  "transport.stat3Val": "365",
  "transport.stat3Label": "Days operating",
  "transport.stat4Val": "0",
  "transport.stat4Label": "Subcontractors",
  "transport.cta": "Reserve the Fleet",

  "testimonial.eyebrow": "From a guest of three winters",
  "testimonial.quote":
    "“A flawless ecosystem. From the airport pickup to our backcountry guide, every hand felt like one continuous resort experience.”",
  "testimonial.author": "M. Lindqvist — Stockholm",

  "cta.title1": "Begin a journey",
  "cta.title2": "on the 43rd parallel.",
  "cta.speak": "Speak With a Concierge",
  "cta.browse": "Browse the Estate Register",

  "stub.stay.eyebrow": "Stay",
  "stub.stay.title": "Boutique hotels & private chalets, end to end.",
  "stub.stay.body":
    "From the birch-lined suites of Sapporo\n to the stone-walled retreats of Otaru, every property is owned and operated within the house.",
  "stub.hotels.eyebrow": "Hotels",
  "stub.hotels.title": "A small register of owned addresses.",
  "stub.hotels.body":
    "Each property is small, intentional, and personally staffed by the house. Onsite wellness, omakase dining, and direct access to our fleet and guides.",
  "stub.vacationRentals.eyebrow": "Vacation Rentals",
  "stub.vacationRentals.title": "Reserve an estate, not a room.",
  "stub.vacationRentals.body":
    "Private chalets, ski-in villas, and farmstead retreats — with private onsen, optional private chef, and full concierge integration.",
  "stub.travel.eyebrow": "Travel",
  "stub.travel.title": "A first-class airline experience on land.",
  "stub.travel.body":
    "Our purpose-built Alphard and Hiace fleet, chauffeured by drivers fluent in twelve languages and three decades of these passes.",
  "stub.privateCharter.eyebrow": "Private Charter",
  "stub.privateCharter.title": "The fleet that moves you across the island.",
  "stub.privateCharter.body":
    "Cross-island itineraries, multi-day chauffeured journeys, and the same vehicle from arrival to departure — no handoffs.",
  "stub.airportTransfers.eyebrow": "Airport Transfers",
  "stub.airportTransfers.title": "From the jet bridge to the lodge.",
  "stub.airportTransfers.body":
    "Meet-and-greet at New Chitose, Sapporo, or Asahikawa. Fixed pricing, winter-rated vehicles, and a driver who already knows your name.",
  "stub.explore.eyebrow": "Explore",
  "stub.explore.title": "The local hands that unlock the island.",
  "stub.explore.body":
    "From backcountry powder to summer mist on the calderas — private guides who have run these mountains for decades.",
  "stub.experiences.eyebrow": "Experiences & Tours",
  "stub.experiences.title": "Tailor-made expeditions, season by season.",
  "stub.experiences.body":
    "Foraging in spring, sea kayaking in summer, harvest tables in autumn, backcountry traverses in winter. Designed for one party at a time.",
  "stub.skiSchool.eyebrow": "Ski School",
  "stub.skiSchool.title": "Elite private instruction, in your language.",
  "stub.skiSchool.body":
    "Powder progression, backcountry safety, kids and family clinics — taught by certified instructors fluent in your tongue.",
  "stub.ourStory.eyebrow": "Our Story",
  "stub.ourStory.title": "Built on this island, by the people who live here.",
  "stub.ourStory.body":
    "The founder's philosophy, the asset registry of drivers and guides, and our work on local preservation and sustainability.",
  "stub.reconnect.eyebrow": "Reconnect",
  "stub.reconnect.title": "A direct line to the house.",
  "stub.reconnect.body":
    "WhatsApp, voice, or a single hyper-simplified inquiry form. Every message is read by a person — usually within the same daylight hour.",
};

export const dictionaries: Record<LangCode, Dict> = {
  "zh-cn": zhCN,
  "zh-hk": zhHK,
  "zh-tw": zhTW,
  en,
  ja: en,
  th: en,
  vi: en,
  es: en,
};
