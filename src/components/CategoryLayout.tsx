import { CategoriesT } from "@/lib/types/categories";
import { ProgrammingLayout } from "./layout/ProgrammingLayout";
import { TedtalkLayout } from "./layout/TedtalkLayout";
import { languageCodes } from "@/lib/types/i18n";

type LayoutProps = { lang: languageCodes };

const layouts: { [key in CategoriesT]: React.ComponentType<LayoutProps> } = {
  programming: ProgrammingLayout,
  "ted-talk": TedtalkLayout,
};

export const CategoryLayout = ({
  category,
  lang,
}: {
  category: CategoriesT;
  lang: languageCodes;
}) => {
  const LayoutComponent = layouts[category];
  return <LayoutComponent lang={lang} />;
};
