import Image, { StaticImageData } from "next/image";

import Link from "next/link";
import RevealDesktop from "./RevealDesktop";
import { cn } from "@/lib/utils";
import { getI18n } from "@/locales/server";
import image4 from "@/public/icon-3.svg";
import image5 from "@/public/dots.svg";
import { oranienbaum } from "@/lib/fonts";
import overlayImage from "@/public/hover.png";

interface ProjectsCardProps {
  title: string;
  text: string;
  href: string;
  image1: StaticImageData;
  image2: StaticImageData;
  image3: StaticImageData;
}

export default async function ProjectsCard({
  title,
  text,
  href,
  image1,
  image2,
  image3,
}: ProjectsCardProps): Promise<JSX.Element> {
  const t = await getI18n();

  return (
    <div>
      <div>
        <h2
          className={cn(
            "text-3xl min-[400px]:text-4xl  lg:text-[40px]",
            oranienbaum.className
          )}
        >
          {title}
        </h2>
        <p className="text-lg sm:text-2xl mt-6 sm:leading-6">{text}</p>
        <div className="mt-3 font-bold">
          <Link
            href={href}
            target="_blank"
            className="text-lg sm:text-xl flex text-[#B0752A] hover:text-[#415064]"
          >
            {t("graphic-design.card-1-text-2")}{" "}
            <Image
              src={image4}
              alt="Icon"
              style={{
                width: "24px",
                height: "auto",
              }}
            />
          </Link>
        </div>
      </div>
      <RevealDesktop>
        <div className="flex flex-wrap xl:flex-nowrap justify-center gap-y-20 gap-x-14 mt-16">
          {[image1, image2, image3].map((image, index) => (
            <div key={index} className="relative w-[387px] h-auto group">
              <Link href={href} target="_blank">
                <Image
                  src={image}
                  alt="Project image"
                  className="w-full h-auto transition-opacity duration-300"
                />
                <Image
                  src={overlayImage}
                  alt="Overlay"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </Link>
            </div>
          ))}
        </div>
      </RevealDesktop>
      <div className="mt-16 mb-[68px] flex justify-center xl:justify-start">
        <Image
          src={image5}
          alt="Dots"
          style={{
            width: "160px",
            height: "auto",
          }}
        />
      </div>
    </div>
  );
}
