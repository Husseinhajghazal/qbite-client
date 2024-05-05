"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { IoChevronForwardOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Backward = ({ backgroundColor }: { backgroundColor: string }) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <motion.button
      onClick={goBack}
      style={{ backgroundColor: backgroundColor }}
      className="fixed  text-white top-3 right-3 z-20 p-2 md:p-3 rounded-full text-xl"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <IoChevronForwardOutline />
    </motion.button>
  );
};

export default Backward;
