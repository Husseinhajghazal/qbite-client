"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTranslateFeatures } from "@/hooks/useTranslate";
import Shape3 from "../Shapes/Shape3";
import Shape4 from "../Shapes/Shape4";
import SectionHeader from "./SectionHeader";

const Features = () => {
  const [t, i18n] = useTranslation("global");
  const { translatedFeatures } = useTranslateFeatures();

  return (
    <section
      dir={i18n.language == "ar" ? "rtl" : "ltr"}
      id="features"
      className="px-10 lg:px-0 h-fit bg-[#dceed8] py-[80px] flex flex-col items-center relative"
    >
      <Shape3 />
      <SectionHeader
        sectionName={t("home.features.head.sectionName")}
        firstTitle={t("home.features.head.firstTitle")}
        secondTitle={t("home.features.head.secondTitle")}
        firstLine={t("home.features.head.firstLine")}
        secondLine={t("home.features.head.secondLine")}
      />
      <div className="flex lg:w-2/4 flex-col lg:flex-row gap-5 mb-5 lg:pl-10 z-10">
        {translatedFeatures.slice(0, 2).map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#2f834f",
              color: "white",
            }}
            data-aos={
              index % 2 == 0
                ? i18n.language == "ar"
                  ? "fade-left"
                  : "fade-right"
                : i18n.language == "ar"
                ? "fade-right"
                : "fade-left"
            }
            className="bg-white shadow-lg flex-1 rounded-2xl pt-5 pb-8 px-10 overflow-hidden background-3"
            style={{ backgroundImage: feature.image }}
          >
            <div
              className={`relative bottom-7 w-fit p-5 bg-[#2f834f] rounded-3xl ${
                i18n.language == "ar" ? "left-12" : "right-12"
              }`}
            >
              {feature.icon}
            </div>
            <h2 className="text-2xl font-medium mb-4">{feature.title}</h2>
            <p>{feature.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="flex lg:w-2/4 flex-col lg:flex-row gap-5 mb-5 lg:pr-10 z-10">
        {translatedFeatures.slice(2, 4).map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#2f834f",
              color: "white",
            }}
            data-aos={
              index % 2 == 0
                ? i18n.language == "ar"
                  ? "fade-left"
                  : "fade-right"
                : i18n.language == "ar"
                ? "fade-right"
                : "fade-left"
            }
            className="bg-white shadow-lg flex-1 rounded-2xl pt-5 pb-8 px-10 overflow-hidden background-3"
            style={{ backgroundImage: feature.image }}
          >
            <div
              className={`relative bottom-7 w-fit p-5 bg-[#2f834f] rounded-3xl ${
                i18n.language == "ar" ? "left-12" : "right-12"
              }`}
            >
              {feature.icon}
            </div>
            <h2 className="text-2xl font-medium mb-4">{feature.title}</h2>
            <p>{feature.desc}</p>
          </motion.div>
        ))}
      </div>
      <Shape4 />
    </section>
  );
};

export default Features;
