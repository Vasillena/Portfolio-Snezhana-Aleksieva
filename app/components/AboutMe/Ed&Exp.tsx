import { useLocale, useTranslations } from "next-intl";

import Education from "./Education";
import Experience from "./Experience";
import athena from "next/font/local";
import blackSans from "next/font/local";
import { cn } from "@/lib/utils";

const athenaFont = athena({ src: "../../../public/Athena-Regular.ttf" });
const blackSansFont = blackSans({ src: "../../../public/Blacker-Sans.ttf" });

export default function EdExp(): JSX.Element {
  const locale = useLocale();
  const t = useTranslations();
  const myFont = locale === "en" ? athenaFont : blackSansFont;
  return (
    <>
      <div className="ml-72 sm:ml-0">
        <div className="flex justify-between xl:justify-start h-[68px]">
          <div className="w-[150px] sm:w-[300px]" />
          <div className="w-1/6 relative">
            <div className="absolute w-[240px] top-1/2 transform -translate-y-1/2 left-full ml-20">
              <div>
                <h2
                  className={cn(
                    "hidden sm:block text-3xl min-[400px]:text-4xl lg:text-[40px] -ml-10",
                    myFont.className
                  )}
                >
                  {t("about.card-2-title")}
                </h2>
              </div>
            </div>
            <div className="absolute w-[240px] top-1/2 transform -translate-y-1/2 right-full mr-10 sm:mr-10">
              <div>
                <h2
                  className={cn(
                    "text-3xl min-[400px]:text-4xl lg:text-[40px]",
                    myFont.className
                  )}
                >
                  {t("about.card-1-title")}
                </h2>
              </div>
            </div>
          </div>
          <div className="w-[150px] sm:w-[300px]" />
        </div>
        <div className="-mt-12 sm:mt-0 flex justify-between xl:justify-start h-[120px]">
          <div className="w-[150px] sm:w-[300px]" />
          <div className="w-1/6 flex justify-center relative">
            <div className="w-[2px] h-full bg-[#B0752A] rounded relative">
              <div className="absolute w-[40px] h-[40px] rounded-full ring-2 ring-[#B0752A] bg-[#f9f7f4] -left-[18px]" />
            </div>
          </div>
          <div className="w-[150px] sm:w-[300px]" />
        </div>
        <div className="hidden sm:block">
          <Experience
            place={t("about.card-2-text-1")}
            position={t("about.card-2-text-2")}
            period={t("about.card-2-text-3")}
          />
        </div>
        <div>
          <Education
            place={t("about.card-1-text-1")}
            position={t("about.card-1-text-2")}
            period={t("about.card-1-text-3")}
          />
        </div>

        <div className="hidden sm:block">
          <Experience
            place={t("about.card-2-text-4")}
            position={t("about.card-2-text-5")}
            period={t("about.card-2-text-6")}
          />
        </div>
        <div className="mt-20 sm:mt-0">
          <Education
            place={t("about.card-1-text-4")}
            position={t("about.card-1-text-5")}
            period={t("about.card-1-text-6")}
          />
        </div>

        <div className="hidden sm:block">
          <Experience
            place={t("about.card-2-text-7")}
            position={t("about.card-2-text-8")}
            period={t("about.card-2-text-9")}
          />
        </div>
        <div className="mt-20 sm:mt-0">
          <Education
            place={t("about.card-1-text-7")}
            position={t("about.card-1-text-5")}
            period={t("about.card-1-text-6")}
          />
        </div>

        <div className="hidden sm:block">
          <Experience
            place={t("about.card-2-text-10")}
            position={t("about.card-2-text-11")}
            period={t("about.card-2-text-12")}
          />
        </div>

        <div className="flex justify-between xl:justify-start h-[120px]">
          <div className="w-[150px] sm:w-[300px]" />
          <div className="w-1/6 flex justify-center relative">
            <div className="w-[2px] h-full bg-[#B0752A] rounded relative">
              <div className="absolute -bottom-[24px] transform -translate-y-1/2  w-[3px] h-[3px] bg-[#B0752A] rounded-full" />
              <div className="absolute -bottom-[48px] transform -translate-y-1/2  w-[3px] h-[3px] bg-[#B0752A] rounded-full" />
              <div className="absolute -bottom-[72px] transform -translate-y-1/2  w-[3px] h-[3px] bg-[#B0752A] rounded-full" />
            </div>
          </div>
          <div className="w-[150px] sm:w-[300px]" />
        </div>
      </div>

      <div className="sm:hidden mt-32 mr-72 sm:ml-32 md:ml-44">
        <div className="flex justify-between h-[68px]">
          <div className="w-[150px]" />
          <div className="w-1/6 relative">
            <div className="absolute w-[240px] top-1/2 transform -translate-y-1/2 left-full ml-[72px]">
              <div>
                <h2
                  className={cn(
                    "text-3xl min-[400px]:text-4xl lg:text-[40px]",
                    myFont.className
                  )}
                >
                  {t("about.card-2-title")}
                </h2>
              </div>
            </div>
          </div>
          <div className="w-[150px]" />
        </div>
        <div className="-mt-12 sm:mt-0 flex justify-between h-[120px]">
          <div className="w-[150px]" />
          <div className="w-1/6 flex justify-center relative">
            <div className="w-[2px] h-full bg-[#B0752A] rounded relative">
              <div className="absolute w-[40px] h-[40px] rounded-full ring-2 ring-[#B0752A] bg-[#f9f7f4] -left-[18px]" />
            </div>
          </div>
          <div className="w-[150px]" />
        </div>
        <div>
          <Experience
            place={t("about.card-2-text-1")}
            position={t("about.card-2-text-2")}
            period={t("about.card-2-text-3")}
          />
        </div>

        <div className="mt-20 sm:mt-0">
          <Experience
            place={t("about.card-2-text-4")}
            position={t("about.card-2-text-5")}
            period={t("about.card-2-text-6")}
          />
        </div>

        <div className="mt-20 sm:mt-0">
          <Experience
            place={t("about.card-2-text-7")}
            position={t("about.card-2-text-8")}
            period={t("about.card-2-text-9")}
          />
        </div>

        <div className="mt-20 sm:mt-0">
          <Experience
            place={t("about.card-2-text-10")}
            position={t("about.card-2-text-11")}
            period={t("about.card-2-text-12")}
          />
        </div>

        <div className="flex justify-between h-[120px]">
          <div className="w-[150px]" />
          <div className="w-1/6 flex justify-center relative">
            <div className="w-[2px] h-full bg-[#B0752A] rounded relative">
              <div className="absolute -bottom-[24px] transform -translate-y-1/2  w-[3px] h-[3px] bg-[#B0752A] rounded-full" />
              <div className="absolute -bottom-[48px] transform -translate-y-1/2  w-[3px] h-[3px] bg-[#B0752A] rounded-full" />
              <div className="absolute -bottom-[72px] transform -translate-y-1/2  w-[3px] h-[3px] bg-[#B0752A] rounded-full" />
            </div>
          </div>
          <div className="w-[150px]" />
        </div>
      </div>
    </>
  );
}
