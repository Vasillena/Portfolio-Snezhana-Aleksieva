import { getCurrentLocale, getI18n } from "@/locales/server";

import Image from "next/image";
import Link from "next/link";
import Reveal from "../Common/Reveal";
import blackSans from "next/font/local";
import { cn } from "@/lib/utils";
import image1 from "@/public/projects.svg";
import image2 from "@/public/fproject-1.png";
import image3 from "@/public/fproject-2.png";
import image4 from "@/public/fproject-3.png";
import image5 from "@/public/fproject-4.png";
import image6 from "@/public/projects-2.svg";

const blackSansFont = blackSans({ src: "../../../public/Blacker-Sans.ttf" });

export default async function FeaturedProjects(): Promise<JSX.Element> {
  const locale = await getCurrentLocale();
  const t = await getI18n();
  const myFont = blackSansFont;

  return (
    <div className="max-w-full mt-24 bg-[#F2EEE9] px-2">
      <div className=" max-w-7xl mx-auto py-11">
        <div className="flex justify-center">
          <h2
            className={cn(
              "text-3xl min-[400px]:text-4xl  lg:text-[40px] ",
              myFont.className
            )}
          >
            {t("home.title-3")}
          </h2>
          <Image
            src={locale === "en" ? image1 : image6}
            alt="Text image"
            className={locale === "en" ? "mt-[28px] sm:mt-[30px]" : "mt-[10px]"}
            style={{
              width: locale === "en" ? "111px" : "197px",
              height: "auto",
              alignSelf: "flex-end",
              // marginTop: "38px",
              marginLeft: "-50px",
              zIndex: 1,
            }}
          />
        </div>
        <div className="mx-auto flex flex-wrap justify-center xl:justify-between gap-y-20 gap-x-20 xl:gap-x-0  mt-8">
          <Reveal>
            <div className="w-[300px] h-[300px] relative flex justify-center">
              <Image
                src={image2}
                alt="Project image"
                fill
                object-fit="contain"
                // style={{
                //   width: "300px",
                //   height: "auto",
                // }}
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="w-[300px] h-[300px] relative flex justify-center">
              <Image
                src={image3}
                alt="Project image"
                fill
                object-fit="contain"
                // style={{
                //   width: "300px",
                //   height: "auto",
                // }}
              />
            </div>
          </Reveal>

          <Reveal>
            <div className="w-[300px] h-[300px] relative flex justify-center">
              <Image
                src={image4}
                alt="Project image"
                fill
                object-fit="contain"
                // style={{
                //   width: "300px",
                //   height: "auto",
                // }}
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="w-[300px] h-[300px] relative flex justify-center">
              <Image
                src={image5}
                alt="Project image"
                fill
                object-fit="contain"
                // style={{
                //   width: "300px",
                //   height: "auto",
                // }}
              />
            </div>
          </Reveal>
        </div>
        <div className="mt-11 flex justify-center lg:justify-end">
          <Link
            href="/portfolio"
            className="text-lg sm:text-xl text-[#B0752A] font-bold hover:text-[#415064]"
          >
            {t("home.text-10")}
          </Link>
        </div>
      </div>
    </div>
  );
}
