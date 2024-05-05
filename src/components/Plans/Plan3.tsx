"use client";

import React from "react";
import useSeeFeatures from "@/hooks/useSeeFeatures";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiSolidChevronDown, BiSolidChevronUp } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const Plan3 = () => {
  const { features, setFeatures10, setFeatures3, opened } = useSeeFeatures(3);
  const [t, i18n] = useTranslation("global");

  return (
    <div
      data-aos={i18n.language == "ar" ? "fade-right" : "fade-left"}
      className="hidden lg:block shadow-xl px-6 pt-7 rounded-2xl h-fit bg-white md:w-[400px] lg:w-[300px] relative soon z-10 overflow-x-hidden"
    >
      <div className="blur-[5px]">
        <h4 className="text-[#2f5983] text-3xl font-semibold">
          {t("home.pricing.cards.3.h4")}
        </h4>
        <p className="mt-5 mb-6 text-sm">
          {t("home.pricing.cards.3.p")}{" "}
          <span className="text-[#2f5983]">
            {t("home.pricing.cards.3.span")}
          </span>
        </p>
        <h5 className="text-[50px] font-bold flex">
          <span className="text-[20px] text-[#2f5983] pt-2">$</span>50
        </h5>
        <button className="shadow-md py-2 bg-[#2f5983] border-2 w-full text-white font-medium rounded-2xl mb-5 mt-2">
          {t("home.pricing.cards.3.button")}
        </button>
        <div className="divide-y-2">
          {features.map((feature) => (
            <p
              data-aos="fade-right"
              key={feature.id}
              className="flex gap-3 items-center py-3"
            >
              <AiFillCheckCircle color="#2f5983" size={20} />{" "}
              {feature.menuFeature}
            </p>
          ))}
        </div>
        <div className="w-full text-center">
          {opened ? (
            <button type="button">
              <BiSolidChevronDown />
            </button>
          ) : (
            <button type="button">
              <BiSolidChevronUp />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Plan3;
