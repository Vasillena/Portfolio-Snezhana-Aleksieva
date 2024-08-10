import ProjectsCard from "../Common/ProjectsCard";
import { getI18n } from "@/locales/server";
import image1 from "@/public/gd-19.png";
import image2 from "@/public/gd-20.png";
import image3 from "@/public/gd-21.png";
import image4 from "@/public/gd-22.png";
import image5 from "@/public/gd-23.png";
import image6 from "@/public/gd-24.png";

export default async function Projects(): Promise<JSX.Element> {
  const t = await getI18n();
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <ProjectsCard
        title={t("illustrations-digital.card-1")}
        text={t("illustrations-digital.card-1-text")}
        href={"https://www.behance.net/gallery/204242563/Self-Portrait"}
        image1={image1}
        image2={image2}
        image3={image3}
      />
      <ProjectsCard
        title={t("illustrations-digital.card-2")}
        text={t("illustrations-digital.card-2-text")}
        href={"https://www.behance.net/gallery/204242363/Chocho-the-Chow-Chow"}
        image1={image4}
        image2={image5}
        image3={image6}
      />
    </div>
  );
}
