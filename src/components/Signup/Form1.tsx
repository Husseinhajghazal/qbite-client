"use client";

import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Formik } from "formik";
import * as Yup from "yup";
import TermsConfirmation from "./TermsConfirmation";
import Input from "./Input";
import { useTranslation } from "react-i18next";

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
  termsConfirmation: boolean;
}

const Form = ({ nextStep }: { nextStep: () => void }) => {
  const [t, i18n] = useTranslation("global");

  const initialValues: FormValues = {
    email: "",
    password: "",
    confirmPassword: "",
    termsConfirmation: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Required.")
      .email("Plese enter a valid email."),
    password: Yup.string()
      .required("Required.")
      .min(8, "Min length of the password should be 8.")
      .max(16, "Max length of the password should be 16.")
      .matches(
        /(?=.*?[A-Z])/g,
        "Password should contain at least 1 big letter."
      )
      .matches(
        /(?=.*?[a-z])/g,
        "Password should contain at least 1 small letter."
      )
      .matches(/(?=.*?[0-9])/g, "Password should contain at least 1 number."),
    confirmPassword: Yup.string()
      .required("Required.")
      .oneOf([Yup.ref("password")], "Passwords must match."),
    termsConfirmation: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions."
    ),
  });

  const handleSubmit = (values: FormValues) => {
    const userData = {
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
      termsConfirmation: values.termsConfirmation,
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    nextStep();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        isSubmitting,
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
      }) => (
        <form
          onSubmit={handleSubmit}
          className="max-w-[300px] md:max-w-[400px]"
        >
          <div>
            <Input
              id="email"
              type="email"
              className="mb-5"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              valid={errors.email && touched.email}
              error={errors.email}
              placeholder={t("signup.firstForm.input1")}
            />
            <div className="grid grid-cols-2 gap-5 mb-3">
              <Input
                id="password"
                type="password"
                placeholder={t("signup.firstForm.input2")}
                className=""
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                valid={errors.password && touched.password}
                error={errors.password}
              />
              <Input
                id="confirmPassword"
                placeholder={t("signup.firstForm.input3")}
                type="password"
                className=""
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                valid={errors.confirmPassword && touched.confirmPassword}
                error={errors.confirmPassword}
              />
            </div>
            <TermsConfirmation
              value={values.termsConfirmation}
              onChange={() => {
                setFieldValue("termsConfirmation", true);
              }}
              error={errors.termsConfirmation}
            />
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className="flex items-center gap-2 bg-gray-100 p-2 pr-5 mx-auto font-medium rounded-full hover:bg-[#2f834f] hover:text-white duration-300"
          >
            <BsArrowRightCircleFill size={30} />{" "}
            <span>{t("signup.firstForm.button")}</span>
          </button>
        </form>
      )}
    </Formik>
  );
};

export default Form;
