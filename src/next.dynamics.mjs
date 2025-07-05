import { siteConfig } from "./next.json.mjs";
export const PAGE_METADATA = {
  title: siteConfig.title,
  description: siteConfig.description,
  robots: { index: true, follow: true },
  twitter: {
    card: siteConfig.twitter.card,
    title: siteConfig.twitter.title,
    creator: siteConfig.twitter.username,
    images: {
      url: siteConfig.twitter.img,
      alt: siteConfig.twitter.imgAlt,
    },
  },
  icons: { icon: siteConfig.favicon },
  openGraph: { images: siteConfig.twitter.img },
};
