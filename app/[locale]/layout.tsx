import "./globals.css";

import Footer from "../components/Layout/Footer";
import Navbar from "../components/Layout/Navbar";
import { Provider } from "./provider";
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
    title = "Снежана Алексиева";
    description =
      "Здравейте! Аз съм Снежана, графичен и UI/UX дизайнер с голяма страст към създаването на визуално привлекателен и лесен за ползване дизайн. Добре дошли в моето уеб портфолио – надявам се да ви хареса! Готови ли сте да разгледате моите проекти?";
    keywords = [
      "S.I.P.I.",
      "СИПИ",
      "бар СИПИ",
      "СИПИ Пловдив",
      "бар Пловдив",
      "бар Капана",
      "Пловдив",
      "Капана",
      "коктейл бар Пловдив",
      "коктейл бар Капана",
      "парти",
      "коктейли",
      "атмосфера",
      "нощен живот",
      "SIPI",
      "bar SIPI",
      "Sipi Plovdiv",
      "bar Plovdiv",
      "bar Kapana",
      "Plovdiv",
      "Kapana",
      "cocktail bar Plovdiv",
      "cocktail bar Kapana",
      "parties",
      "cocktails",
      "vibe",
      "nightlife",
    ];
  } else if (locale === "en") {
    title = "Snezhana Aleksieva";
    description =
      "Hi there! I'm Snezhana, a junior graphic and UI/UX designer with a passion for creating visually appealing and user-friendly designs.Welcome to my web portfolio - hope you enjoy it! Ready to explore my work?";
    keywords = [
      "S.I.P.I.",
      "СИПИ",
      "бар СИПИ",
      "СИПИ Пловдив",
      "бар Пловдив",
      "бар Капана",
      "Пловдив",
      "Капана",
      "коктейл бар Пловдив",
      "коктейл бар Капана",
      "парти",
      "коктейли",
      "атмосфера",
      "нощен живот",
      "SIPI",
      "bar SIPI",
      "Sipi Plovdiv",
      "bar Plovdiv",
      "bar Kapana",
      "Plovdiv",
      "Kapana",
      "cocktail bar Plovdiv",
      "cocktail bar Kapana",
      "parties",
      "cocktails",
      "vibe",
      "nightlife",
    ];
  }

  const alternates = {
    canonical: locale === "en" ? "/en" : "/",
    languages: {
      bg: "/",
      en: "/en",
    },
  };

  const metadataBase = new URL(
    `https://snezhana-aleksieva.vercel.app/${locale === "en" ? "/en" : "/"}`
  );
  // const metadataBase = new URL(
  //   `https://localhost:3000/${locale === "en" ? "/en" : "/"}`
  // );

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
      <body className={cn("px-2", myFont.className)}>
        <Provider locale={locale}>
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
