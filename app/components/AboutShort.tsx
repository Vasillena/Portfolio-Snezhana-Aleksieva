import Image from "next/image";
import MainButton from "./MainButton";
import athena from "next/font/local";
import { cn } from "@/lib/utils";
import image2 from "@/public/about-short.png";
import image3 from "@/public/me.svg";

// import image1 from "@/public/cards-1.svg";

const myFont = athena({ src: "../../public/Athena-Regular.ttf" });

export default function AboutShort(): JSX.Element {
  return (
    // <div className=" max-w-full mt-20">
    <div className=" max-w-7xl mt-20 mx-auto grid lg:grid-cols-3 gap-40">
      <div>
        <Image
          src={image2}
          alt="Laptop image"
          style={{
            width: "374px",
            height: "auto",
          }}
        />
      </div>
      <div className="col-span-2">
        <div className="flex">
          <h2 className={cn("text-[40px]", myFont.className)}>About</h2>
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

        <p className="text-2xl mt-11">
          I&rsquo;m a junior graphic and UI/UX designer with a strong background
          in marketing and sales. I bring a unique blend of creativity and
          strategic thinking to my projects.
        </p>
        <p className="text-2xl mt-4">
          Passionate about minimalist design and constantly expanding my skills,
          I strive to create visually stunning and functional work. My journey
          in design is driven by a commitment to continuous learning and
          innovation.
        </p>
        <p className="text-2xl mt-4">
          Let&rsquo;s create something extraordinary together!
        </p>
        <MainButton text={"Learn More"} classProp={"mt-11"} />
      </div>
    </div>
    // </div>
  );
}
