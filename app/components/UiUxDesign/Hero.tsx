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

export default function Hero(): JSX.Element {
  const t = useI18n();
  const myFont = blackSansFont;

  const ref = useRef(null);
  const isRefInView = useInView(ref);

  return (
    <>
      <div className="max-w-7xl mx-auto mt-28 sm:mt-44 xl:mt-32 grid lg:grid-cols-3 gap-16 text-center lg:text-left">
        <div ref={ref} className="col-span-2 ">
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
              {t("uiux-design.title")}
            </h1>
            <p className="mt-16 text-lg sm:text-xl xl:max-w-lg sm:leading-6">
              {t("uiux-design.text")}
            </p>
          </motion.div>
        </div>
        <div className="hidden xl:inline-block w-[381px] h-[364px] justify-self-end relative -top-32">
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
