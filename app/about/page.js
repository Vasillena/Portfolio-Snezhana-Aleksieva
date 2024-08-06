import Certificates from "../components/AboutMe/Certificates";
import EdExp from "../components/AboutMe/Ed&Exp";
import Hero from "../components/AboutMe/Hero";
import Hobbies from "../components/AboutMe/Hobbies";
import Skills from "../components/AboutMe/Skills";

export default function AboutMePage() {
  return (
    <>
      <Hero />
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-3 mt-20">
        <div className="col-span-1 xl:col-span-2 justify-self-center xl:justify-self-start">
          <EdExp />
          <Hobbies />
        </div>
        <div className="col-span-1 justify-self-center xl:justify-self-end mt-10 xl:mt-0">
          <Skills />
        </div>
      </div>
      <Certificates />
    </>
  );
}
