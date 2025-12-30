import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { motion, useAnimation } from "framer-motion";
import StatisticsCounter from "../Components/StatisticsCounter";
import { Zap, Rocket, ShieldCheck, Handshake, Users, Award } from "lucide-react";
import heroImg from "../assets/heroImg.jpg";
import heroImg2 from "../assets/importexport.jpeg";

function Landingpage() {
  const isMobile = window.innerWidth < 768;
  const controls = useAnimation();

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    controls.start({ opacity: 1, x: 0 });
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div className="relative">
      {/* FIXED NAVBAR */}
      <div
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-lg transition-all duration-300 ${
          scrollY > 50 ? "bg-blue-950/60" : "bg-transparent"
        }`}
      >
        <Navbar />
      </div>

      {/* HERO SECTION */}
      <section
        className="relative w-full h-screen pt-24 bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage: `url(${heroImg})`,
          fontFamily: '"Exo 2", sans-serif',
        }}
      >
        <div className="absolute inset-0 bg-blue-950/20 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/75 to-blue-800/50 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center justify-center px-6 h-full text-center">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="w-full max-w-4xl text-center"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-teal-400 mb-4">
              Powering Your Future.
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-4">
              Safely. Reliably.
            </h3>
            <p className="text-gray-300 text-xl mt-4 max-w-md mx-auto">
              Professional electrical solutions for commercial and industrial projects
            </p>

            <div className="flex space-x-4 mt-8 justify-center">
              <Link to="/about">
                <button className="px-6 py-3 border border-teal-400/30 backdrop-blur-md rounded-md hover:bg-teal-500/30 transition">
                  About Us →
                </button>
              </Link>
              <Link to="/services">
                <button className="px-6 py-3 border border-teal-400/30 backdrop-blur-md rounded-md hover:bg-teal-500/30 transition">
                  Services →
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUR PROJECTS */}
      <section className="w-full bg-gradient-to-br from-[#0F172A] via-[#182444] to-[#1E294B] text-white py-24 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={isMobile ? {} : { opacity: 0, y: 40 }}
            whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: isMobile ? 0 : 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-teal-400 mb-10">
              Our Projects
            </h2>
            <StatisticsCounter />
          </motion.div>
        </div>
      </section>

      {/* SECOND HERO SECTION — IMPORT & EXPORT */}
      <section
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage: `url(${heroImg2})`,
          fontFamily: '"Exo 2", sans-serif',
        }}
      >
        <div className="absolute inset-0 bg-blue-950/20 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/75 to-blue-800/50 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center justify-center px-6 h-full text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-teal-400 mb-4">
            Connecting Global Markets.
          </h2>

          <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-4">
            On Time. On Trust.
          </h3>

          <p className="text-gray-300 text-xl mt-4 max-w-md mx-auto">
            Reliable import & export services for quality products worldwide.
            Our team ensures smooth logistics, on-time delivery, and compliance with international standards.
          </p>

          <div className="flex space-x-4 mt-8 justify-center">
            <Link to="/services#import-export">
              <button className="px-6 py-3 border border-teal-400/30 rounded-md backdrop-blur-md hover:bg-teal-500/30 transition">
                Learn More →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="w-full bg-gradient-to-br from-[#0F172A] via-[#182444] to-[#1E294B] text-white py-24 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-teal-400 mb-4">
            What We Offer
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold mb-14">
            Why Choose Brightline Global?
          </h3>

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
                className="bg-[#14213D]/90 border border-teal-400/40 rounded-2xl p-8 hover:-translate-y-3 transition shadow-lg hover:shadow-teal-400/40"
              >
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h4 className="text-xl font-semibold text-teal-300 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Landingpage;
