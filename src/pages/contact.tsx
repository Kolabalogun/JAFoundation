import React, { useEffect } from "react";
import Layout from "../components/container/layout";
import { SocialLinks } from "../components/common/footer/links";
import { toast } from "react-toastify";
import phone from "../assets/phone-solid - Copy.svg";
import mail from "../assets/envelope-solid - Copy.svg";
import location from "../assets/location-dot-solid - Copy.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { PageTye, useGlobalContext } from "../context/useGlobalContext";
import emailjs from "@emailjs/browser";

type Formd = {
  firstName: string;
  message: string;
  email: string;
};

const Contact: React.FC = () => {
  const { setpageType, homePageContent } = useGlobalContext();

  useEffect(() => {
    window.scroll(0, 0);
    setpageType(PageTye.contact);
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      message: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "Must be more than 2 character")
        .required("Please enter your name"),
      message: Yup.string()
        .min(5, "Must be more than 2 character")
        .required("Your message can't be empty"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email"),
    }),
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      sendEmail(values);
    },
  });

  const sendEmail = (values: Formd) => {
    const { firstName, message, email } = values;

    // let from_name = firstName;

    emailjs
      .send(
        "service_ouihur7",
        "template_005z03r",
        {
          email,
          from_name: firstName,
          message,
        },
        "93PBOefoL8el5j8ds"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          console.log("Email Sent");
          toast.success("Email Sent Successfully!");
        },
        function (error) {
          console.log("FAILED...", error);
          console.log("Email Failed!");
          toast.error("Email Fail to send. Try again later");
        }
      );
  };

  return (
    <Layout bannerTitle="Contact">
      <>
        <section className="center py-40">
          <div className="grid gap-16 xl:gap-0 xl:grid-cols-2">
            <div>
              <div className="">
                <p className="text-[#2d2d2d] text-2xl font-medium">
                  Get in touch with us.
                </p>
              </div>

              <div className="flex gap-4 mt-8">
                {SocialLinks.map((social) => (
                  <a
                    href={
                      social.title === "Twitter"
                        ? homePageContent?.twitterLink
                        : social.title === "Instagram"
                        ? homePageContent?.instagramLink
                        : homePageContent?.linkedInLink
                    }
                    className="border border-[#b21a86] rounded-md p-1 cursor-pointer"
                  >
                    <img
                      src={social.img2}
                      alt={social.title}
                      className="h-5 w-5"
                    />
                  </a>
                ))}
              </div>
              <div className="flex flex-col  gap-5 mt-8">
                <div className="flex items-center gap-5">
                  <img src={location} alt="" className="h-4" />
                  <p className="text-sm font-medium">
                    {homePageContent?.address || "Ilorin, Kwara State, Nigeria"}
                  </p>
                </div>
                <a href="" className="flex items-center gap-5">
                  <img src={phone} alt="" className="h-4" />
                  <p className="text-sm font-medium">
                    {homePageContent?.phoneNumber || "+1 234 5677 890"}
                  </p>
                </a>
                <a
                  href="mailto:jafoundationosun@gmail.com"
                  className="flex items-center gap-5"
                >
                  <img src={mail} alt="" className="h-4" />
                  <p className="text-sm font-medium">
                    {homePageContent?.email || "jafoundation@gmail.com"}
                  </p>
                </a>
              </div>
            </div>

            <div className="shadow-lg px-3 py-6 sm:p-6 xl:p-9 rounded bg-[#eff1f1]">
              <form
                className="flex flex-col gap-5 "
                onSubmit={formik.handleSubmit}
              >
                <div className="flex flex-col">
                  <label className="text-sm mb-1" htmlFor="firstName">
                    Your Name
                  </label>
                  <input
                    id="firstName"
                    className="border-[#eee] p-3 rounded border-2 outline-none"
                    type="text"
                    {...formik.getFieldProps("firstName")}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="text-red-500 py-2 text-sm font-medium">
                      {formik.errors.firstName}
                    </div>
                  ) : null}
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-sm mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    className="border-[#eee] p-3 rounded border-2 outline-none"
                    type="email"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500 py-2 text-sm font-medium">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>{" "}
                <div className="flex flex-col">
                  <label className="text-sm mb-1" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="border-[#eee] p-3 rounded border-2 outline-none"
                    rows={10}
                    {...formik.getFieldProps("message")}
                  />
                  {formik.touched.message && formik.errors.message ? (
                    <div className="text-red-500 py-2 text-sm font-medium">
                      {formik.errors.message}
                    </div>
                  ) : null}
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#ef2f96] via-[#b71a88] to-[#800579] py-4 px-8 rounded-full font-semibold w-48  text-white"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
};

export default Contact;
