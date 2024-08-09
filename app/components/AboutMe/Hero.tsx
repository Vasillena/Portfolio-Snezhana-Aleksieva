"use client";

import { motion, useInView } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

import Image from "next/image";
import MainButton from "../Common/MainButton";
import athena from "next/font/local";
import blackSans from "next/font/local";
import { cn } from "@/lib/utils";
import image1 from "@/public/hero-3.png";
import image2 from "@/public/dots.svg";
import { useRef } from "react";

const athenaFont = athena({ src: "../../../public/Athena-Regular.ttf" });
const blackSansFont = blackSans({ src: "../../../public/Blacker-Sans.ttf" });

export default function Hero(): JSX.Element {
  const locale = useLocale();
  const t = useTranslations();
  const myFont = locale === "en" ? athenaFont : blackSansFont;

  const ref = useRef(null);
  const isRefInView = useInView(ref);

  return (
    <>
      <div className="max-w-7xl mx-auto mt-28 sm:mt-44 xl:mt-32 grid lg:grid-cols-3 gap-16 text-center lg:text-left">
        <div
          ref={ref}
          className="sm:col-span-3 xl:col-span-2 flex flex-col items-center lg:items-start"
        >
          <motion.div
            initial={{ opacity: 0, y: "-10%" }}
            animate={isRefInView ? { opacity: 1, y: "0" } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1
              className={cn(
                "text-3xl min-[400px]:text-4xl sm:text-6xl",
                myFont.className
              )}
            >
              {t("about.title")}
            </h1>
            <h2 className="text-lg sm:text-xl font-bold">
              {t("about.text-1")}
            </h2>
            <p className="mt-16 text-lg sm:text-xl sm:leading-[26px]">
              {t("about.text-2")}
            </p>
            <p className="mt-4 text-lg sm:text-xl sm:leading-[26px]">
              {t("about.text-3")}
            </p>
            <p className="mt-4 text-lg sm:text-xl sm:leading-[26px]">
              {t("about.text-4")}
            </p>
            <div className=" flex gap-5 pt-14">
              <MainButton href={"/portfolio"} text={t("about.button")} />
            </div>
          </motion.div>
        </div>
        <div className="hidden xl:inline-block w-[446px] h-[723px] justify-self-end relative -top-32">
          <Image
            src={image1}
            alt="Profile image"
            fill
            object-fit="contain"
            // style={{
            //   width: "374px",
            //   height: "auto",
            // }}
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-36 xl:-mt-32 flex justify-center lg:justify-start">
        <Image
          src={image2}
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
