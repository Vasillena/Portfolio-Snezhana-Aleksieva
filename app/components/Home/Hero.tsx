"use client";

import { liana, oranienbaum } from "@/lib/fonts";
import { useCurrentLocale, useI18n } from "@/locales/client";

import Lottie from "react-lottie-player";
import MainButton from "../Common/MainButton";
import Reveal from "../Common/Reveal";
import SecondaryButton from "../Common/SecondaryButton";
import { cn } from "@/lib/utils";
import image1 from "@/public/hero-1.json";
import image2 from "@/public/logo-2.png";

export default function Hero(): JSX.Element {
  const locale = useCurrentLocale();
  const t = useI18n();

  return (
    <>
      <div className="max-w-7xl mx-auto mt-10 md:mt-16 xl:mt-10 grid grid-cols-1 xl:grid-cols-3 xlgap-x-12 text-center xl:text-left">
        <div className="col-span-2 flex flex-col items-center xl:items-start xl:mt-20 order-2 xl:order-1">
          <Reveal>
            <h1
              className={cn(
                "text-3xl min-[400px]:text-4xl sm:text-6xl mt-4 xl:mt-20",
                oranienbaum.className
              )}
            >
              {t("home.title-1")}
            </h1>
            <div className="my-6 sm:my-8 flex flex-col xl:flex-row items-center gap-4 sm:gap-10">
              <div className="w-2/3 xl:w-1/3 border-b border-[#B0752A]" />
              <h2
                className={cn(
                  "text-2xl md:text-4xl xl:text-nowrap text-[#B0752A]",
                  liana.className
                )}
              >
                {t("home.text-1")}
              </h2>
            </div>
            <div className="xl:max-w-[620px] ">
              <p className="text-lg sm:text-xl sm:leading-[26px]">
                {t("home.text-2")}
              </p>
              <p className="mt-4 text-lg sm:text-xl sm:leading-[26px]">
                {t("home.text-3")}
              </p>
            </div>

            <div
              className={cn(
                "flex flex-col items-center xl:flex-row gap-y-5 gap-x-7 pt-8 min-[400px]:pt-12 sm:pt-[86px]",
                locale === "bg" && "sm:pt-[92px]"
              )}
            >
              <MainButton href={"/portfolio"} text={t("home.button-1")} />
              <SecondaryButton href={"/contacts"} text={t("home.button-2")} />
            </div>
          </Reveal>
        </div>

        <div className="flex justify-center items-center xl:justify-end w-full relative xl:top-8 xl:-mr-8 order-1 xl:order-2">
          <div
            className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[455px] md:h-[455px] xl:w-[555px] xl:h-[555px]"
            style={{
              backgroundImage: `url(${image2.src})`,
              backgroundSize: "60%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom 60px right 60px",
            }}
          >
            <Lottie
              animationData={image1}
              play
              loop
              className="w-[300px] h-[300px] sm:w-[430px] sm:h-[430px] md:w-[510px] md:h-[510px] xl:w-[650px] xl:h-[650px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
