import Image from "next/image";
import MainButton from "../components/Common/MainButton";
import image1 from "@/public/hero-5.png";
import image2 from "@/public/thank-you.svg";
import image3 from "@/public/dots.svg";

export default function ThankYouPage() {
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
        <Image
          src={image2}
          alt="Thank you image"
          style={{
            width: "434px",
            height: "auto",
          }}
        />
      </div>
      <div>
        <Image
          src={image3}
          alt="Dots"
          style={{
            width: "160px",
            height: "auto",
            marginTop: "64px",
          }}
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold mt-16">
          Your message has been successfully sent. I will get back to you as
          soon as possible. Thank you for reaching out!
        </h2>
      </div>
      <div className="mt-16">
        <MainButton href={"/"} text={"Back to Homepage"} />
      </div>
    </div>
  );
}
