interface EducationProps {
  place: string;
  position: string;
  period: string;
}

export default function Education({
  place,
  position,
  period,
}: EducationProps): JSX.Element {
  return (
    <div className="flex justify-between h-[88px] px-20">
      <div className="w-1/10" />
      <div className="w-1/6 flex justify-center relative">
        <div className="w-[2px] h-full bg-[#B0752A] rounded" />
        <div className="absolute top-1/2 transform -translate-y-1/2 right-1/2 -mr-[1px] w-[60px] h-[0.5px] bg-[#B0752A]" />
        <div className="absolute top-1/2 transform -translate-y-1/2 right-full mr-[6px] w-[3px] h-[3px] bg-[#415064] rounded-full" />
        <div className="absolute w-[240px] top-1/2 transform -translate-y-1/2 right-full mr-10">
          <div className="text-xl sm:text-2xl font-semibold rounded-lg">
            {place}
          </div>
          <div className="text-lg sm:text-xl">{position}</div>
          <div className="text-lg sm:text-xl">{period}</div>
        </div>
      </div>
      <div className="w-1/3" />
    </div>
  );
}
