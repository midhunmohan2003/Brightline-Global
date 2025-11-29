import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

function Gallery() {
  const images = [
    "/gallery/gallery1.jpg",
    "/gallery/gallery2.jpg",
    "/gallery/gallery3.jpg",
    "/gallery/gallery4.jpg",
    "/gallery/gallery5.jpg",
    "/gallery/gallery6.jpg",
  ];

  return (
    <div>
      <section
        className="relative w-full min-h-screen bg-gradient-to-br from-[#0F172A] via-[#182444] to-[#1E294B] text-white py-20 overflow-hidden"
        style={{ fontFamily: '"Exo 2", sans-serif' }}
      >
        <Navbar />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-teal-400/10 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto max-w-7xl px-6 mt-20">
          <motion.div
            className="container mt-5"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, x: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-teal-400 mb-6 text-center">
              Gallery
            </h2>

            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-16 text-center">
              A visual showcase of our recent works.
            </p>

            {/* Stylish Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((src, i) => (
                <div
                  key={i}
                  className="
                  relative overflow-hidden rounded-2xl cursor-pointer 
                  shadow-lg border border-teal-400/20 
                  hover:shadow-teal-400/40 group
                  transition-all
                "
                >
                  <img
                    src={src}
                    alt=""
                    className="
                    w-full object-cover rounded-2xl
                    transition-transform duration-500 
                    group-hover:scale-105
                    h-72 sm:h-[320px] lg:h-[380px]
                  "
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Gallery;
