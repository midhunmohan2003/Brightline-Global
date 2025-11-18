import React, { useEffect } from "react";
import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { motion, useAnimation } from "framer-motion";
import CountUp from "react-countup";
import {
  FaBolt,
  FaTachometerAlt,
  FaExchangeAlt,
  FaWater,
} from "react-icons/fa";
import StatisticsCounter from "../Components/StatisticsCounter";
import {
  Zap,
  Rocket,
  ShieldCheck,
  Handshake,
  Users,
  Award,
} from "lucide-react";
import heroImg from "../assets/heroImg.jpg";

function Landingpage() {
  const isMobile = window.innerWidth < 768;
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, x: 0 });
  }, [controls]);

  return (
    <div>
      {/* Hero Section with Background Image */}
<section
  className="relative w-full h-screen bg-cover bg-center bg-no-repeat text-white"
  style={{
    backgroundImage: `url(${heroImg})`,
    fontFamily: '"Exo 2", sans-serif',
  }}
>
  {/* Blue Shade Overlay - matching the image */}
  <div className="absolute inset-0 bg-blue-950/20"></div>
  
  {/* Optional: Additional gradient for more depth */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-950/75 to-blue-800/50"></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto flex flex-col items-center justify-center px-6 h-full">
          <Navbar />

          <div className="flex flex-col items-center justify-center w-full mt-20 lg:mt-0 text-center">
            {/* Center Content */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-full max-w-4xl flex flex-col items-center text-center"
            >
              {/* <h1 className="font-bold leading-tight font-exo text-4xl sm:text-5xl md:text-6xl lg:text-[75px]">
                BOUSHER, <br /> SULTANATE OF OMAN
              </h1>
              
              <p className="text-gray-300 text-base sm:text-lg md:text-xl mt-4">
                Electrical Contract Company
              </p> */}

              {/* Tagline from the image */}
              <div className="mt-6">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-teal-400 mb-4">
                  Powering Your Future.
                </h2>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mt-4">
                  Safely. Reliably.
                </h3>
                <p className="text-gray-300 text-xl mt-4 max-w-md mx-auto">
                  Professional electrical solutions for commercial and
                  industrial projects
                </p>
              </div>

              {/* Social Icons - Centered */}
              {/* <div className="flex space-x-5 mt-6 justify-center">
                <FaFacebookF className="text-white hover:text-teal-400 cursor-pointer text-2xl transition-transform duration-300 hover:-translate-y-1" />
                <FaLinkedin className="text-white hover:text-teal-400 cursor-pointer text-2xl transition-transform duration-300 hover:-translate-y-1" />
                <FaInstagram className="text-white hover:text-teal-400 cursor-pointer text-2xl transition-transform duration-300 hover:-translate-y-1" />
              </div> */}

              {/* Buttons - Centered */}
              <div className="flex space-x-4 mt-8 justify-center">
                <Link to="/about">
                  <button
                    className="px-6 py-3 bg-teal-00/20 backdrop-blur-md border border-teal-400/30 rounded-md hover:bg-teal-500/30 transition-all duration-300"
                    style={{ borderRadius: "20px", cursor: "pointer" }}
                  >
                    About Us →
                  </button>
                </Link>
                <Link to="/services">
                  <button
                    className="px-6 py-3 bg-teal-00/20 backdrop-blur-md border border-teal-400/30 rounded-md hover:bg-teal-500/30 transition-all duration-300"
                    style={{ borderRadius: "20px", cursor: "pointer" }}
                  >
                    Services →
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Optional decorative element - Removed since we're centering everything */}
          </div>
        </div>
      </section>

      {/* Rest of your existing content remains the same */}
      <section className="w-full bg-gradient-to-br from-[#0F172A] via-[#182444] to-[#1E294B] text-white py-24 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={isMobile ? undefined : { opacity: 0, translateY: "-40px" }}
            whileInView={
              isMobile ? undefined : { opacity: 1, translateY: "0px" }
            }
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0 : 1 }}
          >
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-teal-400 mb-4">
              What We Offer
            </h2>

            {/* Sub Heading */}
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-14 tracking-wide">
              Why Choose Brightline Global?
            </h3>

            {/* Feature Cards Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  title: "Proven Expertise",
                  desc: "Demonstrated success in electrical and water utility sectors.",
                  icon: <Zap size={48} className="text-teal-300" />,
                },
                {
                  title: "Rapid Execution",
                  desc: "A young, agile company capable of adapting and delivering efficiently.",
                  icon: <Rocket size={48} className="text-teal-300" />,
                },
                {
                  title: "Quality Assurance",
                  desc: "Commitment to the highest standards of safety and workmanship.",
                  icon: <ShieldCheck size={48} className="text-teal-300" />,
                },
                {
                  title: "Trusted Partner",
                  desc: "A strong performance record with leading Omani companies.",
                  icon: <Handshake size={48} className="text-teal-300" />,
                },
                {
                  title: "Dedicated Team",
                  desc: "Skilled and motivated workforce ensuring every project is handled professionally.",
                  icon: <Users size={48} className="text-teal-300" />,
                },
                {
                  title: "Strong Goodwill",
                  desc: "Reliable, transparent, and committed to long-term partnerships.",
                  icon: <Award size={48} className="text-teal-300" />,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#14213D]/90 border border-teal-400/40 rounded-2xl p-8
                  shadow-lg hover:shadow-teal-400/40 transition-all duration-300
                  hover:-translate-y-3 hover:bg-[#162544]/90 backdrop-blur-xl"
                >
                  {/* Icon */}
                  <div className="mb-4 flex justify-center">{item.icon}</div>

                  {/* Title */}
                  <h4 className="text-xl font-semibold text-teal-300 mb-3">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Project Statistics Section */}
          <motion.div
            initial={isMobile ? {} : { opacity: 0, y: 40 }}
            whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0 : 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-teal-400 text-center mt-14 mb-10">
              Our Projects
            </h2>
            <StatisticsCounter />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Landingpage;
