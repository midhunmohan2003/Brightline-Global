import React, { useState, useEffect } from "react";
import {
  FaBolt,
  FaTachometerAlt,
  FaTools,
  FaCogs,
  FaPlug,
  FaWater,
  FaSync,
  FaPeopleCarry,
} from "react-icons/fa";
import Navbar from "../Components/Navbar";
import "../Pages/services.css";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

// ---------------- Services Data ----------------
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
    title: "Import & Export of Fresh Fruits and Vegetables",
    desc: "Established in 2023, Brightline Global LLC is a dedicated import–export company specializing in the supply of fresh fruits and vegetables to the Omani market. Our operations span across key sourcing regions including England, India, Slovakia, and the Czech Republic, enabling us to consistently meet diverse market demands with quality and reliability. We primarily serve the Salalah and Muscat marketplaces, where we have built strong, direct relationships with local retailers and wholesalers. By eliminating intermediaries, we ensure competitive pricing, efficient logistics, and hassle-free transactions for our partners. A significant portion of our product range is sourced from South India, aligning perfectly with market demand in Oman, particularly among the large South Indian community residing there. Our deep understanding of consumer preferences and market trends has allowed us to identify and capitalize on key opportunities within the region. With the support of trusted partners, buyers, and sellers, we have developed a strong and reliable import–export network. Our commitment to quality, transparency, and timely delivery continues to strengthen our presence and reputation in Oman’s agricultural trade sector.",
  },
];

// ---------------- Service Card ----------------
const ServiceCard = ({ service, index, id }) => {
  const [expanded, setExpanded] = useState(false);

  const isLong = service.desc.length > 140;
  const text = expanded
    ? service.desc
    : isLong
    ? service.desc.slice(0, 140) + "..."
    : service.desc;

  return (
    <motion.div
      id={id} // ← assign ID for Import & Export
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="
        bg-[#0B132B]/80 border border-teal-500/30 
        rounded-2xl p-7 shadow-lg
        hover:shadow-[0_0_25px_rgba(45,212,191,0.35)]
        hover:-translate-y-2 transition-all duration-300
        flex flex-col gap-4
      "
    >
      <div className="text-teal-400 text-5xl w-16 h-16 grid place-items-center 
                      bg-[#1E294B] border border-teal-400 rounded-full mb-2">
        {service.icon}
      </div>

      <h5 className="text-xl font-semibold text-white">{service.title}</h5>

      <p className="text-gray-300 text-sm leading-relaxed">{text}</p>

      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="
            mt-1 self-start text-sm font-semibold
            text-teal-300 hover:text-white
            underline underline-offset-4 decoration-teal-400
          "
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </motion.div>
  );
};

// ---------------- Main Component ----------------
const Services = () => {
  const location = useLocation();

  // Smooth scroll to hash on load
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

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
            className="container mt-5"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.2 }}
          >
            <h2 className="text-center text-4xl font-bold mb-12 text-teal-400">
              Our Expertise & Services
            </h2>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  service={service}
                  index={index}
                  id={service.title.includes("Import & Export") ? "import-export" : undefined}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certificate Section */}
      <section
        className="py-20 bg-gradient-to-r from-[#0F172A] to-[#1E294B] text-white"
        style={{ fontFamily: '"Exo 2", sans-serif' }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-teal-400">
            Certificate of Appreciation
          </h2>

          <div className="backdrop-blur-xl bg-white/10 border border-teal-500/40 
                          rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto">
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
