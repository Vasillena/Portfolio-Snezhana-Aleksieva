import { getCurrentLocale, getI18n } from "@/locales/server";
import { liana, oranienbaum } from "@/lib/fonts";

import Image from "next/image";
import RevealDesktop from "../Common/RevealDesktop";
import { cn } from "@/lib/utils";
import image from "@/public/dots.svg";

export default async function Hero(): Promise<JSX.Element> {
  const locale = await getCurrentLocale();
  const t = await getI18n();

  return (
    <>
      <div className="max-w-7xl mx-auto mt-28 sm:mt-44 xl:mt-32 text-center xl:text-left">
        <div>
          <RevealDesktop>
            <h1
              className={cn(
                "text-3xl min-[400px]:text-4xl sm:text-[56px] xl:text-nowrap",
                locale === "en" ? "sm:text-6xl" : "sm:text-[56px]",
                oranienbaum.className
              )}
            >
              {t("illustrations-digital.title")}
            </h1>
            <div className="my-8 flex flex-col xl:flex-row justify-center lg:justify-between items-center gap-10">
              <h2
                className={cn(
                  "text-2xl md:text-4xl xl:text-nowrap order-2 xl:order-1 text-[#8D5002]",
                  liana.className
                )}
              >
                {t("illustrations-digital.text")}
              </h2>
              <div className="w-2/3 xl:w-full border-b border-[#B0752A] order-1 xl:order-2" />
            </div>
            <p className="mt-4 text-lg sm:text-xl sm:leading-6">
              {t("illustrations-digital.text-2")}
            </p>
          </RevealDesktop>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-36 flex justify-center lg:justify-start">
        <Image
          src={image}
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
