"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();
  const text = "Hello";

  const sendLead = async (e) => {
  e.preventDefault();
  setSuccess(false);
  setError(false);

  const formData = new FormData(form.current);

  const payload = new URLSearchParams({
    "Full Name": formData.get("full_name"),
    "Phone Number": formData.get("phone_number"),
  });

  try {
    const zapierWebhookURL = "https://hooks.zapier.com/hooks/catch/24054927/u4raq4q/"; // your actual Zapier URL

    const response = await fetch(zapierWebhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: payload,
    });

    if (response.ok) {
      setSuccess(true);
      form.current.reset();
    } else {
      throw new Error("Zapier webhook error");
    }
  } catch (err) {
    console.error(err);
    setError(true);
  }
};


  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>

        {/* FORM CONTAINER */}
        <form
          onSubmit={sendLead}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span>Full name:</span>
          <input
            name="full_name"
            type="text"
            required
            placeholder="Your full name"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <span>Phone Number:</span>
          <input
            name="phone_number"
            type="tel"
            required
            placeholder="Your phone number"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <span>We will reach out to you soon!</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your details have been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
