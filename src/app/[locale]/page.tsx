import { Languages } from "@/lib/constant";

export const generateStaticParams = async () => {
  const routes = await Promise.all(
    Languages.map((locale: string) => ({ locale }))
  );
  return routes;
};
export default async function Home() {
  return <div className="font-bold">...Coming soon...</div>;
}
