import Image, { StaticImageData } from "next/image";

import MainButton from "../Common/MainButton";
import SecondaryButton from "../Common/SecondaryButton";
import blackSans from "next/font/local";
import { cn } from "@/lib/utils";
import { getI18n } from "@/locales/server";

const blackSansFont = blackSans({ src: "../../../public/Blacker-Sans.ttf" });

interface PortfolioCardProps {
  title1: string;
  title2: string;
  image: StaticImageData;
  // mx?: string;
  color: string;
  text1: string;
  text2: string;
  text3: string;
  text4?: string;
  href: string;
}

export default async function PortfolioCard({
  title1,
  title2,
  image,
  // mx,
  color,
  text1,
  text2,
  text3,
  text4,
  href,
}: PortfolioCardProps): Promise<JSX.Element> {
  const t = await getI18n();
  const myFont = blackSansFont;
  return (
    <div className={cn("flex")}>
      <div className="z-10">
        <div>
          <h2
            className={cn(
              "text-[20px] min-[400px]:text-[26px] sm:text-[32px] leading-3",
              myFont.className
            )}
          >
            {title1}
          </h2>
          <h2
            className={cn(
              "text-[20px] min-[400px]:text-[26px] sm:text-[32px] ",
              myFont.className
            )}
          >
            {title2}
          </h2>
        </div>
        <div>
          <Image
            src={image}
            alt="Project image"
            style={{ width: "314px", height: "auto" }}
          />
        </div>
      </div>
      <div className="flex flex-col -ml-16">
        <div
          className={cn(
            "w-[314px] h-[362px] rounded-tr-[100px] rounded-bl-[100px] flex flex-col justify-center sm:block",
            color
          )}
        >
          <p className="text-lg sm:text-xl w-[178px] sm:w-[188px] ml-24  sm:pt-[80px] sm:leading-5">
            {text1}
          </p>
          <div className="flex items-center w-[188px] ml-24 mt-12">
            <div className="w-[5px] h-[5px] bg-[#415064] rounded-full mr-3" />
            <p className="text-lg sm:text-xl sm:leading-5">{text2}</p>
          </div>
          <div className="flex items-center w-[188px] ml-24">
            <div className="w-[5px] h-[5px] bg-[#415064] rounded-full mr-3" />
            <p className="text-lg sm:text-xl sm:leading-5">{text3}</p>
          </div>
          {text4 && (
            <div className="flex items-center w-[188px] ml-24">
              <div className="w-[5px] h-[5px] bg-[#415064] rounded-full mr-3" />
              <p className="text-lg sm:text-xl sm:leading-5">{text4}</p>
            </div>
          )}
        </div>
        <div className="self-center mt-7 ml-14">
          {color === "bg-[#F7F4F1]" ? (
            <SecondaryButton href={href} text={t("portfolio.button")} />
          ) : (
            <MainButton href={href} text={t("portfolio.button")} />
          )}
        </div>
      </div>
    </div>
  );
}
