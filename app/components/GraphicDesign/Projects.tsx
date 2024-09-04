import ProjectsCard from "../Common/ProjectsCard";
import { getI18n } from "@/locales/server";
import image1 from "@/public/gd-1.png";
import image10 from "@/public/gd-10.png";
import image11 from "@/public/gd-11.png";
import image12 from "@/public/gd-12.png";
import image13 from "@/public/gd-13.png";
import image14 from "@/public/gd-14.png";
import image15 from "@/public/gd-15.png";
import image16 from "@/public/gd-25.png";
import image17 from "@/public/gd-26.png";
import image18 from "@/public/gd-27.png";
import image19 from "@/public/gd-28.png";
import image2 from "@/public/gd-2.png";
import image20 from "@/public/gd-29.png";
import image21 from "@/public/gd-30.png";
import image22 from "@/public/gd-31.png";
import image23 from "@/public/gd-32.png";
import image24 from "@/public/gd-33.png";
import image25 from "@/public/gd-34.png";
import image26 from "@/public/gd-35.png";
import image27 from "@/public/gd-36.png";
import image28 from "@/public/gd-40.png";
import image29 from "@/public/gd-41.png";
import image3 from "@/public/gd-3.png";
import image30 from "@/public/gd-42.png";
import image31 from "@/public/gd-43.png";
import image32 from "@/public/gd-44.png";
import image33 from "@/public/gd-45.png";
import image4 from "@/public/gd-4.png";
import image5 from "@/public/gd-5.png";
import image6 from "@/public/gd-6.png";
import image7 from "@/public/gd-7.png";
import image8 from "@/public/gd-8.png";
import image9 from "@/public/gd-9.png";

export default async function Projects(): Promise<JSX.Element> {
  const t = await getI18n();
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <ProjectsCard
        title={t("graphic-design.card-10")}
        text={t("graphic-design.card-10-text")}
        href={
          "https://www.behance.net/gallery/206914957/Logo-Design-for-Front-End-Developer"
        }
        image1={image28}
        image2={image29}
        image3={image30}
      />
      <ProjectsCard
        title={t("graphic-design.card-7")}
        text={t("graphic-design.card-7-text")}
        href={
          "https://www.behance.net/gallery/204968805/New-Moon-Book-Cover-Design"
        }
        image1={image19}
        image2={image20}
        image3={image21}
      />
      <ProjectsCard
        title={t("graphic-design.card-9")}
        text={t("graphic-design.card-9-text")}
        href={
          "https://www.behance.net/gallery/205123379/Music-Cover-part-of-my-Photoshop-homework"
        }
        image1={image25}
        image2={image26}
        image3={image27}
      />
      <ProjectsCard
        title={t("graphic-design.card-11")}
        text={t("graphic-design.card-11-text")}
        href={
          "https://www.behance.net/gallery/206782931/Redesign-Personal-Logo"
        }
        image1={image31}
        image2={image32}
        image3={image33}
      />
      <ProjectsCard
        title={t("graphic-design.card-6")}
        text={t("graphic-design.card-6-text")}
        href={
          "https://www.behance.net/gallery/205118819/Aurora-Hotel-Restaurant-Logo-Design"
        }
        image1={image16}
        image2={image17}
        image3={image18}
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
        title={t("graphic-design.card-8")}
        text={t("graphic-design.card-8-text")}
        href={
          "https://www.behance.net/gallery/204968409/Fantasy-Book-Cover-Design"
        }
        image1={image22}
        image2={image23}
        image3={image24}
      />
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
