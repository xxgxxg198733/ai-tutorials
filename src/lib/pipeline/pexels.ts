/**
 * Pexels API integration — free, 200 requests/hour.
 * Fetches matching cover + inline images for articles.
 */

const PEXELS_API_KEY = process.env.PEXELS_API_KEY || "";
const PEXELS_BASE = "https://api.pexels.com/v1";

export interface PexelsPhoto {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
  };
  alt: string;
}

interface PexelsResponse {
  photos: PexelsPhoto[];
  total_results: number;
}

async function pexelsRequest(endpoint: string): Promise<PexelsResponse | null> {
  if (!PEXELS_API_KEY) {
    console.warn("Pexels API key not configured");
    return null;
  }
  const res = await fetch(`${PEXELS_BASE}${endpoint}`, {
    headers: { Authorization: PEXELS_API_KEY },
  });
  if (!res.ok) {
    console.error(`Pexels error ${res.status}`);
    return null;
  }
  return res.json();
}

/**
 * Fetch a cover image for an article (1200x630).
 */
export async function fetchCoverImage(query: string): Promise<string | null> {
  const data = await pexelsRequest(
    `/search?query=${encodeURIComponent(query)}&per_page=3&orientation=landscape&size=large`
  );
  if (!data?.photos.length) return null;
  // Pick the first photo, use large for 1200px width
  return data.photos[0].src.large;
}

/**
 * Fetch an inline image for article body (800x400).
 */
export async function fetchInlineImage(query: string): Promise<{
  url: string;
  alt: string;
  credit: string;
} | null> {
  const data = await pexelsRequest(
    `/search?query=${encodeURIComponent(query)}&per_page=3&orientation=landscape&size=medium`
  );
  // Pick a different photo than cover
  const index = data?.photos.length && data.photos.length > 1 ? 1 : 0;
  if (!data?.photos[index]) return null;
  return {
    url: data.photos[index].src.large,
    alt: data.photos[index].alt || query,
    credit: `Photo by ${data.photos[index].photographer} on Pexels`,
  };
}
