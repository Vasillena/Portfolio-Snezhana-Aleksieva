import PortfolioCard from "../Portfolio/PortfolioCard";
import { getI18n } from "@/locales/server";
import image1 from "@/public/portfolio-card-2.png";
import image2 from "@/public/portfolio-card-3.png";

export default async function OtherProjects(): Promise<JSX.Element> {
  const t = await getI18n();
  return (
    <div className="max-w-full mt-24 bg-[#F2EEE9]">
      <div className=" max-w-7xl mx-auto py-11">
        <div>
          <p className="text-lg sm:text-2xl text-center">
            {t("graphic-design.text-4")}
          </p>
          <p className="text-lg sm:text-2xl text-center font-bold mt-6">
            {t("graphic-design.text-5")}
          </p>
        </div>
        <div className=" flex flex-wrap justify-center xl:justify-between gap-20 mt-20">
          <PortfolioCard
            title1={t("portfolio.card-2")}
            title2={t("portfolio.card-1-2")}
            image={image1}
            color={"bg-[#F7F4F1]"}
            text1={t("portfolio.card-2-text-1")}
            text2={t("portfolio.card-2-text-2")}
            text3={t("portfolio.card-2-text-3")}
            href={"/portfolio/ui-ux-design"}
          />
          <PortfolioCard
            title1={t("portfolio.card-3-1")}
            title2={t("portfolio.card-3-2")}
            image={image2}
            // mx={"mx-auto"}
            color={"bg-[#F7F4F1]"}
            text1={t("portfolio.card-3-text-1")}
            text2={t("portfolio.card-3-1")}
            text3={t("portfolio.card-3-text-2")}
            href={"/portfolio/illustrations-and-digital-art"}
          />
        </div>
      </div>
    </div>
  );
}
