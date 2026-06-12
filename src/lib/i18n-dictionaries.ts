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
  “common.inquiry”: “预约咨询”,
  “common.menu”: “菜单”,
  “common.speakConcierge”: “联系礼宾”,
  “common.returnHome”: “返回首页”,
  “common.discover”: “了解更多”,
  “common.browseRegister”: “浏览全部居所”,
  “common.comingSoonNote”:
    “此页面正在筹备中，详细信息请直接联系礼宾团队。”,
  “common.copyright”: “Hokkaidō Horizon · 保留所有权利”,
  “common.language”: “语言”,

  “nav.stay”: “住宿”,
  “nav.travel”: “出行”,
  “nav.explore”: “探索”,
  “nav.ski”: “滑雪”,
  “nav.ourStory”: “关于我们”,

  “footer.tagline”:
    “一间扎根北海道的本土品牌。从您落地那一刻起，酒店、司机、向导——全是自己人。”,
  “footer.regions”: “札幌 · 二世古 · 富良野 · 美瑛”,
  “footer.group.stay”: “住宿”,
  “footer.group.travel”: “出行”,
  “footer.group.explore”: “探索”,
  “footer.group.house”: “本舍”,

  “route.hotels”: “精品酒店”,
  “route.vacationRentals”: “私人别墅”,
  “route.privateCharter”: “私人包车”,
  “route.airportTransfers”: “机场接送”,
  “route.experiences”: “体验之旅”,
  “route.skiSchool”: “滑雪学校”,
  “route.ourStory”: “关于我们”,
  “route.reconnect”: “联系我们”,

  “hero.eyebrow”: “北纬 43° 北海道”,
  “hero.title1”: “北海道，”,
  “hero.title2”: “让它回到它本来的样子。”,
  “hero.body”:
    “我们拥有自己的酒店、自己的车队、自己的向导。从接机、入住到进山，每一个环节都由同一群人从头到尾为您打理——没有转手，没有陌生人。”,
  “hero.cta1”: “查看住宿”,
  “hero.cta2”: “预约用车”,
  “hero.scroll”: “向下浏览”,
  “hero.locationLabel”: “日本 · 北海道”,

  “concierge.where”: “目的地”,
  “concierge.whereVal”: “札幌”,
  “concierge.whereHint”: “选择地区”,
  “concierge.when”: “日期”,
  “concierge.whenVal”: “2 月 14 日 — 2 月 21 日”,
  “concierge.whenHint”: “选择日期”,
  “concierge.party”: “人数”,
  “concierge.partyVal”: “2 位客人”,
  “concierge.partyHint”: “宾客组成”,
  “concierge.begin”: “开始规划”,

  “mission.eyebrow”: “我们是谁”,
  “mission.titlePre”: “我们不只是在卖房间。”,
  “mission.titleHighlight”: “我们亲力亲为”,
  “mission.titlePost”: “——房是我们自己的，车是我们自己的，向导也是我们自己的。”,
  “mission.body1”:
    “这条路，同一群人走了三十年。当大平台在做搬运工的时候，我们在一间一间地打磨自己的酒店，一位一位地培养自己的司机，一座山一座山地摸透。”,
  “mission.body2”:
    “于是有了今天的闭环：您从新千岁机场坐上我们的车，入住我们自己的酒店，第二天一早由我们自己的向导带进山——全程无缝，全是自己人。”,

  “pillars.eyebrow”: “四大业务”,
  “pillars.title”: “一站到底，全部自有。”,
  “pillars.subtitle”:
    “每一项服务均为自营——不用外包，不转包给第三方。四大板块环环相扣，为您拼出一趟完整的北海道。”,
  “pillar.stay.label”: “住宿”,
  “pillar.stay.title”: “自营酒店与民宿”,
  “pillar.stay.body”:
    “从札幌市中心的东方酒店到薄野街区的精品民宿，每一间房都亲自打理。”,
  “pillar.travel.label”: “出行”,
  “pillar.travel.title”: “绿牌阿尔法车队”,
  “pillar.travel.body”:
    “全系丰田阿尔法与海狮，合法营运绿牌车辆，司机驾龄十年以上，全年可接。”,
  “pillar.explore.label”: “探索”,
  “pillar.explore.title”: “四季在地体验”,
  “pillar.explore.body”:
    “本地向导带领：冬日粉雪穿越、夏季火山探秘、秋天红叶温泉、春天海岸樱花。”,
  “pillar.snow.label”: “滑雪”,
  “pillar.snow.title”: “多语种滑雪教学”,
  “pillar.snow.body”:
    “持证教练，中文英文日文皆可。粉雪入门、野雪进阶、亲子课程——懂你的教练才教得好。”,

  “season.eyebrow”: “四季”,
  “season.title”: “同一座岛，四个完全不同的世界。”,
  “season.spring.label”: “春”,
  “season.spring.title”: “雪融春暖”,
  “season.spring.copy”:
    “残雪渐退，大地返青。海岸樱花初开，山顶还留着最后一线白。人少，安静，是最被低估的季节。”,
  “season.summer.label”: “夏”,
  “season.summer.title”: “无尽的绿”,
  “season.summer.copy”:
    “富良野薰衣草花田，美瑛拼布般的丘陵，雾中的摩周湖。北海道夏天不用空调，早晚要穿外套。”,
  “season.autumn.label”: “秋”,
  “season.autumn.title”: “满山秋色”,
  “season.autumn.copy”:
    “枫叶和银杏把山染成琥珀色。温泉季开始，丰收的食材上了餐桌，光线是全年最透的。”,
  “season.winter.label”: “冬”,
  “season.winter.title”: “纯白的尽头”,
  “season.winter.copy”:
    “世界级粉雪，无人能争。二世古的树林、富良野的缓坡、留寿都的野雪——我们开车带您去。”,
  “season.cta”: “探索本季体验”,

  “estate.eyebrow”: “我们的居所”,
  “estate.title”: “两处落脚，都在札幌心脏。”,
  “estate.cta”: “浏览全部”,
  “estate.season.year”: “全年可订”,
  “estate.season.autumnWinter”: “秋冬推荐”,
  “estate.season.springAutumn”: “春秋推荐”,
  “property.oriental.name”: “札幌东方酒店”,
  “property.oriental.location”: “中岛公园旁 · 地铁步行 3 分钟”,
  “property.oriental.rooms”: “34 间客房 · 和洋房型齐全 · 家庭友好”,
  “property.shinka.name”: “Shinka Hotel Susukino”,
  “property.shinka.location”: “薄野中心 · 吃喝玩乐步行可达”,
  “property.shinka.rooms”: “15 间客房 · 8.6 分口碑 · 自助入住”,

  // Room types
  “room.oriental.heading”: “房型一览”,
  “room.oriental.tripleKitchen”: “三人房（带厨房）”,
  “room.oriental.tripleKitchen.desc”: “三张单人床 · 独立厨房 · 家庭长住首选”,
  “room.oriental.tripleKing”: “三人房（大床）”,
  “room.oriental.tripleKing.desc”: “一张大床 + 一张单人 · 空间宽敞”,
  “room.oriental.japaneseTriple”: “和式三人房”,
  “room.oriental.japaneseTriple.desc”: “日式布团 · 榻榻米 · 地道日式入住体验”,
  “room.oriental.deluxeDouble”: “豪华双人房”,
  “room.oriental.deluxeDouble.desc”: “一张大床 · 高楼层城市景观”,
  “room.oriental.standardDouble”: “标准双人房”,
  “room.oriental.standardDouble.desc”: “一张双人床 · 舒适实用之选”,

  “room.shinka.heading”: “房型一览”,
  “room.shinka.smallDouble”: “标准双人房”,
  “room.shinka.smallDouble.desc”: “一张双人床 · 精致紧凑 · 性价比之选”,
  “room.shinka.largeDouble”: “宽敞双人房”,
  “room.shinka.largeDouble.desc”: “一张大床 · 空间从容 · 长住舒适”,
  “room.shinka.single”: “单人房”,
  “room.shinka.single.desc”: “一张单人床 · 独行旅客首选”,

  “room.label.guests”: “人入住”,
  “room.label.guestsPrefix”: “最多”,
  “room.label.price”: “价格请咨询礼宾”,
  “room.cta”: “查询空房”,
  “room.features”: “设施亮点”,

  “transport.eyebrow”: “出行”,
  “transport.title1”: “陆地头等舱，”,
  “transport.title2”: “全岛通行。”,
  “transport.body”:
    “10 辆丰田阿尔法与海狮组成的自营车队，全部持日本绿牌合法营运。司机驾龄十年以上，走过北海道每一条山路——远比第一座滑雪缆车建起来更早。”,
  “transport.stat1Val”: “10”,
  “transport.stat1Label”: “自营绿牌车辆”,
  “transport.stat2Val”: “12”,
  “transport.stat2Label”: “可服务语言”,
  “transport.stat3Val”: “365”,
  “transport.stat3Label”: “全年运营”,
  “transport.stat4Val”: “0”,
  “transport.stat4Label”: “外包转包”,
  “transport.cta”: “预约包车”,

  “testimonial.eyebrow”: “连续三个冬天都来的客人说”,
  “testimonial.quote”:
    ““从机场接机到野雪向导，全程下来像住进了一家度假村——每个环节都严丝合缝，每个人都像自己人。””,
  “testimonial.author”: “M. Lindqvist — 斯德哥尔摩”,

  “cta.title1”: “这个冬天，”,
  “cta.title2”: “从札幌开始。”,
  “cta.speak”: “联系礼宾”,
  “cta.browse”: “浏览全部居所”,

  // Sub-route stubs
  “stub.stay.eyebrow”: “住宿”,
  “stub.stay.title”: “自营酒店与精品民宿，全在札幌市区。”,
  “stub.stay.body”:
    “从靠近中岛公园的东方酒店到薄野繁华街区的 Shinka Hotel，均为自营物业，品质自己说了算。”,
  “stub.hotels.eyebrow”: “精品酒店”,
  “stub.hotels.title”: “小而精，全部自营。”,
  “stub.hotels.body”:
    “每一间房都亲自配置、亲自管理。配套餐厅、直通车队与向导，住进来就什么都不用操心了。”,
  “stub.vacationRentals.eyebrow”: “私人别墅”,
  “stub.vacationRentals.title”: “一套完整的家，不是一间客房。”,
  “stub.vacationRentals.body”:
    “整栋入住、私汤入户、可选私人厨师。适合家庭出游和滑雪小团伙，配备完整的礼宾服务。”,
  “stub.travel.eyebrow”: “出行”,
  “stub.travel.title”: “我们的车队，您的移动客厅。”,
  “stub.travel.body”:
    “10 辆绿牌丰田阿尔法与海狮，司机说 12 种语言，在这条路上跑了超过十年。”,
  “stub.privateCharter.eyebrow”: “私人包车”,
  “stub.privateCharter.title”: “专人专车，跨岛无忧。”,
  “stub.privateCharter.body”:
    “从札幌到二世古、富良野、旭川甚至函馆——一辆车一位司机跟到底，不用换来换去。”,
  “stub.airportTransfers.eyebrow”: “机场接送”,
  “stub.airportTransfers.title”: “出了登机口，有人在等你。”,
  “stub.airportTransfers.body”:
    “新千岁、札幌丘珠、旭川机场均可接机。固定价格，冬胎认证，司机提前知道您的名字和航班号。”,
  “stub.explore.eyebrow”: “探索”,
  “stub.explore.title”: “本地人带你玩，不是网上抄的攻略。”,
  “stub.explore.body”:
    “从冬天钻树林的粉雪到夏天火山口的晨雾——向导都是在这片山里长大的，闭着眼都知道路。”,
  “stub.experiences.eyebrow”: “体验之旅”,
  “stub.experiences.title”: “每次只接一组客人，量身定制。”,
  “stub.experiences.body”:
    “春天上山采山菜，夏天海上划艇，秋天农场收穫晚宴，冬天野雪穿越。不拼团，不走流水线。”,
  “stub.skiSchool.eyebrow”: “滑雪学校”,
  “stub.skiSchool.title”: “用你最舒服的语言上课。”,
  “stub.skiSchool.body”:
    “从第一次踩板到野雪冲坡，中英日文教练陪着你。一对一、亲子班、朋友小团都行。”,
  “stub.ourStory.eyebrow”: “关于我们”,
  “stub.ourStory.title”: “一间在北海道长出来的品牌。”,
  “stub.ourStory.body”:
    “创办人的故事、每一位司机和向导的名字、以及我们在本地社区做的一些小事。”,
  “stub.reconnect.eyebrow”: “联系我们”,
  “stub.reconnect.title”: “直接聊，不用填表。”,
  “stub.reconnect.body”:
    “写邮件、发微信、打个电话都行。每一条消息都是真人回复——通常当天就会回。”,
};

// ---------- 繁體中文(香港) ----------
const zhHK: Dict = {
  "common.inquiry": "預約查詢",
  "common.menu": "選單",
  "common.speakConcierge": "聯絡禮賓",
  "common.returnHome": "返回首頁",
  "common.discover": "了解更多",
  "common.browseRegister": "瀏覽全部居所",
  "common.comingSoonNote":
    "此頁面正在籌備中，詳細資訊請直接聯絡禮賓團隊。",
  "common.copyright": "Hokkaidō Horizon · 保留一切權利",
  "common.language": "語言",

  "nav.stay": "住宿",
  "nav.travel": "出行",
  "nav.explore": "探索",
  "nav.ski": "滑雪",
  "nav.ourStory": "關於我們",

  "footer.tagline":
    "一間扎根北海道的本土品牌。從你落機那一刻起，酒店、司機、嚮導——全是自己人。",
  "footer.regions": "札幌 · 二世古 · 富良野 · 美瑛",
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
  "route.ourStory": "關於我們",
  "route.reconnect": "聯絡我們",

  "hero.eyebrow": "北緯 43° 北海道",
  "hero.title1": "北海道，",
  "hero.title2": "讓它回到它本來的樣子。",
  "hero.body":
    "我們擁有自己的酒店、自己的車隊、自己的嚮導。從接機、入住到進山，每個環節都由同一群人從頭到尾為你打理——沒有轉手，沒有陌生人。",
  "hero.cta1": "查看住宿",
  "hero.cta2": "預約用車",
  "hero.scroll": "向下瀏覽",
  "hero.locationLabel": "日本 · 北海道",

  "concierge.where": "目的地",
  "concierge.whereVal": "札幌",
  "concierge.whereHint": "選擇地區",
  "concierge.when": "日期",
  "concierge.whenVal": "2 月 14 日 — 2 月 21 日",
  "concierge.whenHint": "選擇日期",
  "concierge.party": "人數",
  "concierge.partyVal": "2 位客人",
  "concierge.partyHint": "賓客組成",
  "concierge.begin": "開始規劃",

  "mission.eyebrow": "我們是誰",
  "mission.titlePre": "我們不只是在賣房間。",
  "mission.titleHighlight": "我們親力親為",
  "mission.titlePost": "——房是我們自己的，車是我們自己的，嚮導也是我們自己的。",
  "mission.body1":
    "這條路，同一群人走了三十年。當大平台在做搬運工的時候，我們在一間一間地打磨自己的酒店，一位一位地培養自己的司機，一座山一座山地摸透。",
  "mission.body2":
    "於是有了今天的閉環：你從新千歲機場坐上我們的車，入住我們自己的酒店，第二天一早由我們自己的嚮導帶進山——全程無縫，全是自己人。",

  "pillars.eyebrow": "四大業務",
  "pillars.title": "一站到底，全部自有。",
  "pillars.subtitle":
    "每項服務均為自營——不用外包，不轉包給第三方。四大板塊環環相扣，為你拼出一趟完整的北海道。",
  "pillar.stay.label": "住宿",
  "pillar.stay.title": "自營酒店與民宿",
  "pillar.stay.body":
    "從札幌市中心的東方酒店到薄野街區的精品民宿，每一間房都親自打理。",
  "pillar.travel.label": "出行",
  "pillar.travel.title": "綠牌 Alphard 車隊",
  "pillar.travel.body":
    "全系 Toyota Alphard 與 Hiace，合法營運綠牌車輛，司機駕齡十年以上，全年可接。",
  "pillar.explore.label": "探索",
  "pillar.explore.title": "四季在地體驗",
  "pillar.explore.body":
    "本地嚮導帶領：冬日粉雪穿越、夏季火山探秘、秋天紅葉溫泉、春天海岸櫻花。",
  "pillar.snow.label": "滑雪",
  "pillar.snow.title": "多語種滑雪教學",
  "pillar.snow.body":
    "持證教練，中文英文日文皆可。粉雪入門、野雪進階、親子課程——懂你的教練才教得好。",

  "season.eyebrow": "四季",
  "season.title": "同一座島，四個完全不同的世界。",
  "season.spring.label": "春",
  "season.spring.title": "雪融春暖",
  "season.spring.copy":
    "殘雪漸退，大地返青。海岸櫻花初開，山頂還留著最後一線白。人少，安靜，是最被低估的季節。",
  "season.summer.label": "夏",
  "season.summer.title": "無盡的綠",
  "season.summer.copy":
    "富良野薰衣草花田，美瑛拼布般的丘陵，霧中的摩周湖。北海道夏天不用冷氣，早晚要披件外套。",
  "season.autumn.label": "秋",
  "season.autumn.title": "滿山秋色",
  "season.autumn.copy":
    "楓葉和銀杏把山染成琥珀色。溫泉季開始，豐收的食材上了餐桌，光線是全年最透的。",
  "season.winter.label": "冬",
  "season.winter.title": "純白的盡頭",
  "season.winter.copy":
    "世界級粉雪，無人能爭。二世古的樹林、富良野的緩坡、留壽都的野雪——我們開車帶你去。",
  "season.cta": "探索本季體驗",

  "estate.eyebrow": "我們的居所",
  "estate.title": "兩處落腳，都在札幌心臟。",
  "estate.cta": "瀏覽全部",
  "estate.season.year": "全年可訂",
  "estate.season.autumnWinter": "秋冬推薦",
  "estate.season.springAutumn": "春秋推薦",
  "property.oriental.name": "札幌東方酒店",
  "property.oriental.location": "中島公園旁 · 地鐵步行 3 分鐘",
  "property.oriental.rooms": "34 間客房 · 和洋房型齊全 · 家庭友善",
  "property.shinka.name": "Shinka Hotel Susukino",
  "property.shinka.location": "薄野中心 · 吃喝玩樂步行可達",
  "property.shinka.rooms": "15 間客房 · 8.6 分口碑 · 自助入住",

  "room.oriental.heading": "房型一覽",
  "room.oriental.tripleKitchen": "三人房（帶廚房）",
  "room.oriental.tripleKitchen.desc": "三張單人床 · 獨立廚房 · 家庭長住首選",
  "room.oriental.tripleKing": "三人房（大床）",
  "room.oriental.tripleKing.desc": "一張大床 + 一張單人 · 空間寬敞",
  "room.oriental.japaneseTriple": "和式三人房",
  "room.oriental.japaneseTriple.desc": "日式布團 · 榻榻米 · 地道日式入住體驗",
  "room.oriental.deluxeDouble": "豪華雙人房",
  "room.oriental.deluxeDouble.desc": "一張大床 · 高樓層城市景觀",
  "room.oriental.standardDouble": "標準雙人房",
  "room.oriental.standardDouble.desc": "一張雙人床 · 舒適實用之選",

  "room.shinka.heading": "房型一覽",
  "room.shinka.smallDouble": "標準雙人房",
  "room.shinka.smallDouble.desc": "一張雙人床 · 精緻緊湊 · 性價比之選",
  "room.shinka.largeDouble": "寬敞雙人房",
  "room.shinka.largeDouble.desc": "一張大床 · 空間從容 · 長住舒適",
  "room.shinka.single": "單人房",
  "room.shinka.single.desc": "一張單人床 · 獨行旅客首選",

  "room.label.guests": "人入住",
  "room.label.guestsPrefix": "最多",
  "room.label.price": "價格請諮詢禮賓",
  "room.cta": "查詢空房",
  "room.features": "設施亮點",

  "transport.eyebrow": "出行",
  "transport.title1": "陸地頭等艙，",
  "transport.title2": "全島通行。",
  "transport.body":
    "10 輛 Toyota Alphard 與 Hiace 組成的自營車隊，全部持日本綠牌合法營運。司機駕齡十年以上，走過北海道每一條山路——遠比第一座滑雪纜車建起來更早。",
  "transport.stat1Val": "10",
  "transport.stat1Label": "自營綠牌車輛",
  "transport.stat2Val": "12",
  "transport.stat2Label": "可服務語言",
  "transport.stat3Val": "365",
  "transport.stat3Label": "全年營運",
  "transport.stat4Val": "0",
  "transport.stat4Label": "外判轉包",
  "transport.cta": "預約包車",

  "testimonial.eyebrow": "連續三個冬天都來的客人說",
  "testimonial.quote":
    "「從機場接機到野雪嚮導，全程下來像住進了一家度假村——每個環節都嚴絲合縫，每個人都像自己人。」",
  "testimonial.author": "M. Lindqvist — 斯德哥爾摩",

  "cta.title1": "這個冬天，",
  "cta.title2": "從札幌開始。",
  "cta.speak": "聯絡禮賓",
  "cta.browse": "瀏覽全部居所",

  "stub.stay.eyebrow": "住宿",
  "stub.stay.title": "自營酒店與精品民宿，全在札幌市區。",
  "stub.stay.body":
    "從靠近中島公園的東方酒店到薄野繁華街區的 Shinka Hotel，均為自營物業，品質自己話事。",
  "stub.hotels.eyebrow": "精品酒店",
  "stub.hotels.title": "小而精，全部自營。",
  "stub.hotels.body":
    "每一間房都親自配置、親自管理。配套餐廳、直通車隊與嚮導，住進來就什麼都不用操心了。",
  "stub.vacationRentals.eyebrow": "私人別墅",
  "stub.vacationRentals.title": "一套完整的家，不是一間客房。",
  "stub.vacationRentals.body":
    "整棟入住、私湯入戶、可選私人廚師。適合家庭出遊和滑雪小團，配備完整的禮賓服務。",
  "stub.travel.eyebrow": "出行",
  "stub.travel.title": "我們的車隊，你的移動客廳。",
  "stub.travel.body":
    "10 輛綠牌 Toyota Alphard 與 Hiace，司機說 12 種語言，在這條路上跑了超過十年。",
  "stub.privateCharter.eyebrow": "私人包車",
  "stub.privateCharter.title": "專人專車，跨島無憂。",
  "stub.privateCharter.body":
    "從札幌到二世古、富良野、旭川甚至函館——一輛車一位司機跟到底，不用換來換去。",
  "stub.airportTransfers.eyebrow": "機場接送",
  "stub.airportTransfers.title": "出了登機口，有人等你。",
  "stub.airportTransfers.body":
    "新千歲、札幌丘珠、旭川機場均可接機。固定價格，冬胎認證，司機提前知道你的名字和航班號。",
  "stub.explore.eyebrow": "探索",
  "stub.explore.title": "本地人帶你玩，不是網上抄的攻略。",
  "stub.explore.body":
    "從冬天鑽樹林的粉雪到夏天火山口的晨霧——嚮導都是在這片山裡長大的，閉著眼都識路。",
  "stub.experiences.eyebrow": "體驗之旅",
  "stub.experiences.title": "每次只接一組客人，度身訂造。",
  "stub.experiences.body":
    "春天上山採山菜，夏天海上划艇，秋天農場收穫晚宴，冬天野雪穿越。不拼團，不走流水線。",
  "stub.skiSchool.eyebrow": "滑雪學校",
  "stub.skiSchool.title": "用你最舒服的語言上堂。",
  "stub.skiSchool.body":
    "從第一次踩板到野雪衝坡，中英日文教練陪住你。一對一、親子班、朋友小團都可以。",
  "stub.ourStory.eyebrow": "關於我們",
  "stub.ourStory.title": "一間在北海道長出來的品牌。",
  "stub.ourStory.body":
    "創辦人的故事、每一位司機和嚮導的名字、以及我們在本地社區做的一些小事。",
  "stub.reconnect.eyebrow": "聯絡我們",
  "stub.reconnect.title": "直接傾，唔使填表。",
  "stub.reconnect.body":
    "寫電郵、發 WhatsApp、打個電話都得。每條訊息都是真人回覆——通常當日就會覆。",
};

// ---------- 繁體中文(台灣) ----------
const zhTW: Dict = {
  ...zhHK,
  "common.inquiry": "預約洽詢",
  "common.speakConcierge": "聯繫禮賓",
  "common.returnHome": "返回首頁",
  "common.comingSoonNote":
    "此頁面正在籌備中，詳細資訊請直接聯繫禮賓團隊。",
  "route.reconnect": "聯繫我們",
  "stub.reconnect.eyebrow": "聯繫我們",
  "stub.reconnect.body":
    "寫電子郵件、發 WhatsApp、打個電話都行。每條訊息都是真人回覆——通常當日就會回。",

  "hero.body":
    "我們擁有自己的飯店、自己的車隊、自己的嚮導。從接機、入住到進山，每個環節都由同一群人從頭到尾為你打理——沒有轉手，沒有陌生人。",
  "hero.locationLabel": "日本 · 北海道",

  "footer.tagline":
    "一間扎根北海道的本土品牌。從你下飛機那一刻起，飯店、司機、嚮導——全是自己人。",
  "pillar.stay.body":
    "從札幌市中心的東方飯店到薄野街區的精品民宿，每一間房都親自打理。",
  "pillar.travel.body":
    "全系 Toyota Alphard 與 Hiace，合法營運綠牌車輛，司機駕齡十年以上，全年可接。",
  "pillar.explore.body":
    "本地嚮導帶領：冬日粉雪穿越、夏季火山探祕、秋天紅葉溫泉、春天海岸櫻花。",
  "transport.body":
    "10 輛 Toyota Alphard 與 Hiace 組成的自營車隊，全部持日本綠牌合法營運。司機駕齡十年以上，走過北海道每一條山路——遠比第一座滑雪纜車建起來更早。",
  "mission.body1":
    "這條路，同一群人走了三十年。當大平台在做搬運工的時候，我們在一間一間地打磨自己的飯店，一位一位地培養自己的司機，一座山一座山地摸透。",
  "mission.body2":
    "於是有了今天的閉環：你從新千歲機場坐上我們的車，入住我們自己的飯店，第二天一早由我們自己的嚮導帶進山——全程無縫，全是自己人。",
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
  "footer.regions": "Sapporo · Niseko · Furano · Biei",
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
  "concierge.whereVal": "Niseko",
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
    "Owned-and-operated properties from the birch forests of Niseko to the stone-walled retreats of Otaru.",
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
  "estate.title": "Two addresses, one city.",
  "estate.cta": "All Properties",
  "estate.season.year": "Year-round",
  "estate.season.autumnWinter": "Autumn · Winter",
  "estate.season.springAutumn": "Spring · Autumn",
  "property.oriental.name": "Oriental Hotel Sapporo",
  "property.oriental.location": "Sapporo · Nakajima Park",
  "property.oriental.rooms": "34 Rooms · 3-min Walk to Metro",
  "property.shinka.name": "Shinka Hotel Susukino",
  "property.shinka.location": "Sapporo · Susukino",
  "property.shinka.rooms": "15 Rooms · Rated 8.6 · Self Check-in",

  "room.oriental.heading": "Room Types",
  "room.oriental.tripleKitchen": "Triple Room with Kitchen",
  "room.oriental.tripleKitchen.desc": "3 Single Beds · Kitchen · Family Friendly",
  "room.oriental.tripleKing": "Triple King Room",
  "room.oriental.tripleKing.desc": "1 King + 1 Single · Spacious Layout",
  "room.oriental.japaneseTriple": "Japanese-Style Triple",
  "room.oriental.japaneseTriple.desc": "Futon · Tatami · Traditional Experience",
  "room.oriental.deluxeDouble": "Deluxe Double",
  "room.oriental.deluxeDouble.desc": "1 King Bed · Premium · City View",
  "room.oriental.standardDouble": "Standard Double",
  "room.oriental.standardDouble.desc": "1 Double Bed · Simple & Comfortable",

  "room.shinka.heading": "Room Types",
  "room.shinka.smallDouble": "Small Double",
  "room.shinka.smallDouble.desc": "1 Double Bed · Compact & Cozy",
  "room.shinka.largeDouble": "Large Double",
  "room.shinka.largeDouble.desc": "1 King Bed · Spacious Layout",
  "room.shinka.single": "Single Room",
  "room.shinka.single.desc": "1 Single Bed · Solo Traveler's Choice",

  "room.label.guests": " guests",
  "room.label.guestsPrefix": "Max",
  "room.label.price": "Contact concierge for rates",
  "room.cta": "Check Availability & Rates",
  "room.features": "Highlights",

  "transport.eyebrow": "Movement",
  "transport.title1": "First class.",
  "transport.title2": "Across all terrains.",
  "transport.body":
    "A purpose-built fleet of high-spec Toyota Alphards and Hiace vans, winter-rated and chauffeured by drivers who have run these passes since long before the first ski lift.",
  "transport.stat1Val": "10",
  "transport.stat1Label": "Licensed commercial fleet",
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
    "From the birch-lined suites of Niseko to the stone-walled retreats of Otaru, every property is owned and operated within the house.",
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
