"use client";

import { navItems } from "@/Data/navItems";
import { steps } from "@/Data/Map";
import { features } from "@/Data/Features";
import { onlineMenuFeatures } from "@/Data/PlansData";
import { useTranslation } from "react-i18next";

export const useTranslateNavItems = () => {
  const [t] = useTranslation("global");

  const translatedNavItems = navItems.map((navItem) => {
    return {
      ...navItem,
      name: t(`home.header.navItems.${navItem.link.slice(1)}`),
    };
  });

  return { translatedNavItems };
};

export const useTranslateSteps = () => {
  const [t] = useTranslation("global");

  const translatedSteps = steps.map((step) => {
    return {
      ...step,
      text: t(`home.map.${step.stepId}`),
    };
  });

  return { translatedSteps };
};

export const useTranslateFeatures = () => {
  const [t] = useTranslation("global");

  const translatedFeatures = features.map((feature) => {
    return {
      ...feature,
      title: t(`home.features.${feature.id}.title`),
      desc: t(`home.features.${feature.id}.desc`),
    };
  });

  return { translatedFeatures };
};

export const useTranslateOnlineMenuFeatures = () => {
  const [t] = useTranslation("global");

  const TranslatedOnlineMenuFeatures = onlineMenuFeatures.map((menuFeature) => {
    return {
      ...menuFeature,
      menuFeature: t(`home.pricing.planFeatures.${menuFeature.id}`),
    };
  });

  return { TranslatedOnlineMenuFeatures };
};
