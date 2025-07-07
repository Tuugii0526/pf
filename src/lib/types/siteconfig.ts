export interface TwitterConfig {
  username: string;
  card: string;
  img: string;
  imgAlt: string;
}

export interface OGConfig {
  imgType: string;
  imgWidth: string;
  imgHeight: string;
}

export type LogoVariant = "default" | "pride";

export interface SiteConfig {
  title: string;
  description: string;
  featuredImage: string;
  favicon: string;
  og: OGConfig;
  twitter: TwitterConfig;
}
