import Image, { StaticImageData } from "next/image";

import athena from "next/font/local";
import { cn } from "@/lib/utils";

const myFont = athena({ src: "../../public/Athena-Regular.ttf" });

interface CreativeFieldCardProps {
  image: StaticImageData;
  paragraph1: string;
  paragraph2: string;
}

export default function CreativeFieldCard({
  image,
  paragraph1,
  paragraph2,
}: CreativeFieldCardProps) {
  return (
    <div className="flex justify-center items-center gap-2">
      <div>
        <Image
          src={image}
          alt="Profile image"
          style={{
            width: "92px",
            height: "auto",
          }}
        />
      </div>
      <div>
        <p className={cn("text-3xl text-[#415064]", myFont.className)}>
          {paragraph1}
        </p>
        <p className={cn("text-3xl text-[#415064] pl-6", myFont.className)}>
          {paragraph2}
        </p>
      </div>
    </div>
  );
}
