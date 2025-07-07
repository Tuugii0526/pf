import { CategoriesT } from "@/lib/types/categories";
import { ProgrammingLayout } from "./layout/ProgrammingLayout";
import { TedtalkLayout } from "./layout/TedtalkLayout";

const layouts: { [key in CategoriesT]: () => React.ReactElement } = {
  programming: ProgrammingLayout,
  "ted-talk": TedtalkLayout,
};
export const CategoryLayout = ({ category }: { category: CategoriesT }) => {
  const LayoutComponent = layouts[category];
  return <LayoutComponent />;
};
