import { ADSENSE_CLIENT_ID } from "./constants";

export interface AdSlotConfig {
  id: string;
  name: string;
  format: "auto" | "horizontal" | "rectangle" | "vertical";
  responsive: boolean;
}

export const AD_SLOTS: Record<string, AdSlotConfig> = {
  topBanner: {
    id: "top-banner",
    name: "Top Banner",
    format: "horizontal",
    responsive: true,
  },
  inFeed: {
    id: "in-feed",
    name: "In-Feed",
    format: "auto",
    responsive: true,
  },
  inArticle: {
    id: "in-article",
    name: "In-Article",
    format: "auto",
    responsive: true,
  },
  sidebar: {
    id: "sidebar-rectangle",
    name: "Sidebar Rectangle",
    format: "rectangle",
    responsive: false,
  },
  bottomBanner: {
    id: "bottom-banner",
    name: "Bottom Banner",
    format: "horizontal",
    responsive: true,
  },
  homepageMid: {
    id: "homepage-mid",
    name: "Homepage Middle",
    format: "auto",
    responsive: true,
  },
};

export function getAdClientId(): string {
  return ADSENSE_CLIENT_ID;
}
