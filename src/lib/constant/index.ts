export const getNavs = (
  langCode: string,
  links: {
    home: string;
    works: string;
    blogs: string;
  }
) => [
  {
    id: 1,
    href: `/${langCode}`,
    label: links?.home,
  },
  {
    id: 2,
    href: `/${langCode}/blogs`,
    label: links?.blogs,
  },
  {
    id: 3,
    href: `/${langCode}/works`,
    label: links?.works,
  },
];
