"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import MainNav from "./MainNav";
import { cn } from "@/lib/utils";
import image1 from "@/public/icon-1.svg";
import image2 from "@/public/icon-2.svg";
import image3 from "@/public/icon-3.svg";
import image4 from "@/public/icon-4.svg";
import image5 from "@/public/menu.svg";
import image6 from "@/public/close.svg";
import logo from "@/public/logo.svg";
import { usePathname } from "next/navigation";

const knownPaths = [
  "/bg",
  "/bg/about",
  "/bg/contacts",
  "/bg/portfolio",
  "/bg/portfolio/graphic-design",
  "/bg/portfolio/ui-ux-design",
  "/bg/portfolio/illustrations-and-digital-art",
  "/bg/thank-you",
  "/bg/privacy-policy",
  "/en",
  "/en/about",
  "/en/contacts",
  "/en/portfolio",
  "/en/portfolio/graphic-design",
  "/en/portfolio/ui-ux-design",
  "/en/portfolio/illustrations-and-digital-art",
  "/en/thank-you",
  "/en/privacy-policy",
];

export default function Navbar(): JSX.Element {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <div
      className={cn(
        " max-w-7xl mx-auto",
        pathname === "/thank-you" ||
          (!knownPaths.includes(pathname) && "hidden")
      )}
    >
      <div
        className={cn(
          " max-w-7xl hidden fixed top-0 left-0 right-0 mx-auto sm:block z-50",
          isScrolled
            ? "transition-all duration-500 bg-[#f9f7f4] border-b border-[#f2eee9] rounded-b-full"
            : "transition-all duration-500"
        )}
      >
        <div className="px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <Image
              src={logo}
              alt="Logo"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Link>
          <MainNav />
        </div>
      </div>
      <div
        className={cn(
          " max-w-7xl block fixed top-0 left-0 right-0 mx-auto sm:hidden z-50",
          isScrolled
            ? "transition-all duration-500 bg-[#f9f7f4] border-b border-[#f2eee9] rounded-b-2xl"
            : "transition-all duration-500"
        )}
      >
        <div className="w-full px-2 flex h-16 justify-between items-center">
          <div>
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                style={{
                  width: "120px",
                  height: "auto",
                }}
              />
            </Link>
          </div>
          <div className="flex gap-2">
            <Link href="mailto: design.by.snezhana@gmail.com" target="_blank">
              <Image
                src={image1}
                alt="Icon image"
                style={{
                  width: "32px",
                  height: "auto",
                }}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/snezhana-aleksieva/"
              target="_blank"
            >
              <Image
                src={image2}
                alt="Icon image"
                style={{
                  width: "32px",
                  height: "auto",
                }}
              />
            </Link>
            <Link
              href="https://www.behance.net/snezhana-aleksieva"
              target="_blank"
            >
              <Image
                src={image3}
                alt="Icon image"
                style={{
                  width: "32px",
                  height: "auto",
                }}
              />
            </Link>
            <Link
              href="https://www.instagram.com/design.by.snezhana/"
              target="_blank"
            >
              <Image
                src={image4}
                alt="Icon image"
                style={{
                  width: "32px",
                  height: "auto",
                }}
              />
            </Link>
          </div>
          <button onClick={() => setOpen((prev) => !prev)}>
            <Image
              src={open ? image6 : image5}
              alt="Menu image"
              style={{
                width: "32px",
                height: "auto",
              }}
            />
          </button>

          {/* <MainNav /> */}
        </div>
      </div>
      {open && (
        <div className="sm:hidden w-[240px] h-[324px] bg-[#f2eee9] fixed top-[64px] right-0 z-50 rounded-bl-full flex justify-center">
          <MainNav />
        </div>
      )}
    </div>
  );
}
