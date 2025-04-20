'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaHome, FaLaptop } from 'react-icons/fa';

const WorkExperienceCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-400 dark:from-gray-800 dark:via-gray-700 dark:to-black shadow-xl rounded-xl p-12 w-full mx-auto mt-16 relative"
    >
      {/* Large Logo in the Top Right */}
      <div className="absolute top-8 right-8 text-9xl text-white">
        <FaLaptop />
      </div>

      <div className="flex justify-start items-start space-x-6">
        <div className="text-5xl text-blue-300">
          <FaBriefcase />
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-4xl font-bold text-white dark:text-gray-100">
            Avidus Interactive
          </h2>
          <p className="text-xl text-gray-200 dark:text-gray-300 flex items-center">
            <FaHome className="mr-2 text-teal-200" />
            Working from: Home
          </p>
          <p className="text-xl text-gray-200 dark:text-gray-300 flex items-center">
            <FaBriefcase className="mr-2 text-teal-200" />
            Position: QA Analyst
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-white dark:text-gray-100">Duration</h3>
        <p className="text-lg text-gray-200 dark:text-gray-300">
          From: <strong>Apr 7, 2024</strong> to <strong>Present</strong>
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-white dark:text-gray-100">Responsibilities</h3>
        <ul className="list-disc pl-6 text-gray-200 dark:text-gray-300">
          <li>Perform manual testing on web applications to ensure functionality.</li>
          <li>Write and maintain automated test scripts for regression testing using Selenium and Cypress.</li>
          <li>Collaborate with developers, product managers, and other teams to enhance product quality.</li>
          <li>Document, report, and track bugs/issues while working closely with the development team for resolution.</li>
          <li>Participate in test case reviews and contribute to QA strategy sessions.</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default WorkExperienceCard;
