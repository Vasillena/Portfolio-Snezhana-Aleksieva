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
        width: "6px",
        height: "6px",
        borderRadius: "50%",
        background: "#B0752A",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100,
        pointerEvents: "none",
      }}
    />
  );
}
