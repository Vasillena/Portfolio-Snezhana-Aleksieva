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
        "px-11 py-3 bg-[#B0752A] text-white text-xl rounded",
        classProp
      )}
    >
      {text}
    </button>
  );
}
