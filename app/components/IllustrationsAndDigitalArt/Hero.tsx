import { getCurrentLocale, getI18n } from "@/locales/server";

import Image from "next/image";
import Reveal from "../Common/Reveal";
import blackSans from "next/font/local";
import { cn } from "@/lib/utils";
import image1 from "@/public/hero-5.png";
import image2 from "@/public/dots.svg";

const blackSansFont = blackSans({ src: "../../../public/Blacker-Sans.ttf" });

export default async function Hero(): Promise<JSX.Element> {
  const locale = await getCurrentLocale();
  const t = await getI18n();
  const myFont = blackSansFont;

  return (
    <>
      <div className="max-w-7xl mx-auto mt-28 sm:mt-44 xl:mt-32 grid lg:grid-cols-3 gap-16 text-center lg:text-left">
        <div className="col-span-2">
          <Reveal>
            <h1
              className={cn(
                "text-3xl min-[400px]:text-4xl sm:text-[56px]",
                locale === "en" ? "sm:text-6xl" : "sm:text-[56px]",
                myFont.className
              )}
            >
              {t("illustrations-digital.title")}
            </h1>
            <p className="mt-12 text-lg sm:text-xl sm:leading-6">
              {t("illustrations-digital.text")}
            </p>
            <p className="mt-4 text-lg sm:text-xl sm:leading-6">
              {t("illustrations-digital.text-2")}
            </p>
          </Reveal>
        </div>
        <div className="hidden xl:inline-block w-[381px] h-[364px] justify-self-end relative -top-32">
          <Image src={image1} alt="Decor image" fill object-fit="contain" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-36 xl:-mt-[132px] flex justify-center lg:justify-start">
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
