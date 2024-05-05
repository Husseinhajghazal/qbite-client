"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import { BiMailSend } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

interface FormValues {
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [t, i18n] = useTranslation("global");

  const initialValues: FormValues = {
    email: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Required.")
      .email("Please enter a valid email."),
    subject: Yup.string().required("Required."),
    message: Yup.string().required("Required."),
  });

  const onSubmit = (values: FormValues) => {
    toast.success(t("home.contact.form.success"));
    resetForm();
  };

  const {
    isSubmitting,
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <form
      onSubmit={handleSubmit}
      dir={i18n.language == "ar" ? "rtl" : "ltr"}
      className="lg:w-8/12 bg-white py-8 px-10 rounded-b-2xl lg:rounded-s-2xl flex flex-col text-center"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg lg:text-2xl">{t("home.contact.form.h3")}</h3>
        <BiMailSend color="#71c381" size={40} />
      </div>
      <div className="flex flex-col lg:flex-row gap-5 mb-4">
        <TextField
          type="email"
          name="email"
          label={t("home.contact.form.input1")}
          id="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(errors.email && touched.email)}
          helperText={errors.email}
          variant="standard"
          color="success"
          style={{ flex: 1 }}
          dir={i18n.language == "ar" ? "rtl" : "ltr"}
        />
        <TextField
          type="text"
          name="subject"
          label={t("home.contact.form.input2")}
          id="subject"
          value={values.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          error={Boolean(errors.subject && touched.subject)}
          helperText={errors.subject}
          variant="standard"
          color="success"
          style={{ flex: 1 }}
          dir={i18n.language == "ar" ? "rtl" : "ltr"}
        />
      </div>
      <TextField
        name="message"
        label={t("home.contact.form.input3")}
        id="message"
        value={values.message}
        onChange={handleChange}
        onBlur={handleBlur}
        error={Boolean(errors.message && touched.message)}
        helperText={errors.message}
        variant="standard"
        color="success"
        className="mb-8"
        multiline
        rows={4}
        dir={i18n.language == "ar" ? "rtl" : "ltr"}
      />
      <button
        type="submit"
        className="mx-auto w-36 h-12 flex justify-center items-center pb-1 border-[#fff] bg-[#2f834f] border-2 rounded-3xl text-[#fff] text-xl font-semibold hover:bg-[#fff] hover:text-[#2f834f] hover:border-[#2f834f] duration-300"
        disabled={isSubmitting}
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
