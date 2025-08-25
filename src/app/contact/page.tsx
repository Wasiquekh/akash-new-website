"use client";

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaFacebookF, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { FiInstagram } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ---------- Form Types ----------
interface FormValues {
  name: string;
  email: string;
  phone: number | "";
  message: string;
}

// ---------- Yup Validation ----------
const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters")
    .required("Name is required"),

  email: Yup.string()
    .trim()
    .email("Invalid email address")
    .required("Email is required"),

  phone: Yup.string()
    .matches(/^[0-9]{10,15}$/, "Phone number must be 10–15 digits")
    .required("Phone number is required"),

  message: Yup.string().required("Message is required"),
});
// ---------- Page Component ----------
const Page = () => {
  const initialValues: FormValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const onSubmit = async (
    values: FormValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>
  ) => {
    console.log("from values", values);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values), // ✅ {name,email,phone,message}
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send message");
      }

      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        className: "bg-green-500 text-white",
      });

      resetForm();
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Something went wrong";

      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 3000,
        className: "bg-red-500 text-white",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <Header />

      {/* Banner Section */}
      <div className="bg-[url('/images/legal-consulting.jpg')] bg-cover bg-center">
        <div className="max-w-7xl m-auto px-5 py-15 md:py-40">
          <h1 className="sm:text-6xl text-2xl font-bold text-white mb-4 text-center">
            Contact
          </h1>
          <p className="mx-auto leading-relaxed text-sm font-normal text-white inter-text text-center">
            Get in touch with us to explore how AS Business Consulting can help
            your business grow and succeed.
          </p>
        </div>
      </div>

      {/* Decorative Shapes */}
      <section className="relative">
        <Image
          src="/images/leftShape.svg"
          alt="Left Shape"
          width={300}
          height={300}
          priority
          className="absolute left-0 top-0"
        />
        <Image
          src="/images/rightShape.svg"
          alt="Right Shape"
          width={300}
          height={300}
          priority
          className="absolute right-0 top-0"
        />
      </section>

      {/* Main Section */}
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="w-full">
            <p className="text-5xl text-primary mb-5 font-semibold">
              Connect with Our Team of Experts
            </p>

            <div className="mb-5">
              <p className="text-2xl text-black font-medium">Address</p>
              <p className="text-sm font-normal inter-text w-[80%]">
                21/3, Isha-krupa Apartment , Behind Sant Eknath Rangamandir
                Osmanpura, Aurangabad Mh (I) -431005
              </p>
            </div>

            <div className="mb-5 z-10">
              <p className="text-2xl text-black font-medium">Email Us</p>
              <p className="text-sm font-normal inter-text w-[80%]">
                akash.shahane@asbconsulting.in
              </p>
            </div>

            <div className="mb-5">
              <p className="text-2xl text-black font-medium">Call Us</p>
              <p className="text-sm font-normal inter-text w-[80%]">
                +91-9529322665
              </p>
            </div>

            <div className="flex gap-4 text-secondary mb-7">
              <FaFacebookF />
              <FiInstagram />
              <FaXTwitter />
              <FaLinkedin />
            </div>

            <div className="bg-tertiary w-full mt-0 relative p-7">
              <Image
                src="/images/join-team.png"
                alt="Join Team"
                width={300}
                height={300}
                priority
                className="absolute right-0 bottom-0 w-[85%] md:w-[55%]"
              />
              <p className="text-2xl font-medium text-black w-1/3 z-10">
                Want to join our Talented Team?
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full bg-tertiary py-6 px-4 md:px-12 rounded">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting, touched, errors }) => (
                <Form className="lg:w-full flex flex-col md:ml-auto w-full md:py-0 mt-8 md:mt-0 h-auto text-sm font-normal">
                  {/* Name */}
                  <div className="relative mb-4">
                    <label htmlFor="name" className="leading-7">
                      Name
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className={`w-full bg-white rounded border ${
                        touched.name && errors.name
                          ? "border-red-500"
                          : "border-gray-300"
                      } focus:border-tertiary focus:ring-1 focus:ring-secondary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                    />
                    <ErrorMessage
                      name="name"
                      component="p"
                      className="text-red-500 text-xs mt-1 absolute top-17"
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
                      className={`w-full bg-white rounded border ${
                        touched.email && errors.email
                          ? "border-red-500"
                          : "border-gray-300"
                      } focus:border-tertiary focus:ring-1 focus:ring-secondary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-red-500 text-xs mt-1 absolute top-17"
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative mb-4">
                    <label htmlFor="phone" className="leading-7">
                      Phone number
                    </label>
                    <Field
                      type="tel"
                      id="phone"
                      name="phone"
                      className={`w-full bg-white rounded border ${
                        touched.phone && errors.phone
                          ? "border-red-500"
                          : "border-gray-300"
                      } focus:border-tertiary focus:ring-1 focus:ring-secondary text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                    />
                    <ErrorMessage
                      name="phone"
                      component="p"
                      className="text-red-500 text-xs mt-1 absolute top-17"
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
                      className={`w-full bg-white rounded border ${
                        touched.message && errors.message
                          ? "border-red-500"
                          : "border-gray-300"
                      } focus:border-tertiary focus:ring-1 focus:ring-secondary h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
                    />
                    <ErrorMessage
                      name="message"
                      component="p"
                      className="text-red-500 text-xs mt-1 absolute top-38"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="text-white bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-primary rounded text-lg cursor-pointer"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Page;
