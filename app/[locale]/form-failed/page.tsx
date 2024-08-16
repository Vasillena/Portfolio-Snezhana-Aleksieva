import Image from "next/image";
import MainButton from "../../components/Common/MainButton";
import { getI18n } from "@/locales/server";
import image1 from "@/public/hero-5.png";
import image2 from "@/public/dots.svg";

export default async function FormFailedPage(): Promise<JSX.Element> {
  const t = await getI18n();
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
          {t("form-failed.text-1")}
        </h2>
      </div>
      <div className="my-16">
        <MainButton href={"/"} text={t("thank-you.button")} />
      </div>
    </div>
  );
}
