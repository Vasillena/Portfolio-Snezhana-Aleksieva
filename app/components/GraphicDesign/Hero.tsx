import Image from "next/image";
import Reveal from "../Common/Reveal";
import blackSans from "next/font/local";
import { cn } from "@/lib/utils";
import { getI18n } from "@/locales/server";
import image2 from "@/public/hero-4.png";
import image3 from "@/public/dots.svg";

const blackSansFont = blackSans({ src: "../../../public/Blacker-Sans.ttf" });

export default async function Hero(): Promise<JSX.Element> {
  const t = await getI18n();
  const myFont = blackSansFont;

  return (
    <>
      <div className="max-w-7xl mx-auto mt-28 sm:mt-44 xl:mt-32 grid lg:grid-cols-3 gap-16 text-center lg:text-left">
        <div className="col-span-2 xl:max-w-lg">
          <Reveal>
            <h1
              className={cn(
                "text-3xl min-[400px]:text-4xl sm:text-6xl",
                myFont.className
              )}
            >
              {t("graphic-design.title")}
            </h1>
            <h2 className="text-lg sm:text-xl font-bold">
              {t("graphic-design.text-1")}
            </h2>
            <p className="mt-16 text-lg sm:text-xl sm:leading-6">
              {t("graphic-design.text-2")}
            </p>
            <p className="text-lg sm:text-xl sm:leading-6">
              {t("graphic-design.text-3")}
            </p>
          </Reveal>
        </div>
        <div className="hidden xl:inline-block w-[381px] h-[465px] justify-self-end relative -top-32">
          <Image
            src={image2}
            alt="Decor image"
            fill
            object-fit="contain"
            // style={{
            //   width: "374px",
            //   height: "auto",
            // }}
          />
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
    </>
  );
}
