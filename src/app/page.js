"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    { name: "ZYN-lw", description: "A Linux distro using the Zyn language." },
    { name: "nixfetch", description: "A system information tool similar to neofetch." },
    { name: "KAOL", description: "A custom archive format." },
    { name: "KZEV", description: "An encryption format based on SHA-512 with Base64." },
    { name: "C::Void", description: "A programming language mixing C, Rust, and Zig." },
    { name: "KNML", description: "A structured markup language inspired by JSON, YAML, and TOML." },
    { name: "ZVM", description: "A virtual machine manager with GUI support." },
    { name: "KA3D", description: "A 3D graphics renderer." },
    { name: "Dream League", description: "A Python-based game." },
    { name: "Stackerd-math", description: "A stack-based shell with scripting support." },
    { name: "Zynx-link", description: "A chatbot AI in Python." },
    { name: "CodeZynx", description: "A coding AI model for Python development." },
    { name: "Marx 2.0", description: "A web crawler with structured data storage." },
    { name: "Kixd", description: "A Nix-based programming language." },
    { name: "CVON", description: "A structured data format inspired by ZON, JSON, and TOML." },
    { name: "A stacked window manager", description: "Inspired by GlazeWM, implemented in Python." },
    { name: "A 3D maze game", description: "Featuring raycasting techniques." },
    { name: "An anime series", description: "Inspired by JoJo's Bizarre Adventure." }
];

export default function Portfolio() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [darkMode, setDarkMode] = useState(false);
    const [viewedProjects, setViewedProjects] = useState([]);
    const [showSnake, setShowSnake] = useState(false);

    useEffect(() => {
        if (viewedProjects.length === projects.length) {
            const timer = setTimeout(() => setShowSnake(true), 1000);
            return () => clearTimeout(timer);
        }
    }, [viewedProjects]);

    const handleViewProject = (project) => {
        setSelectedProject(project);
        if (!viewedProjects.includes(project.name)) {
            setViewedProjects([...viewedProjects, project.name]);
        }
    };

    return (
        <div className={`container mx-auto p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}>
            <button 
                className="absolute top-4 right-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-600" 
                onClick={() => setDarkMode(!darkMode)}>
                Toggle Dark Mode
            </button>
            
            <h1 className="text-3xl font-bold text-center mb-6">Ariels Porfolio</h1>
            <h2 className="text-2xl font-semibold">About Me!!! and only me :)</h2>
            <p className="mb-4">I'm Ariel Zvinowanda a lazy developer passionate about creating software, AI models, and game development.</p>
            
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <motion.div 
                        key={index} 
                        className="p-4 bg-white shadow-md rounded-lg dark:bg-gray-800"
                        whileHover={{ scale: 1.05 }}>
                        <h3 className="text-xl font-bold">{project.name}</h3>
                        <button 
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 mt-2" 
                            onClick={() => handleViewProject(project)}>
                            View Project
                        </button>
                    </motion.div>
                ))}
            </div>
            
            <AnimatePresence>
                {selectedProject && (
                    <motion.div 
                        className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}>
                        <motion.div 
                            className="p-6 bg-white dark:bg-gray-900 text-black dark:text-white rounded-lg shadow-lg"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}>
                            <h3 className="text-2xl font-bold mb-2">{selectedProject.name}</h3>
                            <p>{selectedProject.description}</p>
                            <button 
                                className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700" 
                                onClick={() => setSelectedProject(null)}>
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {showSnake && (
                <div className="mt-8">
                    <h2 className="text-2xl font-semibold mb-2">🎮 Play Snake!</h2>
                    <a 
  href="https://playsnake.org" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="mt-8 inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded hover:bg-green-700"
>
  Play Snake Game 🐍 or not?
</a>

                </div>
            )}

            <h2 className="text-2xl font-semibold mt-6">Contact</h2>
            <p>Find me on <a href="https://github.com/Kazan20" className="text-blue-500">GitHub</a></p>
        </div>
    );
}
