"use client";
import { COLORS } from "@/lib/constant";
import Link from "next/link";
import { useLang } from "../context/LanguageProvider";

export const Categories = ({ categories }: { categories: string[] }) => {
  const { currentLanguage } = useLang();
  return (
    <div className=" w-full flex gap-2 ">
      {categories.map((c) => {
        const firstLetterCharCode = c.codePointAt(0) || 0;
        const [bgcolor, textcolor] =
          COLORS[firstLetterCharCode % COLORS.length];
        return (
          <Link
            key={c}
            className="text-blog-category-foreground px-[9px] rounded-2xl  text-[12.6px]"
            style={{
              backgroundColor: bgcolor,
              color: textcolor,
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
