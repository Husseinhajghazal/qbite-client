"use client";

import React from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

const Background = ({ onClick }: { onClick: () => void }) => {
  const backgroundElement = document.getElementById("background")!;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 z-20 w-screen h-screen bg-[#0000004c] text-orange-500"
      onClick={onClick}
    />,
    backgroundElement
  );
};

export default Background;
