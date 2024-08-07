import Link from "next/link";
import { cn } from "@/lib/utils";

interface MainButtonProps {
  text: string;
  classProp?: string;
  href: string;
}

export default function MainButton({
  text,
  classProp,
  href,
}: MainButtonProps): JSX.Element {
  return (
    <Link
      href={href}
      className={cn(
        "w-max px-11 py-3 bg-[#F2EEE9] text-[#8D5002] font-bold text-lg sm:text-xl rounded border-b border-[#B0752A] relative flex  items-center justify-center overflow-hidden transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#B0752A]  before:duration-500 before:ease-out hover:shadow-2xl hover:shadow-[#B0752A] hover:text-[#F2EEE9]  hover:before:h-56 hover:before:w-60",
        classProp
      )}
    >
      <span className="relative z-10">{text}</span>
    </Link>
  );
}
