import Image from "next/image";
import MainButton from "../Common/MainButton";
import SecondaryButton from "../Common/SecondaryButton";
import athena from "next/font/local";
import { cn } from "@/lib/utils";
import image1 from "@/public/welcome.svg";
import image2 from "@/public/hero-1.png";

const myFont = athena({ src: "../../../public/Athena-Regular.ttf" });

export default function Hero(): JSX.Element {
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
            to My Design Journey
          </h1>
          <p className="mt-12 sm:mt-16 text-lg sm:text-2xl sm:leading-[26px]">
            Hi there! I&apos;m Snezhana, a junior graphic and UI/UX designer
            with a passion for creating visually appealing and user-friendly
            designs
          </p>
          <p className="mt-4 text-lg sm:text-2xl sm:leading-[26px]">
            Welcome to my web portfolio - hope you enjoy it! Ready to explore my
            work?
          </p>
          <div className="flex flex-col items-center lg:flex-row gap-5 pt-8 min-[400px]:pt-12 sm:pt-20">
            <MainButton href={"/portfolio"} text={" Explore My Projects"} />
            <SecondaryButton href={"/contacts"} text={"Get in Touch"} />
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
