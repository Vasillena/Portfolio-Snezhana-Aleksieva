import { useLocale, useTranslations } from "next-intl";

import CreativeAndSoftSkillsCard from "./CreativeAndSoftSkillsCard";
import athena from "next/font/local";
import blackSans from "next/font/local";
import { cn } from "@/lib/utils";

const athenaFont = athena({ src: "../../../public/Athena-Regular.ttf" });
const blackSansFont = blackSans({ src: "../../../public/Blacker-Sans.ttf" });

export default function SoftSkills(): JSX.Element {
  const locale = useLocale();
  const t = useTranslations();
  const myFont = locale === "en" ? athenaFont : blackSansFont;
  return (
    <div className="mt-[100px]">
      <div>
        <h2
          className={cn(
            "text-3xl min-[400px]:text-4xl  lg:text-[40px] mb-7 text-center xl:text-left",
            myFont.className
          )}
        >
          {t("about.card-6-title")}
        </h2>
      </div>
      <CreativeAndSoftSkillsCard title={t("about.card-6-text-1")} />
      <CreativeAndSoftSkillsCard title={t("about.card-6-text-2")} />
      <CreativeAndSoftSkillsCard title={t("about.card-6-text-3")} />
      <CreativeAndSoftSkillsCard title={t("about.card-6-text-4")} />
      <CreativeAndSoftSkillsCard title={t("about.card-6-text-5")} />
      <CreativeAndSoftSkillsCard title={t("about.card-6-text-6")} />
    </div>
  );
}
