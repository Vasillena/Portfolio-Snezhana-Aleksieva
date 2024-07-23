"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function MainNav() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Homepage" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About Me" },
    { href: "/contacts", label: "Contacts" },
  ];

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-xl font-medium",
            pathname === link.href ? "font-bold" : "font-normal"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
