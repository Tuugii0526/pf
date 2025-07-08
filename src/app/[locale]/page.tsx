import { Greeting } from "@/components/Greeting";
import { Languages } from "@/lib/constant";
export const generateStaticParams = async () => {
  const routes = await Promise.all(
    Languages.map((locale: string) => ({ locale }))
  );
  return routes;
};
export default async function Home() {
  return <Greeting />;
}
// export const dynamic = "force-static";
// export const revalidate = 300;
