import { useLocale, useTranslations } from "next-intl";

import HobbiesCard from "./HobbiesCard";
import athena from "next/font/local";
import blackSans from "next/font/local";
import { cn } from "@/lib/utils";
import image1 from "@/public/hobby-1.svg";
import image2 from "@/public/hobby-2.svg";
import image3 from "@/public/hobby-3.svg";
import image4 from "@/public/hobby-4.svg";
import image5 from "@/public/hobby-5.svg";
import image6 from "@/public/hobby-6.svg";
import image7 from "@/public/hobby-7.svg";

const athenaFont = athena({ src: "../../../public/Athena-Regular.ttf" });
const blackSansFont = blackSans({ src: "../../../public/Blacker-Sans.ttf" });

export default function Hobbies(): JSX.Element {
  const locale = useLocale();
  const t = useTranslations();
  const myFont = locale === "en" ? athenaFont : blackSansFont;
  return (
    <div className="mt-36 xl:mt-[72px] flex flex-col items-center xl:items-start">
      <div>
        <h2
          className={cn(
            "text-3xl min-[400px]:text-4xl lg:text-[40px] mb-7",
            myFont.className
          )}
        >
          {t("about.card-7-title")}
        </h2>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-2 mt-10">
        <HobbiesCard
          title={t("about.card-7-text-1")}
          icon={image1}
          radius={"rounded-tr-[0px]"}
        />
        <HobbiesCard
          title={t("about.card-7-text-2")}
          icon={image2}
          radius={"rounded-br-[0px]"}
        />
        <HobbiesCard
          title={t("about.card-7-text-3")}
          icon={image3}
          radius={"rounded-bl-[0px]"}
        />
        <HobbiesCard
          title={t("about.card-7-text-4")}
          icon={image4}
          radius={"rounded-tl-[0px]"}
        />
        <HobbiesCard
          title={t("about.card-7-text-5")}
          icon={image5}
          radius={"rounded-br-[0px]"}
        />
        <HobbiesCard
          title={t("about.card-7-text-6")}
          icon={image6}
          radius={"rounded-bl-[0px]"}
        />
        <HobbiesCard
          title={t("about.card-7-text-7")}
          icon={image7}
          radius={"rounded-tl-[0px]"}
        />
      </div>
    </div>
  );
}
