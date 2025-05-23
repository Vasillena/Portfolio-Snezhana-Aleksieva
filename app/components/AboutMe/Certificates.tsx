import Image from "next/image";
import Link from "next/link";
import RevealDesktop from "../Common/RevealDesktop";
import { cn } from "@/lib/utils";
import { getI18n } from "@/locales/server";
import image1 from "@/public/certificate-1.png";
import image10 from "@/public/certificate-10.png";
import image2 from "@/public/certificate-2.png";
import image3 from "@/public/certificate-3.png";
import image4 from "@/public/certificate-4.png";
import image5 from "@/public/certificate-5.png";
import image6 from "@/public/certificate-6.png";
import image7 from "@/public/certificate-7.png";
import image8 from "@/public/certificate-8.png";
import image9 from "@/public/certificate-9.png";
import { oranienbaum } from "@/lib/fonts";

export default async function Certificates(): Promise<JSX.Element> {
  const t = await getI18n();

  return (
    <div className="max-w-full mt-24 bg-[#F2EEE9]">
      <div className=" max-w-7xl mx-auto py-11">
        <div>
          <h2
            className={cn(
              "text-3xl min-[400px]:text-4xl lg:text-[40px] text-center",
              oranienbaum.className
            )}
          >
            {t("about.title-2")}
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-y-6 gap-20 mt-12">
          <RevealDesktop>
            <div className="justify-self-center">
              <Link
                href="https://creative.softuni.bg/certificates/details/47406/e9509b3a"
                target="_blank"
                className="transition-transform duration-300"
              >
                <Image
                  src={image1}
                  alt="Certificate image"
                  className="hover:scale-125 transition-transform duration-300"
                  style={{
                    width: "200px",
                    height: "auto",
                  }}
                />
              </Link>
            </div>
          </RevealDesktop>
          <RevealDesktop>
            <div className="justify-self-center">
              <Link
                href="https://creative.softuni.bg/certificates/details/49413/faf14f39"
                target="_blank"
                className="transition-transform duration-300"
              >
                <Image
                  src={image2}
                  alt="Certificate image"
                  className="hover:scale-125 transition-transform duration-300"
                  style={{
                    width: "200px",
                    height: "auto",
                  }}
                />
              </Link>
            </div>
          </RevealDesktop>
          <RevealDesktop>
            <div className=" justify-self-center">
              <Link
                href="https://creative.softuni.bg/certificates/details/50265/837eef76"
                target="_blank"
                className="transition-transform duration-300"
              >
                <Image
                  src={image3}
                  alt="Certificate image"
                  className="hover:scale-125 transition-transform duration-300"
                  style={{
                    width: "200px",
                    height: "auto",
                  }}
                />
              </Link>
            </div>
          </RevealDesktop>
          <RevealDesktop>
            <div className=" justify-self-center">
              <Link
                href="https://creative.softuni.bg/certificates/details/51019/178a30fc"
                target="_blank"
                className="transition-transform duration-300"
              >
                <Image
                  src={image5}
                  alt="Certificate image"
                  className="hover:scale-125 transition-transform duration-300"
                  style={{
                    width: "200px",
                    height: "auto",
                  }}
                />
              </Link>
            </div>
          </RevealDesktop>
          <RevealDesktop>
            <div className="justify-self-center">
              <Link
                href="https://creative.softuni.bg/certificates/details/52147/15ce8812"
                target="_blank"
                className="transition-transform duration-300"
              >
                <Image
                  src={image6}
                  alt="Certificate image"
                  className="hover:scale-125 transition-transform duration-300"
                  style={{
                    width: "200px",
                    height: "auto",
                  }}
                />
              </Link>
            </div>
          </RevealDesktop>
          <RevealDesktop>
            <div className="justify-self-center">
              <Link
                href="https://creative.softuni.bg/certificates/details/53225/000387a1"
                target="_blank"
                className="transition-transform duration-300"
              >
                <Image
                  src={image7}
                  alt="Certificate image"
                  className="hover:scale-125 transition-transform duration-300"
                  style={{
                    width: "200px",
                    height: "auto",
                  }}
                />
              </Link>
            </div>
          </RevealDesktop>
          <RevealDesktop>
            <div className="justify-self-center">
              <Link
                href="https://creative.softuni.bg/certificates/details/53642/1238fab4"
                target="_blank"
                className="transition-transform duration-300"
              >
                <Image
                  src={image8}
                  alt="Certificate image"
                  className="hover:scale-125 transition-transform duration-300"
                  style={{
                    width: "200px",
                    height: "auto",
                  }}
                />
              </Link>
            </div>
          </RevealDesktop>
          <RevealDesktop>
            <div className="justify-self-center">
              <Link
                href="https://creative.softuni.bg/certificates/details/54592/4bb23204"
                target="_blank"
                className="transition-transform duration-300"
              >
                <Image
                  src={image9}
                  alt="Certificate image"
                  className="hover:scale-125 transition-transform duration-300"
                  style={{
                    width: "200px",
                    height: "auto",
                  }}
                />
              </Link>
            </div>
          </RevealDesktop>
          <RevealDesktop>
            <div className="justify-self-center">
              <Link
                href="https://creative.softuni.bg/certificates/details/56119/07d04150"
                target="_blank"
                className="transition-transform duration-300"
              >
                <Image
                  src={image10}
                  alt="Certificate image"
                  className="hover:scale-125 transition-transform duration-300"
                  style={{
                    width: "200px",
                    height: "auto",
                  }}
                />
              </Link>
            </div>
          </RevealDesktop>
          <RevealDesktop>
            <div className="justify-self-center">
              <Link
                href="https://figmaistor.bg/certificate/befbd175/"
                target="_blank"
                className="transition-transform duration-300"
              >
                <Image
                  src={image4}
                  alt="Certificate image"
                  className="hover:scale-125 transition-transform duration-300"
                  style={{
                    width: "200px",
                    height: "auto",
                  }}
                />
              </Link>
            </div>
          </RevealDesktop>
        </div>
      </div>
    </div>
  );
}
