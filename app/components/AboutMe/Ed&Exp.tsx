import Education from "./Education";
import Experience from "./Experience";
import athena from "next/font/local";
import { cn } from "@/lib/utils";

const myFont = athena({ src: "../../../public/Athena-Regular.ttf" });

export default function EdExp(): JSX.Element {
  return (
    <>
      <div className="ml-72 sm:ml-32 md:ml-44 xl:ml-6">
        <div className="flex justify-between h-[68px] px-20">
          <div className="w-1/10" />
          <div className="w-1/6 relative">
            <div className="absolute w-[240px] top-1/2 transform -translate-y-1/2 left-full ml-[36px]">
              <div>
                <h2
                  className={cn(
                    "hidden sm:block text-3xl min-[400px]:text-4xl sm:text-5xl lg:text-[40px]",
                    myFont.className
                  )}
                >
                  Experience
                </h2>
              </div>
            </div>
            <div className="absolute w-[240px] top-1/2 transform -translate-y-1/2 right-full mr-20 sm:mr-10">
              <div>
                <h2
                  className={cn(
                    "text-3xl min-[400px]:text-4xl sm:text-5xl lg:text-[40px]",
                    myFont.className
                  )}
                >
                  Education
                </h2>
              </div>
            </div>
          </div>
          <div className="w-1/3" />
        </div>
        <div className="-mt-12 sm:mt-0 flex justify-between px-20 h-[120px]">
          <div className="w-1/10" />
          <div className="w-1/6 flex justify-center relative">
            <div className="w-[2px] h-full bg-[#B0752A] rounded relative">
              <div className="absolute w-[40px] h-[40px] rounded-full ring-2 ring-[#B0752A] bg-[#f9f7f4] -left-[18px]" />
            </div>
          </div>
          <div className="w-1/3" />
        </div>
        <div className="hidden sm:block">
          <Experience
            place={"Park Hotel Moskva"}
            position={"Front Office Manager"}
            period={"September 2011 - January 2016"}
          />
        </div>
        <div>
          <Education
            place={"College Of Tourism"}
            position={"Management & Organisation of Tourists Service"}
            period={"Blagoevgrad, 2009 - 2011"}
          />
        </div>

        <div className="hidden sm:block">
          <Experience
            place={"Boyana Developers"}
            position={"Sales & Events Manager"}
            period={"February 2016 - Present"}
          />
        </div>
        <div className="mt-20 sm:mt-0">
          <Education
            place={"Graphic Design"}
            position={"at SoftUni Creative Academy"}
            period={"March 2024 - Present"}
          />
        </div>

        <div className="hidden sm:block">
          <Experience
            place={"Thracian Hoteliers"}
            position={"Marketing Specialist"}
            period={"November 2017 - Present"}
          />
        </div>
        <div className="mt-20 sm:mt-0">
          <Education
            place={"UX/UI design"}
            position={"at SoftUni Creative Academy"}
            period={"March 2024 - Present"}
          />
        </div>

        <div className="hidden sm:block">
          <Experience
            place={"Freelance"}
            position={"Graphic Designer"}
            period={"October 2023 - Present"}
          />
        </div>

        <div className="flex justify-between px-20 h-[120px]">
          <div className="w-1/10" />
          <div className="w-1/6 flex justify-center relative">
            <div className="w-[2px] h-full bg-[#B0752A] rounded relative">
              <div className="absolute -bottom-[24px] transform -translate-y-1/2  w-[3px] h-[3px] bg-[#B0752A] rounded-full" />
              <div className="absolute -bottom-[48px] transform -translate-y-1/2  w-[3px] h-[3px] bg-[#B0752A] rounded-full" />
              <div className="absolute -bottom-[72px] transform -translate-y-1/2  w-[3px] h-[3px] bg-[#B0752A] rounded-full" />
            </div>
          </div>
          <div className="w-1/3" />
        </div>
      </div>

      <div className="sm:hidden mt-32 mr-72 sm:ml-32 md:ml-44">
        <div className="flex justify-between h-[68px] px-20">
          <div className="w-1/10" />
          <div className="w-1/6 relative">
            <div className="absolute w-[240px] top-1/2 transform -translate-y-1/2 left-full ml-[72px]">
              <div>
                <h2
                  className={cn(
                    "text-3xl min-[400px]:text-4xl sm:text-5xl lg:text-[40px]",
                    myFont.className
                  )}
                >
                  Experience
                </h2>
              </div>
            </div>
          </div>
          <div className="w-1/3" />
        </div>
        <div className="-mt-12 sm:mt-0 flex justify-between px-20 h-[120px]">
          <div className="w-1/10" />
          <div className="w-1/6 flex justify-center relative">
            <div className="w-[2px] h-full bg-[#B0752A] rounded relative">
              <div className="absolute w-[40px] h-[40px] rounded-full ring-2 ring-[#B0752A] bg-[#f9f7f4] -left-[18px]" />
            </div>
          </div>
          <div className="w-1/3" />
        </div>
        <div>
          <Experience
            place={"Park Hotel Moskva"}
            position={"Front Office Manager"}
            period={"September 2011 - January 2016"}
          />
        </div>

        <div className="mt-20 sm:mt-0">
          <Experience
            place={"Boyana Developers"}
            position={"Sales & Events Manager"}
            period={"February 2016 - Present"}
          />
        </div>

        <div className="mt-20 sm:mt-0">
          <Experience
            place={"Thracian Hoteliers"}
            position={"Marketing Specialist"}
            period={"November 2017 - Present"}
          />
        </div>

        <div className="mt-20 sm:mt-0">
          <Experience
            place={"Freelance"}
            position={"Graphic Designer"}
            period={"October 2023 - Present"}
          />
        </div>

        <div className="flex justify-between px-20 h-[120px]">
          <div className="w-1/10" />
          <div className="w-1/6 flex justify-center relative">
            <div className="w-[2px] h-full bg-[#B0752A] rounded relative">
              <div className="absolute -bottom-[24px] transform -translate-y-1/2  w-[3px] h-[3px] bg-[#B0752A] rounded-full" />
              <div className="absolute -bottom-[48px] transform -translate-y-1/2  w-[3px] h-[3px] bg-[#B0752A] rounded-full" />
              <div className="absolute -bottom-[72px] transform -translate-y-1/2  w-[3px] h-[3px] bg-[#B0752A] rounded-full" />
            </div>
          </div>
          <div className="w-1/3" />
        </div>
      </div>
    </>
  );
}
