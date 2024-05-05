"use client";

import React from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { RiCloseLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { toggleShow } from "@/store/reducers/sidebar";
import Image from "next/image";
import Link from "next/link";
import { useTranslateNavItems } from "@/hooks/useTranslate";
import { useTranslation } from "react-i18next";

const SideBar = () => {
  const sideBarElement = document.getElementById("sidebar")!;
  const dispatch = useDispatch();
  const { translatedNavItems } = useTranslateNavItems();
  const [t, i18n] = useTranslation("global");

  return createPortal(
    <motion.div
      initial={{ x: "500px" }}
      animate={{ x: 0 }}
      exit={{ x: "500px" }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 right-0 z-20 bg-[#dceed8] h-screen w-9/12 rounded-l-2xl overflow-hidden background-9"
      style={{ backgroundImage: "url(/logo/4.png)" }}
      dir={i18n.language == "ar" ? "rtl" : "ltr"}
    >
      <div className="h-full w-full flex flex-col gap-5">
        <div className="flex justify-between items-center bg-white w-full px-6 py-4 rounded-b-2xl mb-4">
          <motion.div
            whileHover={{ scale: 1.3, color: "red" }}
            onClick={() => dispatch(toggleShow())}
          >
            <RiCloseLine />
          </motion.div>
          <div className="w-[75px]">
            <Image
              src="/logo/5.png"
              alt="logo"
              width={150}
              height={150}
              className="object-cover"
            />
          </div>
        </div>
        {translatedNavItems.map((navItem, index) => (
          <Link
            href={navItem.link}
            key={index}
            onClick={() => dispatch(toggleShow())}
          >
            <motion.div
              whileHover={{
                backgroundColor: "#2f834f4f",
                paddingBottom: "10px",
                paddingTop: "10px",
              }}
              className="flex items-center px-6 gap-4"
            >
              <span className="text-[26px]">{navItem.icon}</span>
              <p>{navItem.name}</p>
            </motion.div>
          </Link>
        ))}
        <div className="px-12 flex-1 flex flex-col justify-end pb-12">
          <Link href="/signup">
            <p className="w-full h-10 flex justify-center items-center pb-1 rounded-3xl text-white text-md font-semibold bg-[#2f834f] hover:bg-white hover:text-[#2f834f] duration-300">
              {t("home.header.button2")}
            </p>
          </Link>
        </div>
      </div>
    </motion.div>,
    sideBarElement
  );
};

export default SideBar;
