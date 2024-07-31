import Image, { StaticImageData } from "next/image";

import MainButton from "../Common/MainButton";
import athena from "next/font/local";
import { cn } from "@/lib/utils";
import image1 from "@/public/portfolio-card-1.png";

const myFont = athena({ src: "../../../public/Athena-Regular.ttf" });

interface PortfolioCardProps {
  title1: string;
  title2: string;
  image: StaticImageData;
  mx?: string;
  text1: string;
  text2: string;
  text3: string;
  text4?: string;
}

export default function PortfolioCard({
  title1,
  title2,
  image,
  mx,
  text1,
  text2,
  text3,
  text4,
}: PortfolioCardProps): JSX.Element {
  return (
    <div className={cn("flex", mx)}>
      <div>
        <div>
          <h2 className={cn("text-[32px] leading-3", myFont.className)}>
            {title1}
          </h2>
          <h2 className={cn("text-[32px]", myFont.className)}>{title2}</h2>
        </div>
        <div>
          <Image
            src={image}
            alt="Project image"
            style={{ width: "314px", height: "auto" }}
          />
        </div>
      </div>
      <div className="flex flex-col -ml-16 -z-10">
        <div className="w-[314px] h-[362px] bg-[#F2EEE9] rounded-tr-[100px]">
          <p className="text-xl w-[188px] ml-24 pt-[60px] leading-5">{text1}</p>
          <div className="flex items-center w-[188px] ml-24 mt-12">
            <div className="w-[5px] h-[5px] bg-[#415064] rounded-full mr-3" />
            <p className="text-xl leading-5">{text2}</p>
          </div>
          <div className="flex items-center w-[188px] ml-24">
            <div className="w-[5px] h-[5px] bg-[#415064] rounded-full mr-3" />
            <p className="text-xl leading-5">{text3}</p>
          </div>
          {text4 && (
            <div className="flex items-center w-[188px] ml-24">
              <div className="w-[5px] h-[5px] bg-[#415064] rounded-full mr-3" />
              <p className="text-xl leading-5">{text4}</p>
            </div>
          )}
        </div>
        <div className="self-center mt-4 ml-14">
          <MainButton text={"Explore"} />
        </div>
      </div>
    </div>
  );
}
