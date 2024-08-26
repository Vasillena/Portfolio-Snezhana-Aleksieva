import Image from "next/image";
import RevealDesktop from "../Common/RevealDesktop";
import blackSans from "next/font/local";
import { cn } from "@/lib/utils";
import { getI18n } from "@/locales/server";
import image2 from "@/public/hero-5.png";
import image3 from "@/public/dots.svg";

const blackSansFont = blackSans({ src: "../../../public/Blacker-Sans.ttf" });

export default async function Hero(): Promise<JSX.Element> {
  const t = await getI18n();
  const myFont = blackSansFont;

  return (
    <>
      <div className="max-w-7xl mx-auto mt-28 sm:mt-44 xl:mt-32 grid lg:grid-cols-3 gap-16 text-center lg:text-left">
        <div className="col-span-2 ">
          <RevealDesktop>
            <h1
              className={cn(
                "text-3xl min-[400px]:text-4xl sm:text-6xl",
                myFont.className
              )}
            >
              {t("uiux-design.title")}
            </h1>
            <p className="mt-6 text-lg sm:text-xl xl:max-w-lg sm:leading-6">
              {t("uiux-design.text")}
            </p>
            <p className="mt-4 text-lg sm:text-xl sm:leading-6">
              {t("uiux-design.text-2")}
            </p>
          </RevealDesktop>
        </div>
        <div className="hidden xl:inline-block w-[310px] h-[364px] justify-self-end relative -top-32">
          <Image src={image2} alt="Decor image" fill object-fit="contain" />
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
