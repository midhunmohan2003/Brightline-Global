import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { FaBolt, FaTachometerAlt, FaExchangeAlt, FaWater } from "react-icons/fa";

function StatisticsCounter() {
  const { ref, inView } = useInView({
    triggerOnce: true,   // run only one time
    threshold: 0.3       // visible 30% to trigger
  });

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto text-center">

      {/* 15000+ */}
      <div className="p-6 bg-[#14213D]/80 border border-teal-400/30 rounded-xl shadow-lg">
        <FaBolt className="text-4xl text-teal-300 mx-auto mb-3" />
        <h3 className="text-5xl font-bold text-teal-300">
          {inView ? <CountUp end={15000} duration={3} separator="," /> : "0"}+
        </h3>
        <p className="text-gray-300 mt-2 text-sm md:text-base">
          Prepaid Meters Installed
        </p>
      </div>

      {/* 28000+ */}
      <div className="p-6 bg-[#14213D]/80 border border-teal-400/30 rounded-xl shadow-lg">
        <FaTachometerAlt className="text-4xl text-teal-300 mx-auto mb-3" />
        <h3 className="text-5xl font-bold text-teal-300">
          {inView ? <CountUp end={28000} duration={3} separator="," /> : "0"}+
        </h3>
        <p className="text-gray-300 mt-2 text-sm md:text-base">
          AMR Meters Replaced
        </p>
      </div>

      {/* 2000+ */}
      <div className="p-6 bg-[#14213D]/80 border border-teal-400/30 rounded-xl shadow-lg">
        <FaExchangeAlt className="text-4xl text-teal-300 mx-auto mb-3" />
        <h3 className="text-5xl font-bold text-teal-300">
          {inView ? <CountUp end={2000} duration={3} separator="," /> : "0"}+
        </h3>
        <p className="text-gray-300 mt-2 text-sm md:text-base">
          Meters Converted to AMR
        </p>
      </div>

      {/* 10000+ */}
      <div className="p-6 bg-[#14213D]/80 border border-teal-400/30 rounded-xl shadow-lg">
        <FaWater className="text-4xl text-teal-300 mx-auto mb-3" />
        <h3 className="text-5xl font-bold text-teal-300">
          {inView ? <CountUp end={10000} duration={3} separator="," /> : "0"}+
        </h3>
        <p className="text-gray-300 mt-2 text-sm md:text-base">
          Water Meter Tests Completed
        </p>
      </div>

    </div>
  );
}

export default StatisticsCounter;
