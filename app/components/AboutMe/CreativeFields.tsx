import CreativeAndSoftSkillsCard from "./CreativeAndSoftSkillsCard";
import athena from "next/font/local";
import { cn } from "@/lib/utils";

const myFont = athena({ src: "../../../public/Athena-Regular.ttf" });

export default function CreativeFields(): JSX.Element {
  return (
    <div className="mt-[100px]">
      <div>
        <h2
          className={cn(
            "text-3xl min-[400px]:text-4xl  lg:text-[40px] mb-7 text-center xl:text-left",
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
