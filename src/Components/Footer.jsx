import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#0A0F1F] to-[#0F172A] text-gray-300 py-16 px-6" style={{ fontFamily: '"Exo 2", sans-serif' }}>
      <div className="container mx-auto grid gap-10 md:grid-cols-3">

        {/* Logo / Brand */}
        <div>
           <span className="text-xl sm:text-2xl font-bold text-white whitespace-nowrap">
              Brightline<span className="text-[#00F5A0]">Global</span>
            </span>
          <p className="text-gray-400 max-w-sm">
            Providing quality electrical, plumbing, and maintenance services with professional expertise and reliability.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-xl font-semibold text-teal-400 mb-4">Quick Links</h5>
          <ul className="space-y-2">
            <li className="hover:text-teal-400 transition cursor-pointer">Home</li>
            <li className="hover:text-teal-400 transition cursor-pointer">Services</li>
            <li className="hover:text-teal-400 transition cursor-pointer">About Us</li>
            <li className="hover:text-teal-400 transition cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h5 className="text-xl font-semibold text-teal-400 mb-4">Contact</h5>
          <p className="mb-2">Phone: +123 456 7890</p>
          <p className="mb-4">Email: info@example.com</p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="p-3 rounded-full bg-[#1E294B] hover:bg-teal-400 hover:text-[#0F172A] transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-3 rounded-full bg-[#1E294B] hover:bg-teal-400 hover:text-[#0F172A] transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-3 rounded-full bg-[#1E294B] hover:bg-teal-400 hover:text-[#0F172A] transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-3 rounded-full bg-[#1E294B] hover:bg-teal-400 hover:text-[#0F172A] transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-teal-400/30 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
