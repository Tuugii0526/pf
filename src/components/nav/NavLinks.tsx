"use client";

import { getNavs } from "@/lib/constant";
import { useLang } from "../context/LanguageProvider";
import { NavLink } from "./NavLink";

export const NavLinks = () => {
  const { currentLanguage, dict } = useLang();
  const navs = getNavs(currentLanguage, dict?.nav?.links);
  return (
    <div className="flex">
      {navs.map((nav) => (
        <NavLink key={nav?.id} nav={nav} />
      ))}
    </div>
  );
};
