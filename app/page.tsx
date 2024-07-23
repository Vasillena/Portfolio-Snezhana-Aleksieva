import AboutShort from "./components/AboutShort";
import CreativeFields from "./components/CreativeFields";
import FeaturedProjects from "./components/FeaturedProjects";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <CreativeFields />
      <AboutShort />
      <FeaturedProjects />
    </>
  );
}
