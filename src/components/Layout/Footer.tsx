"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { contactItems } from "@/Data/navItems";
import { motion } from "framer-motion";
import { INavItem } from "@/types/navItems";
import { useTranslation } from "react-i18next";
import { useTranslateNavItems } from "@/hooks/useTranslate";
import { useRouter } from "next/navigation";

const Footer = () => {
  const [t, i18n] = useTranslation("global");
  const router = useRouter();
  const { translatedNavItems } = useTranslateNavItems();

  const renderNavItem = (item: INavItem, index: number) => (
    <motion.div key={index} whileHover={{ scale: 1.05 }}>
      <Link
        href={item.link}
        className="flex items-center gap-2 text-lg text-[#2f834f]"
      >
        {item.icon} <p className="text-gray-500">{item.name}</p>
      </Link>
    </motion.div>
  );

  return (
    <footer
      dir={i18n.language == "ar" ? "rtl" : "ltr"}
      className="bg-white px-12 lg:px-32 divide-y-2 background-6"
      style={{ backgroundImage: "url(/effects/circles-1.png)" }}
    >
      <div className="flex flex-col gap-6 md:flex-row lg:gap-0 justify-between items-center pb-10">
        <h2 className="md:text-lg lg:text-2xl font-medium lg:font-semibold">
          {t("home.footer.h2.1")}{" "}
          <span className="text-[#2f834f]">{t("home.footer.h2.2")}</span>
          {t("home.footer.h2.3")}
        </h2>
        <button
          type="button"
          onClick={() => router.push("/signup")}
          className="w-32 h-9 lg:w-40 lg:h-12 flex justify-center items-center pb-1 border-[#2f834f] bg-[#fff] border-2 rounded-3xl text-[#2f834f] text-md lg:text-xl font-medium lg:font-semibold hover:bg-[#2f834f] hover:text-[#fff] duration-300"
        >
          {t("home.footer.button")}
        </button>
      </div>
      <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-10 gap-10">
        <div>
          <Image
            src="/logo/5.png"
            alt="logo"
            width={150}
            height={75}
            className="mb-4"
          />
          <p className="text-sm lg:text-lg text-gray-500">
            {t("home.footer.p")}
          </p>
        </div>
        <div>
          <h3 className="text-2xl text-[#2f834f] font-semibold mb-4">
            {t("home.footer.h3.1")}
          </h3>
          <div>
            {translatedNavItems.map((navItem, index) =>
              renderNavItem(navItem, index)
            )}
          </div>
        </div>
        <div>
          <h3 className="text-2xl text-[#2f834f] font-semibold mb-4">
            {t("home.footer.h3.2")}
          </h3>
          <div>
            {contactItems.map((contactItem, index) =>
              renderNavItem(contactItem, index)
            )}
          </div>
        </div>
        <div>
          <h3 className="text-2xl text-[#2f834f] font-semibold mb-4">
            {t("home.footer.h3.3")}
          </h3>
          <div className="flex flex-col gap-2"></div>
        </div>
      </div>
      <div dir="ltr" className="text-sm md:text-lg pt-10 text-center pb-10">
        &copy; 2023, Reserved by Hussein & Mohamad.
      </div>
    </footer>
  );
};

export default Footer;
