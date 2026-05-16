import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { interiorProjects } from '../data/interiorData';

const subcategories = [
    {
        id: 'Residential',
        title: 'Residential',
        image: '/projects/interior/mr-amiya-sahu-residence/living-room-main.png',
        description: 'Luxurious interiors for modern living.'
    },
    {
        id: 'Commercial',
        title: 'Commercial',
        image: '/projects/interior/dgh-data-center/entrance-lobby.png',
        description: 'Inspiring workspaces and high-end retail.'
    },
    {
        id: 'Hospitality',
        title: 'Hospitality',
        image: '/projects/interior/mr-gopal-sharma-residence/living-room-2.png',
        description: 'Elegant designs for hotels and leisure.'
    },
    {
        id: 'Institutional',
        title: 'Institutional',
        image: '/projects/interior/equipage-infracore/boardroom.png',
        description: 'Refined interiors for public institutions.'
    }
];

const InteriorPage = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [selectedCategory]);

    const filteredProjects = interiorProjects.filter(
        project => project.category === selectedCategory
    );

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-24 px-4 sm:px-6 md:px-12 lg:px-24"
        >
            <div className="max-w-7xl mx-auto">
                <AnimatePresence mode="wait">
                    {!selectedCategory ? (
                        <motion.div
                            key="selection"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="mb-16">
                                <h1 className="text-4xl sm:text-5xl md:text-7xl font-playfair font-bold text-lush-dark mb-6">
                                    Interior
                                </h1>
                                <p className="text-lush-dark/70 font-inter font-light max-w-2xl text-base sm:text-lg">
                                    Curating bespoke indoor environments that balance aesthetic luxury with functional elegance. Select a category to explore.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {subcategories.map((cat, index) => (
                                    <motion.div
                                        key={cat.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        onClick={() => setSelectedCategory(cat.id)}
                                        className="group relative aspect-[16/10] overflow-hidden rounded-sm cursor-pointer"
                                    >
                                        <img 
                                            src={cat.image} 
                                            alt={cat.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                                        />
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
                                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                            <h3 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-2">
                                                {cat.title}
                                            </h3>
                                            <p className="text-white/80 font-inter text-sm md:text-base max-w-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                                {cat.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="projects"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="mb-12">
                                <button 
                                    onClick={() => setSelectedCategory(null)}
                                    className="flex items-center gap-2 text-lush-red font-inter text-sm uppercase tracking-widest mb-8 hover:gap-4 transition-all duration-300"
                                >
                                    <ArrowLeft size={20} /> Back to Categories
                                </button>
                                <h1 className="text-4xl sm:text-5xl md:text-7xl font-playfair font-bold text-lush-dark mb-4">
                                    {selectedCategory}
                                </h1>
                                <p className="text-lush-dark/70 font-inter font-light max-w-2xl text-base sm:text-lg">
                                    Showing our {selectedCategory.toLowerCase()} interior design projects.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                                {filteredProjects.map((project, index) => (
                                    <Link 
                                        to={`/interior/${project.id}`}
                                        key={project.id}
                                    >
                                        <motion.div 
                                            initial={{ y: 50, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
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
                                    </Link>
                                ))}
                            </div>

                            {filteredProjects.length === 0 && (
                                <div className="py-24 text-center">
                                    <p className="text-gray-500 font-inter italic">No projects found in this category yet.</p>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default InteriorPage;
