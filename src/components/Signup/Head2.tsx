"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const Head = ({ p1, p2 }: { p1: string; p2: string }) => {
  const [t, i18n] = useTranslation("global");

  return (
    <React.Fragment>
      <h1 className="text-[20px] md:text-[40px] text-center mb-2">
        <p>
          {t("signup.head2.1")}{" "}
          <span className="text-[#2f834f]">{t("signup.head2.2")}</span>{" "}
          {t("signup.head2.3")}
        </p>
      </h1>
      <p className="text-sm md:text-[16px] text-center text-gray-400 mb-8">
        {p1} <br />
        {p2}
      </p>
    </React.Fragment>
  );
};

export default Head;
