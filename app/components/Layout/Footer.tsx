"use client";

import { useCurrentLocale, useI18n } from "@/locales/client";

import FooterForm from "./FooterForm";
import Image from "next/image";
import Link from "next/link";
import RevealDesktop from "../Common/RevealDesktop";
import { cn } from "@/lib/utils";
import image1 from "@/public/dots.svg";
import image10 from "@/public/hero-6.png";
import image2 from "@/public/icon-1.svg";
import image3 from "@/public/icon-2.svg";
import image4 from "@/public/icon-3.svg";
import image5 from "@/public/icon-4.svg";
import image6 from "@/public/cookie.svg";
import { oranienbaum } from "@/lib/fonts";
import { usePathname } from "next/navigation";

export default function Footer(): JSX.Element {
  const locale = useCurrentLocale();
  const t = useI18n();
  const pathname = usePathname();

  return (
    <div
      className={cn(
        pathname === `/${locale}/contacts` && " flex flex-col min-h-screen",
        pathname === `/${locale}/thank-you` && "hidden",
        pathname === `/${locale}/form-failed` && "hidden",
        pathname === `/${locale}/imprint` && "hidden"
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto flex flex-col lg:flex-row justify-evenly py-24",
          pathname === `/${locale}/contacts` &&
            "grid grid-cols-1 xl:grid-cols-3 my-auto py-0 pt-32 xl:pt-44"
        )}
      >
        <div className="justify-self-center">
          <div className="mt-4 lg:mt-5 mb-12">
            <Image
              src={image1}
              alt="Dots"
              className={cn(
                "hidden",
                pathname === `/${locale}/contacts` &&
                  "hidden lg:flex mx-auto xl:mx-0"
              )}
              style={{
                width: "160px",
                height: "auto",
              }}
            />
            <div
              className={cn(
                "w-2/3 mx-auto lg:w-full border-b border-[#B0752A]",
                pathname === `/${locale}/contacts` && "hidden"
              )}
            />
          </div>
          <div
            className={cn(
              "mt-0 md:mt-24 flex flex-col items-center xl:items-start",
              pathname === `/${locale}/contacts` && "md:mt-[78px]"
            )}
          >
            <h2
              className={cn(
                "text-3xl min-[400px]:text-4xl  lg:text-5xl mb-3",
                oranienbaum.className
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
          <div className="mt-12 lg:mt-20 flex flex-col items-center xl:items-start">
            <h2
              className={cn(
                "text-3xl min-[400px]:text-4xl  lg:text-5xl mb-3",
                oranienbaum.className
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
          <RevealDesktop>
            <div className="flex justify-center mt-12 lg:mt-0 ">
              <h2
                className={cn(
                  "text-3xl min-[400px]:text-4xl lg:text-5xl",
                  oranienbaum.className
                )}
              >
                {t("footer.title-1")}
              </h2>
            </div>
          </RevealDesktop>
          <div className="mt-6 flex flex-col items-center ">
            <FooterForm />
          </div>
        </div>
        {/* <div
          className={cn(
            "hidden xl:inline-block justify-self-end mt-20",
            pathname === `/${locale}/contacts` && "xl:hidden",
            locale === "en" ? "lg:mt-[100px]" : "lg:mt-[104px]"
          )}
        >
          <Image
            src={image7}
            alt="Text image"
            style={{
              width: "248px",
              height: "auto",
            }}
          />
        </div> */}
        <div
          className={cn(
            "hidden xl:inline-block w-[320px] h-[670px] justify-self-end relative -top-72",
            pathname !== `/${locale}/contacts` && "xl:hidden"
          )}
        >
          <Image src={image10} alt="Decor image" fill object-fit="contain" />
        </div>
      </div>
      <div
        className={cn(
          "max-w-full ",
          pathname === `/${locale}/contacts` && "mt-auto"
        )}
      >
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
              src={image6}
              alt="Cookie image"
              style={{
                width: "32px",
                height: "auto",
              }}
            />
            <Link href="/cookie-policy">
              <p className="font-bold">Cookie Settings</p>
            </Link>

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
