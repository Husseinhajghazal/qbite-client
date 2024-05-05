"use client";

import React from "react";
import Link from "next/link";
import Shape1 from "../Shapes/Shape1";
import Shape2 from "../Shapes/Shape2";
import { useTranslateSteps } from "@/hooks/useTranslate";
import { useTranslation } from "react-i18next";

const Map = () => {
  const { translatedSteps } = useTranslateSteps();
  const [t, i18n] = useTranslation("global");

  return (
    <section
      id="howtostart"
      dir={i18n.language == "ar" ? "rtl" : "ltr"}
      className="py-[80px] bg-white relative text-center px-10 lg:px-0"
    >
      <Shape1 />
      <div
        className="flex items-center justify-center flex-col gap-20 background-8"
        style={{ backgroundImage: "url(/way.png)" }}
      >
        {translatedSteps.map((item, index) => (
          <div
            key={index}
            data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
            className={`bg-[#2f834f] text-white py-3 lg:py-5 px-6 lg:px-10 rounded-xl z-10 shadow-lg flex items-center gap-4 ${
              index % 2 === 0 ? "lg:ml-40" : "lg:mr-40"
            }`}
          >
            <div className="text-center bg-white p-4 text-[#2f834f] text-3xl rounded-full">
              {item.icon}
            </div>
            <h4 className="text-[20px] font-normal">{item.text}</h4>
          </div>
        ))}
        <Link
          href="/signup"
          className="z-10 bg-white text-xl shadow-lg text-[#2f834f] py-3 lg:py-5 px-6 lg:px-10 rounded-2xl border-2 border-[#2f834f]"
        >
          {t("home.map.button")}
        </Link>
      </div>
      <Shape2 />
    </section>
  );
};

export default Map;
