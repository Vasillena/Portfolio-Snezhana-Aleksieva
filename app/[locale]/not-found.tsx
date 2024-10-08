import Image from "next/image";
import MainButton from "../components/Common/MainButton";
import image2 from "@/public/404.svg";
import image3 from "@/public/dots.svg";

export default function NotFound(): JSX.Element {
  return (
    <div className="max-w-7xl mx-auto flex flex-col items-center mb-10 text-center">
      <div className="mt-40">
        <div className="flex justify-center">
          <Image
            src={image2}
            alt="404 image"
            style={{
              width: "270px",
              height: "auto",
            }}
          />
        </div>
        <div className="flex justify-center my-11">
          <Image
            src={image3}
            alt="Dots"
            style={{
              width: "160px",
              height: "auto",
              marginTop: "64px",
            }}
          />
        </div>
        <div className="text-lg sm:text-2xl mb-11">
          <p>Ohh... Something missing...</p>
          <p>
            The page you are looking for doesn’t exist, isn’t available or was
            loading incorrectly.
          </p>
        </div>
        <div className="flex justify-center">
          <MainButton href={"/"} text={"Back to Homepage"} />
        </div>
      </div>
    </div>
  );
}
