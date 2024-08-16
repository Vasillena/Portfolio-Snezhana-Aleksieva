"use client";

import Image from "next/image";
import Reveal from "@/app/components/Common/Reveal";
import blackSans from "next/font/local";
import { cn } from "@/lib/utils";
import image2 from "@/public/hero-5.png";
import image3 from "@/public/dots.svg";
import { useI18n } from "@/locales/client";

const blackSansFont = blackSans({ src: "../../../public/Blacker-Sans.ttf" });

export const metadata = {
  title: "Privacy Policy | snezhana-aleksieva.com",
  description: "Privacy Policy",
};

export default function PrivacyPolicyPage(): JSX.Element {
  const t = useI18n();
  const myFont = blackSansFont;

  return (
    <>
      <div className="max-w-7xl mx-auto  mt-28 sm:mt-44 xl:mt-32 grid lg:grid-cols-3 gap-16 text-center lg:text-left">
        <div className="col-span-2">
          <Reveal>
            <h1
              className={cn(
                "text-3xl min-[400px]:text-4xl sm:text-6xl",
                myFont.className
              )}
            >
              {t("privacy-policy.title")}
            </h1>
          </Reveal>
        </div>
        <div className="hidden xl:inline-block w-[415px] h-[331px] justify-self-end relative -top-32">
          <Image src={image2} alt="Decor image" fill object-fit="contain" />
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
          <h2 className={cn("text-lg sm:text-2xl ", myFont.className)}>
            {t("privacy-policy.text-1")}
          </h2>
          <p className="text-lg sm:text-2xl mt-4">
            {t("privacy-policy.text-2")}
          </p>
        </div>
        <div className="mt-10">
          <h2 className={cn("text-lg sm:text-2xl ", myFont.className)}>
            {t("privacy-policy.text-3")}
          </h2>
          <div className="flex items-center">
            <div className="w-[5px] h-[5px] bg-[#415064] rounded-full mr-3" />
            <p className="text-lg sm:text-2xl mt-4">
              {t("privacy-policy.text-4")}
            </p>
          </div>
          <div className="flex items-center">
            <div className="w-[5px] h-[5px] bg-[#415064] rounded-full mr-3" />
            <p className="text-lg sm:text-2xl">{t("privacy-policy.text-5")}</p>
          </div>
        </div>
        <div className="mt-10">
          <h2 className={cn("text-lg sm:text-2xl ", myFont.className)}>
            {t("privacy-policy.text-6")}
          </h2>
          <p className="text-lg sm:text-2xl mt-4">
            {t("privacy-policy.text-7")}
          </p>
        </div>
        <div className="mt-10">
          <h2 className={cn("text-lg sm:text-2xl ", myFont.className)}>
            {t("privacy-policy.text-8")}
          </h2>
          <p className="text-lg sm:text-2xl mt-4">
            {t("privacy-policy.text-9")}
          </p>
        </div>
        <div className="mt-10">
          <h2 className={cn("text-lg sm:text-2xl ", myFont.className)}>
            {t("privacy-policy.text-10")}
          </h2>
          <p className="text-lg sm:text-2xl mt-4">
            {t("privacy-policy.text-11")}
          </p>
        </div>
        <div className="mt-10">
          <h2 className={cn("text-lg sm:text-2xl ", myFont.className)}>
            {t("privacy-policy.text-12")}
          </h2>
          <p className="text-lg sm:text-2xl mt-4">
            {t("privacy-policy.text-13")}
          </p>
        </div>
        <div className="mt-10">
          <h2 className={cn("text-lg sm:text-2xl ", myFont.className)}>
            {t("privacy-policy.text-14")}
          </h2>
          <p className="text-lg sm:text-2xl mt-4">
            {t("privacy-policy.text-15")}
          </p>
          <div className="flex items-center">
            <div className="w-[5px] h-[5px] bg-[#415064] rounded-full mr-3" />
            <p className="text-lg sm:text-2xl">{t("privacy-policy.text-16")}</p>
          </div>
          <div className="flex items-center">
            <div className="w-[5px] h-[5px] bg-[#415064] rounded-full mr-3" />
            <p className="text-lg sm:text-2xl">{t("privacy-policy.text-17")}</p>
          </div>
          <div className="flex items-center">
            <div className="w-[5px] h-[5px] bg-[#415064] rounded-full mr-3" />
            <p className="text-lg sm:text-2xl">{t("privacy-policy.text-18")}</p>
          </div>
        </div>
        <div className="mt-10">
          <h2 className={cn("text-lg sm:text-2xl ", myFont.className)}>
            {t("privacy-policy.text-19")}
          </h2>
          <p className="text-lg sm:text-2xl mt-4">
            {t("privacy-policy.text-20")}
          </p>
          <div className="flex items-center">
            <div className="w-[5px] h-[5px] bg-[#415064] rounded-full mr-3" />
            <p className="text-lg sm:text-2xl">{t("privacy-policy.text-21")}</p>
          </div>
          <div className="flex items-center">
            <div className="w-[5px] h-[5px] bg-[#415064] rounded-full mr-3" />
            <p className="text-lg sm:text-2xl">{t("privacy-policy.text-22")}</p>
          </div>
        </div>
        <div className="mt-10">
          <h2 className={cn("text-lg sm:text-2xl ", myFont.className)}>
            {t("privacy-policy.text-23")}
          </h2>
          <p className="text-lg sm:text-2xl mt-4">
            {t("privacy-policy.text-24")}
          </p>
        </div>
        <div className="mt-10">
          <h2 className={cn("text-lg sm:text-2xl ", myFont.className)}>
            {t("privacy-policy.text-25")}
          </h2>
          <p className="text-lg sm:text-2xl mt-4">
            {t("privacy-policy.text-26")}
          </p>
        </div>
      </div>
    </>
  );
}
