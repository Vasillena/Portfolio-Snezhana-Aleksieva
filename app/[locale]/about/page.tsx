import Certificates from "../../components/AboutMe/Certificates";
import EdExp from "../../components/AboutMe/Ed&Exp";
import FollowPointer from "@/app/components/Common/FollowPointer";
import Hero from "../../components/AboutMe/Hero";
import Hobbies from "../../components/AboutMe/Hobbies";
import Skills from "../../components/AboutMe/Skills";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  let title, description, keywords;

  if (locale === "bg") {
    title = "За мен | snezhana-aleksieva.com ";
    description =
      "Здравейте! Аз съм Снежана, графичен и UI/UX дизайнер с голяма страст към създаването на визуално привлекателен и лесен за ползване дизайн.";
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
    title = "About me | snezhana-aleksieva.com";
    description =
      "Hi there! I'm Snezhana, a junior graphic and UI/UX designer with a passion for creating visually appealing and user-friendly designs.";
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
    canonical: locale === "en" ? "/en/about" : "/bg/about",
    languages: {
      bg: "/bg/about",
      en: "/en/about",
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

export default function AboutMePage(): JSX.Element {
  return (
    <>
      <Hero />
      <FollowPointer />
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row mt-20 justify-center xl:justify-between items-center">
        <div>
          <div>
            <EdExp />
          </div>
          <div className="hidden xl:block">
            <Hobbies />
          </div>
        </div>
        <div className="mt-32 xl:mt-0 flex flex-col items-center">
          <div>
            <Skills />
          </div>
          <div className="xl:hidden">
            <Hobbies />
          </div>
        </div>
      </div>
      <Certificates />
    </>
  );
}
