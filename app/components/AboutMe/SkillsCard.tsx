import { cn } from "@/lib/utils";

interface SkillsCardProps {
  title: string;
  margin1: string;
  margin2: string;
}

export default function SkillsCard({
  title,
  margin1,
  margin2,
}: SkillsCardProps): JSX.Element {
  return (
    <div>
      <div className="flex items-center">
        <p className="text-2xl mb-1 mr-4">{title}</p>
        <div className="w-1/6 flex justify-center relative">
          <div
            className={cn(
              "absolute top-1/2 transform -translate-y-1/2 left-1/2 w-[108px] h-[0.5px] bg-[#B0752A]",
              margin1
            )}
          />
          <div
            className={cn(
              "absolute top-1/2 transform -translate-y-1/2 w-[3px] h-[3px] bg-[#415064] rounded-full",
              margin2
            )}
          />
        </div>
      </div>
    </div>
  );
}
