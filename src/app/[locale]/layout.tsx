import { LanguageProvider } from "@/components/context/LanguageProvider";
import { getDictionary } from "@/lib/dictionaries/dictionaries";
import { PropsWithChildren } from "react";
import { languageCodes } from "../../lib/types/i18n";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";

export const metadata = {
  title: "Tuguldur Namjildorj",
  description: "Twitch ",
};

export default async function RootLayout({
  children,
  params,
}: PropsWithChildren<{
  params: Promise<{ locale: languageCodes }>;
}>) {
  const locale = (await params).locale;
  const dict = await getDictionary(locale);
  return (
    <LanguageProvider dictionary={dict} currentLanguage={locale}>
      <Header />
      {children}
      <Footer />
    </LanguageProvider>
  );
}
