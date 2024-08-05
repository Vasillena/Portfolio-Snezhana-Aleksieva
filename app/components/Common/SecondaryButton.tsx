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
      className="w-max px-11 py-3 bg-[#F7F4F1] text-[#8D5002] font-bold text-lg sm:text-xl rounded border-b border-[#B0752A]"
    >
      {text}
    </Link>
  );
}
