"use client";

import { Link, useRouter } from "@/lib/navigation";
import { useLocale, useTranslations } from "next-intl";

import LocaleSwitcher from "../Common/LocaleSwitcher";
import athena from "next/font/local";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useUrl } from "nextjs-current-url";

const myFont = athena({ src: "../../../public/Athena-Regular.ttf" });

export default function MainNav(): JSX.Element {
  const pathname = usePathname();
  const url = useUrl();
  const locale = useLocale();
  const t = useTranslations();
  const router = useRouter();
  const [currentLanguage, setCurrentLanguage] = useState(locale);

  // console.log(url?.pathname);
  // const changeLocale = (): void => {
  //   const newLanguage = currentLanguage === "bg" ? "en" : "bg";
  //   setCurrentLanguage(newLanguage);
  //   router.replace(`${url?.pathname}`);
  // };

  const links = [
    { href: "/", label: t("nav.home") },
    { href: "/portfolio", label: t("nav.portfolio") },
    { href: "/about", label: t("nav.about") },
    { href: "/contacts", label: t("nav.contacts") },
  ];

  return (
    <nav className="mx-6 flex flex-col sm:flex-row items-center sm:space-x-4 lg:space-x-6 space-y-4 sm:space-y-0 ml-12 mt-6 sm:ml-6 sm:mt-0">
      {links.map((link) => {
        const isActive = link.href === "/" && pathname === link.href;
        // : pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex items-center text-xl font-bold hover:text-[#B0752A]",
              isActive ? "text-[#6F848F]" : "text-[#415064]"
            )}
          >
            {isActive && (
              <div className="hidden sm:block w-[3px] h-[3px] bg-[#B0752A] rounded-full mr-2" />
            )}
            {link.label}
          </Link>
        );
      })}
      <LocaleSwitcher />
      {/* <button
        onClick={changeLocale}
        className={cn(
          "w-[50px] h=[35px] drop-shadow-sm text-xl bg-[#F7F4F1]",
          myFont.className
        )}
      >
        {locale === "bg" ? "EN" : "BG"}
      </button> */}
    </nav>
  );
}
