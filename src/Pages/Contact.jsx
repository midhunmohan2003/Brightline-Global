import React, { useEffect, useRef, useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";


const Contact = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    alert("Message Sent Successfully!");
    reset();
  };

  useEffect(() => {
    function handleClick(event) {
      if (open && menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div>
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-[#0F172A] to-[#1E294B] text-white"
        style={{ fontFamily: '"Exo 2", sans-serif' }}
      >
        <Navbar />

        <div className="container mx-auto px-6"><motion.div
        className="container mt-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, x: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
          {/* Title */}
          <div className="text-center mb-16">
            
            <h2 className="text-4xl md:text-5xl font-bold text-teal-400 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-300 max-w-xl mx-auto">
              Have a question or want to start a project? Fill out the form
              below or reach out via our contact details.
            </p>
          </div>

          {/* GRID (Reduced width + centered) */}
          <div className="grid gap-10 lg:grid-cols-2 max-w-4xl mx-auto">

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-[#0B132B]/70 p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(45,212,191,0.5)]"
            >
              {/* NAME */}
              <div className="mb-6">
                <label className="block mb-2 text-gray-300 font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("name", { required: "Name is required" })}
                  className="w-full p-3 rounded-lg bg-[#1E294B]/50 border border-teal-400 focus:border-teal-500 outline-none transition"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* EMAIL */}
              <div className="mb-6">
                <label className="block mb-2 text-gray-300 font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                  className="w-full p-3 rounded-lg bg-[#1E294B]/50 border border-teal-400 focus:border-teal-500 outline-none transition"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* MESSAGE */}
              <div className="mb-6">
                <label className="block mb-2 text-gray-300 font-semibold">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  {...register("message", {
                    required: "Message is required",
                  })}
                  className="w-full p-3 rounded-lg bg-[#1E294B]/50 border border-teal-400 focus:border-teal-500 outline-none transition resize-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full bg-teal-400 text-[#0F172A] font-semibold py-3 rounded-lg hover:bg-teal-500 transition"
              >
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="flex flex-col gap-6">

              {/* PHONE */}
              <div
                className="relative flex items-center gap-4 bg-[#0B132B]/70 p-5 rounded-2xl hover:shadow-[0_0_25px_rgba(45,212,191,0.5)] transition-all duration-300"
              >
                <FaPhone className="text-teal-400 text-3xl" />
                <div>
                  <h5 className="text-xl font-semibold">Phone</h5>
                  <p
                    className="text-gray-300 hover:text-white hover:cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpen(!open);
                    }}
                  >
                    +96878026775
                  </p>

                  {open && (
                    <div
                      ref={menuRef}
                      className="
                        absolute mt-2 right-0
                        bg-gray-800/90 backdrop-blur 
                        border border-gray-700
                        rounded-xl shadow-xl 
                        p-2 w-48 animate-fadeIn
                      "
                    >
                      <a
                        href="tel:+96878026775"
                        className="flex items-center gap-2 px-3 py-2 text-gray-200 hover:text-white hover:bg-gray-700/50 rounded-lg transition"
                      >
                        <FiPhone size={18} /> Call
                      </a>

                      <a
                        href="https://wa.me/96878026775"
                        target="_blank"
                        className="flex items-center gap-2 px-3 py-2 text-gray-200 hover:text-white hover:bg-gray-700/50 rounded-lg transition"
                      >
                        <FaWhatsapp size={18} /> WhatsApp
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-4 bg-[#0B132B]/70 p-5 rounded-2xl hover:shadow-[0_0_25px_rgba(45,212,191,0.5)] transition-all duration-300">
                <FaEnvelope className="text-teal-400 text-3xl" />
                <div>
                  <h5 className="text-xl font-semibold">Email</h5>
                  <a
                    href="mailto:brightlinegloballlc@gmail.com"
                    className="text-gray-300 hover:text-white cursor-pointer"
                  >
                    brightlinegloballlc@gmail.com
                  </a>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="flex items-center gap-4 bg-[#0B132B]/70 p-5 rounded-2xl hover:shadow-[0_0_25px_rgba(45,212,191,0.5)] transition-all duration-300">
                <FaMapMarkerAlt className="text-teal-400 text-3xl" />
                <div>
                  <h5 className="text-xl font-semibold">Address</h5>
                  <p className="text-gray-300">
                    GGC2+PRH, Al Amarat, Muscat Oman
                  </p>
                </div>
              </div>

            </div>
          </div></motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
