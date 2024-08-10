"use client";

import { motion, useInView } from "framer-motion";

import Image from "next/image";
import blackSans from "next/font/local";
import { cn } from "@/lib/utils";
import image2 from "@/public/hero-5.png";
import image3 from "@/public/dots.svg";
import { useI18n } from "@/locales/client";
import { useRef } from "react";

const blackSansFont = blackSans({ src: "../../../public/Blacker-Sans.ttf" });

export default function CookiePolicyPage(): JSX.Element {
  const t = useI18n();
  const myFont = blackSansFont;

  const ref = useRef(null);
  const isRefInView = useInView(ref);
  return (
    <>
      <div className="max-w-7xl mx-auto  mt-28 sm:mt-44 xl:mt-32 grid lg:grid-cols-3 gap-16 text-center lg:text-left">
        <div ref={ref} className="col-span-2">
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
              {t("cookie-policy.title")}
            </h1>
          </motion.div>
        </div>
        <div className="hidden xl:inline-block w-[415px] h-[331px] justify-self-end relative -top-32">
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
      <div className="max-w-7xl mx-auto mt-20">
        <div>
          <p className="text-lg sm:text-2xl mt-4">
            {t("cookie-policy.text-1")}
          </p>
          <p className="text-lg sm:text-2xl mt-4">
            {t("cookie-policy.text-2")}
          </p>
        </div>

        <div className="mt-10">
          <h2 className={cn("text-lg sm:text-2xl ", myFont.className)}>
            {t("cookie-policy.text-3")}
          </h2>
          <p className="text-lg sm:text-2xl mt-4">
            {t("cookie-policy.text-4")}
          </p>
        </div>

        <div className="mt-10">
          <h2 className={cn("text-lg sm:text-2xl ", myFont.className)}>
            {t("cookie-policy.text-5")}
          </h2>
          <p className="text-lg sm:text-2xl mt-4">
            {t("cookie-policy.text-6")}
          </p>
          <div className="flex items-center">
            <div className="w-[5px] h-[5px] bg-[#415064] rounded-full mr-3" />
            <p className="text-lg sm:text-2xl mt-4">
              {t("cookie-policy.text-7")}
            </p>
          </div>
          <div className="flex items-center">
            <div className="w-[5px] h-[5px] bg-[#415064] rounded-full mr-3" />
            <p className="text-lg sm:text-2xl">{t("cookie-policy.text-8")}</p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className={cn("text-lg sm:text-2xl ", myFont.className)}>
            {t("cookie-policy.text-9")}
          </h2>

          <div className="flex items-center">
            <div className="w-[5px] h-[5px] bg-[#415064] rounded-full mr-3" />
            <p className="text-lg sm:text-2xl"> {t("cookie-policy.text-10")}</p>
          </div>
          <div className="flex items-center">
            <div className="w-[5px] h-[5px] bg-[#415064] rounded-full mr-3" />
            <p className="text-lg sm:text-2xl"> {t("cookie-policy.text-11")}</p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className={cn("text-lg sm:text-2xl ", myFont.className)}>
            {t("cookie-policy.text-12")}
          </h2>
          <p className="text-lg sm:text-2xl mt-4">
            {t("cookie-policy.text-13")}
          </p>
        </div>

        <div className="mt-10">
          <h2 className={cn("text-lg sm:text-2xl ", myFont.className)}>
            {t("cookie-policy.text-14")}
          </h2>
          <p className="text-lg sm:text-2xl mt-4">
            {t("cookie-policy.text-15")}
          </p>
        </div>
      </div>
    </>
  );
}