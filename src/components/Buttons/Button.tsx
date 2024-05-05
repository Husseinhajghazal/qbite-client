"use client";

import React from "react";
import { motion } from "framer-motion";

const Button = ({
  type,
  text,
  color,
}: {
  type: string;
  text: string;
  color: string;
}) => {
  if (type == "outline") {
    return (
      <motion.button
        whileHover={{ backgroundColor: color, color: "white" }}
        whileTap={{ scale: 0.9 }}
        type="submit"
        style={{ borderColor: color, color: color }}
        className="border-2 py-3 px-6 rounded-2xl"
      >
        {text}
      </motion.button>
    );
  }
};

export default Button;
