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
          <h2
            className={cn(
              "text-3xl min-[400px]:text-4xl sm:text-5xl lg:text-[40px] ",
              myFont.className
            )}
          >
            Featured
          </h2>
          <Image
            src={image1}
            alt="Text image"
            className="mt-[28px] sm:mt-[38px]"
            style={{
              width: "111px",
              height: "auto",
              alignSelf: "flex-end",
              // marginTop: "38px",
              marginLeft: "-50px",
              zIndex: 1,
            }}
          />
        </div>
        <div className="mx-auto flex flex-wrap justify-center xl:justify-between gap-y-20 gap-x-20 xl:gap-x-0  mt-8">
          <div className="w-[300px] h-[300px] relative flex justify-center">
            <Image
              src={image2}
              alt="Project image"
              fill
              object-fit="contain"
              // style={{
              //   width: "300px",
              //   height: "auto",
              // }}
            />
          </div>

          <div className="w-[300px] h-[300px] relative flex justify-center">
            <Image
              src={image3}
              alt="Project image"
              fill
              object-fit="contain"
              // style={{
              //   width: "300px",
              //   height: "auto",
              // }}
            />
          </div>
          <div className="w-[300px] h-[300px] relative flex justify-center">
            <Image
              src={image4}
              alt="Project image"
              fill
              object-fit="contain"
              // style={{
              //   width: "300px",
              //   height: "auto",
              // }}
            />
          </div>
          <div className="w-[300px] h-[300px] relative flex justify-center">
            <Image
              src={image5}
              alt="Project image"
              fill
              object-fit="contain"
              // style={{
              //   width: "300px",
              //   height: "auto",
              // }}
            />
          </div>
        </div>
        <div className="mt-11 flex justify-center lg:justify-end">
          <Link
            href="/portfolio"
            className="text-lg sm:text-xl text-[#B0752A] font-bold"
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  );
}
