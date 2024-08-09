"use client";

// import { motion, useInView } from "framer-motion";

import AboutMe from "../components/Home/AboutMe";
import CreativeFields from "../components/Home/CreativeFields";
import FeaturedProjects from "../components/Home/FeaturedProjects";
import Hero from "../components/Home/Hero";

// import MotionPageWrapper from "../components/Common/MotionPageWrapper";
// import { useRef } from "react";

export default function HomePage(): JSX.Element {
  // const aboutRef = useRef(null);
  // const isAboutRefInView = useInView(aboutRef, { margin: "-300px" });

  return (
    <>
      <Hero />
      <CreativeFields />
      {/* <motion.div
          initial={{ opacity: 0, y: "-10%" }}
          animate={isAboutRefInView ? { opacity: 1, y: "0" } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        > */}
      <AboutMe />
      {/* </motion.div> */}
      {/* <motion.div
          initial={{ opacity: 0, y: "-10%" }}
          animate={isfeaturedProjectsRefInView ? { opacity: 1, y: "0" } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        > */}
      <FeaturedProjects />
      {/* </motion.div> */}
    </>
  );
}
