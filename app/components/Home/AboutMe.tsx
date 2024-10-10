import { oranienbaum, shlapakScript } from "@/lib/fonts";

import Image from "next/image";
import MainButton from "../Common/MainButton";
import Reveal from "../Common/Reveal";
import { cn } from "@/lib/utils";
import { getI18n } from "@/locales/server";
import image from "@/public/about-short.png";

export default async function AboutMe(): Promise<JSX.Element> {
  const t = await getI18n();

  return (
    <div className=" max-w-7xl mt-20 mx-auto grid grid-cols-1 xl:grid-cols-3 gap-y-20 lg:gap-72 text-center lg:text-left">
      <div className="mx-auto hidden xl:inline-block w-[374px] h-[515px] relative">
        <Image src={image} alt="Profile image" fill object-fit="contain" />
      </div>
      <div className="col-span-2">
        <Reveal>
          <div>
            <h2
              className={cn(
                "text-3xl min-[400px]:text-4xl  lg:text-5xl ",
                oranienbaum.className
              )}
            >
              {t("home.title-2")}
            </h2>
          </div>
          <div className="my-8 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-10">
            <h2
              className={cn(
                "text-2xl md:text-4xl text-nowrap",
                shlapakScript.className
              )}
            >
              {t("home.text-6")}
            </h2>
            <div className="w-2/3 lg:w-full border-b border-[#B0752A]" />
          </div>

          <p className="text-lg sm:text-xl mt-4 sm:leading-[26px]">
            {t("home.text-7")}
          </p>
          <p className="mt-6 text-lg sm:text-xl sm:leading-[26px]">
            {t("home.text-8")}
          </p>
          <div className="flex justify-center lg:justify-start mt-20 text-center lg:text-left">
            <MainButton href={"/about"} text={t("home.button-3")} />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
