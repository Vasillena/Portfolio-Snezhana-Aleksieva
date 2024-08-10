"use client";

import { motion, useInView } from "framer-motion";
import { useCurrentLocale, useI18n } from "@/locales/client";

import Image from "next/image";
import Link from "next/link";
import blackSans from "next/font/local";
import { cn } from "@/lib/utils";
import image1 from "@/public/projects.svg";
import image2 from "@/public/fproject-1.png";
import image3 from "@/public/fproject-2.png";
import image4 from "@/public/fproject-3.png";
import image5 from "@/public/fproject-4.png";
import image6 from "@/public/projects-2.svg";
import { useRef } from "react";

const blackSansFont = blackSans({ src: "../../../public/Blacker-Sans.ttf" });

export default function FeaturedProjects(): JSX.Element {
  const locale = useCurrentLocale();
  const t = useI18n();
  const myFont = blackSansFont;

  const ref = useRef(null);
  const isRefInView = useInView(ref);

  return (
    <div className="max-w-full mt-24 bg-[#F2EEE9] px-2">
      <div className=" max-w-7xl mx-auto py-11">
        <div className="flex justify-center">
          <h2
            className={cn(
              "text-3xl min-[400px]:text-4xl  lg:text-[40px] ",
              myFont.className
            )}
          >
            {t("home.title-3")}
          </h2>
          <Image
            src={locale === "en" ? image1 : image6}
            alt="Text image"
            className={locale === "en" ? "mt-[28px] sm:mt-[30px]" : "mt-[10px]"}
            style={{
              width: locale === "en" ? "111px" : "197px",
              height: "auto",
              alignSelf: "flex-end",
              // marginTop: "38px",
              marginLeft: "-50px",
              zIndex: 1,
            }}
          />
        </div>
        <div ref={ref}>
          <motion.div
            className="mx-auto flex flex-wrap justify-center xl:justify-between gap-y-20 gap-x-20 xl:gap-x-0  mt-8"
            initial={{ opacity: 0, y: "-10%" }}
            animate={isRefInView ? { opacity: 1, y: "0" } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="w-[300px] h-[300px] relative flex justify-center">
              <Image
                src={image2}
                alt="Project image"
                fill
                object-fit="contain"
                // style={{
                //   width: "300px",
                //   height: "auto",
                // }}
              />
            </div>

            <div className="w-[300px] h-[300px] relative flex justify-center">
              <Image
                src={image3}
                alt="Project image"
                fill
                object-fit="contain"
                // style={{
                //   width: "300px",
                //   height: "auto",
                // }}
              />
            </div>
            <div className="w-[300px] h-[300px] relative flex justify-center">
              <Image
                src={image4}
                alt="Project image"
                fill
                object-fit="contain"
                // style={{
                //   width: "300px",
                //   height: "auto",
                // }}
              />
            </div>
            <div className="w-[300px] h-[300px] relative flex justify-center">
              <Image
                src={image5}
                alt="Project image"
                fill
                object-fit="contain"
                // style={{
                //   width: "300px",
                //   height: "auto",
                // }}
              />
            </div>
          </motion.div>
        </div>
        <div className="mt-11 flex justify-center lg:justify-end">
          <Link
            href="/portfolio"
            className="text-lg sm:text-xl text-[#B0752A] font-bold hover:text-[#415064]"
          >
            {t("home.text-10")}
          </Link>
        </div>
      </div>
    </div>
  );
}
