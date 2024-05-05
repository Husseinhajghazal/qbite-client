"use client";

import Link from "next/link";
import React from "react";
import { AiFillExclamationCircle } from "react-icons/ai";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const HelpBtns = ({
  step,
  prevStep,
}: {
  step: number;
  prevStep: () => void;
}) => {
  const [t, i18n] = useTranslation("global");

  return (
    <div
      data-aos="fade-left"
      className="flex items-center justify-between w-full"
    >
      <div className="flex items-center gap-2 hover:text-[#2f834f]">
        <Link href="/#contactus" className="text-lg underline duration-300">
          {t("signup.link")}
        </Link>{" "}
        <AiFillExclamationCircle />
      </div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        {step > 1 && (
          <BsArrowLeftCircleFill
            data-aos="fade-left"
            size={35}
            color="#2f834f"
            onClick={prevStep}
          />
        )}
      </motion.div>
    </div>
  );
};

export default HelpBtns;
