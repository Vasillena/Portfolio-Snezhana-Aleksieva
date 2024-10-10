"use client";

import { oranienbaum, shlapakScript } from "@/lib/fonts";
import { useCurrentLocale, useI18n } from "@/locales/client";

import Image from "next/image";
import Lottie from "react-lottie-player";
import MainButton from "../Common/MainButton";
import Reveal from "../Common/Reveal";
import SecondaryButton from "../Common/SecondaryButton";
import { cn } from "@/lib/utils";
import image1 from "@/public/welcome.svg";
import image2 from "@/public/hero-1.json";
import image3 from "@/public/welcome-2.svg";
import image4 from "@/public/logo-2.png";

export default function Hero(): JSX.Element {
  const locale = useCurrentLocale();
  const t = useI18n();

  return (
    <>
      <div className="max-w-7xl mx-auto mt-14 lg:mt-20 xl:mt-10 grid lg:grid-cols-3 gap-x-12 text-center lg:text-left">
        <div className="sm:col-span-3 xl:col-span-2 flex flex-col items-center lg:items-start min-[400px]:mt-12 sm:mt-24">
          <Reveal>
            {/* <div className="scale-90 sm:scale-100">
              <Image
                src={locale === "en" ? image1 : image3}
                alt="Text image"
                style={{
                  width: locale === "en" ? "317px" : "374px",
                  height: "auto",
                  alignSelf: "flex-start",
                  zIndex: 1,
                }}
              />
            </div> */}

            <h1
              className={cn(
                "text-3xl min-[400px]:text-4xl sm:text-6xl lg:mt-20",
                oranienbaum.className
              )}
            >
              {t("home.title-1")}
            </h1>
            <div className="flex flex-col lg:flex-row items-center lg:gap-10">
              <div className="w-1/3 pt-4 border-b border-[#B0752A]" />
              <h2
                className={cn(
                  "text-2xl md:text-4xl text-nowrap",
                  shlapakScript.className
                )}
              >
                {t("home.text-1")}
              </h2>
            </div>
            <div className="xl:max-w-[600px]">
              <p className="mt-12 text-lg sm:text-xl sm:leading-[26px]">
                {t("home.text-2")}
              </p>
              <p className="text-lg sm:text-xl sm:leading-[26px]">
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

        <div
          className="hidden xl:inline-block w-[555px] h-[555px] justify-self-end relative top-8 -mr-8 "
          style={{
            backgroundImage: `url(${image4.src})`,
            backgroundSize: "60%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom 60px right 60px",
          }}
        >
          <Lottie
            animationData={image2}
            play
            loop
            style={{ width: "650px", height: "650px" }}
          />
        </div>
      </div>
    </>
  );
}
