"use client";

import React from "react";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Formik } from "formik";
import * as Yup from "yup";
import Input from "./Input";

interface FormValues {
  nameOnCard: string;
  expiryDate: string;
  cardNumber: string;
  cvv: "";
}

const Form = () => {
  const initialValues: FormValues = {
    nameOnCard: "",
    expiryDate: "",
    cardNumber: "",
    cvv: "",
  };

  const handleSubmit = (values: FormValues, { setSubmitting }: any) => {
    setSubmitting(false);
  };

  const validationSchema = Yup.object({
    nameOnCard: Yup.string().required("Required."),
    expiryDate: Yup.string().required("Required."),
    cardNumber: Yup.string().required("Required."),
    cvv: Yup.string().required("Required."),
  });

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
      }) => (
        <form
          onSubmit={handleSubmit}
          className="max-w-[300px] md:max-w-[400px]"
        >
          <div>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <Input
                id="nameOnCard"
                type="text"
                placeholder="Name On Card"
                className=""
                value={values.nameOnCard}
                onChange={handleChange}
                onBlur={handleBlur}
                valid={errors.nameOnCard && touched.nameOnCard}
                error={errors.nameOnCard}
              />
              <Input
                id="expiryDate"
                placeholder="Expiry Date"
                type="text"
                className=""
                value={values.expiryDate}
                onChange={handleChange}
                onBlur={handleBlur}
                valid={errors.expiryDate && touched.expiryDate}
                error={errors.expiryDate}
              />
            </div>
            <div className="grid grid-cols-2 gap-3 mb-10">
              <Input
                id="cardNumber"
                type="text"
                placeholder="Card Number"
                className=""
                value={values.cardNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                valid={errors.cardNumber && touched.cardNumber}
                error={errors.cardNumber}
              />
              <Input
                id="cvv"
                placeholder="CVV"
                type="text"
                className=""
                value={values.cvv}
                onChange={handleChange}
                onBlur={handleBlur}
                valid={errors.cvv && touched.cvv}
                error={errors.cvv}
              />
            </div>
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className="flex items-center gap-2 bg-gray-100 p-2 pr-5 mx-auto font-medium rounded-full hover:bg-[#2f834f] hover:text-white duration-300"
          >
            <BsArrowRightCircleFill size={30} /> <span>Complete Payment</span>
          </button>
        </form>
      )}
    </Formik>
  );
};

export default Form;
