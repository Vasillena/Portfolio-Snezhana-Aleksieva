"use client";

import { motion, useInView } from "framer-motion";
import { useCurrentLocale, useI18n } from "@/locales/client";

import Image from "next/image";
import Lottie from "react-lottie-player";
import MainButton from "../Common/MainButton";
import SecondaryButton from "../Common/SecondaryButton";
import blackSans from "next/font/local";
import { cn } from "@/lib/utils";
import image1 from "@/public/welcome.svg";
import image2 from "@/public/hero-1.json";
import image3 from "@/public/welcome-2.svg";
import { useRef } from "react";

const blackSansFont = blackSans({ src: "../../../public/Blacker-Sans.ttf" });

export default function Hero(): JSX.Element {
  const locale = useCurrentLocale();
  const t = useI18n();
  const myFont = blackSansFont;

  const ref = useRef(null);
  const isRefInView = useInView(ref);

  return (
    <>
      <div className="max-w-7xl mx-auto mt-14 lg:mt-20 xl:mt-0 grid lg:grid-cols-3 gap-x-12 text-center lg:text-left">
        <div
          ref={ref}
          className="sm:col-span-3 xl:col-span-2 flex flex-col items-center lg:items-start min-[400px]:mt-12 sm:mt-24"
        >
          <motion.div
            initial={{ opacity: 0, y: "-10%" }}
            animate={isRefInView ? { opacity: 1, y: "0" } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="scale-90 sm:scale-100">
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
            </div>

            <h1
              className={cn(
                "text-3xl min-[400px]:text-4xl sm:text-6xl lg:mt-[-40px]",
                locale === "en"
                  ? "pl-0 sm:pl-[30px] lg:pl-[72px]"
                  : "pl-0 sm:text-[44px]",
                myFont.className
              )}
            >
              {t("home.title-1")}
            </h1>
            <p className="mt-12 sm:mt-16 text-lg sm:text-2xl sm:leading-[26px]">
              {t("home.text-1")}
            </p>
            <p className="mt-4 text-lg sm:text-2xl sm:leading-[26px]">
              {t("home.text-2")}
            </p>
            <p className="text-lg sm:text-2xl sm:leading-[26px]">
              {t("home.text-3")}
            </p>
            <div
              className={cn(
                "flex flex-col items-center lg:flex-row gap-5 pt-8 min-[400px]:pt-12 sm:pt-[86px]",
                locale === "bg" && "sm:pt-[92px]"
              )}
            >
              <MainButton href={"/portfolio"} text={t("home.button-1")} />
              <SecondaryButton href={"/contacts"} text={t("home.button-2")} />
            </div>
          </motion.div>
        </div>

        <div className="hidden xl:inline-block w-[446px] h-[723px] justify-self-end relative -top-16">
          {/* <Image
            src={image4}
            alt="Coffee image"
            fill
            object-fit="contain"
            priority
            // style={
            //   {
            //     width: "374px",
            //     height: "auto",
            //   }
            // }
          /> */}
          <Lottie
            animationData={image2}
            play
            loop
            style={{ width: "446px", height: "723px" }}
          />
        </div>
      </div>
    </>
  );
}
