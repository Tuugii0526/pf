import { COLORS } from "@/lib/constant";

export const Categories = ({ categories }: { categories: string[] }) => {
  return (
    <div className="m-auto w-[90%] flex gap-2 my-2">
      {categories.map((c) => {
        const firstLetterCharCode = c.codePointAt(0) || 0;
        const color = COLORS[firstLetterCharCode % COLORS.length];
        return (
          <div
            key={c}
            className="text-blog-category-foreground px-[9px] rounded-2xl m-0.5 text-[12px]"
            style={{
              backgroundColor: color,
            }}
          >
            {c}
          </div>
        );
      })}
    </div>
  );
};
