"use client";

import React from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { toggleShow } from "@/store/reducers/sidebar";

const Background: React.FC = () => {
  const backgroundElement = document.getElementById("background")!;
  const dispatch = useDispatch();

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 z-20 w-screen h-screen bg-[#0000004c] text-orange-500"
      onClick={() => dispatch(toggleShow())}
    />,
    backgroundElement
  );
};

export default Background;
