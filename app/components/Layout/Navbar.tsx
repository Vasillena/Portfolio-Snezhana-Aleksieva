"use client";

import Image from "next/image";
import Link from "next/link";
import MainNav from "./MainNav";
import { cn } from "@/lib/utils";
import logo from "@/public/logo.svg";
import { usePathname } from "next/navigation";

export default function Navbar(): JSX.Element {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "hidden md:block max-w-7xl mx-auto",
        pathname === "/thank-you" && "md:hidden"
      )}
    >
      <div>
        <div className=" px-4 sm:px-6 lg:px-8 flex h-16 items-center">
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
    </div>
  );
}
