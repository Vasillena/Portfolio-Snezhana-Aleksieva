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
        "w-max px-11 py-3 bg-[#F2EEE9] text-[#8D5002] font-bold sm:text-xl rounded border-b border-[#B0752A]",
        classProp
      )}
    >
      {text}
    </Link>
  );
}
