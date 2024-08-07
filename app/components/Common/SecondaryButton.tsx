import Link from "next/link";

interface SecondaryButtonProps {
  text: string;
  href: string;
}

export default function SecondaryButton({
  text,
  href,
}: SecondaryButtonProps): JSX.Element {
  return (
    <Link
      href={href}
      className="w-max px-11 py-3 bg-[#F7F4F1] text-[#8D5002] font-bold text-lg sm:text-xl rounded border-b border-[#B0752A] relative flex items-center justify-center overflow-hidden  transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#d49d55]  before:duration-500 before:ease-out hover:shadow-2xl hover:shadow-[#d49d55] hover:text-[#F2EEE9]  hover:before:h-56 hover:before:w-60"
    >
      <span className="relative z-10">{text}</span>
    </Link>
  );
}
