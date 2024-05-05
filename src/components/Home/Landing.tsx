"use client";

import React from "react";
import Image from "next/image";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

const Landing = () => {
  const [t, i18n] = useTranslation("global");
  const router = useRouter();

  return (
    <section
      className="h-fit bg-[#dceed8] pt-[20px] md:pt-[40px] lg:pt-[80px] background px-10 lg:px-0"
      style={{ backgroundImage: "url(/effects/circles-1.png)" }}
    >
      <h1 className="text-center font-semibold text-[25px] md:text-[40px] lg:text-[70px]">
        {t("home.landing.h1FirstHalf")} <br /> {t("home.landing.h1SecondHalf")}
      </h1>
      <p className="text-sm lg:text-[16px] text-center font-medium mt-5 text-[#2f834f]">
        {t("home.landing.p")}
      </p>
      <button
        type="button"
        onClick={() => router.push("/signup")}
        className="btn bg-[#2f834f] transition-all duration-300 cursor-pointer w-fit text-sm lg:text-[16px] text-white rounded-3xl py-2 lg:py-3 px-3 mx-auto flex justify-center items-center gap-2 my-8"
      >
        {i18n.language == "ar" && (
          <div className="text-[10px] lg:text-[16px] icon bg-white text-[#2f834f] rounded-full p-1 duration-300">
            <IoMdArrowRoundBack />
          </div>
        )}
        {t("home.landing.link")}
        {i18n.language != "ar" && (
          <div className="text-[10px] lg:text-[16px] icon bg-white text-[#2f834f] rounded-full p-1 duration-300">
            <IoMdArrowRoundForward />
          </div>
        )}
      </button>
      <div
        className="flex justify-end lg:pr-[3rem] h-[100px] md:h-[200px] lg:h-[400px] overflow-y-hidden background-2"
        style={{ backgroundImage: "url(/effects/circles-2.png)" }}
      >
        <div
          data-aos={i18n.language == "ar" ? "fade-left" : "fade-right"}
          className="h-[100px] w-[75px] md:h-[200px] md:w-[150px] lg:h-[500px] lg:w-[300px]"
        >
          <Image
            src="/landing/phone.png"
            alt="phone"
            width={600}
            height={1000}
            className="object-cover"
          />
        </div>
        <div
          data-aos={i18n.language == "ar" ? "fade-right" : "fade-left"}
          className="h-[100px] w-[200px] md:h-[200px] md:w-[400px] lg:h-[500px] lg:w-[900px]"
        >
          <Image
            src="/landing/laptop.png"
            alt="phone"
            width={1800}
            height={1000}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Landing;
