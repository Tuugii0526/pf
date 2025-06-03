"use client";

import { useIsMounted } from "@/hooks/use-is-mounted";
import { SelectLanguage } from "./SelectLanguage";
import ThemeToggle from "./ThemeToggle";

export const Menu = () => {
  const isMounted = useIsMounted();
  return (
    <div className="flex justify-end items-center ">
      {isMounted && <ThemeToggle />}
      <SelectLanguage />
    </div>
  );
};
