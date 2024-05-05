"use client";

import React, { useState } from "react";
import LeftSide from "@/components/Signup/LeftSide";
import Navigation from "@/components/Signup/Navigation";
import HelpBtns from "@/components/Signup/HelpBtns";
import Head from "@/components/Signup/Head";
import Head2 from "@/components/Signup/Head2";
import Form1 from "@/components/Signup/Form1";
import Form2 from "@/components/Signup/Form2";
import useShowAfter from "@/hooks/useShowAfter";
import { useTranslation } from "react-i18next";
import HomeLanguageSwitcher from "../Buttons/HomeLanguageSwitcher";

const SignupPage = () => {
  const [step, setStep] = useState(1);
  const { showAfter } = useShowAfter({ time: 0 });
  const [t, i18n] = useTranslation("global");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="bg-[#dceed8] hidden lg:flex items-center justify-center relative py-10 lg:py-0">
        <LeftSide step={step} />
      </div>
      <div className="bg-white p-5 h-screen flex flex-col items-center justify-between">
        <HelpBtns
          step={step}
          prevStep={() => {
            if (step > 1) setStep(step - 1);
          }}
        />
        {step == 1 && (
          <div dir={i18n.language == "ar" ? "rtl" : "ltr"} data-aos="fade-left">
            <Head p1={t("signup.firstForm.p1")} p2={t("signup.firstForm.p2")} />
            <Form1 nextStep={() => setStep(2)} />
          </div>
        )}
        {step == 2 && (
          <div data-aos="fade-left" className="w-full">
            <Head2
              p1={t("signup.secondForm.p1")}
              p2={t("signup.secondForm.p2")}
            />
            <Form2 nextStep={() => setStep(3)} />
          </div>
        )}
        <Navigation step={step} />
      </div>
      {showAfter && <HomeLanguageSwitcher x="left" y="bottom" />}
    </div>
  );
};

export default SignupPage;
