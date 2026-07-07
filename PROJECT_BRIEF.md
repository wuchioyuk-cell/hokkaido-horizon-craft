# Hokkaidō Horizon — 项目移交文档

## 项目概况

北海道旅游服务平台。一间在札幌拥有自营酒店、自营车队、自营向导的在地品牌。网站展示住宿、出行、探索、滑雪四大业务，主打「全程自营、无缝衔接」。

- **框架**：React 19 + TypeScript + TanStack Router
- **样式**：Tailwind CSS v4 + 自定义设计系统
- **打包**：Vite 7
- **多语言**：8 种语言，简中（zh-cn）为默认语言
- **GitHub**：https://github.com/wuchioyuk-cell/hokkaido-horizon-craft
- **生成工具**：Lovable（AI 生成），后续手动修改

---

## 目录结构

```
src/
├── assets/                 # 图片资源（6张，其中2张为占位图待替换）
│   ├── hero-yotei.jpg      # 首页 Hero 大图（羊蹄山）
│   ├── alphard-snow.jpg    # 雪中丰田阿尔法车队
│   ├── season-winter.jpg   # 冬季景观
│   ├── property-oriental.jpg   # ⚠️ 占位图，需替换为真实照片
│   ├── property-shinka.jpg     # ⚠️ 占位图，需替换为真实照片
│   ├── property-sanctuary.jpg  # 旧图，可删除
│   ├── property-asahidake.jpg  # 旧图，可删除
│   └── property-otaru.jpg      # 旧图，可删除
│
├── routes/                 # 页面路由（TanStack Router 文件路由）
│   ├── __root.tsx          # 根路由：HTML 外壳、404、错误边界
│   ├── index.tsx           # 首页：唯一完整页面
│   ├── stay.tsx            # 住宿预订页：房型展示 + 邮件咨询
│   ├── travel.tsx          # ComingSoon 占位
│   ├── explore.tsx         # ComingSoon 占位
│   ├── experiences.tsx     # ComingSoon 占位
│   ├── our-story.tsx       # ComingSoon 占位
│   ├── vacation-rentals.tsx # ComingSoon 占位
│   ├── private-charter.tsx  # ComingSoon 占位
│   ├── airport-transfers.tsx # ComingSoon 占位
│   ├── hotels.tsx          # ComingSoon 占位
│   ├── ski-school.tsx      # ComingSoon 占位
│   └── reconnect.tsx       # ComingSoon 占位
│
├── components/
│   ├── site-header.tsx     # 全局导航栏（固定顶部、滚动变色、移动端菜单）
│   ├── site-footer.tsx     # 全局页脚（链接、8语切换）
│   ├── coming-soon.tsx     # 通用占位页面组件
│   └── ui/                 # shadcn/ui 组件库（20+ 组件）
│
├── lib/
│   ├── i18n.ts             # 多语言核心：useT()、useLang() hooks
│   ├── i18n-dictionaries.ts # ⭐ 所有文案的字典文件（最关键）
│   ├── utils.ts            # 工具函数
│   └── ...                 # 其他工具文件
│
├── styles.css              # 全局样式 + 设计系统（品牌色、字体、动画）
├── router.tsx              # 路由配置
└── routeTree.gen.ts        # 自动生成的路由树
```

---

## 设计系统

```
品牌色（CSS 变量）:
  --ink:    #1A1C1E  深黑（主文字色）
  --birch:  #F9F6F0  白桦（页面背景）
  --silt:   #EAE5DC  沙石灰（次要背景）
  --moss:   #8C826E  苔藓绿（装饰色、标签色）
  --alpine: #FFFFFF  纯白（卡片背景）

字体：
  --font-display: "Cormorant Garamond", serif  用于标题
  --font-sans:    "Plus Jakarta Sans", sans     用于正文

预定义 CSS utility：
  .eyebrow           小号标签文字（10px, 全大写, 宽字距）
  .rule-line         标题前的小横线
  .hairline-btn      细线按钮（hover 反色）
  .hairline-btn-solid 实心按钮（hover 反色）
  .rise              入场动画（从下往上淡入）
  .fade-slow         慢速淡入动画
```

---

## 已完成的修改（相比 Lovable 原始输出）

### 1. 房产数据（从假数据改为真实数据）
- 3 个虚构房产 → 2 个真实酒店
- **札幌东方酒店**：34 间客房，中岛公园旁，地铁步行 3 分钟
- **Shinka Hotel Susukino**：15 间客房，薄野中心，Agoda 8.6 分
- 首页房产卡片从 3 列网格 → 2 列网格

### 2. 车队数据
- 数量 28 → 10 辆
- 强调「绿牌营运车辆」（日本合法商业客运牌照）

### 3. 中文文案（三版全部重写）
- zh-cn（简中）：完整重写，去掉机翻味，改为地道的精品酒店品牌文案
- zh-hk（繁中香港）：同步重写
- zh-tw（繁中台湾）：同步重写，使用台湾用语（飯店/聯繫/洽詢）
- 品牌调性：温暖、亲切、强调「自己人」「自营」

### 4. 预订展示页 `/stay`
- 从 ComingSoon 占位 → 完整功能页
- 房型卡片展示（不含房间数，只显示最多入住人数）
- 点击「查询空房」→ 自动打开邮件客户端，预填主题
- 联系邮箱：jonesapporo@gmail.com（公司邮箱）

### 5. 礼宾栏默认值
- 目的地从「二世古」→「札幌」

---

## 待办事项

### 🔴 必须做
1. **替换图片**：上传 `property-oriental.jpg` 和 `property-shinka.jpg` 真实照片到 `src/assets/`
2. **确认邮箱**：目前统一为公司邮箱 `jonesapporo@gmail.com`
3. **测试预订流程**：点「查询空房」按钮，确认邮件客户端打开且内容正确

### 🟡 建议做
4. **完善子页面**：目前除首页和 stay 外，其他页面都是 ComingSoon 占位
   - 出行（travel）、体验（experiences）、滑雪学校（ski-school）、品牌故事（our-story）
5. **英语文案**：en 版本目前仍是原始机翻英文，未优化
6. **日语、泰语、越南语、西班牙语**：目前全部 fallback 到英文
7. **SEO**：`__root.tsx` 里的默认 meta 还是 "Lovable App"，需改为真实品牌信息
8. **删除旧图片**：`property-sanctuary.jpg`, `property-asahidake.jpg`, `property-otaru.jpg`

---

## 多语言系统说明

字典在 `src/lib/i18n-dictionaries.ts`，结构：

```
dictionaries = {
  "zh-cn": { "key": "简体中文文案" },
  "zh-hk": { "key": "繁體香港文案" },    // 独立完整版本
  "zh-tw": { ...zhHK, "key": "台湾覆写" }, // 继承 zh-hk，只覆写不同的词
  "en":    { "key": "English text" },
  "ja": en,   // 日语暂时 fallback 到英文
  "th": en,   // 泰语 fallback
  "vi": en,   // 越南语 fallback
  "es": en,   // 西班牙语 fallback
}
```

使用方式：`const t = useT();` → `t("hero.body")` 自动取当前语言的值。

语言切换：URL 参数 `?lang=zh-cn`，在页脚有语言选择器。默认简体中文。

---

## 预订流程说明

当前是**方案 1：展示 + 咨询**（非在线支付）

1. 用户访问 `/stay` 看到两个酒店的房型卡片
2. 每个房型显示：名称、描述、最多入住人数
3. 点击「查询空房」→ 打开 `mailto:` 链接
4. 邮件已预填主题（酒店名+房型名），用户只需补充日期人数
5. 礼宾团队人工回复确认

未来可升级为方案 2（在线支付），但当前业务规模不需要。

---

## 本地运行

```bash
npm install
npm run dev
# → http://localhost:8080/
```

（项目原本用 bun，但 mac 上没有装 bun 也可以用 npm）
