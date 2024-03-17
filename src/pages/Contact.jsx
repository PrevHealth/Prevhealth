import React, { useState } from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../context/LanguageContext";
import { ContactEnglishData, ContactSwedishData } from "../Data/ContactData";

const Contact = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    message: "",
  });

  const [showToast, setShowToast] = useState(false);
  const [showError, setShowError] = useState(false);
  const YOUR_SERVICE_ID = import.meta.env.VITE_YOUR_SERVICE_ID;
  const YOUR_TEMPLATE_ID = import.meta.env.VITE_YOUR_TEMPLATE_ID;
  const YOUR_USER_ID = import.meta.env.VITE_YOUR_USER_ID;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    emailjs
      .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, formData, YOUR_USER_ID)
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          // Clear form fields after successful submission
          setShowToast(true);
          setFormData({
            name: "",
            email: "",
            companyName: "",
            message: "",
            country: "",
          });
          setTimeout(() => {
            setShowToast(false);
          }, 3000);
        },
        (error) => {
          console.error("Email sending failed:", error);
          setShowError(true);
          setTimeout(() => {
            setShowError(false);
          }, 3000);
        }
      );
  };
  let data;
  switch (language) {
    // Default to English if language not found
    case "en":
      data = ContactEnglishData;
      break;
    case "swe":
      data = ContactSwedishData;
      break;
    default:
      data = ContactEnglishData;
  }

  return (
    <section id="contact">
      <Container className="">
        <div className="lg:min-h-screen overflow-hidden mt-10">
          <div className="flex mt-12 max-w-[1330px] lg:max-h-screen  flex-col-reverse lg:flex-row gap-5 lg:gap-0 mx-auto  ">
            <div
              className={`lg:w-full w-full h-screen rounded-lg lg:max-h-[45rem] bg-[url("/Contact/contact.png")] bg-cover lg:bg-bottom bg-no-repeat flex flex-col p-5 `}
            >
              <h1 className=" fonta ">
                {language === "en" && "Contact Us"}
                {language === "swe" && "Kontakta oss"}
              </h1>
              <p className=" mt-5 fontb text-primary">
                {language === "en" && "We'd love to hear from you"}
                {language === "swe" && "Vi skulle älska att höra från dig"}
              </p>
              <div>
                <div className=" flex flex-col items-start gap-5 bg-blak mt-6">
                  <div className="flex gap-3">
                    <div>
                      <img src="/Contact/icon1.png" alt="" />
                    </div>
                    <span>contact@preveu.com</span>
                  </div>
                  <div className="flex gap-5">
                    <div>
                      <img src="/Contact/icon2.png" alt="" />
                    </div>
                    <span className="">
                      Idungränd 8,
                      <br />
                      187 73 Täby
                      <br />
                      Sweden
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-full lg:max-h-[1000px] lg:p-10 ">
              <div className="lg:w-2/3  ">
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block font-bold text-gray-700"
                    >
                      {language === "en" && "Full Name"}
                      {language === "swe" && "Fullständigt namn"}
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block font-bold text-gray-700"
                    >
                      {language === "en" && "Country Name"}
                      {language === "swe" && "Landets namn"}
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block font-bold text-gray-700"
                    >
                      {language === "en" && "Email Address"}
                      {language === "swe" && "E-postadress"}
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="companyName"
                      className="block font-bold text-gray-700"
                    >
                      {language === "en" && "Company Name"}
                      {language === "swe" && "Företagsnamn"}
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block font-bold text-gray-700"
                    >
                      {language === "en" && "Message"}
                      {language === "swe" && "Meddelande"}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    ></textarea>
                  </div>
                  <div className="mt-4 flex justify-center lg:justify-start ">
                    <Button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
                      {language === "en" && "Send Message"}
                      {language === "swe" && "Skicka meddelande"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {showToast && (
          <div className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-lg">
            Message sent successfully!
          </div>
        )}
        {showError && (
          <div className="fixed bottom-5 right-5 bg-red-500 text-white p-3 rounded-lg">
            Message sending failed!
          </div>
        )}
      </Container>
    </section>
  );
};

export default Contact;
