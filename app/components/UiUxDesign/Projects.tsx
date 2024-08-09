import ProjectsCard from "../Common/ProjectsCard";
import image1 from "@/public/gd-16.png";
import image2 from "@/public/gd-17.png";
import image3 from "@/public/gd-18.png";
import { useTranslations } from "next-intl";

export default function Projects(): JSX.Element {
  const t = useTranslations();
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <ProjectsCard
        title={t("uiux-design.card-1")}
        text={t("uiux-design.card-1-text")}
        href={"https://www.behance.net/gallery/204141765/TailMate-UIUX-Design"}
        image1={image1}
        image2={image2}
        image3={image3}
      />
    </div>
  );
}
