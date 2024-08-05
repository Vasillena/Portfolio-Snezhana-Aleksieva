import ProjectsCard from "../Common/ProjectsCard";
import image1 from "@/public/gd-19.png";
import image2 from "@/public/gd-20.png";
import image3 from "@/public/gd-21.png";
import image4 from "@/public/gd-22.png";
import image5 from "@/public/gd-23.png";
import image6 from "@/public/gd-24.png";

export default function Projects(): JSX.Element {
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <ProjectsCard
        title={"Self-Portrait"}
        text={
          "A digital representation of myself, capturing the essence of my personality. Created in Photoshop."
        }
        href={"https://www.behance.net/gallery/204242563/Self-Portrait"}
        image1={image1}
        image2={image2}
        image3={image3}
      />
      <ProjectsCard
        title={"Chocho the Chow Chow"}
        text={
          "A digital portrait of my beloved dog, Chocho. Focused on capturing the unique charm and fluffy features of his head. Created in Photoshop."
        }
        href={"https://www.behance.net/gallery/204242363/Chocho-the-Chow-Chow"}
        image1={image4}
        image2={image5}
        image3={image6}
      />
    </div>
  );
}
