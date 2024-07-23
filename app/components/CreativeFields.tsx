import CreativeFieldCard from "./CreativeFieldCard";
import Image from "next/image";
import image1 from "@/public/cards-1.svg";
import image2 from "@/public/cards-2.svg";
import image3 from "@/public/cards-3.svg";
import image4 from "@/public/cards-4.svg";
import image5 from "@/public/dots.svg";

export default function CreativeFields() {
  return (
    <>
      <div className="max-w-7xl mx-auto mt-36">
        <Image
          src={image5}
          alt="Profile image"
          style={{
            width: "160px",
            height: "auto",
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto mt-20 grid lg:grid-cols-4 gap-36">
        <CreativeFieldCard
          image={image1}
          paragraph1={"Brand"}
          paragraph2={"Design"}
        />
        <CreativeFieldCard
          image={image2}
          paragraph1={"Logo"}
          paragraph2={"Design"}
        />
        <CreativeFieldCard
          image={image3}
          paragraph1={"Layout"}
          paragraph2={"Design"}
        />
        <CreativeFieldCard
          image={image4}
          paragraph1={"UI/UX"}
          paragraph2={"Design"}
        />
      </div>
      <div className="max-w-7xl mx-auto mt-20 flex justify-end">
        <Image
          src={image5}
          alt="Profile image"
          style={{
            width: "160px",
            height: "auto",
          }}
        />
      </div>
    </>
  );
}
