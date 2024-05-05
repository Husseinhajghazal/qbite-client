"use client";

import { useState } from "react";
import { useTranslateOnlineMenuFeatures } from "./useTranslate";

const useSeeFeatures = (number: number) => {
  const { TranslatedOnlineMenuFeatures } = useTranslateOnlineMenuFeatures();
  const [numberOfFeatures, setNumberOfFeatures] = useState(number);

  const setFeatures10 = () => setNumberOfFeatures(5);
  const setFeatures3 = () => setNumberOfFeatures(3);

  const opened = numberOfFeatures === 3;

  let features = TranslatedOnlineMenuFeatures.slice(0, numberOfFeatures);

  return { features, setFeatures10, setFeatures3, opened };
};

export default useSeeFeatures;
