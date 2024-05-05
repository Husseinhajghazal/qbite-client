"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import useSeeFeatures from "@/hooks/useSeeFeatures";
import { useTranslation } from "react-i18next";

const WhyUs = () => {
  const { features } = useSeeFeatures(3);
  const [t, i18n] = useTranslation("global");

  return (
    <section
      dir={i18n.language == "ar" ? "rtl" : "ltr"}
      className={`bg-[#dceed8] pt-[80px] grid lg:grid-cols-2 gap-16 px-10 lg:px-32 ${
        i18n.language == "ar" ? "background-10" : "background-7"
      }`}
      style={{ backgroundImage: "url(/blob.png)" }}
      id="whyus"
    >
      <div>
        <div className="mb-8">
          <p className="uppercase tracking-[4px] text-gray-500 z-10">
            {t("home.whyus.p")}
          </p>
          <h2 className="text-[50px] font-bold z-10">{t("home.whyus.h2")}</h2>
        </div>
        <div className="mb-8 font-medium">
          <p className="mb-4">{t("home.whyus.p1")}</p>
          <p>{t("home.whyus.p2")}</p>
        </div>
        <div className="mb-8">
          {features.map((feature) => (
            <p
              data-aos="fade-right"
              key={feature.id}
              className="flex gap-3 items-center py-2"
            >
              <AiOutlineCheckCircle color="#2f834f" size={20} />{" "}
              {feature.menuFeature}
            </p>
          ))}
        </div>
        <div className="flex gap-2 items-center text-gray-500">
          <Link href="/signup" className="underline decoration-1 text-[14px]">
            {t("home.whyus.button")}
          </Link>
          {i18n.language == "ar" ? (
            <BsArrowLeft size={16} />
          ) : (
            <BsArrowRight size={16} />
          )}
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <div
          data-aos="fade-left"
          className="w-[250px] h-[250px] md:w-[500px] md:h-[500px]"
        >
          <Image
            src="/whyus.png"
            alt="whyus"
            width={2000}
            height={2000}
            className="object-cover mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
