import CreativeAndSoftSkillsCard from "./CreativeAndSoftSkillsCard";
import RevealDesktop from "../Common/RevealDesktop";
import { cn } from "@/lib/utils";
import { getI18n } from "@/locales/server";
import { oranienbaum } from "@/lib/fonts";

export default async function SoftSkills(): Promise<JSX.Element> {
  const t = await getI18n();
  return (
    <RevealDesktop>
      <div className="mt-32">
        <div>
          <h2
            className={cn(
              "text-3xl min-[400px]:text-4xl  lg:text-[40px] mb-7 text-center xl:text-left",
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
      </div>
    </RevealDesktop>
  );
}
