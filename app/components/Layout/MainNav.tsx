"use client";

import Link from "next/link";
import athena from "next/font/local";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const myFont = athena({ src: "../../../public/Athena-Regular.ttf" });

export default function MainNav(): JSX.Element {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Homepage" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about-me", label: "About Me" },
    { href: "/contacts", label: "Contacts" },
  ];

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "flex items-center text-xl font-bold",
            pathname === link.href ? "text-[#6F848F]" : "text-[#415064]"
          )}
        >
          {pathname === link.href && (
            <div className="w-[3px] h-[3px] bg-[#B0752A] rounded-full mr-2" />
          )}
          {link.label}
        </Link>
      ))}
      <button
        className={cn(
          "w-[50px] h=[35px] drop-shadow-sm text-xl bg-[#F7F4F1]",
          myFont.className
        )}
      >
        EN
      </button>
    </nav>
  );
}
