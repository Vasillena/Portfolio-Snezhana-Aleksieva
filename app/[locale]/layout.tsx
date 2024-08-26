import "./globals.css";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

import Footer from "../components/Layout/Footer";
import Navbar from "../components/Layout/Navbar";
import { Provider } from "./provider";
import Script from "next/script";
import { Switch } from "./switch";
import { cn } from "@/lib/utils";
import futura from "next/font/local";

const myFont = futura({ src: "../../public/FuturaL.ttf" });

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  let title, description, keywords;

  if (locale === "bg") {
    title = "Снежана Алексиева | snezhana-aleksieva.com";
    description =
      "Здравейте! Аз съм Снежана, графичен и UI/UX дизайнер с голяма страст към създаването на визуално привлекателен и лесен за ползване дизайн. Добре дошли в моето уеб портфолио – надявам се да ви хареса! Готови ли сте да разгледате моите проекти?";
    keywords = [
      "Графичен дизайн",
      "UI/UX дизайн",
      "UI/UX джуниър дизайнер",
      "Джуниър дизайнер",
      "Дизайнер Благоевград",
      "Дизайнер София",
      "Минималистичен дизайн",
      "Маркетинг и дизайн",
      "Бранд дизайн",
      "Лого дизайн",
      "Дизайнер с опит в продажбите",
      "Функционален дизайн",
      "Дизайнерско портфолио",
      "Дизайн портфолио",
      "Дизайн на потребителски интерфейс",
      "Дизайн на потребителско изживяване",
      "Уеб дизайн",
      "Уеб дизайнер",
      "Дизайн проекти",
      "Портфолио на дизайнер",
      "Дизайн за социални медии",
      "Дизайн и маркетинг стратегии",
      "Визуална идентичност",
      "Дизайн за мобилни приложения",
      "Дизайн на печатни материали",
      "Graphic design",
      "UI/UX design",
      "UI/UX junior designer",
      "Junior designer",
      "Junior designer Portfolio",
      "Designer Blagoevgrad",
      "Designer Sofia",
      "Marketing and design",
      "Brand design",
      "Logo design",
      "Designer with sales experience",
      "Design portfolio",
      "User interface design",
      "User experience design",
      "Visual communication",
      "Web design projects",
      "Creative portfolio",
      "Design for social media",
      "Design and marketing strategies",
      "Professional design",
      "Visual identity",
      "Mobile app design",
      "Print design",
    ];
  } else if (locale === "en") {
    title = "Snezhana Aleksieva | snezhana-aleksieva.com";
    description =
      "Hi there! I'm Snezhana, a junior graphic and UI/UX designer with a passion for creating visually appealing and user-friendly designs.Welcome to my web portfolio - hope you enjoy it! Ready to explore my work?";
    keywords = [
      "Графичен дизайн",
      "UI/UX дизайн",
      "UI/UX джуниър дизайнер",
      "Джуниър дизайнер",
      "Дизайнер Благоевград",
      "Дизайнер София",
      "Минималистичен дизайн",
      "Маркетинг и дизайн",
      "Бранд дизайн",
      "Лого дизайн",
      "Дизайнер с опит в продажбите",
      "Функционален дизайн",
      "Дизайнерско портфолио",
      "Дизайн портфолио",
      "Дизайн на потребителски интерфейс",
      "Дизайн на потребителско изживяване",
      "Уеб дизайн",
      "Уеб дизайнер",
      "Дизайн проекти",
      "Портфолио на дизайнер",
      "Дизайн за социални медии",
      "Дизайн и маркетинг стратегии",
      "Визуална идентичност",
      "Дизайн за мобилни приложения",
      "Дизайн на печатни материали",
      "Graphic design",
      "UI/UX design",
      "UI/UX junior designer",
      "Junior designer",
      "Junior designer Portfolio",
      "Designer Blagoevgrad",
      "Designer Sofia",
      "Marketing and design",
      "Brand design",
      "Logo design",
      "Designer with sales experience",
      "Design portfolio",
      "User interface design",
      "User experience design",
      "Visual communication",
      "Web design projects",
      "Creative portfolio",
      "Design for social media",
      "Design and marketing strategies",
      "Professional design",
      "Visual identity",
      "Mobile app design",
      "Print design",
    ];
  }

  const alternates = {
    canonical: locale === "en" ? "/en" : "/bg",
    languages: {
      bg: "/bg",
      en: "/en",
    },
  };

  const metadataBase = new URL("https://snezhana-aleksieva.com");

  return {
    title,
    description,
    keywords,
    alternates,
    metadataBase,
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <GoogleTagManager gtmId="GTM-PV9FK68J" />
      <body className={cn("px-2", myFont.className)}>
        <Provider locale={locale}>
          <Navbar />
          {children}
          <Footer />
          <Switch />
        </Provider>
      </body>
      <Script
        type="text/javascript"
        // charSet="UTF-8"
        src="//cdn.cookie-script.com/s/7339a3ea3dfbe31b512c9abbd5594d18.js"
      ></Script>
      <GoogleAnalytics gaId="G-PCLR15Q7BD" />
    </html>
  );
}
