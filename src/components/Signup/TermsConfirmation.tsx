"use client";

import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { BsFillCheckSquareFill, BsSquare } from "react-icons/bs";
import Terms from "./Terms";
import Background from "../background/BackgroundTerms";
import { useTranslation } from "react-i18next";

interface Props {
  value: boolean;
  onChange: () => void;
  error: string | undefined;
}

const TermsConfirmation: React.FC<Props> = ({ value, onChange, error }) => {
  const [touched, setTouched] = useState(false);
  const [open, setOpen] = useState(false);
  const [t, i18n] = useTranslation("global");

  return (
    <React.Fragment>
      <div id="termsConfirmation" className="flex flex-col mb-10">
        <div className="flex gap-2 items-center">
          {value ? (
            <BsFillCheckSquareFill
              color="#71c381"
              size={18}
              onClick={() => {
                onChange();
                setTouched(true);
              }}
            />
          ) : (
            <BsSquare
              onClick={() => {
                onChange();
                setTouched(true);
              }}
              color={error && touched ? "#ff4a4a" : "#71c381"}
              size={18}
            />
          )}
          <p className={`${error && touched && "text-[#ff4a4a]"}`}>
            {t("signup.firstForm.TermsConfirmation.part1")}
            <button
              className="underline duration-300"
              type="button"
              onClick={() => setOpen(!open)}
            >
              {t("signup.firstForm.TermsConfirmation.part2")}
            </button>
          </p>
        </div>
        {error && touched && (
          <p className="text-[12px] text-[#ff4a4a]">{error}</p>
        )}
      </div>
      <AnimatePresence>
        {open && (
          <Terms
            onClick={() => {
              onChange();
              setOpen(!open);
            }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {open && <Background onClick={() => setOpen(!open)} />}
      </AnimatePresence>
    </React.Fragment>
  );
};

export default TermsConfirmation;
