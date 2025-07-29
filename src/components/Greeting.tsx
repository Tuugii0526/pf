"use client";

import { dm_serif_display, roboto } from "@/lib/fonts/fonts";
import { useLang } from "./context/LanguageProvider";

export const Greeting = () => {
  const { dict } = useLang();
  return (
    <div className="font-bold">
      <p className={`text-[45px] ${dm_serif_display.className}`}>
        {dict?.home.greeting}
      </p>
      <p className={`${roboto.className} `}>
        {dict?.home.introduction}
        <span className="text-3xl">🤗</span>
      </p>
    </div>
  );
};
