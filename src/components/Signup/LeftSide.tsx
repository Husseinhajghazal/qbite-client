"use client";

import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { GiClick } from "react-icons/gi";
import Image from "next/image";
import { TbDeviceIpadQuestion } from "react-icons/tb";
import { RiRefund2Fill } from "react-icons/ri";
import { useTranslation } from "react-i18next";

const LeftSide = ({ step }: { step: number }) => {
  const [t] = useTranslation("global");

  return (
    <React.Fragment>
      <div
        data-aos="fade-right"
        className="w-[75px] md:w-[100px] absolute top-3 left-3"
      >
        <Image
          src="/logo/5.png"
          alt="logo"
          width={150}
          height={150}
          className="object-cover"
        />
      </div>
      <div className="bg-white rounded-full h-[400px] w-[50%] md:h-[600px] md:w-[35%] overflow-hidden flex flex-col items-center justify-center z-10 shadow-inner">
        {step == 1 && (
          <div data-aos="fade-right" className="w-[400px]">
            <Image
              src="/signup/signup.png"
              alt="signup"
              width={2000}
              height={2000}
              className="object-cover"
            />
          </div>
        )}
        {step == 2 && (
          <div data-aos="fade-right" className="w-[400px]">
            <Image
              src="/signup/plan.png"
              alt="signup"
              width={2000}
              height={2000}
              className="object-cover"
            />
          </div>
        )}
        {step == 3 && (
          <div data-aos="fade-right" className="w-[400px]">
            <Image
              src="/signup/payment.png"
              alt="signup"
              width={2000}
              height={2000}
              className="object-cover"
            />
          </div>
        )}
      </div>
      {step == 1 && (
        <div
          data-aos="fade-left"
          className="absolute z-20 md:font-medium p-2 md:p-3 bg-[#2f834f] rounded-full text-white flex items-center gap-2 shadow-md right-[8%] md:right-[20%] top-3/4"
        >
          q-bite.net/signup <FiExternalLink />
        </div>
      )}
      {step == 1 && (
        <div
          data-aos="fade-left"
          className="absolute font-medium p-3 bg-[#2f834f] rounded-full text-white left-[15%] md:left-[28%] top-[60%] shadow-lg"
        >
          <div className="w-[35px]">
            <Image
              src="/logo/1.png"
              alt="logo"
              width={150}
              height={150}
              className="object-cover"
            />
          </div>
        </div>
      )}
      {step == 1 && (
        <div
          data-aos="fade-right"
          className="absolute z-20 md:font-medium p-2 lg:p-3 bg-[#2f834f] rounded-full text-white flex items-center gap-2 left-[10%] top-[20%] lg:left-[15%] lg:top-[30%] shadow-lg"
        >
          {t("signup.firstForm.slogan")} <GiClick />
        </div>
      )}
      {step == 2 && (
        <div
          data-aos="fade-left"
          className="absolute z-20 md:font-medium p-2 md:p-3 bg-[#2f834f] rounded-full text-white flex items-center gap-2 shadow-md right-[8%] md:right-[20%] top-3/4"
        >
          q-bite.net/plan <FiExternalLink />
        </div>
      )}
      {step == 2 && (
        <div
          data-aos="fade-left"
          className="absolute font-medium p-3 bg-[#2f834f] rounded-full text-white left-[15%] md:left-[28%] top-[60%] shadow-lg"
        >
          <div className="w-[35px]">
            <Image
              src="/logo/1.png"
              alt="logo"
              width={150}
              height={150}
              className="object-cover"
            />
          </div>
        </div>
      )}
      {step == 2 && (
        <div
          data-aos="fade-right"
          className="absolute z-20 md:font-medium p-2 lg:p-3 bg-[#2f834f] rounded-full text-white flex items-center gap-2 left-[10%] top-[20%] lg:left-[15%] lg:top-[30%] shadow-lg"
        >
          {t("signup.secondForm.slogan")} <TbDeviceIpadQuestion />
        </div>
      )}
      {step == 3 && (
        <div
          data-aos="fade-left"
          className="absolute z-20 md:font-medium p-2 md:p-3 bg-[#2f834f] rounded-full text-white flex items-center gap-2 shadow-md right-[8%] md:right-[20%] top-3/4"
        >
          q-bite.net/payment <FiExternalLink />
        </div>
      )}
      {step == 3 && (
        <div
          data-aos="fade-left"
          className="absolute font-medium p-3 bg-[#2f834f] rounded-full text-white left-[15%] md:left-[28%] top-[60%] shadow-lg"
        >
          <div className="w-[35px]">
            <Image
              src="/logo/1.png"
              alt="logo"
              width={150}
              height={150}
              className="object-cover"
            />
          </div>
        </div>
      )}
      {step == 3 && (
        <div
          data-aos="fade-right"
          className="absolute z-20 md:font-medium p-2 lg:p-3 bg-[#2f834f] rounded-full text-white flex items-center gap-2 left-[10%] top-[20%] lg:left-[15%] lg:top-[30%] shadow-lg"
        >
          Refund is available <RiRefund2Fill />
        </div>
      )}
    </React.Fragment>
  );
};

export default LeftSide;
