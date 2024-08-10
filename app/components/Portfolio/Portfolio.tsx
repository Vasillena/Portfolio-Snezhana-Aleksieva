import PortfolioCard from "./PortfolioCard";
import { getI18n } from "@/locales/server";
import image1 from "@/public/portfolio-card-1.png";
import image2 from "@/public/portfolio-card-2.png";
import image3 from "@/public/portfolio-card-3.png";

export default async function Portfolio(): Promise<JSX.Element> {
  const t = await getI18n();
  return (
    <div className="max-w-7xl mx-auto mt-20 flex flex-wrap justify-center xl:justify-between gap-28">
      <PortfolioCard
        title1={t("portfolio.card-1-1")}
        title2={t("portfolio.card-1-2")}
        image={image1}
        color={"bg-[#F2EEE9]"}
        text1={t("portfolio.card-1-text-1")}
        text2={t("portfolio.card-1-text-2")}
        text3={t("portfolio.card-1-text-3")}
        text4={t("portfolio.card-1-text-4")}
        href={"/portfolio/graphic-design"}
      />
      <PortfolioCard
        title1={t("portfolio.card-2")}
        title2={t("portfolio.card-1-2")}
        image={image2}
        color={"bg-[#F2EEE9]"}
        text1={t("portfolio.card-2-text-1")}
        text2={t("portfolio.card-2-text-2")}
        text3={t("portfolio.card-2-text-3")}
        href={"/portfolio/ui-ux-design"}
      />
      <div className="mx-auto">
        <PortfolioCard
          title1={t("portfolio.card-3-1")}
          title2={t("portfolio.card-3-2")}
          image={image3}
          // mx={"xl:mx-auto"}
          color={"bg-[#F2EEE9]"}
          text1={t("portfolio.card-3-text-1")}
          text2={t("portfolio.card-3-1")}
          text3={t("portfolio.card-3-text-2")}
          href={"/portfolio/illustrations-and-digital-art"}
        />
      </div>
    </div>
  );
}
