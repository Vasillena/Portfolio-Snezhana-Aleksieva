"use client";

import { motion, useInView } from "framer-motion";

import AboutMe from "../components/Home/AboutMe";
import CreativeFields from "../components/Home/CreativeFields";
import FeaturedProjects from "../components/Home/FeaturedProjects";
import Hero from "../components/Home/Hero";
import MotionPageWrapper from "../components/Common/MotionPageWrapper";
import { useLocale } from "next-intl";
import { useRef } from "react";

export default function HomePage(): JSX.Element {
  const locale = useLocale();

  const aboutRef = useRef(null);
  const isAboutRefInView = useInView(aboutRef, { margin: "-300px" });

  const featuredProjectsRef = useRef(null);
  const isfeaturedProjectsRefInView = useInView(featuredProjectsRef, {
    margin: "-100px",
  });
  return (
    <>
      <MotionPageWrapper>
        <Hero />
        <CreativeFields />
      </MotionPageWrapper>
      <div ref={aboutRef}>
        <motion.div
          initial={{ opacity: 0, y: "-10%" }}
          animate={isAboutRefInView ? { opacity: 1, y: "0" } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <AboutMe />
        </motion.div>
      </div>

      <div ref={featuredProjectsRef}>
        <motion.div
          initial={{ opacity: 0, y: "-10%" }}
          animate={isfeaturedProjectsRefInView ? { opacity: 1, y: "0" } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <FeaturedProjects />
        </motion.div>
      </div>
    </>
  );
}
