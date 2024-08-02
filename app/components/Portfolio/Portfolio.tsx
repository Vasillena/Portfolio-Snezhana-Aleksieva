import PortfolioCard from "./PortfolioCard";
import image1 from "@/public/portfolio-card-1.png";
import image2 from "@/public/portfolio-card-2.png";
import image3 from "@/public/portfolio-card-3.png";

export default function Portfolio(): JSX.Element {
  return (
    <div className="max-w-7xl mx-auto mt-14 flex flex-wrap justify-between gap-28">
      <PortfolioCard
        title1={"Graphic"}
        title2={"Design"}
        image={image1}
        color={"bg-[#F2EEE9]"}
        text1={
          "From logo design to layouts and brand identity, explore my graphic design projects that combine aesthetics and functionality."
        }
        text2={"Logo Design"}
        text3={"Layouts"}
        text4={"Brand Design"}
        href={"/portfolio/graphic-design"}
      />
      <PortfolioCard
        title1={"UI/UX "}
        title2={"Design"}
        image={image2}
        color={"bg-[#F2EEE9]"}
        text1={
          "Discover my user interface and user experience designs that prioritize usability and user satisfaction."
        }
        text2={"UI  Design"}
        text3={"UX Design"}
        href={"/portfolio/ui-ux-design"}
      />
      <PortfolioCard
        title1={"Illustrations"}
        title2={"& Digital Art"}
        image={image3}
        mx={"mx-auto"}
        color={"bg-[#F2EEE9]"}
        text1={
          "Explore my collection of illustrations and digital drawings, where my journey in art began."
        }
        text2={"Illustrations"}
        text3={"Digital Drawings"}
        href={"/portfolio/illustrations-and-digital-art"}
      />
    </div>
  );
}
