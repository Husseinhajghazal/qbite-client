"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { toggleShow } from "@/store/reducers/sidebar";
import { useTranslation } from "react-i18next";
import { useTranslateNavItems } from "@/hooks/useTranslate";

const Header = () => {
  const dispatch = useDispatch();
  const [t, i18n] = useTranslation("global");
  const { translatedNavItems } = useTranslateNavItems();

  return (
    <header
      dir={i18n.language == "ar" ? "rtl" : "ltr"}
      className="bg-[#dceed8] px-8 md:px-12 lg:px-24 flex justify-between items-center py-4"
    >
      <Link
        data-aos={i18n.language == "ar" ? "fade-left" : "fade-right"}
        href="/"
      >
        <div className="w-[75px] md:w-[100px] lg:w-[150px]">
          <Image
            src="/logo/5.png"
            alt="logo"
            width={150}
            height={150}
            className="object-cover"
          />
        </div>
      </Link>
      <nav className="hidden md:flex gap-4 lg:gap-8 font-semibold items-center">
        {translatedNavItems.map((navItem, index) => (
          <Link
            key={index}
            href={navItem.link}
            className="hover:text-[#2f834f] duration-300"
          >
            {navItem.name}
          </Link>
        ))}
      </nav>
      <div className="flex gap-2">
        <Link
          data-aos={i18n.language == "ar" ? "fade-right" : "fade-left"}
          href="https://qbite-client-husseinhajghazals-projects.vercel.app/"
          target="_blank"
        >
          <p className="w-24 h-8 lg:w-28 lg:h-12 hidden md:flex justify-center items-center pb-1 border-[#2f834f] bg-[#2f834f] border-2 rounded-3xl text-white text-md font-semibold hover:bg-transparent hover:text-[#2f834f] duration-300">
            {t("home.header.button1")}
          </p>
        </Link>
        <Link
          data-aos={i18n.language == "ar" ? "fade-right" : "fade-left"}
          href="/signup"
        >
          <p className="w-24 h-8 lg:w-28 lg:h-12 hidden md:flex justify-center items-center pb-1 border-[#2f834f] border-2 rounded-3xl text-[#2f834f] text-md font-semibold hover:bg-[#2f834f] hover:text-white duration-300">
            {t("home.header.button2")}
          </p>
        </Link>
      </div>
      <button
        data-aos={i18n.language == "ar" ? "fade-right" : "fade-left"}
        className="block md:hidden text-2xl"
        onClick={() => dispatch(toggleShow())}
      >
        <RxHamburgerMenu />
      </button>
    </header>
  );
};

export default Header;
