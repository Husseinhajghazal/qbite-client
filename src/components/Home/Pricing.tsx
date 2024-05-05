"use client";

import React from "react";
import SectionHeader from "./SectionHeader";
import Shape5 from "../Shapes/Shape5";
import Shape6 from "../Shapes/Shape6";
import Plan2 from "../Plans/Plan2";
import Plan1 from "../Plans/Plan1";
import Plan3 from "../Plans/Plan3";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section
      dir={i18n.language == "ar" ? "rtl" : "ltr"}
      className="px-10 lg:px-0 h-fit bg-[#dceed8] py-[80px] flex flex-col items-center relative background-4"
      style={{ backgroundImage: "url(/effects/circles-1.png)" }}
      id="pricing"
    >
      <Shape5 />
      <SectionHeader
        sectionName={t("home.pricing.head.sectionName")}
        firstTitle={t("home.pricing.head.firstTitle")}
        secondTitle={t("home.pricing.head.secondTitle")}
        firstLine={t("home.pricing.head.firstLine")}
        secondLine={t("home.pricing.head.secondLine")}
      />
      <div className="flex flex-col lg:flex-row gap-5">
        <Plan1 />
        <Plan2 />
        <Plan3 />
      </div>
      <Shape6 />
    </section>
  );
};

export default Pricing;
