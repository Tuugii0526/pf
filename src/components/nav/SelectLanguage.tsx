"use client";

import { oswald } from "@/lib/fonts/fonts";
import { useParams, usePathname, useRouter } from "next/navigation";

export const SelectLanguage = () => {
  const router = useRouter();
  const pathName = usePathname();
  const { locale } = useParams();
  const onLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    let newPath;
    if (pathName.split("/").length == 2) {
      newPath = pathName.replace(/\/.+/i, `/${newLang}`);
    } else {
      newPath = pathName.replace(/\/.+\//i, `/${newLang}/`);
    }
    router.replace(newPath);
  };
  return (
    <select
      className={`${oswald.className} outline-none rounded-xl   *:text-[#5c5457] `}
      onChange={onLanguageChange}
      name="language"
      id="lan"
      value={locale}
    >
      <option value="en-US">EN</option>
      <option value="mn">MN</option>
    </select>
  );
};
