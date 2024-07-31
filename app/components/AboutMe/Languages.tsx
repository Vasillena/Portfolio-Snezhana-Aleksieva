import SkillsCard from "./SkillsCard";
import athena from "next/font/local";
import { cn } from "@/lib/utils";

const myFont = athena({ src: "../../../public/Athena-Regular.ttf" });

export default function Languages(): JSX.Element {
  return (
    <div className="mt-[72px]">
      <div>
        <h2 className={cn("text-[40px] mb-7", myFont.className)}>Languages</h2>
      </div>
      <SkillsCard title={"Bulgarian"} margin1={"ml-0"} margin2={"ml-[212px]"} />
      <SkillsCard
        title={"English"}
        margin1={"ml-[25px]"}
        margin2={"ml-[220px]"}
      />
    </div>
  );
}
