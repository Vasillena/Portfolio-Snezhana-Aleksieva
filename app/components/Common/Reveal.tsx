"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface MotionPageWrapperProps {
  children: React.ReactNode;
}

export default function Reveal({ children }: MotionPageWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <div ref={ref}>
      {isMobile ? (
        <motion.div
          initial={{ opacity: 0, y: "-4%" }}
          animate={isInView ? { opacity: 1, y: "0" } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
}
