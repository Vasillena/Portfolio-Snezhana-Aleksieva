import ProjectsCard from "../Common/ProjectsCard";
import image1 from "@/public/gd-1.png";
import image10 from "@/public/gd-10.png";
import image11 from "@/public/gd-11.png";
import image12 from "@/public/gd-12.png";
import image13 from "@/public/gd-13.png";
import image14 from "@/public/gd-14.png";
import image15 from "@/public/gd-15.png";
import image2 from "@/public/gd-2.png";
import image3 from "@/public/gd-3.png";
import image4 from "@/public/gd-4.png";
import image5 from "@/public/gd-5.png";
import image6 from "@/public/gd-6.png";
import image7 from "@/public/gd-7.png";
import image8 from "@/public/gd-8.png";
import image9 from "@/public/gd-9.png";

export default function Projects(): JSX.Element {
  return (
    <div className="max-w-7xl mx-auto mt-28">
      <ProjectsCard
        title={"My Personal Branding"}
        text={
          "This project embodies a simple and clean aesthetic with light tones and a touch of femininity, reflecting my unique style and professional identity."
        }
        href={
          "https://www.behance.net/gallery/201366607/Sn-Aleksieva-My-Personal-Branding"
        }
        image1={image1}
        image2={image2}
        image3={image3}
      />
      <ProjectsCard
        title={"Desire Handmade by Rossy"}
        text={
          "For this small business specialising in handmade gifts, I crafted a brand identity that embodies warmth and creativity. The logo features hands holding a heart made of twine, symbolising care and craftsmanship. The design elements, including wrapping paper patterns, thank you cards, and stickers, use graphite, gold, and accents of red to convey elegance and heartfelt passion."
        }
        href={
          "https://www.behance.net/gallery/197397879/DESIRE-Handmade-Logo-Branding"
        }
        image1={image4}
        image2={image5}
        image3={image6}
      />
      <ProjectsCard
        title={"Stanislava Vladimirova Photography"}
        text={
          "For photographer Stanislava Vladimirova, I designed an elegant logo intertwining her initials, S and V, into the shape of a camera. The visual identity features delicate floral motifs, graphite, and gold accents on a light background, complemented by fonts that enhance the gentle, feminine aesthetic."
        }
        href={
          "https://www.behance.net/gallery/198600533/Stanislava-Vladimirova-photography-Logo-Branding"
        }
        image1={image7}
        image2={image8}
        image3={image9}
      />
      <ProjectsCard
        title={"Brew Sphere Coffee Shop"}
        text={
          "For Brew Sphere Coffee Shop, I developed a clean yet attention-grabbing brand identity. The logo features the initials B and S with curves resembling steam, all within a circle symbolising a coffee cup. The visual elements use a graphite background paired with beige and white accents, creating a modern and inviting atmosphere."
        }
        href={
          "https://www.behance.net/gallery/201777479/Brew-Sphere-Coffee-Shop-Logo-Branding"
        }
        image1={image10}
        image2={image11}
        image3={image12}
      />
      <ProjectsCard
        title={"M&D Nails & Hair Salon"}
        text={
          "For this beauty salon, I crafted a clean and modern brand identity. The logo combines the initials M and D with hand-drawn illustrations of a nail polish bottle and scissors. This project, my first as a graphic designer, aims to capture a youthful and elegant aesthetic."
        }
        href={
          "https://www.behance.net/gallery/197320433/M-D-Nails-and-Hair-Logo-Branding"
        }
        image1={image13}
        image2={image14}
        image3={image15}
      />
    </div>
  );
}
