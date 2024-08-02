import Image from "next/image";
import Link from "next/link";
import athena from "next/font/local";
import { cn } from "@/lib/utils";
import image1 from "@/public/projects.svg";
import image2 from "@/public/fproject-1.png";
import image3 from "@/public/fproject-2.png";
import image4 from "@/public/fproject-3.png";
import image5 from "@/public/fproject-4.png";

const myFont = athena({ src: "../../../public/Athena-Regular.ttf" });

export default function FeaturedProjects(): JSX.Element {
  return (
    <div className="max-w-full mt-24 bg-[#F2EEE9] px-2">
      <div className=" max-w-7xl mx-auto py-11">
        <div className="flex justify-center">
          <h2 className={cn("text-5xl lg:text-[40px] ", myFont.className)}>
            Featured
          </h2>
          <Image
            src={image1}
            alt="Text image"
            style={{
              width: "111px",
              height: "auto",
              alignSelf: "flex-end",
              marginTop: "38px",
              marginLeft: "-50px",
              zIndex: 1,
            }}
          />
        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-20 lg:gap-20 mt-8">
          <Link className="flex justify-center" href="/">
            <Image
              src={image2}
              alt="Project image"
              style={{
                width: "300px",
                height: "auto",
              }}
            />
          </Link>
          <Link className="flex justify-center" href="/">
            <Image
              src={image3}
              alt="Project image"
              style={{
                width: "300px",
                height: "auto",
              }}
            />
          </Link>
          <Link className="flex justify-center" href="/">
            <Image
              src={image4}
              alt="Project image"
              style={{
                width: "300px",
                height: "auto",
              }}
            />
          </Link>
          <Link className="flex justify-center" href="/">
            <Image
              src={image5}
              alt="Project image"
              style={{
                width: "300px",
                height: "auto",
              }}
            />
          </Link>
        </div>
        <div className="mt-11 flex justify-center lg:justify-end">
          <Link href="/" className="text-xl text-[#B0752A] font-bold">
            View All
          </Link>
        </div>
      </div>
    </div>
  );
}
