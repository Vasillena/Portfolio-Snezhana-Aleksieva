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
        <div className="col-span-2">
          <Reveal>
            <h1
              className={cn(
                "text-3xl min-[400px]:text-4xl sm:text-6xl",
                myFont.className
              )}
            >
              {t("portfolio.title")}
            </h1>
            <h2 className="sm:text-xl font-bold">{t("portfolio.text-1")}</h2>
            <p className="mt-16 sm:text-xl sm:leading-6">
              {t("portfolio.text-2")}
            </p>
            <p className="sm:text-xl sm:leading-6">{t("portfolio.text-3")}</p>
            <p className="sm:text-xl sm:leading-6">{t("portfolio.text-4")}</p>
          </Reveal>
        </div>
        <div className="hidden xl:inline-block w-[310px] h-[427px] justify-self-end relative -top-32">
          <Image src={image2} alt="Decor image" fill object-fit="contain" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 xl:-mt-[132px] flex justify-center lg:justify-start">
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
