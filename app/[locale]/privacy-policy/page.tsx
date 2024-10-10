import FollowPointer from "@/app/components/Common/FollowPointer";
import Image from "next/image";
import Reveal from "@/app/components/Common/Reveal";
import { cn } from "@/lib/utils";
import { getI18n } from "@/locales/server";
import image from "@/public/dots.svg";
import { oranienbaum } from "@/lib/fonts";

export const metadata = {
  title: "Privacy Policy | snezhana-aleksieva.com",
  description: "Privacy Policy",
};

export default async function PrivacyPolicyPage(): Promise<JSX.Element> {
  const t = await getI18n();

  return (
    <>
      <FollowPointer />
      <div className="max-w-7xl mx-auto  mt-28 sm:mt-44 xl:mt-32 grid lg:grid-cols-3 gap-16 text-center lg:text-left">
        <div className="col-span-2">
          <Reveal>
            <h1
              className={cn(
                "text-3xl min-[400px]:text-4xl sm:text-6xl",
                oranienbaum.className
              )}
            >
              {t("privacy-policy.title")}
            </h1>
          </Reveal>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 flex justify-center lg:justify-start">
        <Image
          src={image}
          alt="Dots"
          style={{
            width: "160px",
            height: "auto",
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto mt-20">
        <div>
          <h2 className={cn("text-lg sm:text-2xl ", oranienbaum.className)}>
            {t("privacy-policy.text-1")}
          </h2>
          <p className="text-lg sm:text-2xl mt-4">
            {t("privacy-policy.text-2")}
          </p>
        </div>
        <div className="mt-10">
          <h2 className={cn("text-lg sm:text-2xl ", oranienbaum.className)}>
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
          <h2 className={cn("text-lg sm:text-2xl ", oranienbaum.className)}>
            {t("privacy-policy.text-6")}
          </h2>
          <p className="text-lg sm:text-2xl mt-4">
            {t("privacy-policy.text-7")}
          </p>
        </div>
        <div className="mt-10">
          <h2 className={cn("text-lg sm:text-2xl ", oranienbaum.className)}>
            {t("privacy-policy.text-8")}
          </h2>
          <p className="text-lg sm:text-2xl mt-4">
            {t("privacy-policy.text-9")}
          </p>
        </div>
        <div className="mt-10">
          <h2 className={cn("text-lg sm:text-2xl ", oranienbaum.className)}>
            {t("privacy-policy.text-10")}
          </h2>
          <p className="text-lg sm:text-2xl mt-4">
            {t("privacy-policy.text-11")}
          </p>
        </div>
        <div className="mt-10">
          <h2 className={cn("text-lg sm:text-2xl ", oranienbaum.className)}>
            {t("privacy-policy.text-12")}
          </h2>
          <p className="text-lg sm:text-2xl mt-4">
            {t("privacy-policy.text-13")}
          </p>
        </div>
        <div className="mt-10">
          <h2 className={cn("text-lg sm:text-2xl ", oranienbaum.className)}>
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
          <h2 className={cn("text-lg sm:text-2xl ", oranienbaum.className)}>
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
          <h2 className={cn("text-lg sm:text-2xl ", oranienbaum.className)}>
            {t("privacy-policy.text-23")}
          </h2>
          <p className="text-lg sm:text-2xl mt-4">
            {t("privacy-policy.text-24")}
          </p>
        </div>
        <div className="mt-10">
          <h2 className={cn("text-lg sm:text-2xl ", oranienbaum.className)}>
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
