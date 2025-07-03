import { LanguageProvider } from "@/components/context/LanguageProvider";
import { getDictionary } from "@/lib/dictionaries/dictionaries";
import { PropsWithChildren } from "react";
import { languageCodes } from "../../lib/types/i18n";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { ThemeProvider } from "@/components/context/ThemeProvider";
import "../globals.css";
export const metadata = {
  title: "Tuguldur Namjildorj",
  description: "Grow together ",
};

export default async function RootLayout({
  children,
  params,
}: PropsWithChildren<{
  params: Promise<{ locale: languageCodes }>;
}>) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return (
    <html suppressHydrationWarning lang={locale}>
      <body className=" h-screen *:text-foreground ">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider dictionary={dict} currentLanguage={locale}>
            <div className="m-auto w-full h-full min-w-[240px] max-w-[760px] bg-background p-[10px]">
              <div className="relative w-full h-full flex flex-col gap-5">
                <Header />
                {children}
                <Footer />
              </div>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
