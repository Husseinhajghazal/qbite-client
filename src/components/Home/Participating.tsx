"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const Participating = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section
      dir={i18n.language == "ar" ? "rtl" : "ltr"}
      className="bg-white lg:px-24 py-6 flex-col flex lg:flex-row justify-between"
    >
      <h3 className="font-medium lg:font-semibold lg:text-xl text-[#2f834f] text-center mb-6 lg:mb-0 lg:text-start">
        {t("home.participating.p1")}
        <br />
        {t("home.participating.p2")}
      </h3>
      <div className="px-10 lg:px-0 grid gap-4 lg:gap-16 grid-cols-3 lg:grid-cols-6 justify-items-center"></div>
    </section>
  );
};

export default Participating;
