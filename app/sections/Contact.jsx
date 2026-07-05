'use client'
import React, { useState } from "react";
import { motion } from "motion/react";
import SectionTitle from "../components/SectionTitle";
import { sectionTitles } from "../constants/sectionTitles";
import { MoveRight } from "lucide-react";

const Contact = () => {
  const [status, setStatus] = useState({ loading: false, message: "" });

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, message: "Sending..." });

    const formData = new FormData(event.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ loading: false, message: "Message sent successfully! ✅" });
        event.target.reset();
      } else {
        setStatus({
          loading: false,
          message: data.message || "Something went wrong. ❌",
        });
      }
    } catch (error) {
      setStatus({
        loading: false,
        message: "Network error. Please try again.",
      });
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      id="contact"
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-size-[90%_auto] dark:bg-none'
    >
      <SectionTitle
        title={sectionTitles.contactSection.title}
        subTitle={sectionTitles.contactSection.subTitle}
        description={sectionTitles.contactSection.description}
      />

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            required
            autoComplete="off"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90 focus:border-cyan-500 transition-colors"
          />
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            autoComplete="off"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90 focus:border-cyan-500 transition-colors"
          />
        </div>

        <textarea
          name="message"
          rows={6}
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90 focus:border-cyan-500 transition-colors"
        ></textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={status.loading}
          type="submit"
          className="py-3 px-10 w-max flex items-center justify-between gap-2 bg-black text-white rounded-full mx-auto hover:bg-gray-800 disabled:bg-gray-400 transition-all dark:bg-white dark:text-black dark:hover:bg-cyan-100"
        >
          {status.loading ? "Sending..." : "Submit Now"}
          {!status.loading && <MoveRight className="w-4" />}
        </motion.button>
        <motion.p
          animate={
            status.message ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
          }
          className="mt-6 text-center font-heading font-medium"
        >
          {status.message}
        </motion.p>
      </motion.form>
    </motion.section>
  );
};

export default Contact;
