import FollowPointer from "@/app/components/Common/FollowPointer";
import Hero from "../../components/Portfolio/Hero";
import Portfolio from "../../components/Portfolio/Portfolio";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  let title, description, keywords;

  if (locale === "bg") {
    title = "Моето Портфолио | snezhana-aleksieva.com";
    description =
      "Добре дошли в моето портфолио! Тук можете да намерите някои от проектите ми, показващи моите умения и креативност. Изберете категория, за да разгледате моята работа в различни сфери на дизайна.";
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
    title = "My portfolio | snezhana-aleksieva.com";
    description =
      "Welcome to my portfolio! Here, you can explore a variety of design projects that showcase my skills and creativity. Select a category to see my work in different areas of design.";
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
    canonical: locale === "en" ? "/en/portfolio" : "/bg/portfolio",
    languages: {
      bg: "/bg/portfolio",
      en: "/en/portfolio",
    },
  };

  const metadataBase = new URL("https://www.snezhana-aleksieva.com");

  return {
    title,
    description,
    keywords,
    alternates,
    metadataBase,
  };
}

export default function PortfolioPage(): JSX.Element {
  return (
    <>
      <Hero />
      <FollowPointer />
      <Portfolio />
    </>
  );
}
