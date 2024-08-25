import FollowPointer from "@/app/components/Common/FollowPointer";
import Hero from "../../../components/GraphicDesign/Hero";
import OtherProjects from "../../../components/GraphicDesign/OtherProjects";
import Projects from "../../../components/GraphicDesign/Projects";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  let title, description, keywords;

  if (locale === "bg") {
    title = "Графичен Дизайн | snezhana-aleksieva.com";
    description =
      "Разгледайте част от креативни проекти, демонстриращи моята експертиза в бранд дизайна, визуалната идентичност, дизайна на лога и принт дизайна. Всеки проект подчертава моята отдаденост на съчетаването на естетика с функционалност.";
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
    title = "Graphic Design | snezhana-aleksieva.com";
    description =
      "Explore a selection of my creative projects, showcasing my expertise in branding, logo design & layout design. Each project highlights my dedication to blending aesthetics with functionality.";
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
    canonical:
      locale === "en"
        ? "/en/portfolio/graphic-design"
        : "/bg/portfolio/graphic-design",
    languages: {
      bg: "/bg/portfolio/graphic-design",
      en: "/en/portfolio/graphic-design",
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

export default function GraphicDesignPage(): JSX.Element {
  return (
    <>
      <Hero />
      <FollowPointer />
      <Projects />
      <OtherProjects />
    </>
  );
}
