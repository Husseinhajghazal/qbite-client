"use client";

import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Formik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { AiFillCheckCircle } from "react-icons/ai";
import { toast } from "react-toastify";
import { useMutation } from "@tanstack/react-query";
import usePending from "@/hooks/usePending";
import signup from "@/services/signup";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import useSeeFeatures from "@/hooks/useSeeFeatures";

interface FormValues {
  plan: string;
}

const Form = ({ nextStep }: { nextStep: () => void }) => {
  const [t, i18n] = useTranslation("global");
  const { features } = useSeeFeatures(5);
  const router = useRouter();

  const initialValues: FormValues = {
    plan: localStorage.getItem("plan") as string | "Free Trail",
  };

  const validationSchema = Yup.object({
    plan: Yup.string().required("You've to choose one plan"),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: ({
      email,
      password,
      planVersionId,
      termsAndConditions,
    }: {
      email: string;
      password: string;
      planVersionId: number;
      termsAndConditions: boolean;
    }) => signup(email, password, planVersionId, termsAndConditions),
    onError: (error: { response: { data: { message: string } } }) => {
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      Swal.fire({
        title: t("signup.secondForm.popup.title"),
        text: t("signup.secondForm.popup.text"),
        icon: "success",
        confirmButtonText: t("signup.secondForm.popup.confirmButtonText"),
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.clear();
          router.replace("https://admin.q-bite.net/signup");
        }
      });
    },
  });

  const handleSubmit = async (values: FormValues) => {
    const userData = JSON.parse(localStorage.getItem("userData")!);

    mutate({
      email: userData.email,
      password: userData.password,
      planVersionId: 1,
      termsAndConditions: userData.termsConfirmation,
    });
  };

  usePending({ isPending, message: "Creating Your Account" });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values, handleSubmit, setFieldValue }) => (
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4 w-full">
            <div className="flex justify-end gap-2 md:gap-4 w-full py-3 text-sm md:text-[15px]">
              <span>
                <button
                  type="button"
                  className={`text-white py-1 px-2 md:py-2 md:px-4 rounded-xl ${
                    values.plan == "Free Trail"
                      ? "bg-[#2f834f]"
                      : "bg-[#2f834f82]"
                  }`}
                  onClick={() => setFieldValue("plan", "Free Trail")}
                >
                  Free Trail
                </button>
              </span>
              <span>
                <button
                  type="button"
                  className={`text-white py-1 px-2 md:py-2 md:px-4 rounded-xl ${
                    values.plan == "Basic" ? "bg-[#2f834f]" : "bg-[#2f834f82]"
                  }`}
                >
                  Basic
                </button>
              </span>
              <span className="pr-4">
                <button
                  type="button"
                  className={`text-white py-1 px-2 md:py-2 md:px-4 rounded-xl ${
                    values.plan == "Premium" ? "bg-[#2f834f]" : "bg-[#2f834f82]"
                  }`}
                >
                  Premium
                </button>
              </span>
            </div>
            <div className="flex flex-col w-full px-[1.4rem] divide-y-2">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex justify-between pl-[0.8rem] pr-8 py-3"
                >
                  <h3 className="text-[12px] md:text-[16px]">
                    {feature.menuFeature}
                  </h3>
                  <div className="flex gap-[2.5rem] md:gap-[4.5rem]">
                    <AiFillCheckCircle
                      color={`${
                        values.plan == "Free Trail" ? "#2f834f" : "#2f834f82"
                      }`}
                      size={20}
                    />
                    <AiFillCheckCircle
                      color={`${
                        values.plan == "Basic" ? "#2f834f" : "#2f834f82"
                      }`}
                      size={20}
                    />
                    <AiFillCheckCircle
                      color={`${
                        values.plan == "Premium" ? "#2f834f" : "#2f834f82"
                      }`}
                      size={20}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className="flex items-center gap-2 bg-gray-100 p-2 pr-5 mx-auto font-medium rounded-full hover:bg-[#2f834f] hover:text-white duration-300"
          >
            <BsArrowRightCircleFill size={30} />{" "}
            <span>{t("signup.secondForm.button")}</span>
          </button>
        </form>
      )}
    </Formik>
  );
};

export default Form;
