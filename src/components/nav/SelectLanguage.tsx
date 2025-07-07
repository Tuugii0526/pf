"use client";

import { oswald } from "@/lib/fonts/fonts";
import { useParams, usePathname, useRouter } from "next/navigation";

export const SelectLanguage = () => {
  const router = useRouter();
  const pathName = usePathname();
  const params = useParams<{ locale: "en" | "mn"; slug: string }>();
  const locale = params?.locale;

  const onLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    if (!pathName) return;
    const paths = pathName.split("/");
    paths[1] = newLang;
    router.replace(paths.join("/"));
  };
  return (
    <select
      className={`${oswald.className} outline-none rounded-xl text-[22px]   *:text-[#5c5457] `}
      onChange={onLanguageChange}
      name="language"
      id="lan"
      value={locale}
    >
      <option value="en">EN</option>
      <option value="mn">MN</option>
    </select>
  );
};
