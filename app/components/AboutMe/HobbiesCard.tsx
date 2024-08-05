import Image from "next/image";
import { cn } from "@/lib/utils";

interface HobbiesCardProps {
  title: string;
  icon: string;
  radius: string;
}

export default function HobbiesCard({
  title,
  icon,
  radius,
}: HobbiesCardProps): JSX.Element {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center w-[118px] h-[118px] bg-[#F2EEE9] rounded-full ",
        radius
      )}
    >
      <div>
        <Image src={icon} alt="icon" width={24} height={24} />
      </div>
      <div>
        <p className="text-lg sm:text-xl">{title}</p>
      </div>
    </div>
  );
}
