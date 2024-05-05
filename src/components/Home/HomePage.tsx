"use client";

import React from "react";
import Landing from "@/components/Home/Landing";
import Demo from "@/components/Home/Demo";
import Participating from "@/components/Home/Participating";
import Features from "@/components/Home/Features";
import Pricing from "@/components/Home/Pricing";
import Map from "@/components/Home/Map";
import Contact from "@/components/Home/Contact";
import WhyUs from "@/components/Home/WhyUs";
import { AnimatePresence } from "framer-motion";
import SideBar from "@/components/SideBar/SideBar";
import BackgroundSideBar from "@/components/background/BackgroundSideBar";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";
import useShowAfter from "@/hooks/useShowAfter";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import HomeLanguageSwitcher from "../Buttons/HomeLanguageSwitcher";

const Home = () => {
  const show = useSelector((state: RootState) => state.sideBar.show);
  const { showAfter } = useShowAfter({ time: 0 });

  return (
    <>
      <Header />
      <Landing />
      <Participating />
      <Features />
      <Demo />
      <Pricing />
      <Map />
      <WhyUs />
      <Contact />
      <AnimatePresence>{show && <SideBar />}</AnimatePresence>
      <AnimatePresence>{show && <BackgroundSideBar />}</AnimatePresence>
      {showAfter && <HomeLanguageSwitcher x="left" y="bottom" />}
      <Footer />
    </>
  );
};

export default Home;
