import AboutMe from "../components/Home/AboutMe";
import CreativeFields from "../components/Home/CreativeFields";
import FeaturedProjects from "../components/Home/FeaturedProjects";
import FollowPointer from "../components/Common/FollowPointer";
import Hero from "../components/Home/Hero";

export default function HomePage(): JSX.Element {
  return (
    <>
      <Hero />
      <FollowPointer />
      <CreativeFields />
      <AboutMe />
      <FeaturedProjects />
    </>
  );
}
