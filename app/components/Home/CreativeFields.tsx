import CreativeFieldsCard from "./CreativeFieldsCard";
import Image from "next/image";
import image1 from "@/public/cards-1.svg";
import image2 from "@/public/cards-2.svg";
import image3 from "@/public/cards-3.svg";
import image4 from "@/public/cards-4.svg";
import image5 from "@/public/dots.svg";

export default function CreativeFields(): JSX.Element {
  return (
    <>
      <div className="max-w-7xl mx-auto mt-36 xl:-mt-12 flex justify-center lg:justify-start">
        <Image
          src={image5}
          alt="Dots decor"
          style={{
            width: "160px",
            height: "auto",
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-36">
        <CreativeFieldsCard
          image={image1}
          paragraph1={"Brand"}
          paragraph2={"Design"}
        />
        <CreativeFieldsCard
          image={image2}
          paragraph1={"Logo"}
          paragraph2={"Design"}
        />
        <CreativeFieldsCard
          image={image3}
          paragraph1={"Layout"}
          paragraph2={"Design"}
        />
        <CreativeFieldsCard
          image={image4}
          paragraph1={"UI/UX"}
          paragraph2={"Design"}
        />
      </div>
      <div className="max-w-7xl mx-auto mt-20 flex justify-center lg:justify-end">
        <Image
          src={image5}
          alt="Dots decor"
          style={{
            width: "160px",
            height: "auto",
          }}
        />
      </div>
    </>
  );
}
