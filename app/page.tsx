import AboutMe from "./components/Home/AboutMe";
import CreativeFields from "./components/Home/CreativeFields";
import FeaturedProjects from "./components/Home/FeaturedProjects";
import Hero from "./components/Home/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CreativeFields />
      <AboutMe />
      <FeaturedProjects />
    </>
  );
}
