"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { sectionTitles } from "../constants/sectionTitles";
import { ArrowRight, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const Contact = () => {
  const [status, setStatus] = useState({
    loading: false,
    success: null,
    message: "",
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({
      loading: true,
      success: null,
      message: "Sending your message...",
    });

    const formData = new FormData(event.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY || "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          loading: false,
          success: true,
          message: "Message sent successfully! I will get back to you shortly.",
        });
        event.target.reset();
      } else {
        setStatus({
          loading: false,
          success: false,
          message: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        message: "Network error. Please check your connection and try again.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="w-full scroll-mt-20 font-sans relative overflow-hidden"
    >
      {/* Decorative ambient backdrop */}
      <div className="absolute inset-0 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-size[90%_auto] opacity-30 dark:opacity-0 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 relative z-10">
        <SectionTitle
          title={sectionTitles.contactSection.title}
          subTitle={sectionTitles.contactSection.subTitle}
          description={sectionTitles.contactSection.description}
        />

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 15,
            delay: 0.2,
          }}
          onSubmit={onSubmit}
          className="max-w-2xl mx-auto mt-16"
        >
          {/* Dual Input Grid Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <input
                name="name"
                type="text"
                placeholder="Name"
                required
                autoComplete="off"
                className="w-full p-4 text-sm bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-2xl outline-none border border-gray-100 dark:border-white/5 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 dark:focus:ring-cyan-400/20 transition-all duration-200 shadow-inner"
              />
            </div>
            <div className="flex flex-col">
              <input
                name="email"
                type="email"
                placeholder="Email address"
                required
                autoComplete="off"
                className="w-full p-4 text-sm bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-2xl outline-none border border-gray-100 dark:border-white/5 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 dark:focus:ring-cyan-400/20 transition-all duration-200 shadow-inner"
              />
            </div>
          </div>

          {/* Message Textarea Container Row */}
          <div className="mb-8">
            <textarea
              name="message"
              rows={5}
              placeholder="Your message details..."
              required
              className="w-full p-4 text-sm bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-2xl outline-none border border-gray-100 dark:border-white/5 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 dark:focus:ring-cyan-400/20 transition-all duration-200 shadow-inner resize-none"
            ></textarea>
          </div>

          {/* Action Call to Submission Anchor Button */}
          <div className="flex flex-col items-center justify-center gap-6">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              disabled={status.loading}
              type="submit"
              className="inline-flex items-center justify-center gap-2.5 py-4 px-10 min-w-45 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-sm rounded-full shadow-md hover:bg-cyan-600 dark:hover:bg-cyan-400 dark:hover:text-gray-900 disabled:bg-gray-200 dark:disabled:bg-white/10 disabled:text-gray-400 dark:disabled:text-gray-500 disabled:cursor-not-allowed transition-all duration-200"
            >
              {status.loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-current" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </motion.button>

            {/* Dynamic Real-time Status Alert Toast area */}
            <AnimatePresence mode="wait">
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs font-medium max-w-md text-center border ${
                    status.loading
                      ? "bg-gray-50 border-gray-100 text-gray-500 dark:bg-white/5 dark:border-white/5 dark:text-gray-400"
                      : status.success
                        ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                        : "bg-rose-500/10 border-rose-500/20 text-rose-600 dark:text-rose-400"
                  }`}
                >
                  {status.success === true && (
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                  )}
                  {status.success === false && (
                    <AlertCircle className="w-4 h-4 shrink-0" />
                  )}
                  <span>{status.message}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
