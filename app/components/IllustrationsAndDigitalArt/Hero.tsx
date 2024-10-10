import { getCurrentLocale, getI18n } from "@/locales/server";

import Image from "next/image";
import RevealDesktop from "../Common/RevealDesktop";
import { cn } from "@/lib/utils";
import image1 from "@/public/dots.svg";
import { oranienbaum } from "@/lib/fonts";

export default async function Hero(): Promise<JSX.Element> {
  const locale = await getCurrentLocale();
  const t = await getI18n();

  return (
    <>
      <div className="max-w-7xl mx-auto mt-28 sm:mt-44 xl:mt-32 text-center lg:text-left">
        <div>
          <RevealDesktop>
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:gap-10">
              <h1
                className={cn(
                  "text-3xl min-[400px]:text-4xl sm:text-[56px] lg:text-nowrap",
                  locale === "en" ? "sm:text-6xl" : "sm:text-[56px]",
                  oranienbaum.className
                )}
              >
                {t("illustrations-digital.title")}
              </h1>
              <div className="w-2/3 lg:w-full pt-4 border-b border-[#B0752A]" />
            </div>

            <p className="mt-8 text-lg sm:text-xl sm:leading-6">
              {t("illustrations-digital.text")}
            </p>
            <p className="mt-4 text-lg sm:text-xl sm:leading-6">
              {t("illustrations-digital.text-2")}
            </p>
          </RevealDesktop>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-36 flex justify-center lg:justify-start">
        <Image
          src={image1}
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
