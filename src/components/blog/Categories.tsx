"use client";
import { COLORS } from "@/lib/constant";
import Link from "next/link";
import { useLang } from "../context/LanguageProvider";

export const Categories = ({ categories }: { categories: string[] }) => {
  const { currentLanguage } = useLang();
  return (
    <div className="m-auto w-[90%] flex gap-2 my-2">
      {categories.map((c) => {
        const firstLetterCharCode = c.codePointAt(0) || 0;
        const color = COLORS[firstLetterCharCode % COLORS.length];
        return (
          <Link
            key={c}
            className="text-blog-category-foreground px-[9px] rounded-2xl m-0.5 text-[18px]"
            style={{
              backgroundColor: color,
            }}
            href={`/${currentLanguage}/blog/${c}`}
          >
            {c}
          </Link>
        );
      })}
    </div>
  );
};
