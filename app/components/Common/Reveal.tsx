"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

interface MotionPageWrapperProps {
  children: React.ReactNode;
  classProp?: string;
  // width?: "fit-content" | "100%";
}

export default function Reveal({
  children,
  classProp,
}: // width = "100%",
MotionPageWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  // const mainControls = useAnimation();

  // useEffect(() => {
  //   if (isInView) {
  //     mainControls.start("visible");
  //   }
  // }, [isInView]);

  return (
    <div
      ref={ref}
      className={cn(classProp)}
      // style={{ position: "relative", overflow: "hidden" }}
    >
      <motion.div
        initial={{ opacity: 0, y: "-10%" }}
        animate={isInView ? { opacity: 1, y: "0" } : {}}
        // variants={{
        //   hidden: { opacity: 0, y: "-10%" },
        //   visible: { opacity: 1, y: 0 },
        // }}
        // initial="hidden"
        // animate={mainControls}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
