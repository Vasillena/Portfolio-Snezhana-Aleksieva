import ProjectsCard from "../Common/ProjectsCard";
import image1 from "@/public/gd-1.png";
import image10 from "@/public/gd-10.png";
import image11 from "@/public/gd-11.png";
import image12 from "@/public/gd-12.png";
import image13 from "@/public/gd-13.png";
import image14 from "@/public/gd-14.png";
import image15 from "@/public/gd-15.png";
import image2 from "@/public/gd-2.png";
import image3 from "@/public/gd-3.png";
import image4 from "@/public/gd-4.png";
import image5 from "@/public/gd-5.png";
import image6 from "@/public/gd-6.png";
import image7 from "@/public/gd-7.png";
import image8 from "@/public/gd-8.png";
import image9 from "@/public/gd-9.png";
import { useTranslations } from "next-intl";

export default function Projects(): JSX.Element {
  const t = useTranslations();
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <ProjectsCard
        title={t("graphic-design.card-1")}
        text={t("graphic-design.card-1-text-1")}
        href={
          "https://www.behance.net/gallery/201366607/Sn-Aleksieva-My-Personal-Branding"
        }
        image1={image1}
        image2={image2}
        image3={image3}
      />
      <ProjectsCard
        title={t("graphic-design.card-2")}
        text={t("graphic-design.card-2-text")}
        href={
          "https://www.behance.net/gallery/197397879/DESIRE-Handmade-Logo-Branding"
        }
        image1={image4}
        image2={image5}
        image3={image6}
      />
      <ProjectsCard
        title={t("graphic-design.card-3")}
        text={t("graphic-design.card-3-text")}
        href={
          "https://www.behance.net/gallery/198600533/Stanislava-Vladimirova-photography-Logo-Branding"
        }
        image1={image7}
        image2={image8}
        image3={image9}
      />
      <ProjectsCard
        title={t("graphic-design.card-4")}
        text={t("graphic-design.card-4-text")}
        href={
          "https://www.behance.net/gallery/201777479/Brew-Sphere-Coffee-Shop-Logo-Branding"
        }
        image1={image10}
        image2={image11}
        image3={image12}
      />
      <ProjectsCard
        title={t("graphic-design.card-5")}
        text={t("graphic-design.card-5-text")}
        href={
          "https://www.behance.net/gallery/197320433/M-D-Nails-and-Hair-Logo-Branding"
        }
        image1={image13}
        image2={image14}
        image3={image15}
      />
    </div>
  );
}
