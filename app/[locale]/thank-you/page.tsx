import { useLocale, useTranslations } from "next-intl";

import Image from "next/image";
import MainButton from "../../components/Common/MainButton";
import image1 from "@/public/hero-5.png";
import image2 from "@/public/thank-you.svg";
import image3 from "@/public/dots.svg";
import image4 from "@/public/thank-you-2.svg";

export default function ThankYouPage(): JSX.Element {
  const t = useTranslations();
  const locale = useLocale();
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
      <div className="-mt-16">
        <Image
          src={locale === "en" ? image2 : image4}
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
        <h2 className="text-lg sm:text-2xl font-bold mt-16">
          {t("thank-you.text-1")}
        </h2>
      </div>
      <div className="mt-16">
        <MainButton href={"/"} text={t("thank-you.button")} />
      </div>
    </div>
  );
}