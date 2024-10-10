import Image, { StaticImageData } from "next/image";

import RevealDesktop from "../Common/RevealDesktop";
import { cn } from "@/lib/utils";
import { oranienbaum } from "@/lib/fonts";

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
          <p className={cn("text-2xl sm:text-3xl", oranienbaum.className)}>
            {paragraph1}
          </p>
          <p className={cn("text-2xl sm:text-3xl pl-6", oranienbaum.className)}>
            {paragraph2}
          </p>
        </div>
      </div>
    </RevealDesktop>
  );
}
