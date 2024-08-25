import FollowPointer from "@/app/components/Common/FollowPointer";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  let title, description, keywords;

  if (locale === "bg") {
    title = "Контакти | snezhana-aleksieva.com";
    description = "Свържете се с мен";
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
    title = "Contacts | snezhana-aleksieva.com";
    description = "Let's connect";
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
    canonical: locale === "en" ? "/en/contacts" : "/bg/contacts",
    languages: {
      bg: "/bg/contacts",
      en: "/en/contacts",
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

export default function ContactsPage(): JSX.Element {
  return (
  <>
    <div />
    <FollowPointer/>
  </>
  )
}
