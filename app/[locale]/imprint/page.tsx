import Image from "next/image";
import MainButton from "../../components/Common/MainButton";
import blackSans from "next/font/local";
import { cn } from "@/lib/utils";
import image1 from "@/public/hero-5.png";
import image2 from "@/public/dots.svg";

const blackSansFont = blackSans({ src: "../../../public/Blacker-Sans.ttf" });

export const metadata = {
  title: "Imprint | snezhana-aleksieva.com",
  description: "Imprint",
};

export default function ImprintPage(): JSX.Element {
  const myFont = blackSansFont;
  return (
    <div className="max-w-7xl mx-auto flex flex-col items-center mb-10">
      <div className="self-end relative -top-32">
        <Image
          src={image1}
          alt="Decor image"
          style={{
            width: "374px",
            height: "auto",
          }}
        />
      </div>
      <div>
        <h1
          className={cn(
            "text-3xl min-[400px]:text-4xl sm:text-6xl -mt-24",
            myFont.className
          )}
        >
          Imprint
        </h1>
      </div>
      <div className="mb-20">
        <Image
          src={image2}
          alt="Dots"
          style={{
            width: "160px",
            height: "auto",
            marginTop: "14px",
          }}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
        <div>
          <p className={cn("text-xl min-[400px]:text-2xl", myFont.className)}>
            Owner:
          </p>
          <p className="text-lg min-[400px]:text-xl">
            <span className="font-bold">Name: </span>Snezhana Aleksieva
          </p>
          <p className="text-lg min-[400px]:text-xl">
            <span className="font-bold">Address: </span>1 Sotir Atanasov Str,
            Blagoevgrad, Bulgaria
          </p>
          <p className="text-lg min-[400px]:text-xl">
            <span className="font-bold">Phone number: </span>+359/882 949598
          </p>
          <p className="text-lg min-[400px]:text-xl">
            <span className="font-bold">E-mail: </span>
            design.by.snezhana@gmail.com
          </p>
          <p className="text-lg min-[400px]:text-xl">
            <span className="font-bold">Website: </span>
            www.snezhana-aleksieva.com
          </p>
        </div>
        <div>
          <p className={cn("text-xl min-[400px]:text-2xl", myFont.className)}>
            Web hosting provider:
          </p>
          <p className="text-lg min-[400px]:text-xl">
            <span className="font-bold">Service provider name: </span>
            SuperHosting.BG Ltd
          </p>
          <p className="text-lg min-[400px]:text-xl">
            <span className="font-bold">Service provider address: </span>36 G.M.
            Dimitrov Blvd., Sofia, Bulgaria
          </p>
          <p className="text-lg min-[400px]:text-xl">
            <span className="font-bold">Phone number: </span>+359 /2 81 08 990
          </p>
          <p className="text-lg min-[400px]:text-xl">
            <span className="font-bold">E-mail: </span>sales@superhosting.bg
          </p>
          <p className="text-lg min-[400px]:text-xl">
            <span className="font-bold">Website: </span>www.superhosting.bg
          </p>
        </div>
      </div>
      <div className="my-16">
        <MainButton href={"/"} text={"Back to Homepage"} />
      </div>
    </div>
  );
}
