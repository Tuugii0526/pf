import { LanguageProvider } from "@/components/context/LanguageProvider";
import { getDictionary } from "@/lib/dictionaries/dictionaries";
import { PropsWithChildren } from "react";
import { languageCodes } from "../../lib/types/i18n";
import { Header } from "@/components/shared/Header";
// import { Footer } from "@/components/shared/Footer";
import { ThemeProvider } from "@/components/context/ThemeProvider";
import "../globals.css";
export const metadata = {
  title: "try like an ant",
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
      <body className=" min-h-screen h-auto *:text-foreground ">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider dictionary={dict} currentLanguage={locale}>
            <div className="m-auto p-10 w-full min-h-screen h-full min-w-[240px] max-w-[760px] bg-background  ">
              <Header />
              {children}
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
