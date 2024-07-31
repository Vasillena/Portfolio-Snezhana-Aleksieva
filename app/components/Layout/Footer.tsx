import FooterForm from "./FooterForm";
import Image from "next/image";
import Link from "next/link";
import athena from "next/font/local";
import { cn } from "@/lib/utils";
import image1 from "@/public/dots.svg";
import image2 from "@/public/icon-1.svg";
import image3 from "@/public/icon-2.svg";
import image4 from "@/public/icon-3.svg";
import image5 from "@/public/icon-4.svg";
import image6 from "@/public/connect.svg";
import image7 from "@/public/footer.png";
import image8 from "@/public/cookie.svg";

const myFont = athena({ src: "../../../public/Athena-Regular.ttf" });

export default function Footer(): JSX.Element {
  return (
    <>
      <div className="max-w-7xl mx-auto grid grid-cols-3 py-24">
        <div>
          <div className="mt-5 mb-16">
            <Image
              src={image1}
              alt="Dots"
              style={{
                width: "160px",
                height: "auto",
              }}
            />
          </div>
          <div>
            <h2 className={cn("text-[40px]", myFont.className)}>Contacts</h2>
            <p className="text-xl">design.by.snezhana@gmail.com</p>
            <p>
              <span className="text-[#B0752A]">Phone</span> | +359 882 94 95 98
            </p>
          </div>
          <div className="mt-32">
            <h2 className={cn("text-[40px]", myFont.className)}>
              Follow me on
            </h2>
            <p className="text-xl">
              <span className="text-[#B0752A] pr-4">LinkedIn</span> |
              @snezhana-aleksieva
            </p>
            <p className="text-xl">
              <span className="text-[#B0752A] pr-3">Behance</span> |
              @snezhana-aleksieva
            </p>
            <p className="text-xl">
              {" "}
              <span className="text-[#B0752A]">Instagram</span> |
              @design.by.snezhana
            </p>
          </div>
          <div className="flex mt-24 gap-10">
            <Link href="mailto: design.by.snezhana@gmail.com" target="_blank">
              <Image
                src={image2}
                alt="Icon image"
                style={{
                  width: "42px",
                  height: "auto",
                }}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/snezhana-aleksieva/"
              target="_blank"
            >
              <Image
                src={image3}
                alt="Icon image"
                style={{
                  width: "42px",
                  height: "auto",
                }}
              />
            </Link>
            <Link
              href="https://www.behance.net/snezhana-aleksieva"
              target="_blank"
            >
              <Image
                src={image4}
                alt="Icon image"
                style={{
                  width: "42px",
                  height: "auto",
                }}
              />
            </Link>
            <Link
              href="https://www.instagram.com/design.by.snezhana/"
              target="_blank"
            >
              <Image
                src={image5}
                alt="Icon image"
                style={{
                  width: "42px",
                  height: "auto",
                }}
              />
            </Link>
          </div>
        </div>
        <div className="justify-self-center">
          <div className="flex justify-center">
            <h2 className={cn("text-5xl", myFont.className)}>Let&rsquo;s</h2>
            <Image
              src={image6}
              alt="Text image"
              style={{
                width: "111px",
                height: "auto",
                alignSelf: "flex-end",
                marginTop: "30px",
                marginLeft: "-20px",
                zIndex: 1,
              }}
            />
          </div>
          <div className="mt-10">
            <FooterForm />
          </div>
        </div>
        <div className="justify-self-end">
          <Image
            src={image7}
            alt="Laptop image"
            style={{
              width: "374px",
              height: "auto",
            }}
          />
        </div>
      </div>
      <div className="max-w-full  bg-[#F2EEE9] ">
        <div className="max-w-7xl mx-auto grid grid-cols-2 py-6">
          <div className="flex items-center gap-8">
            <Image
              src={image8}
              alt="Cookie image"
              style={{
                width: "32px",
                height: "auto",
              }}
            />
            <p>Cookie Settings</p>
            <p>Privacy Policy</p>
            <p>Imprint</p>
          </div>
          <div className="justify-self-end text-center">
            <p>Copyright © 2024 - All rights reserved</p>
            <p className="mt-4">
              This site is designed by Me & built by{" "}
              <span>
                <Link
                  href="https://github.com/Vasillena"
                  target="_blank"
                  className="text-[#B0752A] hover:underline"
                >
                  Vasilena Yoneva
                </Link>
              </span>
              .
            </p>
            <p>
              Mockups, Images & Icons by{" "}
              <span>
                <Link
                  href="https://www.freepik.com/"
                  target="_blank"
                  className="text-[#B0752A] hover:underline"
                >
                  Freepik.com
                </Link>
              </span>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
