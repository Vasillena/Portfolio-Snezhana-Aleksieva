"use client";

import { oranienbaum, shlapakScript } from "@/lib/fonts";
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
      <div className="max-w-7xl mx-auto mt-10 md:mt-20 xl:mt-10 grid lg:grid-cols-3 gap-x-12 text-center lg:text-left">
        <div className="md:col-span-3 xl:col-span-2 flex flex-col items-center lg:items-start -mt-8 md:mt-20 order-2 md:order-1">
          <Reveal>
            <h1
              className={cn(
                "text-3xl min-[400px]:text-4xl sm:text-6xl mt-4 lg:mt-20",
                oranienbaum.className
              )}
            >
              {t("home.title-1")}
            </h1>
            <div className="my-6 sm:my-8 flex flex-col lg:flex-row items-center gap-4 sm:gap-10">
              <div className="w-2/3 lg:w-1/3 border-b border-[#B0752A]" />
              <h2
                className={cn(
                  "text-2xl md:text-4xl text-nowrap",
                  shlapakScript.className
                )}
              >
                {t("home.text-1")}
              </h2>
            </div>
            <div className="xl:max-w-[620px]">
              <p className="text-lg sm:text-xl sm:leading-[26px]">
                {t("home.text-2")}
              </p>
              <p className="mt-4 text-lg sm:text-xl sm:leading-[26px]">
                {t("home.text-3")}
              </p>
            </div>

            <div
              className={cn(
                "flex flex-col items-center lg:flex-row gap-y-5 gap-x-7 pt-8 min-[400px]:pt-12 sm:pt-[86px]",
                locale === "bg" && "sm:pt-[92px]"
              )}
            >
              <MainButton href={"/portfolio"} text={t("home.button-1")} />
              <SecondaryButton href={"/contacts"} text={t("home.button-2")} />
            </div>
          </Reveal>
        </div>

        <div className="flex justify-center items-center md:hidden xl:flex xl:justify-end w-full relative md:top-8 md:-mr-8 order-1 md:order-2">
          <div
            className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[555px] md:h-[555px]"
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
              className="w-[300px] h-[300px] sm:w-[430px] sm:h-[430px] md:w-[650px] md:h-[650px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
