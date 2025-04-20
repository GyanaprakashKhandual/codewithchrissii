'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaSchool } from 'react-icons/fa';

interface EducationItem {
  degree: string;
  institution: string;
  board: string;
  year: string;
}

const educationData: EducationItem[] = [
  {
    degree: 'Software Development Engineering in Test',
    institution: 'Masai School',
    board: '',
    year: '2024 – 2025',
  },
  {
    degree: 'B.Sc. Physics (Hons)',
    institution: 'Utkal University',
    board: '',
    year: '2024',
  },
  {
    degree: 'Senior Secondary Education',
    institution: 'Sadhu Goudeswar College',
    board: 'CHSE Odisha',
    year: '2021',
  },
  {
    degree: 'Secondary Education',
    institution: 'Jajpur High School',
    board: 'BSE Odisha',
    year: '2019',
  },
];

export default function EducationSection() {
  return (
    <div className=" flex items-start justify-start py-4  px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-8xl">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex items-center gap-8 p-8 bg-lime-300/20 backdrop-blur-md rounded-2xl border border-lime-300/30 shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            <div className="bg-lime-300/30 p-4 rounded-full shadow-inner">
              {index === 0 ? (
                <FaGraduationCap className="text-lime-400 w-8 h-8" />
              ) : index === 1 ? (
                <FaUniversity className="text-lime-400 w-8 h-8" />
              ) : (
                <FaSchool className="text-lime-400 w-8 h-8" />
              )}
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl font-semibold text-black">{edu.degree}</h3>
              <p className="text-lime-700">{edu.institution}</p>
              {edu.board && <p className="text-lime-800 text-sm">{edu.board}</p>}
              <span className="text-gray-600 text-sm mt-1">{edu.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
