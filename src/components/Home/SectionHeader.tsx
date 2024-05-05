"use client";

import React from "react";
import { ISectionTitle } from "@/types/Home";

const SectionHeader: React.FC<ISectionTitle> = ({
  sectionName,
  firstTitle,
  secondTitle,
  firstLine,
  secondLine,
}) => (
  <>
    <h4 className="bg-white mb-4 text-[#2f834f] py-2 px-6 rounded-3xl border-[#2f834f] border-2 font-semibold">
      {sectionName}
    </h4>
    <h2 className="text-center text-[25px] md:text-[50px] font-medium md:font-semibold mb-4 md:mb-8">
      {firstTitle}
      <br />
      <span className="text-[#2f834f]">{secondTitle}</span>
    </h2>
    <p className="text-center mb-6 md:mb-12">
      {firstLine}
      <br />
      {secondLine}
    </p>
  </>
);

export default SectionHeader;
