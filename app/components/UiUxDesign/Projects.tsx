import ProjectsCard from "../Common/ProjectsCard";
import { getI18n } from "@/locales/server";
import image1 from "@/public/gd-16.png";
import image10 from "@/public/gd-49.png";
import image11 from "@/public/gd-50.png";
import image12 from "@/public/gd-51.png";
import image13 from "@/public/gd-52.png";
import image14 from "@/public/gd-53.png";
import image15 from "@/public/gd-54.png";
import image2 from "@/public/gd-17.png";
import image3 from "@/public/gd-18.png";
import image4 from "@/public/gd-37.png";
import image5 from "@/public/gd-38.png";
import image6 from "@/public/gd-39.png";
import image7 from "@/public/gd-46.png";
import image8 from "@/public/gd-47.png";
import image9 from "@/public/gd-48.png";

export default async function Projects(): Promise<JSX.Element> {
  const t = await getI18n();
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <ProjectsCard
        title={t("uiux-design.card-5")}
        text={t("uiux-design.card-5-text")}
        href={
          "https://www.behance.net/gallery/210440095/Bar-The-Post-Landing-Page-Design"
        }
        image1={image13}
        image2={image14}
        image3={image15}
      />
      <ProjectsCard
        title={t("uiux-design.card-3")}
        text={t("uiux-design.card-3-text")}
        href={"https://www.behance.net/gallery/207166583/Q-bar-Landing-Page"}
        image1={image7}
        image2={image8}
        image3={image9}
      />
      <ProjectsCard
        title={t("uiux-design.card-4")}
        text={t("uiux-design.card-4-text")}
        href={
          "https://www.behance.net/gallery/207934983/Design-for-Personal-Blog-From-IVF-to-Baby"
        }
        image1={image10}
        image2={image11}
        image3={image12}
      />
      <ProjectsCard
        title={t("uiux-design.card-1")}
        text={t("uiux-design.card-1-text")}
        href={"https://www.behance.net/gallery/204141765/TailMate-UIUX-Design"}
        image1={image1}
        image2={image2}
        image3={image3}
      />
      <ProjectsCard
        title={t("uiux-design.card-2")}
        text={t("uiux-design.card-2-text")}
        href={"https://www.behance.net/gallery/205302643/My-Web-Portfolio"}
        image1={image4}
        image2={image5}
        image3={image6}
      />
    </div>
  );
}
