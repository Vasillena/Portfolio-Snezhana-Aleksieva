interface SecondaryButtonProps {
  text: string;
}

export default function SecondaryButton({
  text,
}: SecondaryButtonProps): JSX.Element {
  return (
    <button className="px-11 py-3 border border-[#B0752A] text-[#B0752A] text-xl rounded">
      {text}
    </button>
  );
}
