const FALLBACK_STRAPI_URL =
  "http://strapi-2p2cktq4f2aqoklpusgyfdqt.217.160.8.26.sslip.io";

export const STRAPI_URL = (
  process.env.STRAPI_URL ??
  process.env.NEXT_PUBLIC_STRAPI_URL ??
  FALLBACK_STRAPI_URL
).replace(/\/$/, "");

const STRAPI_HOST = new URL(STRAPI_URL).hostname;
const CMS_UPLOAD_PREFIX = "/cms-uploads";

const FETCH_TIMEOUT_MS = 4000;
const REVALIDATE_SECONDS = 120;

export type HeroSlide = {
  src: string;
  alt: string;
};

export type KachelTile = {
  title: string;
  href: string;
  image: string;
  alt: string;
  color: string;
};

export type KachelnContent = {
  eyebrow: string;
  intro: string;
  colors: KachelTile[];
};

export type EntdeckenPanel = {
  title: string;
  subtitle: string;
  buttonLabel: string;
  href: string;
  image: string;
  alt: string;
};

export type EntdeckenContent = {
  panels: EntdeckenPanel[];
};

type StrapiMedia = {
  url?: string;
  formats?: {
    large?: { url?: string };
    medium?: { url?: string };
    small?: { url?: string };
  };
};

type StrapiHeroSlide = {
  alt?: string;
  image?: StrapiMedia;
};

type StrapiHeroResponse = {
  data?: {
    slides?: StrapiHeroSlide[];
  };
};

type StrapiColorTile = {
  title?: string;
  href?: string;
  alt?: string;
  color?: string;
  image?: StrapiMedia;
};

type StrapiKachelnResponse = {
  data?: {
    eyebrow?: string;
    intro?: string;
    colors?: StrapiColorTile[];
  };
};

type StrapiDiscoverPanel = {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  href?: string;
  alt?: string;
  image?: StrapiMedia;
};

type StrapiEntdeckenResponse = {
  data?: {
    panels?: StrapiDiscoverPanel[];
  };
};

type ImageSize = "large" | "medium" | "small" | "original";

export function strapiMediaUrl(url?: string | null) {
  if (!url) {
    return "";
  }

  if (url.startsWith("http://") || url.startsWith("https://")) {
    try {
      const parsed = new URL(url);
      if (
        parsed.hostname === STRAPI_HOST &&
        parsed.pathname.startsWith("/uploads/")
      ) {
        return `${CMS_UPLOAD_PREFIX}${parsed.pathname.slice("/uploads".length)}`;
      }
    } catch {
      return url;
    }

    return url;
  }

  if (url.startsWith("/uploads/")) {
    return `${CMS_UPLOAD_PREFIX}${url.slice("/uploads".length)}`;
  }

  return `${STRAPI_URL}${url}`;
}

export function strapiImageUrl(
  image?: StrapiMedia | null,
  size: ImageSize = "large",
) {
  if (size === "original") {
    return strapiMediaUrl(image?.url);
  }

  const url =
    image?.formats?.[size]?.url ??
    image?.formats?.large?.url ??
    image?.formats?.medium?.url ??
    image?.formats?.small?.url ??
    image?.url;

  return strapiMediaUrl(url);
}

async function strapiGet<T>(path: string, query: Record<string, string>) {
  const url = new URL(path, `${STRAPI_URL}/`);
  for (const [key, value] of Object.entries(query)) {
    url.searchParams.set(key, value);
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      next: { revalidate: REVALIDATE_SECONDS, tags: ["strapi"] },
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as T;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

export async function fetchHeroSlides(): Promise<HeroSlide[]> {
  const payload = await strapiGet<StrapiHeroResponse>("/api/hero", {
    "populate[slides][populate]": "image",
  });

  return (payload?.data?.slides ?? [])
    .map((slide) => ({
      src: strapiImageUrl(slide.image, "original"),
      alt: slide.alt?.trim() || "",
    }))
    .filter((slide) => slide.src);
}

function isHexColor(value: string) {
  return /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(value);
}

export async function fetchKacheln(): Promise<KachelnContent | null> {
  const payload = await strapiGet<StrapiKachelnResponse>("/api/kacheln", {
    "populate[colors][populate]": "image",
  });

  if (!payload?.data) {
    return null;
  }

  const colors = (payload.data.colors ?? [])
    .map((tile) => ({
      title: tile.title?.trim() || "",
      href: tile.href?.trim() || "#kacheln",
      image: strapiImageUrl(tile.image, "original"),
      alt: tile.alt?.trim() || tile.title?.trim() || "",
      color: tile.color?.trim() || "",
    }))
    .filter((tile) => tile.title && tile.image && isHexColor(tile.color));

  if (colors.length === 0) {
    return null;
  }

  return {
    eyebrow:
      payload.data.eyebrow?.trim() || "Die Kacheln · Geteilte Bildtafeln",
    intro:
      payload.data.intro?.trim() ||
      "Keine Liste – Tafeln. Zur Hälfte das Projekt, zur Hälfte Material und Farbe. So wird die Wahl der Küchenfarbe zum Erlebnis.",
    colors,
  };
}

export async function fetchEntdecken(): Promise<EntdeckenContent | null> {
  const payload = await strapiGet<StrapiEntdeckenResponse>("/api/entdecken", {
    "populate[panels][populate]": "image",
  });

  const panels = (payload?.data?.panels ?? [])
    .map((panel) => ({
      title: panel.title?.trim() || "",
      subtitle: panel.subtitle?.trim() || "",
      buttonLabel: panel.buttonLabel?.trim() || "Entdecken",
      href: panel.href?.trim() || "#entdecken",
      image: strapiImageUrl(panel.image, "original"),
      alt: panel.alt?.trim() || panel.title?.trim() || "",
    }))
    .filter((panel) => panel.title && panel.subtitle);

  if (panels.length === 0) {
    return null;
  }

  return { panels };
}

export async function fetchHomeCms() {
  const [heroSlides, kacheln, entdecken] = await Promise.all([
    fetchHeroSlides(),
    fetchKacheln(),
    fetchEntdecken(),
  ]);

  return { heroSlides, kacheln, entdecken };
}
