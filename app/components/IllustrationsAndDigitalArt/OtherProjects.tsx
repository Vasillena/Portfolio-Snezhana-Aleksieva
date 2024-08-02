import PortfolioCard from "../Portfolio/PortfolioCard";
import image1 from "@/public/portfolio-card-1.png";
import image2 from "@/public/portfolio-card-2.png";

export default function OtherProjects(): JSX.Element {
  return (
    <div className="max-w-full mt-24 bg-[#F2EEE9]">
      <div className=" max-w-7xl mx-auto py-11">
        <div>
          <p className="text-2xl text-center">
            Thank you for exploring my Illustration Design Portfolio!
          </p>
          <p className="text-2xl text-center font-bold mt-6">
            Explore my other work:
          </p>
        </div>
        <div className=" grid lg:grid-cols-2 gap-20 mt-20">
          <PortfolioCard
            title1={"Graphic"}
            title2={"Design"}
            image={image1}
            color={"bg-[#F7F4F1]"}
            text1={
              "From logo design to layouts and brand identity, explore my graphic design projects that combine aesthetics and functionality."
            }
            text2={"Logo Design"}
            text3={"Layouts"}
            text4={"Brand Design"}
            href={"/graphic-design"}
          />
          <PortfolioCard
            title1={"Illustrations"}
            title2={"& Digital Art"}
            image={image2}
            mx={"mx-auto"}
            color={"bg-[#F7F4F1]"}
            text1={
              "Explore my collection of illustrations and digital drawings, where my journey in art began."
            }
            text2={"Illustrations"}
            text3={"Digital Drawings"}
            href={"/illustrations-and-digital-art"}
          />
        </div>
      </div>
    </div>
  );
}
