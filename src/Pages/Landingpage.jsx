import React, { useEffect } from 'react'
import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import { motion, useAnimation } from "framer-motion";
import CountUp from "react-countup";
import { FaBolt, FaTachometerAlt, FaExchangeAlt, FaWater } from "react-icons/fa";
import StatisticsCounter from '../Components/StatisticsCounter';
import {
  Zap,
  Rocket,
  ShieldCheck,
  Handshake,
  Users,
  Award,
} from "lucide-react";




function Landingpage() {
  
  const isMobile = window.innerWidth < 768;
    const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, x: 0 });
  }, [controls]);

  return (
    <div>
      <section
  className="relative w-full bg-gradient-to-r from-[#0F172A] to-[#1E294B] text-white"
  style={{ fontFamily: '"Exo 2", sans-serif' }}
>
  <Navbar />

  <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 py-20 font-exo">
     
    {/* Left Content */}
    <div className="lg:w-1/2 flex flex-col items-start mt-18 text-left ">
    <motion.div
  initial={{ opacity: 0, x: -150 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  className="lg:w-1/2 flex flex-col items-start mt-18 text-left mb-25"
>
      <h1 className="font-bold leading-tight font-exo text-4xl sm:text-5xl md:text-6xl lg:text-[75px]">
        BOUSHER, <br /> SULTANATE OF OMAN
      </h1>
      

      <p className="text-gray-300 text-base sm:text-lg md:text-xl mt-4">
        Electrical Contract Company
      </p>

      {/* Social Icons */}
      <div className="flex space-x-5 mt-6">
        <FaFacebookF className="text-white hover:text-teal-400 cursor-pointer text-2xl transition-transform duration-300 hover:-translate-y-1" />
        <FaLinkedin className="text-white hover:text-teal-400 cursor-pointer text-2xl transition-transform duration-300 hover:-translate-y-1" />
        {/* <FaInstagram className="text-white hover:text-teal-400 cursor-pointer text-2xl transition-transform duration-300 hover:-translate-y-1" /> */}
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 mt-8">
        <Link to="/about"><button
          className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-650 rounded-md hover:opacity-90 transition"
          style={{ borderRadius: '20px',cursor:'pointer' }}
        >
          About Us →
        </button></Link>
        <Link to="/services"><button
          className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-650 rounded-md hover:opacity-90 transition"
          style={{ borderRadius: '20px' }}
        >
          Services →
        </button></Link>
      </div>
      </motion.div>
    </div>

    {/* Right Content */}
    <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center relative">
     <motion.div
          className="container facility-section"
          initial={{ opacity: 0, x: 50 }}
          animate={controls}
          transition={{ duration: 1 }}
        >
      <div
        className="relative w-[250px] sm:w-[320px] md:w-[380px] lg:w-[420px] h-[250px] sm:h-[320px] md:h-[380px] lg:h-[420px] overflow-hidden shadow-2xl border-2 border-teal-400/40"
        style={{
          clipPath:
            'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
        }}
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1672723447769-a5133ff4d5da?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3RyaWMlMjBtZXRlcnxlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000"
          alt="IoT"
          className="object-cover w-full h-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-teal-800/40 via-blue-300/30 to-transparent"></div>
      </div>

      {/* Glowing aura */}
      <div className="absolute hidden  w-[320px] sm:w-[400px] md:w-[460px] h-[320px] sm:h-[400px] md:h-[460px] rounded-full bg-teal-400/20 blur-3xl -z-10"></div></motion.div>
    </div>
  </div>

{/* What We Offer Section */}
<section className="w-full bg-gradient-to-br from-[#0F172A] via-[#182444] to-[#1E294B] text-white py-24 px-6">
  <div className="container mx-auto max-w-6xl text-center">

    <motion.div
      initial={isMobile ? undefined : { opacity: 0, translateY: "-40px" }}
      whileInView={isMobile ? undefined : { opacity: 1, translateY: "0px" }}
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
  </div>
  
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


  
</section>


</section>

<Footer/>



    </div>
  );
}

export default Landingpage;
