import Image from "next/image";
import MainButton from "../Common/MainButton";
import athena from "next/font/local";
import { cn } from "@/lib/utils";
import image1 from "@/public/hero-3.png";
import image2 from "@/public/dots.svg";

const myFont = athena({ src: "../../../public/Athena-Regular.ttf" });

export default function Hero(): JSX.Element {
  return (
    <>
      <div className="max-w-7xl mx-auto mt-28 sm:mt-44 xl:mt-14 grid lg:grid-cols-3 gap-16 text-center lg:text-left">
        <div className="sm:col-span-3 xl:col-span-2 flex flex-col items-center lg:items-start">
          <h1
            className={cn(
              "text-3xl min-[400px]:text-4xl sm:text-6xl",
              myFont.className
            )}
          >
            Snezhana Aleksieva
          </h1>
          <h2 className="text-lg sm:text-xl font-bold">
            Graphic Design | UI/UX Design
          </h2>
          <p className="mt-16 text-lg sm:text-xl sm:leading-[26px]">
            I’m Snezhana, a junior graphic and UI/UX designer with background in
            marketing and sales, currently based in Blagoevgrad, Bulgaria. I am
            a native Bulgarian speaker and am fluent in conversational English.
          </p>
          <p className="mt-4 text-lg sm:text-xl sm:leading-[26px]">
            With over 12 years of experience in the hospitality industry, I have
            acquired a unique blend of skills, but my true passion lies in
            visual art. My work aims to balance aesthetics and functionality,
            leveraging my marketing expertise to communicate effectively. I love
            minimalist graphic design, but sometimes I like to break the grid to
            create dynamic and engaging visuals.
          </p>
          <p className="mt-4 text-lg sm:text-xl sm:leading-[26px]">
            My design education began at SoftUni Creative - academy for design,
            creativity and visualisation. I am constantly expanding my knowledge
            and skills to stay up to date with the latest trends and techniques
            .
          </p>
          <div className=" flex gap-5 pt-14">
            <MainButton href={"/portfolio"} text={" Explore My Projects"} />
          </div>
        </div>
        <div className="hidden xl:inline-block w-[446px] h-[723px] justify-self-end relative -top-32">
          <Image
            src={image1}
            alt="Profile image"
            fill
            object-fit="contain"
            // style={{
            //   width: "374px",
            //   height: "auto",
            // }}
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-36 xl:-mt-32 flex justify-center lg:justify-start">
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
