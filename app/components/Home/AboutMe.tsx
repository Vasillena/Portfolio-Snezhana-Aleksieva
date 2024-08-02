import Image from "next/image";
import MainButton from "../Common/MainButton";
import athena from "next/font/local";
import { cn } from "@/lib/utils";
import image2 from "@/public/about-short.png";
import image3 from "@/public/me.svg";

const myFont = athena({ src: "../../../public/Athena-Regular.ttf" });

export default function AboutMe(): JSX.Element {
  return (
    <div className=" max-w-7xl mt-20 mx-auto grid grid-cols-1 xl:grid-cols-3 gap-y-20 lg:gap-72">
      <div className="mx-auto hidden xl:inline-block w-[374px] h-[515px] relative">
        <Image
          src={image2}
          alt="Computer image"
          fill
          object-fit="contain"
          // style={{
          //   minWidth: "374px",
          //   height: "auto",
          // }}
        />
      </div>
      <div className="col-span-2">
        <div className="flex mt-6">
          <h2 className={cn("text-5xl lg:text-[40px]", myFont.className)}>
            About
          </h2>
          <Image
            src={image3}
            alt="Text image"
            style={{
              width: "53px",
              height: "auto",
              alignSelf: "flex-end",
              marginTop: "30px",
              marginLeft: "-20px",
              zIndex: 1,
            }}
          />
        </div>
        <h2 className="text-2xl font-bold mt-16 leading-[26px]">
          I&rsquo;m a junior graphic and UI/UX designer with
        </h2>
        <h2 className="text-2xl font-bold leading-[26px]">
          a strong background in marketing and sales.
        </h2>
        <p className="text-2xl mt-4 leading-[26px]">
          I bring a unique blend of creativity and strategic thinking to my
          projects.
        </p>
        <p className="text-2xl leading-[26px]">
          Passionate about minimalist design and constantly expanding my skills,
          I strive to create visually stunning and functional work. My journey
          in design is driven by a commitment to continuous learning and
          innovation. Let&rsquo;s create something extraordinary together!
        </p>
        <p className="text-2xl leading-[26px]">
          Let&rsquo;s create something extraordinary together!
        </p>
        <div className="mt-16 text-center lg:text-left">
          <MainButton
            href={"/about-me"}
            text={"Learn More"}
            // classProp={"mt-11"}
          />
        </div>
      </div>
    </div>
    // </div>
  );
}
