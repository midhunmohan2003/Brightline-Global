import React from "react";
import Navbar from "../Components/Navbar";
import { FaEye, FaBullseye } from "react-icons/fa";
import Footer from "../Components/Footer";


function About() {
  return (
    <div>
    <section
      id="about"
      className="relative w-full bg-gradient-to-br from-[#0F172A] via-[#182444] to-[#1E294B] text-white py-20 px-6 overflow-hidden"
      style={{ fontFamily: '"Exo 2", sans-serif' }}
    >
        <Navbar/>
      {/* Subtle teal glow background */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-teal-400/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto max-w-6xl text-center">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-teal-400 mb-6 mt-20">
          About Our Company
        </h2>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          We are a team of experienced engineers and professionals dedicated to advancing Oman’s residential, commercial, and governmental sectors through high-quality electrical and construction projects. With over fifteen years of expertise in India and two years of excellence within the Sultanate, we deliver reliable, cost-efficient, and precise electrical solutions.
        </p>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {/* Vision Card */}
          <div className="relative bg-[#14213D]/90 border border-teal-400/40 rounded-2xl p-8 shadow-lg hover:shadow-teal-400/40 transition-all duration-300 hover:-translate-y-2">
            {/* Icon */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="w-20 h-20 rounded-full bg-white border-4 border-teal-400 flex items-center justify-center shadow-lg">
                <FaEye className="text-teal-500 text-3xl drop-shadow-md" />
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-teal-400 mt-14 mb-4">
              Vision
            </h3>
            <p className="text-gray-300 leading-relaxed">
              To implement transformative strategies that strengthen our
              leadership in quality, safety, and innovation — building trust
              across every project and making Oman a global benchmark in
              electrical contracting.
            </p>
          </div>

          {/* Mission Card */}
          <div className="relative bg-[#14213D]/90 border border-teal-400/40 rounded-2xl p-8 shadow-lg hover:shadow-teal-400/40 transition-all duration-300 hover:-translate-y-2">
            {/* Icon */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="w-20 h-20 rounded-full bg-white border-4 border-teal-400 flex items-center justify-center shadow-lg">
                <FaBullseye className="text-teal-500 text-3xl drop-shadow-md" />
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-teal-400 mt-14 mb-4">
              Mission
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Our mission is to deliver advanced, affordable, and sustainable
              electrical solutions that power Oman’s growth — fostering trust,
              innovation, and excellence in every service we provide.
            </p>
          </div>
        </div>

        {/* Optional Signature / Contact
        <div className="mt-16 text-gray-300">
          <p className="text-xl font-semibold text-teal-400">
            Mr. Qais Hamood Salim Al Battashi
          </p>
          <p className="text-gray-400">Managing Director</p>
          <p className="text-gray-400">+968 99772322</p>
        </div> */}
        
      </div>
     
    </section>
    <Footer/>
    </div>
    
  );
}

export default About;
