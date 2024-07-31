interface SecondaryButtonProps {
  text: string;
}

export default function SecondaryButton({
  text,
}: SecondaryButtonProps): JSX.Element {
  return (
    <button className="px-11 py-3 bg-[#F7F4F1] text-[#B0752A] font-bold text-xl rounded border-b border-[#B0752A]">
      {text}
    </button>
  );
}
