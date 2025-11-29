import React from "react";
import Navbar from "../Components/Navbar";
import { FaEye, FaBullseye } from "react-icons/fa";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

function About() {
  return (
    <div>
      <section
        id="about"
        className="relative w-full bg-gradient-to-br from-[#0F172A] via-[#182444] to-[#1E294B] text-white py-20 overflow-hidden"
        style={{ fontFamily: '"Exo 2", sans-serif' }}
      >
        <Navbar />

        {/* Subtle teal glow background */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-teal-400/10 rounded-full blur-3xl -z-10"></div>

        <motion.div
          className="container mt-5"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, x: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="container mx-auto max-w-6xl text-center px-6">
            {/* Section Header */}
            <h2 className="text-4xl md:text-5xl font-bold text-teal-400 mb-6 mt-14">
              About Our Company
            </h2>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              We are a team of experienced engineers and professionals dedicated
              to advancing Oman’s residential, commercial, and governmental
              sectors through high-quality electrical and construction projects.
              With over fifteen years of expertise in India and two years of
              excellence within the Sultanate, we deliver reliable,
              cost-efficient, and precise electrical solutions.
            </p>

            {/* ----------------------- OFFICE PHOTO SECTION ----------------------- */}
            <div className="mt-16 flex justify-center">
              <div className="relative overflow-hidden rounded-3xl shadow-xl border border-teal-400/30 max-w-4xl">
                <img
                  src="/gallery/office.jpg" // <-- Place the image in public/gallery/office.jpg
                  alt="Company Office"
                  className="w-[350px] h-[350px] object-cover object-center opacity-95 hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>
            {/* --------------------------------------------------------------------- */}

            {/* Vision & Mission Cards */}
            <div className="grid md:grid-cols-2 gap-10 mt-16">
              {/* Vision Card */}
              <div className="relative bg-[#14213D]/90 border border-teal-400/40 rounded-2xl p-8 shadow-lg hover:shadow-teal-400/40 transition-all duration-300 hover:-translate-y-2">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-20 h-20 rounded-full bg-white border-4 border-teal-400 flex items-center justify-center shadow-lg">
                    <FaEye className="text-teal-500 text-3xl drop-shadow-md" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-teal-400 mt-14 mb-4">
                  Vision
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To become a leading and trusted name in Oman's electrical and
                  water utility services sector, recognized for innovation,
                  reliability, and exceptional execution.
                </p>
              </div>

              {/* Mission Card */}
              <div className="relative bg-[#14213D]/90 border border-teal-400/40 rounded-2xl p-8 shadow-lg hover:shadow-teal-400/40 transition-all duration-300 hover:-translate-y-2">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-20 h-20 rounded-full bg-white border-4 border-teal-400 flex items-center justify-center shadow-lg">
                    <FaBullseye className="text-teal-500 text-3xl drop-shadow-md" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-teal-400 mt-14 mb-4">
                  Mission
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To deliver high-quality, efficient, and safe technical
                  services by leveraging our skilled workforce and strategic
                  expertise, thereby building long-term partnerships with our
                  clients and contributing to the nation's development.
                </p>
              </div>
            </div>

            {/* Leadership & Management Section */}
            <div className="mt-28">
              <motion.div
                className="container mt-5"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <h3 className="text-4xl font-bold text-center text-teal-400 mb-14">
                  Leadership & Management
                </h3>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {[
                    {
                      role: "Managing Director",
                      name: "Qais Hamood Salim Al Battashi",
                      icon: "🏢",
                    },
                    {
                      role: "Managing Partner & General Manager",
                      name: "Nabeel Vahab Udheen",
                      icon: "👔",
                    },
                    {
                      role: "Electrical Engineer & Data Analyst",
                      name: "Al Haj Akthar Ismail",
                      icon: "⚡",
                    },
                    {
                      role: "Project Coordinator",
                      name: "Inthihad Hilal Ali Al Hosni",
                      icon: "📌",
                    },
                    {
                      role: "Safety Officer",
                      name: "Al Ganim Akthar Ismail",
                      icon: "🛡️",
                    },
                  ].map((person, index) => (
                    <div
                      key={index}
                      className="relative bg-[#14213D]/80 backdrop-blur-xl border border-teal-400/40 rounded-2xl p-8 shadow-xl 
                    hover:shadow-teal-400/50 transition-all duration-300 hover:-translate-y-3 hover:bg-[#162544]/90"
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                        <div className="w-20 h-20 rounded-full bg-white border-4 border-teal-400 flex items-center justify-center shadow-lg text-4xl">
                          {person.icon}
                        </div>
                      </div>

                      <div className="mt-14 text-center">
                        <h4 className="text-lg font-semibold text-teal-300 tracking-wide mb-2">
                          {person.role}
                        </h4>
                        <p className="text-gray-300 text-base">{person.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
