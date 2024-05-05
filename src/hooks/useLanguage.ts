"use client";

import { useState, useEffect } from "react";

const useLanguage = () => {
  const [language, setLanguage] = useState("");
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (language.length === 0) {
      if (storedLanguage) {
        setLanguage(storedLanguage);
      } else {
        setLanguage("En");
      }
    } else {
      localStorage.setItem("language", language);
    }
  }, [language]);
  return { language, setLanguage };
};
export default useLanguage;
