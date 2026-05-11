import CreativeAndSoftSkillsCard from "./CreativeAndSoftSkillsCard";
import { JSX } from "react";
import RevealDesktop from "../Common/RevealDesktop";
import { cn } from "@/lib/utils";
import { getI18n } from "@/locales/server";
import { oranienbaum } from "@/lib/fonts";

export default async function SoftSkills(): Promise<JSX.Element> {
  const t = await getI18n();
  return (
    <RevealDesktop>
      <div className="mt-[72px] xl:mt-36">
        <div>
          <h2
            className={cn(
              "text-3xl min-[400px]:text-4xl  lg:text-[40px] mb-7 text-center md:text-left",
              oranienbaum.className
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
    </RevealDesktop>
  );
}
