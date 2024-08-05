import ProjectsCard from "../Common/ProjectsCard";
import image1 from "@/public/gd-16.png";
import image2 from "@/public/gd-17.png";
import image3 from "@/public/gd-18.png";

export default function Projects(): JSX.Element {
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <ProjectsCard
        title={"TailMate - Pet Adoption Website"}
        text={
          "Course project for a pet adoption platform. This is my first UI/UX project. The design focuses on creating an intuitive & engaging user experience. TailMate is a platform designed to simplify the pet adoption process. It connects shelters, users and volunteers."
        }
        href={"https://www.behance.net/gallery/204141765/TailMate-UIUX-Design"}
        image1={image1}
        image2={image2}
        image3={image3}
      />
    </div>
  );
}
