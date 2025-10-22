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

const services = [
  {
    icon: <FaBolt />,
    title: "Electrical Panel Board",
    desc: "Design, installation, and maintenance of electrical panel boards ensuring safety and efficiency.",
  },
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
    icon: <FaSync />,
    title: "Electrical Meter Replacement",
    desc: "Upgrade and replace old meters with high-quality, certified electrical meters.",
  },
  {
    icon: <FaFan />,
    title: "Air Conditioning Service",
    desc: "Installation, repair, and maintenance of air conditioning systems for all environments.",
  },
  {
    icon: <FaHardHat />,
    title: "Civil Works",
    desc: "Structural and civil construction support for all types of engineering projects.",
  },
  {
    icon: <FaVideo />,
    title: "CCTV Works",
    desc: "Design and installation of modern surveillance systems for safety and monitoring.",
  },
  {
    icon: <FaPeopleCarry />,
    title: "Manpower Service",
    desc: "Skilled workforce for technical, maintenance, and construction needs.",
  },
  {
    icon: <FaBroom />,
    title: "Cleaning Service",
    desc: "Professional cleaning services for industrial and commercial facilities.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-r from-[#0F172A] to-[#1E294B] text-white"
      style={{ fontFamily: '"Exo 2", sans-serif' }}
    >
      <Navbar />

      <div className="container mx-auto px-6">
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
                  <h5 className="text-2xl font-semibold text-white">{service.title}</h5>
                </div>

                {/* Back Side */}
                <div className="flip-card-back bg-[#1E294B]/90 border border-teal-500/30 p-8 text-center">
                  <p className="text-gray-300 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
