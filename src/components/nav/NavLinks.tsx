"use client";

import { getNavs } from "@/lib/constant";
import { useLang } from "../context/LanguageProvider";
import { NavLink } from "./NavLink";

export const NavLinks = () => {
  const { currentLanguage } = useLang();
  const navs = getNavs(currentLanguage);
  return (
    <div className="flex items-center justify-around w-full ">
      {navs.map((nav) => (
        <NavLink key={nav?.id} nav={nav} />
      ))}
    </div>
  );
};
