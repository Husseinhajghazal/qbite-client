"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { contactItems } from "@/Data/navItems";
import ContactForm from "./ContactForm";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section
      className="px-10 lg:px-0 h-fit py-[80px] flex flex-col items-center"
      style={{
        background: "linear-gradient(to bottom, #dceed8 70%, white 30%)",
      }}
      id="contactus"
      dir={i18n.language == "ar" ? "rtl" : "ltr"}
    >
      <SectionHeader
        sectionName={t("home.contact.head.sectionName")}
        firstTitle={t("home.contact.head.firstTitle")}
        secondTitle={t("home.contact.head.secondTitle")}
        firstLine={t("home.contact.head.firstLine")}
        secondLine={t("home.contact.head.secondLine")}
      />
      <div
        data-aos="fade-left"
        className="md:w-[600px] lg:w-[1000px] flex flex-col-reverse lg:flex-row shadow-lg rounded-2xl"
      >
        <ContactForm />
        <div
          className="bg-[#2f834f] py-8 px-10 flex flex-col text-white lg:w-4/12 gap-12 background-5 lg:rounded-e-2xl"
          style={{ backgroundImage: "url(/logo/4.png)" }}
        >
          <h4 className="text-2xl">
            {t("home.contact.contactinformation.h4")}
          </h4>
          <div className="flex flex-col gap-6">
            {contactItems.slice(0, 2).map((contactItem, index) => (
              <p
                key={index}
                className="flex items-center gap-3 text-[24px] text-[#7de05f]"
              >
                {contactItem.icon}
                <Link
                  dir="ltr"
                  href={contactItem.link}
                  className="text-lg text-white"
                >
                  {contactItem.name}
                </Link>
              </p>
            ))}
          </div>
          <div className="flex gap-6">
            {contactItems.slice(2, 4).map((contactItem, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, color: "white" }}
                whileTap={{ scale: 0.9 }}
                className="text-[#7de05f] text-[24px]"
              >
                <Link href={contactItem.link}>{contactItem.icon}</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
