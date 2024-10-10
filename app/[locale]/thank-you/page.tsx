import { getCurrentLocale, getI18n } from "@/locales/server";

import Image from "next/image";
import MainButton from "../../components/Common/MainButton";
import image1 from "@/public/thank-you.svg";
import image2 from "@/public/dots.svg";
import image3 from "@/public/thank-you-2.svg";

export const metadata = {
  title: "Thank You | snezhana-aleksieva.com",
  description: "Thank You",
};

export default async function ThankYouPage(): Promise<JSX.Element> {
  const locale = getCurrentLocale();
  const t = await getI18n();
  return (
    <div className="max-w-7xl mx-auto flex flex-col items-center mb-10">
      <div className="mt-60">
        <Image
          src={locale === "en" ? image1 : image3}
          alt="Thank you image"
          style={{
            width: "434px",
            height: "auto",
          }}
        />
      </div>
      <div>
        <Image
          src={image2}
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
      <div className="my-16">
        <MainButton href={"/"} text={t("thank-you.button")} />
      </div>
    </div>
  );
}
