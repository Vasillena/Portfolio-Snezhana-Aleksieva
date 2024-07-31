import Image from "next/image";
import Link from "next/link";
import MainNav from "./MainNav";
import decor from "@/public/hero-2.svg";
import logo from "@/public/logo.svg";

export default function Navbar(): JSX.Element {
  return (
    <div className="max-w-7xl mx-auto">
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
