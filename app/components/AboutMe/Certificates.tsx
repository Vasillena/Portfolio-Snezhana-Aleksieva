import Image from "next/image";
import Link from "next/link";
import athena from "next/font/local";
import { cn } from "@/lib/utils";
import image1 from "@/public/certificate-1.png";
import image2 from "@/public/certificate-2.png";

const myFont = athena({ src: "../../../public/Athena-Regular.ttf" });

export default function Certificates(): JSX.Element {
  return (
    <div className="max-w-full mt-24 bg-[#F2EEE9]">
      <div className=" max-w-7xl mx-auto py-11">
        <div>
          <h2
            className={cn(
              "text-[40px] text-center xl:text-left",
              myFont.className
            )}
          >
            Certificates
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-y-6 gap-1 mt-12 justify-center">
          <div className="justify-self-center">
            <Link href="/">
              <Image
                src={image1}
                alt="Certificate image"
                style={{
                  minWidth: "200px",
                  height: "auto",
                }}
              />
            </Link>
          </div>
          <div className="justify-self-center">
            <Link href="/">
              <Image
                src={image2}
                alt="Certificate image"
                style={{
                  minWidth: "200px",
                  height: "auto",
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
