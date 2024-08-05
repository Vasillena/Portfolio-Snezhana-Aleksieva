import Image, { StaticImageData } from "next/image";

import Link from "next/link";
import athena from "next/font/local";
import { cn } from "@/lib/utils";
import image4 from "@/public/icon-3.svg";
import image5 from "@/public/dots.svg";

const myFont = athena({ src: "../../../public/Athena-Regular.ttf" });

interface ProjectsCardProps {
  title: string;
  text: string;
  href: string;
  image1: StaticImageData;
  image2: StaticImageData;
  image3: StaticImageData;
}

export default function ProjectsCard({
  title,
  text,
  href,
  image1,
  image2,
  image3,
}: ProjectsCardProps): JSX.Element {
  return (
    <div>
      <div>
        <h2 className={cn("text-4xl ", myFont.className)}>{title}</h2>
        <p
          className="text-2xl mt-6 leading-6
        "
        >
          {text}
        </p>
        <div className=" mt-3 font-bold">
          <Link
            href={href}
            target="_blank"
            className="text-xl flex text-[#B0752A]"
          >
            View more on{" "}
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
      <div className="flex flex-wrap xl:flex-nowrap justify-center gap-20 mt-16">
        <Image
          src={image1}
          alt="Project image"
          style={{
            width: "387px",
            height: "auto",
          }}
        />
        <Image
          src={image2}
          alt="Project image"
          style={{
            width: "387px",
            height: "auto",
          }}
        />
        <Image
          src={image3}
          alt="Project image"
          style={{
            width: "387px",
            height: "auto",
          }}
        />
      </div>
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
