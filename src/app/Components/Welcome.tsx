// components/WelcomeBar.tsx
"use client";

import { motion } from "framer-motion";
import { FaLaptopCode, FaBug} from "react-icons/fa";
import { useEffect, useState } from "react";

export default function WelcomeBar() {
  const [gradientIndex, setGradientIndex] = useState(0);

  const gradients = [
   "bg-gradient-to-r from-lime-300 via-sky-300 to-cyan-400",
  "bg-gradient-to-r from-teal-300 via-lime-400 to-blue-300",
  "bg-gradient-to-r from-emerald-300 via-cyan-300 to-sky-400",
  "bg-gradient-to-r from-lime-200 via-green-300 to-blue-200",
  "bg-gradient-to-r from-cyan-200 via-sky-300 to-lime-300",
  "bg-gradient-to-r from-sky-200 via-teal-300 to-lime-300",
  "bg-gradient-to-r from-lime-100 via-emerald-200 to-cyan-200",
  "bg-gradient-to-r from-sky-100 via-blue-200 to-lime-200"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientIndex((prev) => (prev + 1) % gradients.length);
    }, 3000); // 3 seconds for smooth slow color change

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className={`w-full min-h-100 flex flex-col justify-center items-center text-white transition-all duration-[3000ms] ease-in-out ${gradients[gradientIndex]}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full px-4 md:px-20 text-center space-y-8">
        <motion.h1
          className="text-3xl md:text-6xl font-bold flex items-center justify-center gap-4 w-full"
          whileHover={{ scale: 1.05 }}
        >
          <FaLaptopCode className="text-4xl md:text-6xl" />
          Full Stack Web Developer
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-5xl font-semibold flex items-center justify-center gap-4 w-full"
          whileHover={{ scale: 1.05 }}
        >
          <FaBug className="text-3xl md:text-5xl" />
          Quality Assurance Engineer
        </motion.h2>
      </div>
    </motion.div>
  );
}
