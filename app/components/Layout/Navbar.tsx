"use client";

import { useEffect, useRef, useState } from "react";

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
import { motion } from "framer-motion";
import { useCurrentLocale } from "@/locales/client";
import { usePathname } from "next/navigation";

export default function Navbar(): JSX.Element {
  const locale = useCurrentLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
    const handleClickOutside = (event: TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (open && "ontouchstart" in window) {
      // Only add listener for touch devices
      document.addEventListener("touchstart", handleClickOutside);
    } else {
      document.removeEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <div
      className={cn(
        " max-w-7xl mx-auto",
        pathname === `/${locale}/thank-you` && "hidden",
        pathname === `/${locale}/form-failed` && "hidden",
        pathname === `/${locale}/imprint` && "hidden"
      )}
    >
      <div
        className={cn(
          " max-w-7xl hidden fixed top-0 left-0 right-0 mx-auto sm:block z-50",
          isScrolled
            ? "transition-all duration-500 bg-[#f9f7f4] border-b border-[#f2eee9] rounded-b-full px-8"
            : "transition-all duration-500"
        )}
      >
        <div className="px-4 sm:px-6 lg:px-0 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 lg:mr-6 gap-x-2">
            <Image
              src={logo}
              alt="Logo"
              priority
              style={{
                width: "171px",
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
                priority
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
          <button onClick={() => setOpen(true)}>
            <Image
              src={image5}
              alt="Menu image"
              style={{
                width: "32px",
                height: "auto",
              }}
            />
          </button>
        </div>
      </div>
      {open && (
        <motion.div
          ref={menuRef}
          className="fixed top-0 right-0 z-50 w-[240px] h-[324px] rounded-bl-full flex flex-col justify-center bg-[#f2eee9]"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <button
            onClick={() => setOpen(false)}
            className="self-end mr-2 -mt-16"
          >
            <Image
              src={image6}
              alt="Close image"
              style={{
                width: "32px",
                height: "auto",
              }}
            />
          </button>
          <div className="-mt-4">
            <MainNav />
          </div>
        </motion.div>
      )}
    </div>
  );
}
