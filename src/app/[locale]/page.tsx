import { Languages } from "@/lib/constant";
import { dm_serif_display, roboto } from "@/lib/fonts/fonts";

export const generateStaticParams = async () => {
  const routes = await Promise.all(
    Languages.map((locale: string) => ({ locale }))
  );
  return routes;
};
export default async function Home() {
  return (
    <div className="font-bold">
      <p className={`text-[45px] ${dm_serif_display.className}`}>
        👨‍💻 Сайн уу !
      </p>
      <p className={`${roboto.className} `}>
        Бодлын урсгал ~~~, туршлага , программийн мэдлэг , сонссоноо та бүхэндээ
        хуваалцах болно . Тавтай морил <span className="text-3xl">🤗</span>
      </p>
    </div>
  );
}
