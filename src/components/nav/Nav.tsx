"use client";
import { SelectLanguage } from "./SelectLanguage";
import { NavLinks } from "./NavLinks";
export const Nav = () => {
  return (
    <div className="flex justify-end">
      <div className="flex gap-4">
        <NavLinks />
        <SelectLanguage />
      </div>
    </div>
  );
};
