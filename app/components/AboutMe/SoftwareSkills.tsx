import { useLocale, useTranslations } from "next-intl";

import SkillsCard from "./SkillsCard";
import athena from "next/font/local";
import blackSans from "next/font/local";
import { cn } from "@/lib/utils";

const athenaFont = athena({ src: "../../../public/Athena-Regular.ttf" });
const blackSansFont = blackSans({ src: "../../../public/Blacker-Sans.ttf" });

export default function SoftwareSkills(): JSX.Element {
  const locale = useLocale();
  const t = useTranslations();
  const myFont = locale === "en" ? athenaFont : blackSansFont;
  return (
    <div>
      <div>
        <h2
          className={cn(
            "text-3xl min-[400px]:text-4xl  lg:text-[40px] mb-7 text-center xl:text-left",
            myFont.className
          )}
        >
          {t("about.card-3-title")}
        </h2>
      </div>
      <div>
        <SkillsCard
          title={"Photoshop"}
          margin1={"ml-0"}
          margin2={"ml-[172px]"}
        />
        <SkillsCard
          title={"Illustrator"}
          margin1={"ml-[14px]"}
          margin2={"ml-[200px]"}
        />
        <SkillsCard
          title={"InDesign"}
          margin1={"ml-[14px]"}
          margin2={"ml-[140px]"}
        />
        <SkillsCard
          title={"AfterEffects"}
          margin1={"-ml-[3px] sm:-ml-[7px]"}
          margin2={"ml-[40px]"}
        />
        <SkillsCard
          title={"Figma"}
          margin1={"ml-[35px] sm:ml-[39px]"}
          margin2={"ml-[270px]"}
        />
      </div>
    </div>
  );
}
