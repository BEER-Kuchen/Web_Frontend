import { menuPanels, type MenuPanel } from "@/lib/navigation";

const FALLBACK_STRAPI_URL =
  "http://strapi-2p2cktq4f2aqoklpusgyfdqt.217.160.8.26.sslip.io";

export const STRAPI_URL = (
  process.env.STRAPI_URL ??
  process.env.NEXT_PUBLIC_STRAPI_URL ??
  FALLBACK_STRAPI_URL
).replace(/\/$/, "");

const STRAPI_HOST = new URL(STRAPI_URL).hostname;
const CMS_UPLOAD_PREFIX = "/cms-uploads";
const CMS_OPT_PREFIX = "/cms-opt";
const OPT_WIDTHS = [1280, 1600, 1920, 2560, 3840];

const FETCH_TIMEOUT_MS = 4000;
const REVALIDATE_SECONDS = 120;

export type HeroSlide = {
  src: string;
  srcSet?: string;
  alt: string;
};

export type KachelTile = {
  title: string;
  href: string;
  image: string;
  srcSet?: string;
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
  srcSet?: string;
  alt: string;
};

export type EntdeckenContent = {
  panels: EntdeckenPanel[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqContent = {
  eyebrow: string;
  title: string;
  items: FaqItem[];
};

type StrapiFormat = {
  url?: string;
  width?: number;
};

type StrapiMedia = {
  url?: string;
  width?: number;
  formats?: {
    large?: StrapiFormat;
    medium?: StrapiFormat;
    small?: StrapiFormat;
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

type StrapiFaqItem = {
  question?: string;
  answer?: string;
};

type StrapiFaqResponse = {
  data?: {
    eyebrow?: string;
    title?: string;
    items?: StrapiFaqItem[];
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

function cmsOptUrl(originalUrl: string, width: number) {
  if (!originalUrl.startsWith(`${CMS_UPLOAD_PREFIX}/`)) {
    return "";
  }

  return `${CMS_OPT_PREFIX}/${width}/${originalUrl.slice(CMS_UPLOAD_PREFIX.length + 1)}`;
}

export function strapiResponsiveImage(
  image?: StrapiMedia | null,
  options?: { srcWidth?: number },
) {
  const srcWidth = options?.srcWidth ?? 1920;
  const originalUrl = strapiMediaUrl(image?.url);
  const originalWidth = image?.width;
  const candidates: { url: string; width: number }[] = [];
  const add = (url?: string, width?: number, fallbackWidth?: number) => {
    const mapped = url?.startsWith("/") || url?.startsWith("http")
      ? url
      : strapiMediaUrl(url);
    const resolvedWidth = width || fallbackWidth;
    if (!mapped || !resolvedWidth) {
      return;
    }
    if (candidates.some((item) => item.url === mapped)) {
      return;
    }
    candidates.push({ url: mapped, width: resolvedWidth });
  };

  add(strapiMediaUrl(image?.formats?.small?.url), image?.formats?.small?.width, 500);
  add(strapiMediaUrl(image?.formats?.medium?.url), image?.formats?.medium?.width, 750);
  add(strapiMediaUrl(image?.formats?.large?.url), image?.formats?.large?.width, 1000);

  if (originalUrl && originalWidth) {
    if (originalWidth <= 1920) {
      add(originalUrl, originalWidth);
    } else {
      for (const width of OPT_WIDTHS) {
        if (width <= originalWidth) {
          add(cmsOptUrl(originalUrl, width), width);
        }
      }
    }
  }

  candidates.sort((left, right) => left.width - right.width);

  const preferred =
    candidates.find((item) => item.width >= srcWidth) ?? candidates.at(-1);
  const src = preferred?.url || "";

  if (!src) {
    return { src: "", srcSet: undefined as string | undefined };
  }

  return {
    src,
    srcSet:
      candidates.length > 1
        ? candidates.map((item) => `${item.url} ${item.width}w`).join(", ")
        : undefined,
  };
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
    .map((slide) => {
      const image = strapiResponsiveImage(slide.image, { srcWidth: 2560 });
      return {
        src: image.src,
        srcSet: image.srcSet,
        alt: slide.alt?.trim() || "",
      };
    })
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
    .map((tile) => {
      const image = strapiResponsiveImage(tile.image, { srcWidth: 1600 });
      return {
        title: tile.title?.trim() || "",
        href: tile.href?.trim() || "#kacheln",
        image: image.src,
        srcSet: image.srcSet,
        alt: tile.alt?.trim() || tile.title?.trim() || "",
        color: tile.color?.trim() || "",
      };
    })
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
    .map((panel) => {
      const image = strapiResponsiveImage(panel.image, { srcWidth: 1600 });
      return {
        title: panel.title?.trim() || "",
        subtitle: panel.subtitle?.trim() || "",
        buttonLabel: panel.buttonLabel?.trim() || "Entdecken",
        href: panel.href?.trim() || "#entdecken",
        image: image.src,
        srcSet: image.srcSet,
        alt: panel.alt?.trim() || panel.title?.trim() || "",
      };
    })
    .filter((panel) => panel.title && panel.subtitle);

  if (panels.length === 0) {
    return null;
  }

  return { panels };
}

export async function fetchFaq(): Promise<FaqContent | null> {
  const payload = await strapiGet<StrapiFaqResponse>("/api/faq", {
    populate: "items",
  });

  if (!payload?.data) {
    return null;
  }

  const items = (payload.data.items ?? [])
    .map((item) => ({
      question: item.question?.trim() || "",
      answer: item.answer?.trim() || "",
    }))
    .filter((item) => item.question && item.answer);

  if (items.length === 0) {
    return null;
  }

  return {
    eyebrow: payload.data.eyebrow?.trim() || "Fragen",
    title: payload.data.title?.trim() || "Bevor wir uns sehen",
    items,
  };
}

export async function fetchHomeCms() {
  const [heroSlides, kacheln, entdecken, faq] = await Promise.all([
    fetchHeroSlides(),
    fetchKacheln(),
    fetchEntdecken(),
    fetchFaq(),
  ]);

  return { heroSlides, kacheln, entdecken, faq };
}

export type HeaderCms = {
  logo: string;
  logoAlt: string;
  ctaLabel: string;
  ctaUrl: string;
  panels: MenuPanel[];
};

type StrapiMenuLink = {
  label?: string;
  url?: string;
  highlight?: boolean;
};

type StrapiMenuGroup = {
  title?: string | null;
  links?: StrapiMenuLink[];
};

type StrapiMenuTeaser = {
  caption?: string;
  alt?: string;
  url?: string;
  image?: StrapiMedia;
};

type StrapiHeaderMenu = {
  documentId?: string;
  label?: string;
  title?: string;
  url?: string;
  variant?: MenuPanel["variant"];
  intro?: string;
  order?: number;
  groups?: StrapiMenuGroup[];
  teasers?: StrapiMenuTeaser[];
};

type StrapiHeaderEntry = {
  logo?: StrapiMedia;
  logoAlt?: string;
  ctaLabel?: string;
  ctaUrl?: string;
};

function slugify(value: string) {
  return (
    value
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "menu"
  );
}

function mapHeaderMenus(menus: StrapiHeaderMenu[]): MenuPanel[] {
  const fallbackByLabel = new Map(
    menuPanels.map((panel) => [panel.label, panel]),
  );

  return menus
    .map((menu) => {
      const label = menu.label?.trim() || "";
      const fallback = fallbackByLabel.get(label);
      const teasers = (menu.teasers ?? [])
        .map((teaser) => {
          const image = strapiResponsiveImage(teaser.image, { srcWidth: 1200 });
          return {
            href: teaser.url?.trim() || "#",
            image: image.src,
            srcSet: image.srcSet,
            caption: teaser.caption?.trim() || "",
            alt: teaser.alt?.trim() || teaser.caption?.trim() || "",
          };
        })
        .filter((teaser) => teaser.caption && teaser.image);

      return {
        id: slugify(label) || menu.documentId || "menu",
        label,
        title: menu.title?.trim() || label,
        href: menu.url?.trim() || fallback?.href || "#",
        variant: menu.variant ?? fallback?.variant ?? "slim",
        intro: menu.intro?.trim() || fallback?.intro || "",
        groups: (menu.groups ?? [])
          .map((group) => ({
            title: group.title?.trim() || undefined,
            links: (group.links ?? [])
              .map((link) => ({
                label: link.label?.trim() || "",
                href: link.url?.trim() || "#",
                highlight: Boolean(link.highlight),
              }))
              .filter((link) => link.label),
          }))
          .filter((group) => group.links.length > 0),
        teasers: teasers.length > 0 ? teasers : fallback?.teasers,
      } satisfies MenuPanel;
    })
    .filter((panel) => panel.label && panel.groups.length > 0);
}

export async function fetchHeader(): Promise<HeaderCms | null> {
  const [headerPayload, menuPayload] = await Promise.all([
    strapiGet<{ data?: StrapiHeaderEntry[] }>("/api/headers", {
      populate: "logo",
    }),
    strapiGet<{ data?: StrapiHeaderMenu[] }>("/api/header-menus", {
      sort: "order:asc",
      "populate[groups][populate]": "links",
      "populate[teasers][populate]": "image",
    }),
  ]);

  const header = headerPayload?.data?.[0];
  const panels = mapHeaderMenus(menuPayload?.data ?? []);

  if (!header && panels.length === 0) {
    return null;
  }

  const logo = strapiMediaUrl(header?.logo?.url);

  return {
    logo,
    logoAlt: header?.logoAlt?.trim() || "BEER Küchenmanufaktur",
    ctaLabel: header?.ctaLabel?.trim() || "Beratung anfragen",
    ctaUrl: header?.ctaUrl?.trim() || "#beratung",
    panels: panels.length > 0 ? panels : menuPanels,
  };
}
