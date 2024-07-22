import Image from "next/image";
import athena from "next/font/local";
import { cn } from "@/lib/utils";
import image1 from "@/public/welcome.svg";
import image2 from "@/public/hero-1.png";
import image3 from "@/public/dots.svg";

const myFont = athena({ src: "../../public/Athena-Regular.ttf" });

export default function Hero() {
  return (
    <>
      <div className="max-w-7xl mx-auto mt-[55px] grid lg:grid-cols-3 gap-40">
        <div className="col-span-2 flex flex-col justify-center items-left">
          {/* // className="relative w-full h-[723px] before:absolute before:top-[-64px] before:right-0 before:w-full before:h-full before:bg-right-top before:bg-no-repeat before:bg-auto before:content-[''] before:bg-[url('../public/hero-2.svg')]"
      > */}
          <Image
            src={image1}
            alt="Profile image"
            style={{
              width: "317px",
              height: "auto",
              alignSelf: "flex-start",
              zIndex: 1,
            }}
          />
          <h1
            className={cn(
              "text-6xl pl-[72px] mt-[-40px] text-[#415064]",
              myFont.className
            )}
          >
            to My Design Journey
          </h1>
          <p className="mt-16 text-2xl">
            Hi there! I&apos;m Snezhana, a junior graphic and UI/UX designer
            with a passion for creating visually appealing and user-friendly
            designs
          </p>
          <p className="mt-4 text-2xl">
            Welcome to my web portfolio - hope you enjoy it! Ready to explore my
            work?
          </p>
          <div className=" flex gap-5 pt-16">
            <button className="px-11 py-3 bg-[#B0752A] text-white text-xl">
              Explore My Projects
            </button>
            <button className="px-11 py-3 border border-[#B0752A] text-[#B0752A] text-xl">
              Get in Touch
            </button>
          </div>
        </div>
        <div className="justify-self-center">
          <Image
            src={image2}
            alt="Profile image"
            style={{
              width: "374px",
              height: "auto",
            }}
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-36">
        <Image
          src={image3}
          alt="Profile image"
          style={{
            width: "160px",
            height: "auto",
          }}
        />
      </div>
    </>
  );
}
