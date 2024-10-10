import { oranienbaum, shlapakScript } from "@/lib/fonts";

import Image from "next/image";
import RevealDesktop from "../Common/RevealDesktop";
import { cn } from "@/lib/utils";
import { getI18n } from "@/locales/server";
import image1 from "@/public/dots.svg";

export default async function Hero(): Promise<JSX.Element> {
  const t = await getI18n();

  return (
    <>
      <div className="max-w-7xl mx-auto mt-28 sm:mt-44 xl:mt-32 text-center lg:text-left">
        <div>
          <RevealDesktop>
            <h1
              className={cn(
                "text-3xl min-[400px]:text-4xl sm:text-6xl",
                oranienbaum.className
              )}
            >
              {t("uiux-design.title")}
            </h1>
            <div className="my-8 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-10">
              <h2
                className={cn(
                  "text-2xl md:text-4xl text-nowrap",
                  shlapakScript.className
                )}
              >
                {t("uiux-design.text")}
              </h2>
              <div className="w-2/3 lg:w-full border-b border-[#B0752A]" />
            </div>
            <p className="mt-4 text-lg sm:text-xl sm:leading-6">
              {t("uiux-design.text-2")}
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
