"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { useFollowPointer } from "@/lib/useFollowPointer";
import { useRef } from "react";

export default function FollowPointer() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkIfTouchDevice = () => {
      if (
        "ontouchstart" in window ||
        window.matchMedia("(pointer: coarse)").matches
      ) {
        setIsTouchDevice(true);
      }
    };

    checkIfTouchDevice();
  }, []);

  if (isTouchDevice) {
    return null;
  }

  return (
    <motion.div
      ref={ref}
      style={{
        x,
        y,
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        background: "#F2EEE9",
        mixBlendMode: "multiply",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100,
        pointerEvents: "none",
      }}
    />
  );
}
