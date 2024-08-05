import CreativeAndSoftSkillsCard from "./CreativeAndSoftSkillsCard";
import athena from "next/font/local";
import { cn } from "@/lib/utils";

const myFont = athena({ src: "../../../public/Athena-Regular.ttf" });

export default function CreativeFields(): JSX.Element {
  return (
    <div className="mt-[72px]">
      <div>
        <h2
          className={cn(
            "text-[40px] mb-7 text-center md:text-left",
            myFont.className
          )}
        >
          Creative Fields
        </h2>
      </div>
      <CreativeAndSoftSkillsCard title={"Logo design"} />
      <CreativeAndSoftSkillsCard title={"Branding"} />
      <CreativeAndSoftSkillsCard title={"Layout design"} />
      <CreativeAndSoftSkillsCard title={"Social media design"} />
      <CreativeAndSoftSkillsCard title={"UX/UI design"} />
    </div>
  );
}
