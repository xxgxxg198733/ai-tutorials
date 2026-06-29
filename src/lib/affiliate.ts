/**
 * Affiliate Link Management
 *
 * Central registry for all affiliate/referral links.
 * Keyed by tool identifier — used in Markdown frontmatter `affiliate.tool`.
 *
 * Platform notes:
 * - PartnerStack: Jasper, Copy.ai, Writesonic, Descript, Gamma, Krisp, Otter.ai
 * - Impact.com: Canva, Adobe (Firefly), Notion, Grammarly
 * - Rewardful: ElevenLabs, Leonardo AI, Suno, Runway (self-serve tracking)
 * - FirstPromoter: Jenni AI
 */

export interface AffiliateLinkConfig {
  /** Human-readable tool/product name */
  name: string;
  /** The actual affiliate tracking URL */
  url: string;
  /** Platform: PartnerStack | Impact | Rewardful | FirstPromoter | direct */
  platform: string;
  /** Short CTA text for the button/link */
  cta: string;
  /** One-line value prop shown in the CTA box */
  valueProp: string;
  /** Whether the link requires an active subscription/purchase (not free tier) */
  requiresPurchase: boolean;
}

/**
 * Master affiliate link registry.
 *
 * IMPORTANT: Replace placeholder URLs with actual tracking links
 * after registering on each platform (see AFFILIATE_PLAN.md).
 */
export const AFFILIATE_LINKS: Record<string, AffiliateLinkConfig> = {
  // === Tier 1 — High Commission (PartnerStack) ===

  jasper: {
    name: "Jasper AI",
    url: "https://www.jasper.ai/?fpr=aitutorialshub", // Replace with actual PartnerStack link
    platform: "PartnerStack",
    cta: "Try Jasper Free for 7 Days",
    valueProp: "AI content creation platform trusted by 100,000+ marketers",
    requiresPurchase: false,
  },

  copyai: {
    name: "Copy.ai",
    url: "https://www.copy.ai/?via=aitutorialshub", // Replace with actual PartnerStack link
    platform: "PartnerStack",
    cta: "Start with Copy.ai Free",
    valueProp: "Automated marketing workflows — 2,000 free words/month",
    requiresPurchase: false,
  },

  writesonic: {
    name: "Writesonic",
    url: "https://writesonic.com/?via=aitutorialshub", // Replace with actual PartnerStack link
    platform: "PartnerStack",
    cta: "Try Writesonic Free",
    valueProp: "AI writing + SEO tools in one platform",
    requiresPurchase: false,
  },

  descript: {
    name: "Descript",
    url: "https://www.descript.com/?lmref=aitutorialshub", // Replace with actual PartnerStack link
    platform: "PartnerStack",
    cta: "Try Descript Free",
    valueProp: "AI-powered video & audio editing — as easy as editing text",
    requiresPurchase: false,
  },

  gamma: {
    name: "Gamma",
    url: "https://gamma.app/?via=aitutorialshub", // Replace with actual PartnerStack link
    platform: "PartnerStack",
    cta: "Create with Gamma Free",
    valueProp: "AI presentations, docs & websites in seconds",
    requiresPurchase: false,
  },

  krisp: {
    name: "Krisp",
    url: "https://krisp.ai/?ref=aitutorialshub", // Replace with actual PartnerStack link
    platform: "PartnerStack",
    cta: "Try Krisp Free",
    valueProp: "AI noise cancellation for crystal-clear calls",
    requiresPurchase: false,
  },

  otterai: {
    name: "Otter.ai",
    url: "https://otter.ai/referrals/aitutorialshub", // Replace with actual PartnerStack link
    platform: "PartnerStack",
    cta: "Try Otter.ai Free",
    valueProp: "AI meeting notes & real-time transcription",
    requiresPurchase: false,
  },

  // === Tier 1 — Impact.com ===

  canva: {
    name: "Canva Pro",
    url: "https://partner.canva.com/aitutorialshub", // Replace with actual Impact link
    platform: "Impact",
    cta: "Try Canva Pro Free for 30 Days",
    valueProp: "All-in-one design platform with AI-powered tools",
    requiresPurchase: false,
  },

  adobe: {
    name: "Adobe Creative Cloud",
    url: "https://adobe.prf.hn/click/...", // Replace with actual Impact/CJ link
    platform: "Impact",
    cta: "Explore Adobe Firefly + Creative Cloud",
    valueProp: "Professional creative suite with built-in AI",
    requiresPurchase: false,
  },

  notion: {
    name: "Notion",
    url: "https://affiliate.notion.so/aitutorialshub", // Replace with actual Impact link
    platform: "Impact",
    cta: "Get Started with Notion Free",
    valueProp: "All-in-one workspace with AI writing built in",
    requiresPurchase: false,
  },

  grammarly: {
    name: "Grammarly",
    url: "https://www.grammarly.com/affiliates/aitutorialshub", // Replace with actual Impact link
    platform: "Impact",
    cta: "Try Grammarly Free",
    valueProp: "AI-powered writing assistant for error-free communication",
    requiresPurchase: false,
  },

  // === Tier 1 — Rewardful / Self-Serve ===

  elevenlabs: {
    name: "ElevenLabs",
    url: "https://elevenlabs.io/?via=aitutorialshub", // Replace with actual Rewardful link
    platform: "Rewardful",
    cta: "Try ElevenLabs Free",
    valueProp: "Most natural AI voice synthesis — 29 languages",
    requiresPurchase: false,
  },

  leonardo: {
    name: "Leonardo AI",
    url: "https://leonardo.ai/?via=aitutorialshub", // Replace with actual Rewardful link
    platform: "Rewardful",
    cta: "Start Creating with Leonardo AI Free",
    valueProp: "AI image generation with unmatched quality & control",
    requiresPurchase: false,
  },

  suno: {
    name: "Suno AI",
    url: "https://suno.com/?via=aitutorialshub", // Replace with actual Rewardful link
    platform: "Rewardful",
    cta: "Make Music with Suno Free",
    valueProp: "Create original AI music from text prompts",
    requiresPurchase: false,
  },

  runway: {
    name: "Runway",
    url: "https://runwayml.com/?via=aitutorialshub", // Replace with actual Rewardful link
    platform: "Rewardful",
    cta: "Try Runway Free",
    valueProp: "AI video generation & editing platform",
    requiresPurchase: false,
  },

  // === Tier 2 — FirstPromoter / Direct ===

  jenni: {
    name: "Jenni AI",
    url: "https://jenni.ai/?via=aitutorialshub", // Replace with actual FirstPromoter link
    platform: "FirstPromoter",
    cta: "Try Jenni AI Free",
    valueProp: "AI academic writing assistant for research papers",
    requiresPurchase: false,
  },

  beautiful: {
    name: "Beautiful.ai",
    url: "https://www.beautiful.ai/?via=aitutorialshub", // Replace with actual link
    platform: "direct",
    cta: "Try Beautiful.ai Free",
    valueProp: "AI-powered presentation design — stunning slides in minutes",
    requiresPurchase: false,
  },

  // === No Affiliate — Referral Programs (bonus for users) ===

  cursor: {
    name: "Cursor",
    url: "https://cursor.com/referral", // Referral — user gets free Pro
    platform: "referral",
    cta: "Download Cursor Free",
    valueProp: "AI-first code editor — free tier available",
    requiresPurchase: false,
  },

  xfzhizuo: {
    name: "iFlytek XFZhizuo",
    url: "https://xfzhizuo.cgref.cn/s/1zn5m7rkqm",
    platform: "ClickGlue",
    cta: "Try iFlytek AI Digital Human Free",
    valueProp: "AI digital human video creation — script to video in seconds",
    requiresPurchase: false,
  },
};

/**
 * Get an affiliate link by tool key.
 * Returns null if the tool has no affiliate program configured.
 */
export function getAffiliateLink(tool: string): AffiliateLinkConfig | null {
  return AFFILIATE_LINKS[tool] ?? null;
}

/**
 * Valid tool keys for type safety.
 */
export type AffiliateToolKey = keyof typeof AFFILIATE_LINKS;

/**
 * Generate UTM-tagged affiliate URL for tracking.
 */
export function affUrl(tool: AffiliateToolKey, source: string): string {
  const link = AFFILIATE_LINKS[tool];
  if (!link) return "#";
  const separator = link.url.includes("?") ? "&" : "?";
  return `${link.url}${separator}utm_source=${encodeURIComponent(source)}&utm_medium=affiliate&utm_campaign=ai-tutorials`;
}
