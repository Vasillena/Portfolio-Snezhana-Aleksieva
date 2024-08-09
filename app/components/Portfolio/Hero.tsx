"use client";

import { useLocale, useTranslations } from "next-intl";

import Image from "next/image";
import athena from "next/font/local";
import blackSans from "next/font/local";
import { cn } from "@/lib/utils";
import image2 from "@/public/hero-4.png";
import image3 from "@/public/dots.svg";

const athenaFont = athena({ src: "../../../public/Athena-Regular.ttf" });
const blackSansFont = blackSans({ src: "../../../public/Blacker-Sans.ttf" });

export default function Hero(): JSX.Element {
  const locale = useLocale();
  const t = useTranslations();
  const myFont = locale === "en" ? athenaFont : blackSansFont;

  return (
    <>
      <div className="max-w-7xl mx-auto mt-28 sm:mt-44 xl:mt-32 grid lg:grid-cols-3 gap-16 text-center lg:text-left">
        <div className="col-span-2">
          <h1
            className={cn(
              "text-3xl min-[400px]:text-4xl sm:text-6xl",
              myFont.className
            )}
          >
            {t("portfolio.title")}
          </h1>
          <h2 className="sm:text-xl font-bold">{t("portfolio.text-1")}</h2>
          <p className="mt-16 sm:text-xl sm:leading-6">
            {t("portfolio.text-2")}
          </p>
          <p className="sm:text-xl sm:leading-6">{t("portfolio.text-3")}</p>
          <p className="sm:text-xl sm:leading-6">{t("portfolio.text-4")}</p>
        </div>
        <div className="hidden xl:inline-block w-[381px] h-[465px] justify-self-end relative -top-32">
          <Image
            src={image2}
            alt="Decor image"
            fill
            object-fit="contain"
            // style={{
            //   width: "374px",
            //   height: "auto",
            // }}
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-36 xl:-mt-[132px] flex justify-center lg:justify-start">
        <Image
          src={image3}
          alt="Dots"
          style={{
            width: "160px",
            height: "auto",
          }}
        />
      </div>
    </>
  );
}
