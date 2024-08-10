import { getCurrentLocale, getI18n } from "@/locales/server";

import Image from "next/image";
import MainButton from "../Common/MainButton";
import Reveal from "../Common/Reveal";
import blackSans from "next/font/local";
import { cn } from "@/lib/utils";
import image2 from "@/public/about-short.png";
import image3 from "@/public/me.svg";
import image4 from "@/public/me-2.svg";

const blackSansFont = blackSans({ src: "../../../public/Blacker-Sans.ttf" });

export default async function AboutMe(): Promise<JSX.Element> {
  const locale = await getCurrentLocale();
  const t = await getI18n();
  const myFont = blackSansFont;

  return (
    <div className=" max-w-7xl mt-20 mx-auto grid grid-cols-1 xl:grid-cols-3 gap-y-20 lg:gap-72 text-center lg:text-left">
      <div className="mx-auto hidden xl:inline-block w-[374px] h-[515px] relative">
        <Image src={image2} alt="Computer image" fill object-fit="contain" />
      </div>
      <div className="col-span-2">
        <Reveal>
          <div className="flex mt-6 justify-center lg:justify-start">
            <h2
              className={cn(
                "text-3xl min-[400px]:text-4xl  lg:text-[40px]",
                myFont.className
              )}
            >
              {t("home.title-2")}
            </h2>
            <Image
              src={locale === "en" ? image3 : image4}
              alt="Text image"
              className={
                locale == "en" ? "mt-[22px] sm:mt-[20px]" : "mt-[10px]"
              }
              style={{
                width: locale === "en" ? "53px" : "68px",
                height: "auto",
                alignSelf: "flex-end",
                marginLeft: "-20px",
                zIndex: 1,
              }}
            />
          </div>
          <div>
            <h2 className="text-lg sm:text-2xl font-bold mt-16 sm:leading-[26px]">
              {t("home.text-6")}
            </h2>
          </div>

          <p className="text-lg sm:text-2xl mt-4 sm:leading-[26px]">
            {t("home.text-7")}
          </p>
          <p className="text-lg sm:text-2xl sm:leading-[26px]">
            {t("home.text-8")}
          </p>
          <p className="text-lg sm:text-2xl sm:leading-[26px]">
            {t("home.text-9")}
          </p>
          <div className="flex justify-center lg:justify-start mt-16 text-center lg:text-left">
            <MainButton href={"/about-me"} text={t("home.button-3")} />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
