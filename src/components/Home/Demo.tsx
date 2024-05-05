"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Demo = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section
      dir={i18n.language == "ar" ? "rtl" : "ltr"}
      className="pb-8 bg-white flex flex-col items-center px-10 lg:px-0"
    >
      <h3 className="md:text-[20px] lg:text-[30px] font-semibold md:font-medium mb-5 text-center">
        {t("home.demo.h31")}{" "}
        <span className="text-[#2f834f]">{t("home.demo.span")}</span>
        <br /> {t("home.demo.h32")}
      </h3>
      <Link href="/signup">
        <motion.p
          whileHover={{ scale: 1.1 }}
          className="w-32 lg:w-36 h-10 lg:h-12 flex justify-center items-center pb-1 bg-[#2f834f] rounded-3xl text-white text-lg lg:text-xl font-semibold hover:bg-[#4cb675] hover:text-white duration-300 cursor-pointer"
        >
          {t("home.demo.button")}
        </motion.p>
      </Link>
    </section>
  );
};

export default Demo;
