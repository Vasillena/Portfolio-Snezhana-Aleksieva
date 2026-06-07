import Image from "next/image";
import { JSX } from "react";
import Link from "next/link";
import MainButton from "../Common/MainButton";
import RevealDesktop from "../Common/RevealDesktop";
import { cn } from "@/lib/utils";
import { getI18n } from "@/locales/server";
import image1 from "@/public/fproject-1.webp";
import image2 from "@/public/fproject-2.webp";
import image3 from "@/public/fproject-3.webp";
import image4 from "@/public/fproject-4.webp";
import { oranienbaum } from "@/lib/fonts";

export default async function FeaturedProjects(): Promise<JSX.Element> {
  const t = await getI18n();

  return (
    <div className="max-w-full -mt-16 xl:mt-12 px-2">
      <div className="max-w-7xl mx-auto py-11">
        <div>
          <h2
            className={cn(
              "xl:pl-2 text-3xl min-[400px]:text-4xl lg:text-5xl text-center xl:text-left",
              oranienbaum.className
            )}
          >
            {t("home.title-3")}
          </h2>
        </div>
        <div className="mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-12">
          <RevealDesktop>
            <div className="mx-auto w-[300px] h-[300px] relative flex justify-center transition-transform duration-300">
              <Image
                src={image1}
                alt="Project image"
                fill
                object-fit="contain"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          </RevealDesktop>
          <RevealDesktop>
            <div className="mx-auto w-[300px] h-[300px] relative flex justify-center transition-transform duration-300">
              <Image
                src={image2}
                alt="Project image"
                fill
                object-fit="contain"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          </RevealDesktop>

          <RevealDesktop>
            <div className="mx-auto w-[300px] h-[300px] relative flex justify-center transition-transform duration-300">
              <Image
                src={image3}
                alt="Project image"
                fill
                object-fit="contain"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          </RevealDesktop>
          <RevealDesktop>
            <div className="mx-auto w-[300px] h-[300px] relative flex justify-center transition-transform duration-300">
              <Image
                src={image4}
                alt="Project image"
                fill
                object-fit="contain"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          </RevealDesktop>
        </div>
        <div className="xl:pr-2 mt-6 flex justify-center xl:justify-end">
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
