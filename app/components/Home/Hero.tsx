import Image from "next/image";
import MainButton from "../Common/MainButton";
import SecondaryButton from "../Common/SecondaryButton";
import athena from "next/font/local";
import blackSans from "next/font/local";
import { cn } from "@/lib/utils";
import image1 from "@/public/welcome.svg";
import image2 from "@/public/hero-1.png";
import { useTranslations } from "next-intl";

const athenaFont = athena({ src: "../../../public/Athena-Regular.ttf" });
const blackSansFont = blackSans({ src: "../../../public/Blacker-Sans.ttf" });

export default function Hero({ locale }): JSX.Element {
  const myFont = locale === "en" ? athenaFont : blackSansFont;

  const t = useTranslations();
  return (
    <>
      <div className="max-w-7xl mx-auto mt-14 lg:mt-20 xl:mt-0 grid lg:grid-cols-3 gap-x-12 text-center lg:text-left">
        <div className="sm:col-span-3 xl:col-span-2 flex flex-col items-center lg:items-start min-[400px]:mt-12 sm:mt-24">
          <div className="scale-90 sm:scale-100 pl-4">
            <Image
              src={image1}
              alt="Text image"
              style={{
                width: "317px",
                height: "auto",
                alignSelf: "flex-start",
                zIndex: 1,
              }}
            />
          </div>

          <h1
            className={cn(
              "text-3xl min-[400px]:text-4xl sm:text-6xl pl-0 sm:pl-[30px] lg:pl-[72px] mt-[-30px] lg:mt-[-40px]",
              myFont.className
            )}
          >
            {t("home.title-1")}
          </h1>
          <p className="mt-12 sm:mt-16 text-lg sm:text-2xl sm:leading-[26px]">
            {t("home.text-1")}
          </p>
          <p className="mt-4 text-lg sm:text-2xl sm:leading-[26px]">
            {t("home.text-2")}
          </p>
          <div className="flex flex-col items-center lg:flex-row gap-5 pt-8 min-[400px]:pt-12 sm:pt-20">
            <MainButton href={"/portfolio"} text={t("home.button-1")} />
            <SecondaryButton href={"/contacts"} text={t("home.button-2")} />
          </div>
        </div>

        <div className="hidden xl:inline-block w-[446px] h-[723px] justify-self-end relative -top-16">
          <Image
            src={image2}
            alt="Coffee image"
            fill
            object-fit="contain"
            // style={
            //   {
            //     width: "374px",
            //     height: "auto",
            //   }
            // }
          />
        </div>
      </div>
    </>
  );
}
