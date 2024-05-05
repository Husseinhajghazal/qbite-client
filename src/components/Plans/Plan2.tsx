"use client";

import React from "react";
import useSeeFeatures from "@/hooks/useSeeFeatures";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiSolidChevronDown, BiSolidChevronUp } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

const Plan2 = () => {
  const router = useRouter();
  const { features, setFeatures10, setFeatures3, opened } = useSeeFeatures(3);
  const [t, i18n] = useTranslation("global");

  return (
    <div
      className="shadow-xl px-6 pt-7 rounded-2xl h-fit bg-white md:w-[400px] lg:w-[300px] relative z-10 overflow-x-hidden"
      data-aos="fade-down"
      style={{ scale: 1.1 }}
    >
      <p
        className={`absolute shadow-md top-3 bg-[#2f834f] text-sm font-semibold text-white px-3 py-1 rounded-2xl ${
          i18n.language == "ar" ? "left-3" : "right-3"
        }`}
      >
        {t("home.pricing.cards.2.status")}
      </p>
      <h4 className="text-[#2f834f] text-3xl font-semibold">
        {t("home.pricing.cards.2.h4")}
      </h4>
      <p className="mt-5 mb-6 text-sm">
        {t("home.pricing.cards.2.p")}{" "}
        <span className="text-[#2f834f]">{t("home.pricing.cards.2.span")}</span>
      </p>
      <h5 className="text-[50px] font-bold flex">
        <span className="text-[20px] text-[#2f834f] pt-2">$</span>0
      </h5>
      <button
        type="button"
        onClick={() => {
          localStorage.setItem("plan", "Free Trail");
          router.push("/signup");
        }}
        className="shadow-md py-2 bg-[#2f834f] border-2 w-full text-white font-medium rounded-2xl mb-5 mt-2"
      >
        {t("home.pricing.cards.2.button")}
      </button>
      <div className="divide-y-2">
        {features.map((feature) => (
          <p
            data-aos="fade-right"
            key={feature.id}
            className="flex gap-3 items-center py-3"
          >
            <AiFillCheckCircle color="#2f834f" size={20} />{" "}
            {feature.menuFeature}
          </p>
        ))}
      </div>
      <div className="w-full text-center">
        {opened ? (
          <button type="button" onClick={setFeatures10}>
            <BiSolidChevronDown />
          </button>
        ) : (
          <button type="button" onClick={setFeatures3}>
            <BiSolidChevronUp />
          </button>
        )}
      </div>
    </div>
  );
};

export default Plan2;
