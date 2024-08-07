import HobbiesCard from "./HobbiesCard";
import athena from "next/font/local";
import { cn } from "@/lib/utils";
import image1 from "@/public/hobby-1.svg";
import image2 from "@/public/hobby-2.svg";
import image3 from "@/public/hobby-3.svg";
import image4 from "@/public/hobby-4.svg";
import image5 from "@/public/hobby-5.svg";
import image6 from "@/public/hobby-6.svg";
import image7 from "@/public/hobby-7.svg";

const myFont = athena({ src: "../../../public/Athena-Regular.ttf" });

export default function Hobbies(): JSX.Element {
  return (
    <div className="mt-36 xl:mt-[72px] flex flex-col items-center xl:items-start">
      <div>
        <h2
          className={cn(
            "text-3xl min-[400px]:text-4xl lg:text-[40px] mb-7",
            myFont.className
          )}
        >
          Hobbies
        </h2>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-2 mt-10">
        <HobbiesCard
          title={"Traveling"}
          icon={image1}
          radius={"rounded-tr-[0px]"}
        />
        <HobbiesCard
          title={"Camping"}
          icon={image2}
          radius={"rounded-br-[0px]"}
        />
        <HobbiesCard
          title={"Kayaking"}
          icon={image3}
          radius={"rounded-bl-[0px]"}
        />
        <HobbiesCard
          title={"Drawing"}
          icon={image4}
          radius={"rounded-tl-[0px]"}
        />
        <HobbiesCard
          title={"Reading"}
          icon={image5}
          radius={"rounded-br-[0px]"}
        />
        <HobbiesCard
          title={"Coffee"}
          icon={image6}
          radius={"rounded-bl-[0px]"}
        />
        <HobbiesCard
          title={"Snowbord"}
          icon={image7}
          radius={"rounded-tl-[0px]"}
        />
      </div>
    </div>
  );
}
