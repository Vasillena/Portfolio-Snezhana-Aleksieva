import { oranienbaum, shlapakScript } from "@/lib/fonts";

import Image from "next/image";
import Reveal from "../Common/Reveal";
import { cn } from "@/lib/utils";
import { getI18n } from "@/locales/server";
import image from "@/public/dots.svg";

export default async function Hero(): Promise<JSX.Element> {
  const t = await getI18n();

  return (
    <>
      <div className="max-w-7xl mx-auto mt-28 sm:mt-44 xl:mt-32  text-center xl:text-left">
        <div>
          <Reveal>
            <h1
              className={cn(
                "text-3xl min-[400px]:text-4xl sm:text-6xl",
                oranienbaum.className
              )}
            >
              {t("graphic-design.title")}
            </h1>

            <div className="my-8 flex flex-col xl:flex-row justify-center lg:justify-between items-center gap-10">
              <h2
                className={cn(
                  "text-2xl md:text-4xl xl:text-nowrap order-2 xl:order-1",
                  shlapakScript.className
                )}
              >
                {t("graphic-design.text-1")}
              </h2>
              <div className="w-2/3 xl:w-full border-b border-[#B0752A] order-1 xl:order-2" />
            </div>
            <div className="xl:max-w-[620px]">
              <p className="mt-8 text-lg sm:text-xl sm:leading-6">
                {t("graphic-design.text-2")}
              </p>
              <p className="mt-4 text-lg sm:text-xl sm:leading-6">
                {t("graphic-design.text-3")}
              </p>
            </div>
          </Reveal>
        </div>
        {/* <div className="hidden xl:inline-block w-[310px] h-[427px] justify-self-end relative -top-32">
          <Image src={image2} alt="Decor image" fill object-fit="contain" />
        </div> */}
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
