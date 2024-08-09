"use client";

import { useLocale, useTranslations } from "next-intl";

import FooterForm from "./FooterForm";
import Image from "next/image";
import Link from "next/link";
import athena from "next/font/local";
import blackSans from "next/font/local";
import { cn } from "@/lib/utils";
import image1 from "@/public/dots.svg";
import image2 from "@/public/icon-1.svg";
import image3 from "@/public/icon-2.svg";
import image4 from "@/public/icon-3.svg";
import image5 from "@/public/icon-4.svg";
import image6 from "@/public/connect.svg";
import image7 from "@/public/footer.svg";
import image8 from "@/public/cookie.svg";
import image9 from "@/public/connect-2.svg";
import { usePathname } from "next/navigation";

const athenaFont = athena({ src: "../../../public/Athena-Regular.ttf" });
const blackSansFont = blackSans({ src: "../../../public/Blacker-Sans.ttf" });

const knownPaths = [
  "/",
  "/about",
  "/contacts",
  "/portfolio",
  "/portfolio/graphic-design",
  "/portfolio/ui-ux-design",
  "/portfolio/illustrations-and-digital-art",
  "/privacy-policy",
];

export default function Footer(): JSX.Element {
  const locale = useLocale();
  const t = useTranslations();
  const myFont = locale === "en" ? athenaFont : blackSansFont;
  const pathname = usePathname();
  return (
    <div
      className={cn(
        pathname === "/contacts" && "flex flex-col min-h-[calc(100vh-64px)]",
        pathname === "/thank-you" && !knownPaths.includes(pathname) && "hidden"
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 py-24",
          pathname === "/contacts" && "my-auto"
        )}
      >
        <div>
          <div
            className={cn(
              "mt-20 lg:mt-5 mb-12 flex justify-center xl:justify-start",
              pathname === "/contacts" && "hidden lg:block"
            )}
          >
            <Image
              src={image1}
              alt="Dots"
              style={{
                width: "160px",
                height: "auto",
              }}
            />
          </div>
          <div className="mt-0 md:mt-16 flex flex-col items-center xl:items-start">
            <h2
              className={cn(
                "text-3xl min-[400px]:text-4xl  lg:text-[40px] mb-3",
                myFont.className
              )}
            >
              {t("footer.title-2")}
            </h2>
            <p className="text-lg sm:text-xl">design.by.snezhana@gmail.com</p>
            <p>
              <span className="text-lg sm:text-xl text-[#B0752A] font-bold">
                Phone{" "}
              </span>
              | +359 882 94 95 98
            </p>
          </div>
          <div className="mt-12 lg:mt-48 flex flex-col items-center xl:items-start">
            <h2
              className={cn(
                "text-3xl min-[400px]:text-4xl  lg:text-[40px] mb-3",
                myFont.className
              )}
            >
              {t("footer.title-3")}
            </h2>
            <div className="flex">
              <div>
                <p className="text-lg sm:text-xl text-[#B0752A] pr-2 font-bold">
                  LinkedIn
                </p>
                <p className="text-lg sm:text-xl text-[#B0752A] pr-2 font-bold">
                  Behance
                </p>
                <p className="text-lg sm:text-xl text-[#B0752A] pr-2 font-bold">
                  Instagram
                </p>
              </div>
              <div>
                <p className="text-lg sm:text-xl">| @snezhana-aleksieva</p>
                <p className="text-lg sm:text-xl">| @snezhana-aleksieva</p>
                <p className="text-lg sm:text-xl">| @design.by.snezhana</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center mt-12 lg:mt-0 ">
            <h2
              className={cn(
                "text-3xl min-[400px]:text-4xl lg:text-[40px]",
                myFont.className
              )}
            >
              {t("footer.title-1")}
            </h2>
            <Image
              src={locale === "en" ? image6 : image9}
              alt="Text image"
              className={locale == "en" ? "mt-[22px] sm:mt-[30px]" : "mt-[0px]"}
              style={{
                width: locale == "en" ? "111px" : "104px",
                height: "auto",
                alignSelf: "flex-end",
                // marginTop: "30px",
                marginLeft: "-20px",
                zIndex: 1,
              }}
            />
          </div>
          <div className="mt-6 flex flex-col items-center ">
            <FooterForm />
          </div>
        </div>
        <div className="hidden xl:inline-block justify-self-end mt-20 lg:mt-5">
          <Image
            src={image7}
            alt="Text image"
            style={{
              // width: "263px",
              width: "286px",
              height: "auto",
            }}
          />
        </div>
      </div>
      <div className={cn("max-w-full ", pathname === "/contacts" && "mt-auto")}>
        <div className="flex justify-center items-center">
          <div className="max-w-[420px] w-3/12 h-[1px] bg-[#B0752A]" />
          <div className="flex gap-10 mx-20">
            <Link href="mailto: design.by.snezhana@gmail.com" target="_blank">
              <Image
                src={image2}
                alt="Icon image"
                style={{
                  minWidth: "42px",
                  height: "auto",
                }}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/snezhana-aleksieva/"
              target="_blank"
            >
              <Image
                src={image3}
                alt="Icon image"
                style={{
                  minWidth: "42px",
                  height: "auto",
                }}
              />
            </Link>
            <Link
              href="https://www.behance.net/snezhana-aleksieva"
              target="_blank"
            >
              <Image
                src={image4}
                alt="Icon image"
                style={{
                  minWidth: "42px",
                  height: "auto",
                }}
              />
            </Link>
            <Link
              href="https://www.instagram.com/design.by.snezhana/"
              target="_blank"
            >
              <Image
                src={image5}
                alt="Icon image"
                style={{
                  minWidth: "42px",
                  height: "auto",
                }}
              />
            </Link>
          </div>
          <div className="max-w-[420px] w-3/12 h-[1px] bg-[#B0752A]" />
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 py-6 items-center">
          <div className="flex justify-center lg:justify-start items-center gap-1 lg:gap-5">
            <Image
              src={image8}
              alt="Cookie image"
              style={{
                width: "32px",
                height: "auto",
              }}
            />
            <p className="font-bold">Cookie Settings</p>
            <p className="font-bold">|</p>
            <Link href="/privacy-policy">
              <p className="font-bold">Privacy Policy</p>
            </Link>
            <p className="font-bold">|</p>
            <Link href="/imprint">
              <p className="font-bold">Imprint</p>
            </Link>
          </div>
          <div className="text-center">
            <p>
              This site is designed by Me & built by{" "}
              <span>
                <Link
                  href="https://github.com/Vasillena"
                  target="_blank"
                  className="underline hover:text-[#B0752A]"
                >
                  Vasilena Yoneva
                </Link>
              </span>
              .
            </p>
            <p>
              Mockups, Images & Icons by{" "}
              <span>
                <Link
                  href="https://www.freepik.com/"
                  target="_blank"
                  className="underline hover:text-[#B0752A]"
                >
                  Freepik.com
                </Link>
              </span>{" "}
            </p>
          </div>
          <div className="justify-self-center lg:justify-self-end text-center">
            <p>Copyright © 2024 - All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}
