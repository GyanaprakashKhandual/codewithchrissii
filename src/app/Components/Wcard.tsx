'use client';

import { motion } from 'framer-motion';
import { FaLaptopCode } from 'react-icons/fa'; // Web development logo
import { FileText, Wrench } from 'lucide-react';

interface ProjectCardProps {
    projectName: string;
    techStack: string;
    type: string;
}

function ProjectShowcaseCard({ projectName, techStack, type }: ProjectCardProps) {
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
                <div className="p-5 bg-transparent rounded-full shadow-md"> {/* changed bg-white/10 to bg-transparent */}
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
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-md shadow-md hover:shadow-lg transition-all duration-300"
                >
                    View Project
                </motion.button>
            </div>
        </motion.div>
    );
}

export default function ProjectList() {
    const projects = [
        {
            projectName: 'Manual Testing',
            techStack: 'Code Editor',
            type: 'MS Office',
        },
        {
            projectName: 'Automation Testing',
            techStack: 'Orange HRM',
            type: 'Cypress',
        },
        {
            projectName: 'Automation Testing',
            techStack: 'Pioneers Wine',
            type: 'Selenium',
        },
        {
            projectName: 'Automation Testing',
            techStack: 'Rahulshettly.com',
            type: 'Playwright',
        },
        {
            projectName: 'Automation Testing',
            techStack: 'Appium',
            type: 'Calculator',
        },
        {
            projectName: 'Load Testing',
            techStack: 'JMeter',
            type: 'Google',
        },
        {
            projectName: 'Manual API Testing',
            techStack: 'Reqers API',
            type: 'Postman',
        },
        {
            projectName: 'Auto API Testing',
            techStack: 'Simple Book API',
            type: 'Rest Assured',
        },
        {
            projectName: 'Auto Load Testing',
            techStack: 'Orange HRM',
            type: 'K6',
        },
        {
            projectName: 'Database Testing',
            techStack: 'Loacl Host',
            type: 'MongoDB Playground',
        },
        {
            projectName: 'Database Testing',
            techStack: 'Local Host',
            type: 'DB Unit',
        },
        {
            projectName: 'UI Testing',
            techStack: 'Local Host',
            type: 'Local Host',
        }, 
       {
        projectName: 'Calculator',
        techStack: 'HTML CSS JS',
        type: 'Frontend'
       },
       {
        projectName: 'Analog Clock',
        techStack: 'HTML CSS JS',
        type: 'Frontend'
       },
       {
        projectName: 'Test Tracker',
        techStack: 'HTML CSS JS',
        type: 'Frontend'
       },
       {
        projectName: 'Cricket Score Card',
        techStack: 'HTML CSS JS',
        type: 'Frontend'
       },
       {
        projectName: 'Text Utils',
        techStack: 'React And Tailwind',
        type: 'Frontend'
       },
       {
        projectName: 'News Monkey',
        techStack: 'React And Bootstrap',
        type: 'Frontend'
       },
       {
        projectName: 'Portfoilo',
        techStack: 'Next And Tailwind',
        type: 'Frontend'
       },
       {
        projectName: 'Database Store',
        techStack: 'Next And Express',
        type: 'Frontend And Backend'
       },
       {
        projectName: 'Bug Tracker',
        techStack: 'Next And Express',
        type: 'Frontend And Backend'
       }
    ];

    return (
        <div className="flex flex-wrap justify-center items-center gap-6 p-12">
            {projects.map((project, index) => (
                <ProjectShowcaseCard
                    key={index}
                    projectName={project.projectName}
                    techStack={project.techStack}
                    type={project.type}
                />
            ))}
        </div>
    );
}
