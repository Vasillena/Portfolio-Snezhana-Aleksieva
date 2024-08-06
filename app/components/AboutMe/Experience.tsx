interface ExperienceProps {
  place: string;
  position: string;
  period: string;
}

export default function Experience({
  place,
  position,
  period,
}: ExperienceProps): JSX.Element {
  return (
    <div className="flex justify-between px-20 h-[88px]">
      <div className="w-1/10" />
      <div className="w-1/6 flex justify-center relative">
        <div className="w-[2px] h-[200px] sm:h-full bg-[#B0752A] rounded relative"></div>
        <div className="absolute top-1/2 transform -translate-y-1/2 left-1/2 -ml-[1px] w-[60px] h-[0.5px] bg-[#B0752A]" />
        <div className="absolute top-1/2 transform -translate-y-1/2 left-full ml-[64px] sm:ml-[32px] md:ml-[28px] lg:ml-[20px] w-[3px] h-[3px] bg-[#415064] rounded-full" />
        <div className="absolute w-[240px] top-1/2 transform -translate-y-1/2 left-full ml-20 sm:ml-10">
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
