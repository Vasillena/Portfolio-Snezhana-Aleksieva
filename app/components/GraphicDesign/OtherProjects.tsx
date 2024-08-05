import PortfolioCard from "../Portfolio/PortfolioCard";
import image1 from "@/public/portfolio-card-2.png";
import image2 from "@/public/portfolio-card-3.png";

export default function OtherProjects(): JSX.Element {
  return (
    <div className="max-w-full mt-24 bg-[#F2EEE9]">
      <div className=" max-w-7xl mx-auto py-11">
        <div>
          <p className="text-lg sm:text-2xl text-center">
            Thank you for exploring my Graphic Design Portfolio!
          </p>
          <p className="text-lg sm:text-2xl text-center font-bold mt-6">
            Explore my other work:
          </p>
        </div>
        <div className=" flex flex-wrap justify-center xl:justify-between gap-20 mt-20">
          <PortfolioCard
            title1={"UI/UX "}
            title2={"Design"}
            image={image1}
            color={"bg-[#F7F4F1]"}
            text1={
              "Discover my user interface and user experience designs that prioritize usability and user satisfaction."
            }
            text2={"UI  Design"}
            text3={"UX Design"}
            href={"/portfolio/ui-ux-design"}
          />
          <PortfolioCard
            title1={"Illustrations"}
            title2={"Digital Art"}
            image={image2}
            mx={"mx-auto"}
            color={"bg-[#F7F4F1]"}
            text1={
              "Explore my collection of illustrations and digital drawings, where my journey in art began."
            }
            text2={"Illustrations"}
            text3={"Digital Drawings"}
            href={"/portfolio/illustrations-and-digital-art"}
          />
        </div>
      </div>
    </div>
  );
}
