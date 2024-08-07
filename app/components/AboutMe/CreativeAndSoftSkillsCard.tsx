interface CreativeFieldsCardProps {
  title: string;
}

export default function CreativeAndSoftSkillsCard({
  title,
}: CreativeFieldsCardProps): JSX.Element {
  return (
    <div className="flex items-center gap-2 ml-10 sm:ml-16 lg:ml-16 xl:ml-0">
      <div className="w-[3px] h-[3px] bg-[#B0752A] rounded-full" />
      <p className="text-xl sm:text-2xl mb-1 mr-4">{title}</p>
    </div>
  );
}
