"use client";

import { useCurrentLocale, useI18n } from "@/locales/client";

import Link from "next/link";
import { Switch } from "@/app/[locale]/switch";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function MainNav(): JSX.Element {
  const pathname = usePathname();
  const locale = useCurrentLocale();
  const t = useI18n();

  const links = [
    { href: "/", label: t("nav.home"), active: pathname === `/${locale}` },
    {
      href: "/portfolio",
      label: t("nav.portfolio"),
      active:
        pathname === `/${locale}/portfolio` || pathname.includes("/portfolio/"),
    },
    {
      href: "/about",
      label: t("nav.about"),
      active: pathname === `/${locale}/about`,
    },
    {
      href: "/contacts",
      label: t("nav.contacts"),
      active: pathname === `/${locale}/contacts`,
    },
  ];

  return (
    <nav className="mx-6 flex flex-col sm:flex-row items-center sm:space-x-4 lg:space-x-6 space-y-4 sm:space-y-0 ml-12 mt-6 sm:ml-6 sm:mt-0">
      {links.map((link) => {
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex items-center text-xl font-bold hover:text-[#B0752A]",
              link.active ? "text-[#6F848F]" : "text-[#415064]"
            )}
          >
            {link.active && (
              <div className="hidden sm:block w-[3px] h-[3px] bg-[#B0752A] rounded-full mr-2" />
            )}
            {link.label}
          </Link>
        );
      })}
      <Switch />
    </nav>
  );
}
