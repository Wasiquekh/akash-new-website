"use client";

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  message: Yup.string().required("Message is required"),
});

const handleSubmit = async (
  values: FormValues,
  actions: FormikHelpers<FormValues>
) => {
  //  console.log("Form submitted with values:", values);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values), // { name, email, phone, message }
    });

    if (!response.ok) {
      let message = "Failed to send message";
      try {
        const data = await response.json();
        if (data?.message) message = data.message;
      } catch {
        /* ignore JSON parse errors */
      }
      throw new Error(message);
    }

    toast.success("Message sent successfully!", {
      position: "top-right",
      autoClose: 3000,
      className: "bg-green-500 text-white",
    });

    actions.resetForm();
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Something went wrong";

    toast.error(errorMessage, {
      position: "top-right",
      autoClose: 3000,
      className: "bg-red-500 text-white",
    });
  } finally {
    actions.setSubmitting(false);
  }
};

const ContactFrom = () => {
  return (
    <div>
      <ToastContainer />
      <section className=" relative">
        <div className="container flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative h-[477px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.2501578787014!2d75.32740617522569!3d19.871656081503705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb987aabbbf009%3A0x160700960ac3da52!2sIsha%20Krupa%20Apartment!5e0!3m2!1sen!2sin!4v1754303991899!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md z-10">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  21/3, Isha-krupa Apartment , Behind Sant Eknath Rangamandir
                  Osmanpura, Aurangabad Mh (I) -431005
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  akash.shahane@asbconsulting.in
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">+91-9529322665</p>
              </div>
            </div>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-0 mt-8 md:mt-0 h-auto text-sm font-normal">
                {/* Name */}
                <div className="relative mb-4">
                  <label htmlFor="name" className="leading-7">
                    Name
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-tertiary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-600 text-xs mt-1 absolute top-17"
                  />
                </div>

                {/* Email */}
                <div className="relative mb-4">
                  <label htmlFor="email" className="leading-7">
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-tertiary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-600 text-xs mt-1 absolute top-17"
                  />
                </div>

                {/* Phone */}
                <div className="relative mb-4">
                  <label htmlFor="phone" className="leading-7">
                    Phone number
                  </label>
                  <Field
                    type="text"
                    id="phone"
                    name="phone"
                    className="w-full bg-white rounded border border-gray-300 focus:border-tertiary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-600 text-xs mt-1 absolute top-17"
                  />
                </div>

                {/* Message */}
                <div className="relative mb-4">
                  <label htmlFor="message" className="leading-7 text-sm">
                    Message
                  </label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    className="w-full bg-white rounded border border-gray-300 focus:border-tertiary focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-600 text-xs mt-1 absolute top-38"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-white bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-primary rounded text-lg disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting…" : "Submit"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </div>
  );
};

export default ContactFrom;
