import { cn } from "@/lib/utils";

interface MainButtonProps {
  text: string;
  classProp?: string;
}

export default function MainButton({
  text,
  classProp,
}: MainButtonProps): JSX.Element {
  return (
    <button
      className={cn(
        "px-11 py-3 bg-[#F2EEE9] text-[#B0752A] font-bold text-xl rounded border-b border-[#B0752A]",
        classProp
      )}
    >
      {text}
    </button>
  );
}
