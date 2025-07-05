export const getNavs = (langCode: string) => [
  {
    id: 1,
    href: `/${langCode}`,
    label: "🏡",
  },
  {
    id: 2,
    href: `/${langCode}/blog`,
    label: "📝",
  },
  {
    id: 3,
    href: `/${langCode}/works`,
    label: "💻",
  },
];
export const Languages = ["en", "mn"];
export const COLORS = [
  "#COE6FF",
  "#FFD6F8",
  "#EED2FF",
  "#FDE876",
  "#FFD4A0",
  "#A7FAE6",
];
