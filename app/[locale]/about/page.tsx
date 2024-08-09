import Certificates from "../../components/AboutMe/Certificates";
import EdExp from "../../components/AboutMe/Ed&Exp";
import Hero from "../../components/AboutMe/Hero";
import Hobbies from "../../components/AboutMe/Hobbies";
import Skills from "../../components/AboutMe/Skills";

export default function AboutMePage(): JSX.Element {
  return (
    <>
      <Hero />
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row mt-20 justify-center xl:justify-between items-center">
        <div>
          <div>
            <EdExp />
          </div>
          <div className="hidden xl:block">
            <Hobbies />
          </div>
        </div>
        <div className="mt-32 xl:mt-0 flex flex-col items-center">
          <div>
            <Skills />
          </div>
          <div className="xl:hidden">
            <Hobbies />
          </div>
        </div>
      </div>
      <Certificates />
    </>
  );
}
