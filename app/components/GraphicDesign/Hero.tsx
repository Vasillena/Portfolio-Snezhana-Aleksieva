import Image from "next/image";
import athena from "next/font/local";
import { cn } from "@/lib/utils";
import image2 from "@/public/hero-4.png";
import image3 from "@/public/dots.svg";

const myFont = athena({ src: "../../../public/Athena-Regular.ttf" });

export default function Hero(): JSX.Element {
  return (
    <>
      <div className="max-w-7xl mx-auto mt-14 grid lg:grid-cols-3 gap-16">
        <div className="col-span-2 max-w-lg">
          <h1 className={cn("text-6xl ", myFont.className)}>Graphic Design</h1>
          <h2 className="text-2xl font-bold">
            Selection of my creative projects
          </h2>
          <p className="mt-16 text-xl">
            Explore a selection of my creative projects, showcasing my expertise
            in branding, logo design & layout design. Each project highlights my
            dedication to blending aesthetics with functionality
          </p>
          <p className="text-xl">
            Click on the links to view more details on Behance and dive into the
            visuals that bring my ideas to life.
          </p>
        </div>
        <div className="justify-self-end relative -top-32">
          <Image
            src={image2}
            alt="Decor image"
            style={{
              width: "374px",
              height: "auto",
            }}
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto -mt-[100px]">
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
