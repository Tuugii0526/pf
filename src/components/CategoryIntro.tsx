import { CATEGORIES_INFO } from "@/lib/constant";
import { dm_serif_display } from "@/lib/fonts/fonts";
import { CategoriesT } from "@/lib/types/categories";
import { languageCodes } from "@/lib/types/i18n";

export const CategoryIntro = ({
  category,
  lang,
}: {
  category: CategoriesT;
  lang: languageCodes;
}) => {
  return (
    <div className="flex flex-col items-center">
      <p className={`text-[45px] ${dm_serif_display.className}`}>{category}</p>
      <p>{CATEGORIES_INFO[category][lang].emoji} </p>
      <p>{CATEGORIES_INFO[category][lang].description} </p>
    </div>
  );
};
