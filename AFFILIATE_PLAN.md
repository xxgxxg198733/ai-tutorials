# AI Tutorials Hub — Affiliate Monetization Plan

## Part 1: Affiliate Program Mapping

### ✅ Tier 1 — High Commission, Direct Match (优先对接)

| AI Tool | 你的文章 | Program | 佣金结构 | Cookie | 预估月入/万访客 |
|---------|---------|---------|---------|--------|-----------------|
| **Jasper AI** | 未直接覆盖 (可加) | PartnerStack | ~30% 月费 循环 12 个月 | 90 天 | $300–800 |
| **Copy.ai** | ✅ #26 copy-ai-marketing-content-guide | PartnerStack | ~30% 月费 循环 | 90 天 | $200–500 |
| **Writesonic** | ✅ #27 writesonic-ai-writing-platform-tutorial | PartnerStack | ~30% 月费 循环 | 90 天 | $150–400 |
| **Canva** | ✅ #12 canva-ai-design-tools-tutorial | Impact.com | $7–$36/次 Pro 订阅 | 30 天 | $200–600 |
| **Adobe Firefly** | ✅ #10 adobe-firefly-ai-design-tutorial | Impact / CJ | ~8% 订阅费 循环 | 30 天 | $300–1000 |
| **Notion** | ✅ #09 notion-ai-writing-assistant-guide | Impact | ~$10–$50/注册 | 30 天 | $150–500 |
| **Descript** | ✅ #25 descript-ai-video-editing-tutorial | PartnerStack | ~15% 月费 循环 | 90 天 | $200–500 |
| **Synthesia** | 建议新增 | PartnerStack | ~20% 循环 | 90 天 | $300–1000 |
| **ElevenLabs** | 建议新增 | Rewardful/FirstPromoter | ~20% 循环 | 60 天 | $200–600 |
| **Runway** | ✅ #13 runway-ai-video-generation-guide | 自建 (Rewardful) | ~15% 循环 | 30 天 | $150–400 |

### ✅ Tier 2 — 有 Program，中等佣金

| AI Tool | 你的文章 | Program | 佣金结构 |
|---------|---------|---------|---------|
| **Leonardo AI** | ✅ #19 leonardo-ai-image-generator-tutorial | 自建 Rewardful | ~20% 循环 |
| **Suno AI** | ✅ #23 suno-ai-music-generation-guide | 自建 | ~15% 循环 |
| **Gamma** | ✅ #24 gamma-ai-presentation-tool-tutorial | PartnerStack | ~25% 循环 |
| **Cursor** | ✅ #15 cursor-ai-code-editor-tutorial | 推荐系统 (免费额度) | 用户得免费 Pro |
| **GitHub Copilot** | ✅ #04 github-copilot-tutorial | 无直接 (可走 Microsoft) | 低或无 |
| **Replit** | 建议新增 | 自建 Rewardful | ~20% 循环 |
| **Poe (Quora)** | ✅ #22 poe-by-quora-ai-platform-guide | 无公开 Program | — |
| **Jenni AI** | ✅ #28 jenni-ai-academic-writing-assistant | FirstPromoter | ~20% 循环 |
| **Beautiful.ai** | ✅ #29 beautiful-ai-presentation-design-tutorial | 自建 | ~20% 循环 |
| **Krisp** | ✅ #30 krisp-ai-noise-cancellation-guide | PartnerStack | ~15% 循环 |
| **Luma AI** | ✅ #31 luma-ai-3d-generation-tutorial | 新兴 | 待确认 |
| **Pika** | ✅ #32 pika-ai-video-generation-guide | 新兴 | 待确认 |

### ⚠️ Tier 3 — 无传统 Affiliate，但有替代策略

| AI Tool | 你的文章 | 替代策略 |
|---------|---------|---------|
| **ChatGPT / OpenAI** | ✅ #01 | 无 affiliate program。**替代**: 写 "Best ChatGPT Use Cases"→ 引导到 Jasper/Copy.ai（这些有 affiliate） |
| **Claude / Anthropic** | ✅ #03 | 无 affiliate。**替代**: 同 ChatGPT，引导到付费工具体验 |
| **Gemini / Google** | ✅ #05 | 无 affiliate。免费产品，作为流量抓手 |
| **Midjourney** | ✅ #02 | 无正式 program。**替代**: Leonardo AI / Adobe Firefly 的 affiliate |
| **Perplexity** | ✅ #07, #20 | 无传统 program。**替代**: 推荐付费版 Pro，但不挂链接 |
| **DALL-E** | ✅ #06 | 同 OpenAI |
| **Stable Diffusion** | ✅ #08 | 开源免费。**替代**: Leonardo AI |
| **DeepSeek** | ✅ #33 | 免费。无变现 |
| **Grok (xAI)** | ✅ #34 | 无 program |
| **Character AI** | ✅ #18 | 无已知 program |
| **AutoGPT** | ✅ #21 | 开源。无 |
| **Otter.ai** | ✅ #14 | 轻微 program，PartnerStack |
| **Devin** | ✅ #35 | 新兴，待观察 |

---

## Part 2: 收入模型

假设月流量 30K 访客 (Google 长尾流量，可行性高)，转化率 0.5%–1.5%:

| 场景 | 月流量 | CTR (链接点击) | 转化率 | 平均佣金 | 月收入 |
|------|--------|---------------|--------|---------|--------|
| 保守 | 10K | 5% = 500 | 0.5% = 2.5 | $25 | **$62** |
| 中等 | 30K | 5% = 1500 | 1% = 15 | $30 | **$450** |
| 乐观 | 100K | 8% = 8000 | 1.5% = 120 | $35 | **$4,200** |
| 成熟 | 300K | 10% = 30K | 2% = 600 | $40 | **$24,000** |

对比 AdSense RPM $3–$8 的同类内容: 同等 30K 流量约 **$90–$240/月**.  
**Affiliate 预期收益是 AdSense 的 2–5 倍.**

---

## Part 3: 技术实施方案

### Step 1: 创建 Affiliate Link 管理系统

不用第三方库，自己写一个轻量级的:

```ts
// src/lib/affiliate.ts
export const AFFILIATE_LINKS = {
  // Tier 1
  jasper: {
    url: "https://partnerstack.com/...",  // 替换为实际 link
    name: "Jasper AI",
    platform: "PartnerStack",
    disclosure: "affiliate",
  },
  canva: {
    url: "https://canva.7eqqol.net/...",  // Impact link
    name: "Canva Pro",
    platform: "Impact",
    disclosure: "affiliate",
  },
  // ... all tools mapped here
} as const;

export function affLink(key: keyof typeof AFFILIATE_LINKS): string {
  return AFFILIATE_LINKS[key].url;
}

// Disclosure component
export function AffiliateDisclosure() {
  return (
    <span className="text-xs text-muted-foreground italic">
      (affiliate link — we may earn a commission at no extra cost to you)
    </span>
  );
}
```

### Step 2: 修改 ArticleContent 组件，支持 Affiliate CTA

在每篇 AI 工具教程底部自动插入 CTA:

```tsx
// src/components/article/ArticleCTA.tsx
interface ArticleCTAProps {
  toolName: string;
  ctaText: string;
  affiliateKey: keyof typeof AFFILIATE_LINKS;
}

export function ArticleCTA({ toolName, ctaText, affiliateKey }: ArticleCTAProps) {
  const link = AFFILIATE_LINKS[affiliateKey];
  return (
    <div className="my-8 p-6 rounded-xl border-2 border-primary/20 bg-primary/5">
      <h3 className="text-lg font-bold">🚀 Ready to try {toolName}?</h3>
      <p className="mt-2 text-muted-foreground">{ctaText}</p>
      <a
        href={link.url}
        target="_blank"
        rel="noopener sponsored"
        className="mt-4 inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
      >
        Try {toolName} Now →
      </a>
      <p className="mt-2 text-xs text-muted-foreground italic">
        ⚡ Affiliate link — we earn a commission if you sign up, at no extra cost.
      </p>
    </div>
  );
}
```

### Step 3: 内容改造 — CTA 插入策略

每篇有对应 affiliate program 的工具教程，在 **3 个位置** 插入 affiliate CTA:

1. **文章 30% 处** (第一个自然试用引导) → 内联链接
2. **文章底部** → CTA 卡片组件
3. **Key Takeaways 区域** → 推荐链接

对于没有 affiliate 的工具 (ChatGPT, Claude, Midjourney):
- 在文章中 **交叉引用** 有 affiliate 的替代工具
- 例如: "ChatGPT is great, but if you need specialized marketing copy, tools like [Jasper ↗] offer..."

### Step 4: Markdown Frontmatter 扩展

在每篇文章的 frontmatter 中添加 affiliate 元数据:

```yaml
---
affiliate:
  tool: jasper
  cta: "Start your 7-day free trial of Jasper — no credit card required"
---
```

---

## Part 4: 注册 & 对接清单

### 第一批 (本周注册 — 立刻有收入潜力):

| # | 平台 | 注册 URL | 接入的工具 |
|---|------|---------|-----------|
| 1 | **PartnerStack** | partnerstack.com/partners | Jasper, Copy.ai, Writesonic, Descript, Gamma, Krisp |
| 2 | **Impact.com** | impact.com/partners | Canva, Adobe, Notion, Grammarly |
| 3 | **Rewardful** | rewardful.com | ElevenLabs, Leonardo AI, Suno, Runway (自建链接) |
| 4 | **FirstPromoter** | firstpromoter.com | Jenni AI, 其他 SaaS |

### 注册流程 (每个平台 10-30 分钟):

1. 注册 Partner/Publisher 账号
2. 用 `contact@aitutorialshub.com` 验证
3. 搜索 & 申请加入品牌 program
4. 获取 affiliate link / tracking ID
5. 填入 `AFFILIATE_LINKS` 配置

### 建议网站描述 (申请时填写):

> "AI Tutorials Hub publishes in-depth, hands-on tutorials about AI tools for 30K+ monthly readers. Our audience is actively looking to adopt AI tools for work and creative projects. We create original tutorial content with practical use cases and real workflow examples."

---

## Part 5: 实施优先级

| 优先级 | 任务 | 预计时间 | 影响 |
|--------|------|---------|------|
| 🔴 P0 | 注册 PartnerStack + Impact.com | 1 天 | 打通所有 Tier 1 工具 |
| 🔴 P0 | 实现 affiliate.ts + CTA 组件 | 2 小时 | 技术基础 |
| 🔴 P0 | 修改 10 篇 Tier 1 文章 (Jasper, Canva, Adobe, Notion, Descript...) | 1 天 | 立刻能跑 |
| 🟡 P1 | 新增 5 篇高 affiliate 工具教程 (Synthesia, ElevenLabs, Murf, Grammarly, Surfer SEO) | 2 天 | 扩展覆盖 |
| 🟡 P1 | 修改 ChatGPT/Claude/Midjourney 等文章——加交叉推荐 | 1 天 | 引流到有 affiliate 的工具 |
| 🟢 P2 | 注册 Rewardful + FirstPromoter | 半天 | Tier 2 工具 |
| 🟢 P2 | 修改剩余 25 篇文章 | 2 天 | 全站覆盖 |
| 🟢 P2 | 添加 A/B 测试 (CTA 位置 / 文案) | 1 天 | 持续优化转化率 |

---

## Part 6: 注意事项

1. **FTC 披露**: 每篇有 affiliate 链接的文章必须在**链接附近**标注——已集成到 CTA 组件中
2. **nofollow/sponsored**: 所有 affiliate 链接必须加 `rel="sponsored"`——已在组件中实现
3. **不误导**: CTA 文案说清楚用户需要付费才能获得服务，不虚假宣传"免费"
4. **先体验再推荐**: 建议实际使用每个工具至少 1 周，补充真实的截图和体验——这本身就是 SEO 优势
5. **追踪**: 用 UTM 参数标记所有链接，方便分析哪个位置/文章转化最好
