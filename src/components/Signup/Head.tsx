"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Head = ({ p1, p2 }: { p1: string; p2: string }) => {
  const [t, i18n] = useTranslation("global");

  return (
    <React.Fragment>
      <h1
        dir={i18n.language == "ar" ? "rtl" : "ltr"}
        className="text-[35px] md:text-[50px] text-center mb-2"
      >
        <p>{t("signup.head1.1")}</p>
        <div className="flex items-center justify-center gap-3">
          {t("signup.head1.2")}{" "}
          <span className="w-[80px] md:w-[120px] h-fit">
            <Image
              src="/logo/5.png"
              alt="logo"
              width={150}
              height={150}
              className="object-cover"
            />
          </span>{" "}
          {t("signup.head1.3")}
        </div>
      </h1>
      <p className="text-sm md:text-[16px] text-center text-gray-400 mb-8">
        {p1} <br />
        {p2}
      </p>
    </React.Fragment>
  );
};

export default Head;
