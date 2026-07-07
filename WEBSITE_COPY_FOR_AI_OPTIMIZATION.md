# Hokkaido Horizon 官网文案整理

用途：发给 AI 做文案优化  
整理日期：2026-06-24  
当前文案来源：官网现有 React 项目  
说明：以下按页面位置整理。默认优先整理简体中文前台文案，同时附上英文版本、繁体覆盖版本和系统类文案。  

## 需要先提醒 AI 的背景

- 品牌定位：premium Hokkaido travel and hospitality company。
- 风格关键词：Nordic, Minimal, Nature, Luxury, Warm, Authentic。
- 避免方向：蓝色科技风、旅行社广告风、滑雪主题风、日本传统旅馆风。
- 目标客群：港台、欧美、海外家庭与小团；中国大陆游客不是主要方向。
- 不要把官网写成只做滑雪，因为雪季只有约 4 个月。
- 不要在官网直接展示固定价格；酒店价格以后走 Booking 链接，包车/一日游/滑雪课程根据路线和时间咨询。
- Hotel ONE 不是我们的酒店，不要用于文案或图片判断。

## 待确认事项

- Shinka Hotel Susukino 的最终 Booking.com 链接。
- Oriental Hotel Sapporo 的最终 Booking.com 链接。
- LINE 是否分为住宿咨询和雪季体验两个入口。
- Shinka 的正确代表图需要重新确认原图，不要使用 Hotel ONE 外观。
- “Hokkaidō Horizon” 是否保留带长音符号，还是统一写作 “Hokkaido Horizon”。

---

# 1. SEO / 浏览器标题

## 全站默认 SEO

位置：`src/routes/__root.tsx`

标题：

```text
Hokkaido Horizon — Premium Hokkaido Travel & Hospitality
```

描述：

```text
Premium Hokkaido stays, licensed transport, seasonal tours, and snow experiences arranged by a local team.
```

OG 标题：

```text
Hokkaido Horizon — Premium Hokkaido Travel
```

OG 描述：

```text
Boutique stays, private transport, local tours, and snow experiences in Hokkaido.
```

## 首页 SEO

位置：`src/routes/index.tsx`

标题：

```text
Hokkaido Horizon — Premium Hokkaido Travel & Hospitality
```

描述：

```text
Boutique stays, licensed private transport, seasonal tours, and snow experiences arranged by a local Hokkaido team.
```

OG 标题：

```text
Hokkaido Horizon · Premium Hokkaido Travel
```

OG 描述：

```text
A premium Hokkaido travel and hospitality company for stays, transport, tours, and snow experiences.
```

## 住宿页 SEO

位置：`src/routes/stay.tsx`

标题：

```text
住宿 — Hokkaidō Horizon
```

描述：

```text
浏览札幌东方酒店与 Shinka Hotel Susukino 的房型，直接咨询礼宾预订。
```

## 其他页面标题

位置：各路由文件

```text
机场接送 — Hokkaidō Horizon
体验之旅 — Hokkaidō Horizon
探索 — Hokkaidō Horizon
精品酒店 — Hokkaidō Horizon
品牌故事 — Hokkaidō Horizon
私人包车 — Hokkaidō Horizon
联系我们 — Hokkaidō Horizon
滑雪学校 — Hokkaidō Horizon
出行 — Hokkaidō Horizon
私人别墅 — Hokkaidō Horizon
```

---

# 2. 页头导航

位置：全站顶部导航 `SiteHeader`

品牌名：

```text
Hokkaidō Horizon
```

导航：

```text
住宿
出行
体验
雪季
关于我们
预约咨询
菜单
```

英文导航：

```text
Stay
Transport
Tours
Snow
Our Story
Inquiry
Menu
```

---

# 3. 首页文案

## 3.1 Hero 首屏

位置：首页首屏 Hero

眉标：

```text
Premium Hokkaido Travel & Hospitality
```

主标题：

```text
在北海道，
把四季慢慢交给本地人。
```

正文：

```text
从札幌的落脚点，到雪路上的一辆车，再到花田、湖泊、温泉和粉雪。我们把住宿、移动和体验接在一起，让旅程少一点折腾，多一点从容。
```

按钮：

```text
查看住宿
规划行程
```

地点标签：

```text
Hokkaido, Japan
```

英文版本：

```text
Premium Hokkaido Travel & Hospitality

Hokkaido,
arranged by local hands.

Boutique stays, licensed transport, seasonal tours, and snow experiences composed into one continuous Hokkaido journey.

Explore Stays
Plan a Journey
```

## 3.2 首屏咨询条

位置：首页 Hero 下方咨询条

```text
目的地
北海道
札幌 / 小樽 / 二世古 / 富良野

季节
全年四季
春夏秋冬皆可规划

服务
住宿 · 包车 · 路线
我们帮你慢慢配好

联系礼宾
```

英文版本：

```text
Destination
Hokkaido
Sapporo / Otaru / Niseko / Furano

Season
All Year
Spring to winter

Services
Stay · Transport · Tours
Concierge composed

Contact Us
```

## 3.3 四季轮播

位置：首页 Hero 轮播 / 四季切换

主标题：

```text
北海道不只有冬天。每个季节，都有自己的节奏。
```

春：

```text
春
樱花刚开，山上还有雪
春天人少，风也轻。海边开始开花，山顶还留着白色的线条，适合慢慢开车、泡温泉，也适合在札幌住上几晚。
```

夏：

```text
夏
花田、湖水和很长的白天
富良野的花田、美瑛的丘陵、支笏湖和洞爷湖的风。夏天的北海道清爽、开阔，很适合一家人轻松走。
```

秋：

```text
秋
红叶开始，温泉也正好
山色慢慢变深，空气变清，餐桌上也开始热闹起来。秋天适合拍照、泡汤，也适合把行程排得松一点。
```

冬：

```text
冬
粉雪落下来，夜晚安静下来
冬天当然有粉雪，也有不滑雪的人会喜欢的雪原、温泉和札幌夜色。滑雪课程、雪地包车和轻户外体验，都可以一起安排。
```

CTA：

```text
查看精选路线
```

英文版本：

```text
One island, four distinct ways to travel.

Spring
Coast blossoms and quiet onsen
A clear, calm season for coastal sakura, soft mountain light, onsen stays, and slower city breaks.

Summer
Lavender, lakes, and long light
Furano flower fields, Biei hills, Lake Shikotsu, and Toya make summer the easiest season for families.

Autumn
Maple, harvest, and hot springs
Amber hillsides, volcanic steam, harvest tables, and the cleanest light of the year.

Winter
Powder, snowfields, and quiet nights
World-famous snow, private lessons, winter-rated transport, and soft outdoor experiences.

View Experiences
```

## 3.4 Services 服务区

位置：首页 Services

眉标：

```text
Services
```

标题：

```text
从落地到离开，都有人替你接住。
```

副标题：

```text
我们不把行程拆成一段一段丢给不同的人。住处、车辆、路线和雪季体验，都由同一支团队帮你前后衔接。
```

服务卡 01：

```text
Stay
在札幌，好好住一晚
两处位于札幌市中心的住宿，方便抵达、出发、吃饭，也适合家庭和雪季中转。
了解更多
```

服务卡 02：

```text
Transportation
路上也要舒服安心
持牌营运车辆，可安排机场接送、跨城移动、滑雪场接驳和多日包车。
了解更多
```

服务卡 03：

```text
Tours
把季节走得刚刚好
花田、湖泊、温泉、农场、红叶和雪原，不赶场，也不把一天塞满。
了解更多
```

服务卡 04：

```text
Snow Experiences
想滑雪，也可以慢慢来
滑雪教学、亲子课程、雪地体验和进阶路线，会按语言、年龄和水平来安排。
了解更多
```

英文版本：

```text
Services
Stay, movement, tours, and snow experiences.
A connected local team keeps the timing, language, and quality consistent from arrival to departure.

Stay
Boutique Hotels & Stays
Owned stays in central Sapporo for city nights, families, and snow-season transfers.

Transportation
Licensed Private Fleet
Green-plate vehicles for airports, ski resorts, cross-island journeys, and multi-day charters.

Tours
Seasonal Local Tours
Flower fields, lakes, onsen, farms, autumn color, and snowfields designed by local operators.

Snow Experiences
Lessons & Snow Days
Private lessons, family clinics, soft snow play, and progression days matched by language and level.
```

## 3.5 Featured Experiences 精选路线

位置：首页 Featured Experiences

眉标：

```text
Featured Experiences
```

标题：

```text
不追赶景点，只把季节走顺。
```

路线条目：

```text
春 / Sakura Coast & Quiet Onsen
夏 / Furano Lavender & Biei Hills
秋 / Lake Toya, Harvest Table & Maple Light
冬 / Niseko Powder, Sapporo Nights
```

英文版本：

```text
Featured Experiences
Hokkaido routes designed for the season.

Spring / Sakura Coast & Quiet Onsen
Summer / Furano Lavender & Biei Hills
Autumn / Lake Toya, Harvest Table & Maple Light
Winter / Niseko Powder, Sapporo Nights
```

## 3.6 Accommodation 住宿区

位置：首页 Accommodation

眉标：

```text
Accommodation
```

标题：

```text
两处札幌住处，刚好放慢脚步。
```

按钮：

```text
浏览住宿
```

标签：

```text
全年可订
```

住宿卡 1：

```text
中岛公园旁 · 近地铁
札幌东方酒店
舒适房型 · 适合家庭与小团停留
```

住宿卡 2：

```text
薄野中心 · 吃饭购物都方便
Shinka Hotel Susukino
公寓式空间 · 自助入住 · 适合城市短住
```

英文版本：

```text
Accommodation
Two city addresses for a softer landing.
Browse Stays
Year-round

Nakajima Park · 3-min walk to metro
Oriental Hotel Sapporo
Comfortable layouts · Family and small-group friendly

Central Susukino · Dining and nightlife nearby
Shinka Hotel Susukino
Apartment-style space · Self check-in · Urban short stays
```

## 3.7 Why Us

位置：首页 Why Us

眉标：

```text
Why Us
```

标题：

```text
服务可以细致，也可以很自然。
```

卡片：

```text
当地团队
长期在北海道接待客人，知道什么季节该去哪里，也知道路上要留多少时间。

多语言支持
面向港台、英语客人和海外家庭，预订前后都能说清楚。

持牌车辆
合法营运车辆，适合机场接送、家庭出行和冬季道路。

专业教练
雪季课程会看语言、年龄、水平和目标，不把所有人塞进同一种课。
```

英文版本：

```text
Why Us
Premium, warm, local, and precise.

Local Team
Long-term operators who understand Hokkaido's seasons, roads, languages, and guest rhythm.

Multilingual Support
Built for Hong Kong, Taiwan, English-speaking travelers, and overseas families.

Licensed Vehicles
Commercial green-plate vehicles suited to business, families, and winter roads.

Professional Coaches
Snow lessons matched by language, age, level, and personal goals.
```

## 3.8 首页底部 CTA

位置：首页底部 CTA

```text
来北海道，
不用什么都自己扛。

联系礼宾
查看住宿
```

英文版本：

```text
Place Hokkaido
in local hands.

Contact Concierge
Explore Stays
```

---

# 4. 住宿页文案

位置：`/stay`

## 4.1 Hero

```text
住宿

两处札幌住处，刚好放慢脚步。

两处住处都在札幌市中心。一处靠近中岛公园，安静、方便；一处在薄野中心，适合想把城市夜晚留在步行范围内的客人。
```

## 4.2 Oriental Hotel Sapporo

```text
中岛公园旁 · 近地铁
札幌东方酒店
舒适房型 · 适合家庭与小团停留

房型一览

三人房（带厨房）
三张单人床 · 带厨房 · 家庭住得更轻松
最多 3 人入住
查询空房

三人房（大床）
一张大床 + 一张单人床 · 适合三人同行
最多 3 人入住
查询空房

和式三人房
日式布团 · 榻榻米 · 更有在地感
最多 3 人入住
查询空房

豪华双人房
一张大床 · 简单舒服地住在札幌
最多 2 人入住
查询空房

标准双人房
一张双人床 · 干净利落的选择
最多 2 人入住
查询空房
```

英文版本：

```text
Nakajima Park · 3-min walk to metro
Oriental Hotel Sapporo
Comfortable layouts · Family and small-group friendly

Room Types

Triple Room with Kitchen
3 single beds · Private kitchen · Family long stays
Max 3 guests
Check Availability

Triple King Room
1 king + 1 single · Spacious layout
Max 3 guests
Check Availability

Japanese-Style Triple
Futon · Tatami · Traditional stay
Max 3 guests
Check Availability

Deluxe Double
1 king bed · Comfortable city stay
Max 2 guests
Check Availability

Standard Double
1 double bed · Simple and practical
Max 2 guests
Check Availability
```

## 4.3 Shinka Hotel Susukino

```text
薄野中心 · 吃饭购物都方便
Shinka Hotel Susukino
公寓式空间 · 自助入住 · 适合城市短住

房型一览

标准双人房
一张双人床 · 紧凑但方便
最多 2 人入住
查询空房

宽敞双人房
一张大床 · 空间更从容
最多 2 人入住
查询空房

单人房
一张单人床 · 一个人住也自在
最多 1 人入住
查询空房
```

英文版本：

```text
Central Susukino · Dining and nightlife nearby
Shinka Hotel Susukino
Apartment-style space · Self check-in · Urban short stays

Room Types

Standard Double
1 double bed · Compact and comfortable
Max 2 guests
Check Availability

Large Double
1 king bed · Comfortable for longer stays
Max 2 guests
Check Availability

Single Room
1 single bed · Ideal for solo travelers
Max 1 guest
Check Availability
```

## 4.4 Booking 说明区

```text
Booking

实时房价和规则，以 Booking 页面为准。

官网先负责说明两家酒店的气质、位置和适合人群。具体价格、库存、取消规则和入住细节，可以通过 Booking 链接查看；如果你预订我们的酒店，也可以同时咨询机场接送优惠。

查看实时房价
两家酒店价格、空房和取消规则以后通过 Booking 链接承接，避免官网价格过期。

机场接送优惠
预订 Oriental Hotel 或 Shinka Hotel 的客人，可同步咨询新千岁机场接送优惠。

团队餐说明
Oriental Hotel 餐厅可承接团餐；暂不接待个人散客餐食。
```

## 4.5 住宿页底部 CTA

```text
直接联系礼宾

不确定哪一间更适合？

把日期、人数和大致行程告诉我们就好。礼宾会根据你的停留方式，帮你推荐更合适的酒店与房型。

jonesapporo@gmail.com
011-206-1360
LINE 住宿咨询

写邮件咨询
联系礼宾
```

---

# 5. 服务详情页通用结构

以下页面使用同一个版式：

- `/travel`
- `/private-charter`
- `/airport-transfers`
- `/explore`
- `/experiences`
- `/ski-school`
- `/our-story`
- `/hotels`
- `/vacation-rentals`
- `/reconnect`

每页结构：

```text
眉标
标题
介绍段
亮点列表
两个内容区块
底部联系 CTA
```

## 5.1 出行 / Transportation

位置：`/travel`

```text
Transportation
在北海道，路上的时间也很重要。

北海道很大，天气和路况也会影响一天的节奏。我们会把车辆、司机、行李、季节和路线一起考虑，让移动不再是旅程里最累的部分。

亮点：
绿牌营运车辆
机场接送与跨城包车
适合家庭与小团
熟悉冬季道路

适合哪些路段
新千岁机场到札幌、札幌到二世古、富良野和美瑛一日路线、道央多日环线，以及雪季滑雪场接驳都可以安排。

我们会先问清楚
人数、行李、儿童座椅、停留时间和当天季节，都会影响用车。我们会先确认这些细节，再建议合适车型和时间。
```

英文版本：

```text
Transportation
Hokkaido movement, calmly arranged.

Vehicles, drivers, timing, luggage, and seasonal road conditions are planned together so each transfer feels composed.

Licensed green-plate vehicles
Airport and cross-island transfers
Family and small-group friendly
Winter road experience

Best for
New Chitose to Sapporo, Sapporo to Niseko, Furano and Biei day routes, multi-day central Hokkaido loops, and ski resort transfers.

How it works
Single transfers, half-day, full-day, and multi-day charters are available. We choose vehicles by party size, luggage, seats, and season.
```

## 5.2 私人包车 / Private Charter

位置：`/private-charter`

```text
Private Charter
专人专车，让距离变得轻一点。

如果不想拖着行李换车、赶车、查时刻表，私人包车会轻松很多。车和司机可以跟着整段行程走，时间也更有弹性。

亮点：
一组客人一辆车
可安排多日路线
住宿与路线一起看
没有购物站

路线可以慢慢组合
札幌、小樽、二世古、洞爷湖、富良野、美瑛、旭川都可以串起来。冬天我们会把路况和天黑时间一起算进去。

适合谁
家庭、情侣、商务客人和朋友小团都适合。比起把一天排满，我们更重视坐得舒服、走得顺。
```

英文版本：

```text
Private Charter
A private vehicle makes the island feel lighter.

For guests who prefer not to change cars, drag luggage, or follow public schedules, a dedicated vehicle keeps the journey flexible.

One party, one vehicle
Multi-day itineraries
Connected with stays and tours
No shopping stops

Route planning
Sapporo, Otaru, Niseko, Toya, Furano, Biei, and Asahikawa can be combined. Winter itineraries include more road time.

Vehicle standard
Comfort, legality, and safety come first, with vehicles suited to families, couples, business guests, and small groups.
```

## 5.3 机场接送 / Airport Transfers

位置：`/airport-transfers`

```text
Airport Transfers
落地之后，先有人接住你。

飞机落地后，不需要再临时找车。我们会提前确认航班、人数、行李和儿童座椅，把你直接送到酒店或下一站。

亮点：
新千岁机场接送
航班信息提前确认
冬季车辆安排
可接续入住或包车

抵达当天
司机会按航班时间安排等候，协助行李，并直接送达住宿地点。遇到航班延误，我们也会同步调整。

常见目的地
札幌市区、中岛公园、薄野、小樽、二世古、留寿都、富良野及周边酒店。
```

英文版本：

```text
Airport Transfers
From arrival gate to a softer landing.

For New Chitose and nearby airports, we confirm flight times, luggage, party size, child seats, and the final hotel address in advance.

New Chitose transfers
Flight details confirmed
Winter vehicle planning
Can connect to stays or charters

Arrival
Your driver waits according to the flight schedule, assists with luggage, and brings you directly to your stay.

Destinations
Sapporo, Nakajima Park, Susukino, Otaru, Niseko, Rusutsu, Furano, and surrounding hotels.
```

## 5.4 探索 / Tours

位置：`/explore`

```text
Tours
不把北海道做成打卡清单。

真正舒服的路线，要看天气、季节、路况，也要看同行的人。我们更喜欢少而准的安排，而不是一天塞满景点。

亮点：
四季路线规划
小团与家庭友好
温泉、湖泊、农场、花田
本地团队建议

每个季节都有自己的走法
春天看海岸与樱花，夏天去花田和湖泊，秋天安排红叶与温泉，冬天则加入雪原、夜景和暖室内。

不用赶
移动时间、用餐、拍照、老人和孩子的体力，都应该放进行程里。路线不是景点清单，而是一天怎么舒服地过。
```

英文版本：

```text
Tours
Hokkaido is not a checklist.

Good routes follow weather, season, road conditions, and the rhythm of the guests. We prefer fewer, better stops.

Seasonal route planning
Small groups and families
Onsen, lakes, farms, flowers
Local team advice

Season by season
Spring coast and sakura, summer flower fields and lakes, autumn maple and onsen, winter snowfields and city nights.

Pace
We plan drive time, meals, photos, children, and older travelers into the route, not just destination names.
```

## 5.5 精选路线 / Featured Experiences

位置：`/experiences`

```text
Featured Experiences
路线不用多，刚好就好。

我们先看季节，再看你想住哪里、同行是谁、一天能走多远。住宿、车辆、餐厅和体验会一起考虑。

亮点：
富良野与美瑛
小樽与余市
洞爷湖与温泉
二世古与雪季路线

可以这样走
夏天花田与湖泊，秋天红叶与温泉，冬天粉雪与札幌夜晚，春天海岸樱花与安静温泉。

你不用一次想清楚
只要先告诉我们季节、人数和天数，我们会帮你把路线强度、住宿位置、车辆和体验慢慢配出来。
```

英文版本：

```text
Featured Experiences
Seasonal routes designed with intention.

Each route begins with the season, then connects stays, transport, restaurants, activities, and pacing.

Furano and Biei
Otaru and Yoichi
Lake Toya and onsen
Niseko and snow routes

Examples
Summer flowers and lakes, autumn maple and onsen, winter powder and Sapporo nights, spring coast blossoms and quiet hot springs.

Custom planning
Share the season, party size, and number of days. We suggest pacing, stay locations, transport, and experiences.
```

## 5.6 雪季体验 / Snow Experiences

位置：`/ski-school`

```text
Snow Experiences
雪季可以很专业，也可以很轻松。

有人想认真学滑雪，有人只是想带孩子看看雪。课程和体验会按语言、年龄、水平和目标来安排。

亮点：
专业教练
亲子与初学者友好
中文与英文支持
车辆可同步安排

适合哪些客人
第一次滑雪、家庭亲子、想从绿道进阶到红道，或想体验北海道粉雪但希望有人稳定陪同的客人。

不滑雪也可以
雪地散步、雪原摄影、温泉、札幌夜景和轻户外路线，也能把冬天过得很好。
```

英文版本：

```text
Snow Experiences
Snow is one strong chapter, not the whole story.

Private lessons, family clinics, snow play, and progression days are matched by language, age, level, and goals.

Professional coaches
Family and beginner friendly
Chinese and English support
Transport can be arranged

Best for
First-time skiers, families, guests progressing from green to red runs, and powder-curious travelers who want steady support.

Beyond skiing
Snow walks, snowfield photography, onsen, Sapporo nights, and soft winter outdoor routes can also be arranged.
```

## 5.7 关于我们 / Our Story

位置：`/our-story`

```text
Our Story
我们想做的，是让北海道变得好抵达、好停留。

Hokkaido Horizon 不是只卖一段行程。我们更在意的是，客人从落地、入住、出门、回程，每一步都有人接得上。

亮点：
Premium
Nature
Warm
Authentic

我们的气质
我们喜欢北欧自然网站的克制，也喜欢高端酒店的秩序感。但真正重要的，是做出来的服务要温暖、可靠、不浮夸。

我们的做法
少一点广告式承诺，多一点能兑现的细节。车是否合法、路线顺不顺、住处方不方便、沟通清不清楚，都比口号重要。
```

英文版本：

```text
Our Story
A Hokkaido travel and hospitality company built for continuity.

Hokkaido Horizon is not about one-off transactions. We connect stays, vehicles, routes, and people into a dependable local system.

Premium
Nature
Warm
Authentic

Positioning
Premium Hokkaido travel and hospitality company. Nordic nature, high-end hotel order, and outdoor authenticity shape the tone.

Our way
Less advertising language, more details that can be delivered: licensed cars, smooth routes, useful stays, and clear communication.
```

## 5.8 酒店 / Hotels

位置：`/hotels`

```text
Hotels
在札幌中心，留一个好好休息的地方。

两处酒店分别在中岛公园与薄野区域。适合第一晚落脚、雪季中转、家庭旅行，也适合把札幌作为路线起点。

亮点：
札幌东方酒店
Shinka Hotel Susukino
地铁与餐饮便利
礼宾协助预订

札幌东方酒店
靠近中岛公园，地铁步行可达。房型有双人、三人、和式与带厨房选择，适合不同同行组合。

Shinka Hotel Susukino
位于薄野中心，吃饭、购物和夜间活动都方便。自助入住更灵活，适合城市短住。
```

英文版本：

```text
Hotels
Two Sapporo addresses for a calmer base.

Our hotels sit around Nakajima Park and Susukino, suited to city stays, snow-season transfers, families, and multi-day Hokkaido routes.

Oriental Hotel Sapporo
Shinka Hotel Susukino
Metro, dining, and shopping access
Concierge booking support

Oriental Hotel Sapporo
Near Nakajima Park, with metro access and double, triple, Japanese-style, and kitchen-equipped room options.

Shinka Hotel Susukino
In central Susukino, suited to guests who want dining, shopping, nightlife, and flexible self check-in.
```

## 5.9 民宿 / Vacation Rentals

位置：`/vacation-rentals`

```text
Vacation Rentals
给家庭和小团，多一点生活空间。

如果停留时间较长，或同行人数较多，民宿会比普通客房更从容。后续房源增加后，这里可以继续扩展成独立展示页。

亮点：
家庭友好
长住适合
可配合包车
后续可扩展房源

先保留入口
官网先保留民宿入口，未来新增房源时可以自然承接，也方便礼宾按家庭和小团需求推荐。

适合客人
亲子家庭、朋友小团、雪季长住，或希望能简单做饭、需要更多空间的客人。
```

英文版本：

```text
Vacation Rentals
More space for families and small groups.

Vacation rentals suit longer stays and guests who want more room and a residential feeling. This page is ready for future property expansion.

Family friendly
Long-stay suitable
Can pair with transport
Expandable property register

Current role
This page keeps a clear place for future rental inventory and gives concierge a page to reference when recommending options.

Best for
Families, small friend groups, snow-season long stays, and guests who need more space or light cooking options.
```

## 5.10 联系我们 / Contact

位置：`/reconnect`

```text
Contact
先说说你想怎么来北海道。

不用一开始就把行程想完整。告诉我们月份、人数、想住哪里，以及是否需要包车或雪季体验，我们会帮你理出下一步。

亮点：
邮箱咨询
酒店电话
LINE 入口预留
真人回复

邮箱
jonesapporo@gmail.com

酒店电话
011-206-1360
```

英文版本：

```text
Contact
A direct line to the concierge team.

Tell us your travel month, party size, preferred stay, and whether you need transport or snow experiences. We will suggest the right next step.

Email inquiry
Hotel phone
LINE placeholders
Human response

Email
jonesapporo@gmail.com

Hotel phone
011-206-1360
```

## 5.11 服务详情页底部 CTA

位置：所有服务详情页底部

```text
联系礼宾

来北海道， 不用什么都自己扛。

jonesapporo@gmail.com
011-206-1360
LINE 住宿咨询
LINE 雪季体验

预约咨询
```

英文版本：

```text
Speak With Concierge

Place Hokkaido in local hands.

jonesapporo@gmail.com
011-206-1360
LINE for Stay
LINE for Snow

Inquiry
```

---

# 6. 页脚文案

位置：全站 Footer

品牌名：

```text
Hokkaidō Horizon
```

标语：

```text
住在哪里、怎么移动、当天去哪里玩，都由熟悉北海道的人一起替你想好。
```

地区：

```text
札幌 · 小樽 · 二世古 · 富良野 · 美瑛
```

公司与联系方式：

```text
J-ONE CO., LTD. / J-ONE株式会社
〒064-0808 札幌市中央区南8条西4丁目422
jonesapporo@gmail.com
011-206-1360
WhatsApp 商务账号
Instagram @J_ONETRIP
```

页脚导航分组：

```text
住宿
酒店
民宿

出行
私人包车
机场接送

体验
精选路线
雪季体验

品牌
关于我们
联系我们
```

版权：

```text
J-ONE株式会社 · 保留所有权利
```

英文版本：

```text
Hokkaidō Horizon

A premium Hokkaido travel and hospitality company. Stays, licensed vehicles, local tours, and snow experiences connected by one local team.

Sapporo · Otaru · Niseko · Furano · Biei

J-ONE CO., LTD. / J-ONE株式会社
1F, 4-422 Minami 8-jo Nishi, Chuo-ku, Sapporo 064-0808
jonesapporo@gmail.com
011-206-1360
WhatsApp Business
Instagram @J_ONETRIP

Stay
Hotels
Vacation Rentals

Transport
Private Charter
Airport Transfers

Tours
Featured Experiences
Snow Experiences

House
Our Story
Contact

J-ONE CO., LTD. · All rights reserved
```

---

# 7. 语言切换文案

位置：页脚语言切换

```text
日本語
English
简体中文
繁體中文（香港）
繁體中文（台灣）
ไทย
Tiếng Việt
Español
```

说明：当前项目中日文、泰文、越南文、西班牙文实际会回退到英文文案，并没有独立翻译。

---

# 8. 繁体中文覆盖文案

位置：`zh-hk` 和 `zh-tw` 目前只覆盖部分文本，其余继承简体中文。

## 香港繁体覆盖

```text
預約查詢
聯絡禮賓
返回首頁
此頁面正在完善中，禮賓團隊已可協助預訂與規劃。

一間扎根北海道的高端旅行與旅宿公司。住宿、持牌車輛、在地體驗與雪季服務，由同一支本地團隊銜接。

北海道四季，
由本地團隊妥帖安排。

精品住宿、持牌車輛、四季路線與雪季體驗，連接成一段從抵達至離開的完整北海道旅程。

城市裡的兩處落腳點。

聯絡我們
```

## 台湾繁体覆盖

```text
預約洽詢
聯繫禮賓
聯繫我們
```

---

# 9. 404 / 错误页

位置：应用根路由错误状态

## 404

```text
404
Page not found
The page you're looking for doesn't exist or has been moved.
Go home
```

## 页面错误

```text
This page didn't load
Something went wrong on our end. You can try refreshing or head back home.
Try again
Go home
```

---

# 10. AI 优化建议提示词

可以把这段和上面的文案一起发给 AI：

```text
请基于以上官网文案，优化 Hokkaido Horizon 的中文官网表达。

品牌定位：premium Hokkaido travel and hospitality company。
目标客群：港台、欧美、海外家庭、小团、情侣、商务客人；中国大陆游客不是主要方向。
风格：Nordic, Minimal, Nature, Luxury, Warm, Authentic。
不要写成旅行社广告风，不要写成蓝色科技风，不要写成纯滑雪主题，也不要写成传统日式旅馆风。
官网需要体现全年四季，而不是只强调冬季。
语言要高级、自然、有温度，但不要空泛。
不要夸大结果，不要写固定价格，不要承诺无法确认的服务。
请按页面位置输出优化后的文案，并保留中英文对应版本。
```

