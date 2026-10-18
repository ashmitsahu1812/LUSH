import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const landscapeProjects = [];

const LandscapePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-24 px-4 sm:px-6 md:px-12 lg:px-24 min-h-[75vh]"
        >
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <Link 
                        to="/completed-projects" 
                        className="inline-flex items-center gap-2 text-lush-dark/50 hover:text-lush-red transition-colors duration-300 font-inter text-xs tracking-widest uppercase mb-6"
                    >
                        ← Back to Completed Projects
                    </Link>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-playfair font-bold text-lush-dark mb-4">
                        Landscape Design
                    </h1>
                    <p className="mt-4 text-lush-dark/70 font-inter font-light max-w-2xl text-base sm:text-lg">
                        Sculpting natural environments to create seamless transitions between organic beauty and architectural form.
                    </p>
                </div>

                {landscapeProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                        {landscapeProjects.map((project, index) => (
                            <motion.div 
                                key={project.id}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
                            >
                                <div className="relative overflow-hidden aspect-[4/5] mb-6 rounded-sm">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-playfair font-bold text-lush-dark group-hover:text-lush-red transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <p className="text-xs md:text-sm font-inter text-gray-500 uppercase tracking-widest mt-2">
                                        {project.category}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="py-24 sm:py-32 text-center flex flex-col items-center justify-center border border-dashed border-gray-200 rounded-sm bg-gray-50/50 px-6">
                        <div className="w-16 h-16 rounded-full border border-lush-dark/15 flex items-center justify-center mb-6 text-lush-dark/40">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                <line x1="9" y1="3" x2="9" y2="21"/>
                            </svg>
                        </div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-medium text-lush-dark mb-3">
                            No work in this category yet
                        </h3>
                        <p className="text-xs sm:text-sm font-inter tracking-[0.25em] uppercase text-lush-red font-semibold">
                            Coming Soon
                        </p>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default LandscapePage;
