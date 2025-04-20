'use client';

import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-r from-blue-600 to-teal-500 dark:from-gray-800 dark:to-black py-12 mt-16"
    >
      <div className="container mx-auto px-6 text-white">
        {/* Footer Main Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
          {/* Left Section: Contact Info */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-3xl font-bold mb-2">Contact Info</h3>
            <p className="text-lg">Reach out to me at:</p>
            <p className="text-xl font-semibold mt-2">
              <FaEnvelope className="inline-block mr-2 text-yellow-300" />
              <a href="mailto:gyanaprakashkhnadual@gmail.com">gyanaprakashkhnadual@gmail.com</a>
            </p>
          </div>

          {/* Center Section: Social Media Links */}
          <div className="flex space-x-6">
            <motion.a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-3xl text-white hover:text-blue-900 transition-all"
            >
              <FaFacebook />
            </motion.a>
            <motion.a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-3xl text-white hover:text-blue-400 transition-all"
            >
              <FaTwitter />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/gyana-prakash-khandual-79b205332/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-3xl text-white hover:text-blue-800 transition-all"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/GyanaprakashKhandual"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="text-3xl text-white hover:text-black transition-all"
            >
              <FaGithub />
            </motion.a>
          </div>

          {/* Right Section: Copyright & Terms */}
          <div className="flex flex-col items-center lg:items-end">
            <p className="text-lg text-gray-200">© 2024 Code with Chris. All rights reserved.</p>
            <div className="mt-2 flex space-x-6">
              <a href="/privacy-policy" className="text-lg text-gray-200 hover:text-yellow-300">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-lg text-gray-200 hover:text-yellow-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8">
          <p className="text-gray-200 text-sm">Designed and Developed by <strong>Code with Chris</strong></p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
