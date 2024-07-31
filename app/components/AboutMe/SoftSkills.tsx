import CreativeAndSoftSkillsCard from "./CreativeAndSoftSkillsCard";
import athena from "next/font/local";
import { cn } from "@/lib/utils";

const myFont = athena({ src: "../../../public/Athena-Regular.ttf" });

export default function SoftSkills(): JSX.Element {
  return (
    <div className="mt-[72px]">
      <div>
        <h2 className={cn("text-[40px] mb-7", myFont.className)}>
          Soft Skills
        </h2>
      </div>
      <CreativeAndSoftSkillsCard title={"Time managment"} />
      <CreativeAndSoftSkillsCard title={"Attention to details"} />
      <CreativeAndSoftSkillsCard title={"Team work"} />
      <CreativeAndSoftSkillsCard title={"Analytical thinking"} />
      <CreativeAndSoftSkillsCard title={"Critical analysis"} />
      <CreativeAndSoftSkillsCard title={"Receptiveness to feedback"} />
    </div>
  );
}
