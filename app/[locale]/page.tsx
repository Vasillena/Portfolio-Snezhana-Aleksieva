"use client";

import { motion, useInView } from "framer-motion";

import AboutMe from "../components/Home/AboutMe";
import CreativeFields from "../components/Home/CreativeFields";
import FeaturedProjects from "../components/Home/FeaturedProjects";
import Hero from "../components/Home/Hero";
import MotionPageWrapper from "../components/Common/Reveal";

export default function HomePage(): JSX.Element {
  return (
    <>
      {/* <MotionPageWrapper> */}
      <Hero />
      <CreativeFields />
      <AboutMe />
      <FeaturedProjects />
      {/* </MotionPageWrapper> */}
    </>
  );
}
