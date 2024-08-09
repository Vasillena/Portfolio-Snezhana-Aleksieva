"use client";

import Image, { StaticImageData } from "next/image";
import { motion, useInView } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

import { Link } from "@/lib/navigation";
import athena from "next/font/local";
import blackSans from "next/font/local";
import { cn } from "@/lib/utils";
import image4 from "@/public/icon-3.svg";
import image5 from "@/public/dots.svg";
import { useRef } from "react";

const athenaFont = athena({ src: "../../../public/Athena-Regular.ttf" });
const blackSansFont = blackSans({ src: "../../../public/Blacker-Sans.ttf" });

interface ProjectsCardProps {
  title: string;
  text: string;
  href: string;
  image1: StaticImageData;
  image2: StaticImageData;
  image3: StaticImageData;
}

export default function ProjectsCard({
  title,
  text,
  href,
  image1,
  image2,
  image3,
}: ProjectsCardProps): JSX.Element {
  const locale = useLocale();
  const t = useTranslations();
  const myFont = locale === "en" ? athenaFont : blackSansFont;

  const ref = useRef(null);
  const isRefInView = useInView(ref);
  return (
    <div>
      <div>
        <h2
          className={cn(
            "text-3xl min-[400px]:text-4xl  lg:text-[40px]",
            myFont.className
          )}
        >
          {title}
        </h2>
        <p
          className="text-lg sm:text-2xl mt-6 sm:leading-6
        "
        >
          {text}
        </p>
        <div className=" mt-3 font-bold">
          <Link
            href={href}
            target="_blank"
            className="text-lg sm:text-xl flex text-[#B0752A] hover:text-[#415064]"
          >
            {t("graphic-design.card-1-text-2")}{" "}
            <Image
              src={image4}
              alt="Icon"
              style={{
                width: "24px",
                height: "auto",
              }}
            />
          </Link>
        </div>
      </div>
      <div ref={ref}>
        <motion.div
          className="flex flex-wrap xl:flex-nowrap justify-center gap-20 mt-16"
          initial={{ opacity: 0, y: "-10%" }}
          animate={isRefInView ? { opacity: 1, y: "0" } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src={image1}
            alt="Project image"
            style={{
              width: "387px",
              height: "auto",
            }}
          />
          <Image
            src={image2}
            alt="Project image"
            style={{
              width: "387px",
              height: "auto",
            }}
          />
          <Image
            src={image3}
            alt="Project image"
            style={{
              width: "387px",
              height: "auto",
            }}
          />
        </motion.div>
      </div>
      <div className="mt-16 mb-[68px] flex justify-center xl:justify-start">
        <Image
          src={image5}
          alt="Dots"
          style={{
            width: "160px",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
}
