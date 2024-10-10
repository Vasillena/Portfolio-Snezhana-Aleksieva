import RevealDesktop from "../Common/RevealDesktop";
import SkillsCard from "./SkillsCard";
import { cn } from "@/lib/utils";
import { getI18n } from "@/locales/server";
import { oranienbaum } from "@/lib/fonts";

export default async function Languages(): Promise<JSX.Element> {
  const t = await getI18n();
  return (
    <RevealDesktop>
      <div className="mt-[72px] md:mt-0 xl:mt-[100px]">
        <div>
          <h2
            className={cn(
              "text-3xl min-[400px]:text-4xl lg:text-[40px] mb-7 text-center xl:text-left",
              oranienbaum.className
            )}
          >
            {t("about.card-4-title")}
          </h2>
        </div>
        <SkillsCard
          title={t("about.card-4-text-1")}
          margin1={"ml-0"}
          margin2={"ml-[212px]"}
        />
        <SkillsCard
          title={t("about.card-4-text-2")}
          margin1={"ml-[20px] sm:ml-[25px]"}
          margin2={"ml-[220px]"}
        />
      </div>
    </RevealDesktop>
  );
}
