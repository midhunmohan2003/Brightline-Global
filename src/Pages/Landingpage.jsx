import React from 'react'
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';

function Landingpage() {
  return (
    <div>
      <section
  className="relative w-full bg-gradient-to-r from-[#0F172A] to-[#1E294B] text-white"
  style={{ fontFamily: '"Exo 2", sans-serif' }}
>
  <Navbar />

  <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 py-20 font-exo">
    {/* Left Content */}
    <div className="lg:w-1/2 flex flex-col items-start mt-18 text-left mb-25">
      <h1 className="font-bold leading-tight font-exo text-4xl sm:text-5xl md:text-6xl lg:text-[75px]">
        BOUSHER, <br /> SULTANATE OF OMAN
      </h1>

      <p className="text-gray-300 text-base sm:text-lg md:text-xl mt-4">
        Electrical Contract Company
      </p>

      {/* Social Icons */}
      <div className="flex space-x-5 mt-6">
        <FaTwitter className="text-white hover:text-teal-400 cursor-pointer text-2xl transition-transform duration-300 hover:-translate-y-1" />
        <FaLinkedin className="text-white hover:text-teal-400 cursor-pointer text-2xl transition-transform duration-300 hover:-translate-y-1" />
        <FaInstagram className="text-white hover:text-teal-400 cursor-pointer text-2xl transition-transform duration-300 hover:-translate-y-1" />
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
    </div>

    {/* Right Content */}
    <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center relative">
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
      <div className="absolute w-[320px] sm:w-[400px] md:w-[460px] h-[320px] sm:h-[400px] md:h-[460px] rounded-full bg-teal-400/20 blur-3xl -z-10"></div>
    </div>
  </div>
</section>
<Footer/>



    </div>
  );
}

export default Landingpage;
