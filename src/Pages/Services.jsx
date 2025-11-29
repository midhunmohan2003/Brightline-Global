import React from "react";
import {
  FaBolt,
  FaTachometerAlt,
  FaTools,
  FaCogs,
  FaPlug,
  FaWater,
  FaSync,
  FaFan,
  FaHardHat,
  FaVideo,
  FaPeopleCarry,
  FaBroom,
} from "react-icons/fa";
import Navbar from "../Components/Navbar";
import "../Pages/services.css";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaTachometerAlt />,
    title: "Electrical Meter Connection",
    desc: "Reliable meter connection services for residential, commercial, and industrial clients.",
  },
  {
    icon: <FaTools />,
    title: "Plumbing & Fitout Works",
    desc: "Complete plumbing and interior fit-out services for buildings and construction projects.",
  },
  {
    icon: <FaCogs />,
    title: "Annual Maintenance",
    desc: "Comprehensive electrical maintenance to ensure smooth operation and safety compliance.",
  },
  {
    icon: <FaPlug />,
    title: "Electrical Service Connection",
    desc: "Professional service connection setup with attention to accuracy and performance.",
  },
  {
    icon: <FaWater />,
    title: "AMR Water",
    desc: "Automated Meter Reading (AMR) water solutions for efficient monitoring and billing.",
  },
  {
    icon: <FaWater />,
    title: "Water Meter Solutions",
    desc: "Installation of postpaid meters and the latest Baylan prepaid meters. Leading water meter replacement contractors in Muscat, trusted for quality and precision.",
  },
  {
    icon: <FaSync />,
    title: "Electrical Meter Replacement",
    desc: "Upgrade and replace old meters with high-quality, certified electrical meters.",
  },
  {
    icon: <FaPeopleCarry />,
    title: "Manpower Service",
    desc: "Skilled workforce for technical, maintenance, and construction needs.",
  },
  {
    icon: <FaBolt />,
    title: "Import & Export (Future Endeavors)",
    desc: "Expanding into global import and export of technical equipment and industrial materials, supporting future growth and international partnerships.",
  },
];

const Services = () => {
  return (
    <div>
      <section
        id="services"
        className="py-20 bg-gradient-to-r from-[#0F172A] to-[#1E294B] text-white"
        style={{ fontFamily: '"Exo 2", sans-serif' }}
      >
        <Navbar />

        <div className="container mx-auto px-6">
          <motion.div
            className="container mt-5 facility-section"
            id="lab"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2 }}
          >
            <h2 className="text-center text-4xl font-bold mb-12 text-teal-400">
              Our Expertise & Services
            </h2>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div key={index} className="perspective">
                  <div className="flip-card w-full h-72">
                    {/* Front Side */}
                    <div className="flip-card-front bg-[#0B132B]/70 border border-teal-500/30 p-8 text-center flex flex-col justify-center items-center">
                      <div className="text-teal-400 text-5xl bg-[#1E294B] p-5 rounded-full border-2 border-teal-400 mb-6">
                        {service.icon}
                      </div>
                      <h5 className="text-2xl font-semibold text-white">
                        {service.title}
                      </h5>
                    </div>

                    {/* Back Side */}
                    <div className="flip-card-back bg-[#1E294B]/90 border border-teal-500/30 p-8 text-center">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <section
        className="py-20 bg-gradient-to-r from-[#0F172A] to-[#1E294B] text-white"
        style={{ fontFamily: '"Exo 2", sans-serif' }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-teal-400">
            Certificate of Appreciation
          </h2>

          <div
            className="backdrop-blur-xl bg-white/10 border border-teal-500/40 
                    rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto"
          >
            <img
              src="/gallery/Certificate.jpg"
              alt="Certificate of Appreciation"
              className="rounded-lg w-full shadow-lg border border-white/20"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
