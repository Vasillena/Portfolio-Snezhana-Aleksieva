import Image, { StaticImageData } from "next/image";

import RevealDesktop from "../Common/RevealDesktop";
import blackSans from "next/font/local";
import { cn } from "@/lib/utils";

const blackSansFont = blackSans({ src: "../../../public/Blacker-Sans.ttf" });

interface CreativeFieldCardProps {
  image: StaticImageData;
  paragraph1: string;
  paragraph2: string;
}

export default function CreativeFieldsCard({
  image,
  paragraph1,
  paragraph2,
}: CreativeFieldCardProps): JSX.Element {
  const myFont = blackSansFont;
  return (
    <RevealDesktop>
      <div className="flex justify-center items-center gap-4 ">
        <div className="w-[62px] h-[62px] sm:w-[92px] sm:h-[92px] relative">
          <Image
            src={image}
            alt="Creative field image"
            fill
            object-fit="contain"
          />
        </div>
        <div>
          <p className={cn("text-2xl sm:text-3xl", myFont.className)}>
            {paragraph1}
          </p>
          <p className={cn("text-2xl sm:text-3xl pl-6", myFont.className)}>
            {paragraph2}
          </p>
        </div>
      </div>
    </RevealDesktop>
  );
}
