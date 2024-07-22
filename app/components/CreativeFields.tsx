import CreativeFieldCard from "./CreativeFieldCard";
import Image from "next/image";
import athena from "next/font/local";
import { cn } from "@/lib/utils";
import image1 from "@/public/cards-1.svg";
import image2 from "@/public/cards-2.svg";
import image3 from "@/public/cards-3.svg";
import image4 from "@/public/cards-4.svg";

const myFont = athena({ src: "../../public/Athena-Regular.ttf" });

export default function CreativeFields() {
  return (
    <div className="max-w-7xl mx-auto mt-20 grid lg:grid-cols-4 justify-between">
      <CreativeFieldCard
        image={image1}
        paragraph1={"Brand"}
        paragraph2={"Design"}
      />
      <CreativeFieldCard
        image={image2}
        paragraph1={"Brand"}
        paragraph2={"Design"}
      />
      <CreativeFieldCard
        image={image3}
        paragraph1={"Brand"}
        paragraph2={"Design"}
      />
      <CreativeFieldCard
        image={image4}
        paragraph1={"Brand"}
        paragraph2={"Design"}
      />
    </div>
  );
}
