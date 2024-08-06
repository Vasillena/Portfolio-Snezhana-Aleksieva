import Image from "next/image";
import Link from "next/link";
import athena from "next/font/local";
import { cn } from "@/lib/utils";
import image1 from "@/public/certificate-1.png";
import image2 from "@/public/certificate-2.png";
import image3 from "@/public/certificate-3.png";

const myFont = athena({ src: "../../../public/Athena-Regular.ttf" });

export default function Certificates(): JSX.Element {
  return (
    <div className="max-w-full mt-24 bg-[#F2EEE9]">
      <div className=" max-w-7xl mx-auto py-11">
        <div>
          <h2
            className={cn(
              "text-3xl min-[400px]:text-4xl sm:text-5xl lg:text-[40px] text-center",
              myFont.className
            )}
          >
            Certificates
          </h2>
        </div>
        <div className="flex flex-wrap justify-center  gap-y-6 gap-1 mt-12">
          <div className="justify-self-center">
            <Link href="https://creative.softuni.bg/certificates/details/47406/e9509b3a">
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
            <Link href="https://creative.softuni.bg/certificates/details/49413/faf14f39">
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
          <div className=" justify-self-center">
            <Link href="https://creative.softuni.bg/certificates/details/50265/837eef76">
              <Image
                src={image3}
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
