import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <div>
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-[#0F172A] to-[#1E294B] text-white"
      style={{ fontFamily: '"Exo 2", sans-serif' }}
    >
      <Navbar />

      <div className="container mx-auto px-6">
        {/* Hero / Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-400 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Have a question or want to start a project? Fill out the form below or reach out via our contact details.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Form */}
          <form className="bg-[#0B132B]/70 p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(45,212,191,0.5)]">
            <div className="mb-6">
              <label className="block mb-2 text-gray-300 font-semibold">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-[#1E294B]/50 border border-teal-400 focus:border-teal-500 outline-none transition"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-gray-300 font-semibold">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-[#1E294B]/50 border border-teal-400 focus:border-teal-500 outline-none transition"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-gray-300 font-semibold">Message</label>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 rounded-lg bg-[#1E294B]/50 border border-teal-400 focus:border-teal-500 outline-none transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal-400 text-[#0F172A] font-semibold py-3 rounded-lg hover:bg-teal-500 transition"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 bg-[#0B132B]/70 p-6 rounded-2xl hover:shadow-[0_0_25px_rgba(45,212,191,0.5)] transition-all duration-300">
              <FaPhone className="text-teal-400 text-3xl" />
              <div>
                <h5 className="text-xl font-semibold">Phone</h5>
                <p className="text-gray-300">+123 456 7890</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#0B132B]/70 p-6 rounded-2xl hover:shadow-[0_0_25px_rgba(45,212,191,0.5)] transition-all duration-300">
              <FaEnvelope className="text-teal-400 text-3xl" />
              <div>
                <h5 className="text-xl font-semibold">Email</h5>
                <p className="text-gray-300">info@example.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#0B132B]/70 p-6 rounded-2xl hover:shadow-[0_0_25px_rgba(45,212,191,0.5)] transition-all duration-300">
              <FaMapMarkerAlt className="text-teal-400 text-3xl" />
              <div>
                <h5 className="text-xl font-semibold">Address</h5>
                <p className="text-gray-300">123 Main Street, City, Country</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default Contact;
