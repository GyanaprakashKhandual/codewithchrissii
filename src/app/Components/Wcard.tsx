'use client';

import { motion } from 'framer-motion';
import { FaLaptopCode } from 'react-icons/fa';
import { FileText, Wrench } from 'lucide-react';

interface ProjectCardProps {
    projectName: string;
    techStack: string;
    type: string;
    projectLink?: string;
}

function ProjectShowcaseCard({ projectName, techStack, type, projectLink = '#' }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.04 }}
            className="max-w-md w-full p-8 border border-blue-300 bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
        >
            {/* Logo */}
            <div className="flex justify-center mb-8">
                <div className="p-5 bg-transparent rounded-full shadow-md">
                    <FaLaptopCode className="w-16 h-16 text-cyan-300 animate-pulse" />
                </div>
            </div>

            {/* Project Details */}
            <div className="text-center">
                <h2 className="text-3xl font-extrabold text-cyan-300 mb-3">{projectName}</h2>
                <div className="border-t border-cyan-500 my-5" />

                <div className="flex items-center justify-center gap-3 mb-4">
                    <FileText size={20} className="text-cyan-400 animate-bounce" />
                    <span className="text-cyan-200 font-semibold text-lg">{techStack}</span>
                </div>

                <div className="flex items-center justify-center gap-3 mb-6">
                    <Wrench size={20} className="text-cyan-400 animate-spin-slow" />
                    <span className="text-cyan-200 font-semibold text-lg">{type}</span>
                </div>

                {/* View Project Button */}
                <motion.a
                    href={projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="inline-block mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-md shadow-md hover:shadow-lg transition-all duration-300"
                >
                    🔗 View Project
                </motion.a>
            </div>
        </motion.div>
    );
}

export default function ProjectList() {
    const projects = [
        { projectName: 'Manual Testing', techStack: 'Code Editor', type: 'MS Office', projectLink: 'https://drive.google.com/drive/folders/1ZCGCKbvo-hdBo-i4y5BWnsiN-p1B9qds?usp=drive_link' },
        { projectName: 'Automation Testing', techStack: 'Orange HRM', type: 'Cypress', projectLink: 'https://drive.google.com/drive/folders/1V2L_KY-4kjlyKEC-xQo72c2ro9BRye_S?usp=drive_link' },
        { projectName: 'Automation Testing', techStack: 'Pioneers Wine', type: 'Selenium', projectLink: 'https://drive.google.com/drive/folders/1Tg7eAx1e9Ra01dtsYXI4AJjgee-gSRq9?usp=drive_link' },
        { projectName: 'Automation Testing', techStack: 'Rahulshettly.com', type: 'Playwright', projectLink: '' },
        { projectName: 'Automation Testing', techStack: 'Appium', type: 'Calculator', projectLink: '' },
        { projectName: 'Load Testing', techStack: 'JMeter', type: 'Google', projectLink: '' },
        { projectName: 'Manual API Testing', techStack: 'Reqers API', type: 'Postman', projectLink: '' },
        { projectName: 'Auto API Testing', techStack: 'Simple Book API', type: 'Rest Assured', projectLink: '' },
        { projectName: 'Auto Load Testing', techStack: 'Orange HRM', type: 'K6', projectLink: '' },
        { projectName: 'Database Testing', techStack: 'Local Host', type: 'MongoDB Playground', projectLink: '' },
        { projectName: 'Database Testing', techStack: 'Local Host', type: 'DB Unit', projectLink: '' },
        { projectName: 'UI Testing', techStack: 'Local Host', type: 'Local Host', projectLink: '' },
        { projectName: 'Calculator', techStack: 'HTML CSS JS', type: 'Frontend', projectLink: 'https://calculator-black-tau.vercel.app/' },
        { projectName: 'Analog Clock', techStack: 'HTML CSS JS', type: 'Frontend', projectLink: 'https://clock-weld-eight.vercel.app/' },
        { projectName: 'Test Tracker', techStack: 'HTML CSS JS', type: 'Frontend', projectLink: 'https://clock-8bbe.vercel.app/' },
        { projectName: 'Cricket Score Card', techStack: 'HTML CSS JS', type: 'Frontend', projectLink: 'https://cricket-score-card-tau.vercel.app/' },
        { projectName: 'Text Utils', techStack: 'React And Tailwind', type: 'Frontend', projectLink: '' },
        { projectName: 'News Monkey', techStack: 'React And Bootstrap', type: 'Frontend', projectLink: '' },
        { projectName: 'Portfoilo', techStack: 'Next And Tailwind', type: 'Frontend', projectLink: 'https://codewithchrissii.vercel.app/' },
        { projectName: 'Database Store', techStack: 'Next And Express', type: 'Frontend And Backend', projectLink: '' },
        { projectName: 'Bug Tracker', techStack: 'Next And Express', type: 'Frontend And Backend', projectLink: '' }
    ];

    return (
        <div className="flex flex-wrap justify-center items-center gap-6 p-12">
            {projects.map((project, index) => (
                <ProjectShowcaseCard
                    key={index}
                    projectName={project.projectName}
                    techStack={project.techStack}
                    type={project.type}
                    projectLink={project.projectLink}
                />
            ))}
        </div>
    );
}
