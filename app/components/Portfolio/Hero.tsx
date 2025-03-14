import { liana, oranienbaum } from "@/lib/fonts";

import Image from "next/image";
import Reveal from "../Common/Reveal";
import { cn } from "@/lib/utils";
import { getI18n } from "@/locales/server";
import image from "@/public/dots.svg";

export default async function Hero(): Promise<JSX.Element> {
  const t = await getI18n();

  return (
    <>
      <div className="max-w-7xl mx-auto mt-28 sm:mt-44 xl:mt-32 text-center xl:text-left">
        <div>
          <Reveal>
            <h1
              className={cn(
                "text-3xl min-[400px]:text-4xl sm:text-6xl",
                oranienbaum.className
              )}
            >
              {t("portfolio.title")}
            </h1>
            <div className="my-8 flex flex-col xl:flex-row justify-center xl:justify-between items-center gap-10 ">
              <h2
                className={cn(
                  "text-2xl md:text-4xl xl:text-nowrap order-2 xl:order-1 text-[#8D5002]",
                  liana.className
                )}
              >
                {t("portfolio.text-1")}
              </h2>
              <div className="w-2/3 xl:w-full pt-4 border-b border-[#B0752A] order-1 xl:order-2" />
            </div>

            <p className="mt-8 sm:text-xl sm:leading-6">
              {t("portfolio.text-2")}
            </p>
            <p className="sm:text-xl sm:leading-6">{t("portfolio.text-3")}</p>
          </Reveal>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 flex justify-center xl:justify-start">
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
