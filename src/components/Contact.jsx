import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

// service_u8ncozh  -- service id
// template_m5h33oa -- tamplate id
// kI0rmuPqQID_S-wQK -- public key

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // https://script.google.com/macros/s/AKfycbyHwXr-qfDtBO-CeHTtzByLyAT5Wc1O9rMZbFH2lQs9K3St9Odf6QZXRhcEgE3cT9MHDw/exec   // URL
  // AKfycbyHwXr-qfDtBO-CeHTtzByLyAT5Wc1O9rMZbFH2lQs9K3St9Odf6QZXRhcEgE3cT9MHDw // Deployment ID

  // https://script.google.com/macros/s/AKfycbyHwXr-qfDtBO-CeHTtzByLyAT5Wc1O9rMZbFH2lQs9K3St9Odf6QZXRhcEgE3cT9MHDw/exec

  // https://script.google.com/macros/library/d/1nJ6weOlNTl8RX42VGfZzhWTJM472AjdbEPageihp5dJd86EK_JH3V9h8/1

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const url = "https://script.google.com/macros/s/AKfycbzKPICocfnO9dxdsmhe6T1p-CDfRqhnsz3BEthomAIFpToXoGUG0i4Tu2xZLsCAA6UEAw/exec";
    // https://script.google.com/macros/s/AKfycbzKPICocfnO9dxdsmhe6T1p-CDfRqhnsz3BEthomAIFpToXoGUG0i4Tu2xZLsCAA6UEAw/exec
    try {
      // Prepare form data
      const body = new FormData();
      body.append("name", form.name);
      body.append("email", form.email);
      body.append("message", form.message);

      // Send data to Google Sheet
      const res = await fetch(url, {
        method: "POST",
        body, // no headers required for FormData
      });

      const json = await res.json();
      console.log("Sheets response:", json);

      if (json.status === "success") {
        alert("✅ Thank you! Your message has been saved in Google Sheets.");
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error(json.message || "Unknown error from Google Sheets");
      }
    } catch (err) {
      console.error("Error saving to sheet:", err);
      alert("❌ Something went wrong while saving your message.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
