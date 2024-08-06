import Image from "next/image";
import athena from "next/font/local";
import { cn } from "@/lib/utils";
import image2 from "@/public/hero-5.png";
import image3 from "@/public/dots.svg";

const myFont = athena({ src: "../../../public/Athena-Regular.ttf" });

export default function Hero(): JSX.Element {
  return (
    <>
      <div className="max-w-7xl mx-auto mt-28 sm:mt-44 xl:mt-32 grid lg:grid-cols-3 gap-16 text-center lg:text-left">
        <div className="col-span-2 ">
          <h1
            className={cn(
              "text-3xl min-[400px]:text-4xl sm:text-6xl",
              myFont.className
            )}
          >
            My UI/UX Projects
          </h1>
          <p className="mt-16 text-lg sm:text-xl xl:max-w-lg sm:leading-6">
            Discover my user interface and user experience designs that
            prioritize usability and user satisfaction.
          </p>
        </div>
        <div className="hidden xl:inline-block w-[381px] h-[364px] justify-self-end relative -top-32">
          <Image
            src={image2}
            alt="Decor image"
            fill
            object-fit="contain"
            // style={{
            //   width: "374px",
            //   height: "auto",
            // }}
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-36 xl:-mt-[132px] flex justify-center lg:justify-start">
        <Image
          src={image3}
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
