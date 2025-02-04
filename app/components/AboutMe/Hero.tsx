import { liana, oranienbaum } from "@/lib/fonts";

import Image from "next/image";
import MainButton from "../Common/MainButton";
import Reveal from "../Common/Reveal";
import { cn } from "@/lib/utils";
import { getI18n } from "@/locales/server";
import image1 from "@/public/hero-3.png";
import image2 from "@/public/dots.svg";

export default async function Hero(): Promise<JSX.Element> {
  const t = await getI18n();

  return (
    <>
      <div className="max-w-7xl mx-auto mt-28 sm:mt-44 xl:mt-32 grid lg:grid-cols-3 gap-16 text-center xl:text-left">
        <div className="sm:col-span-3 xl:col-span-2 flex flex-col items-center xl:items-start">
          <Reveal>
            <div className="flex justify-center xl:justify-start items-center min-[400px]:gap-4">
              <div className="text-left md:text-center">
                <h1
                  className={cn(
                    "text-3xl min-[400px]:text-4xl sm:text-6xl",
                    oranienbaum.className
                  )}
                >
                  {t("about.title")}
                </h1>
                <div className="my-8 flex flex-col xl:flex-row md:items-center gap-8 xl:gap-6">
                  <div className="hidden md:block w-2/3 xl:w-1/6 border-b border-[#B0752A]" />
                  <h2
                    className={cn(
                      "text-2xl md:text-4xl text-wrap md:text-nowrap text-[#8D5002]",
                      liana.className
                    )}
                  >
                    {t("about.text-1")}
                  </h2>
                </div>
              </div>
              <div className="inline-block xl:hidden  relative">
                <Image src={image1} alt="Profile image" width={180} />
              </div>
            </div>

            <div className="max-w-3xl">
              <p className="mt-6 text-lg sm:text-xl sm:leading-[26px]">
                {t("about.text-2")}
              </p>
              <p className="mt-4 text-lg sm:text-xl sm:leading-[26px]">
                {t("about.text-3")}
              </p>
              <p className="mt-4 text-lg sm:text-xl sm:leading-[26px]">
                {t("about.text-4")}
              </p>
            </div>
          </Reveal>

          <div className=" flex gap-5 pt-14">
            <MainButton href={"/portfolio"} text={t("about.button")} />
          </div>
        </div>
        <div className="hidden xl:inline-block w-[374px] h-[515px] justify-self-end relative">
          <Image src={image1} alt="Profile image" fill object-fit="contain" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-24 flex justify-center lg:justify-start">
        <Image
          src={image2}
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
