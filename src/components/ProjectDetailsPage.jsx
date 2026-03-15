import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { architectureProjects } from '../data/architectureData';

const ProjectDetailsPage = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const project = architectureProjects.find(p => p.id === projectId);

    useEffect(() => {
        window.scrollTo(0, 0);
        // If project is not found, we redirect back to the architecture page
        if (!project) {
            navigate('/architecture');
        }
    }, [projectId, project, navigate]);

    if (!project) return null;

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-white min-h-screen"
        >
            <div className="max-w-7xl mx-auto">
                
                {/* Back button */}
                <Link to="/architecture" className="inline-flex items-center gap-2 text-lush-dark/60 hover:text-lush-red transition-colors duration-300 font-inter text-sm tracking-widest uppercase mb-12 group">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:-translate-x-1 transition-transform">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    Back to Architecture
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24">
                    <div className="lg:col-span-5">
                        <motion.h1 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl sm:text-5xl md:text-7xl font-playfair font-bold text-lush-dark leading-tight"
                        >
                            {project.title}
                        </motion.h1>
                        <p className="font-inter text-lush-red tracking-[0.2em] uppercase text-sm mt-6 mb-12">
                            {project.category}
                        </p>

                        <div className="grid grid-cols-2 gap-8 mb-12">
                            <div>
                                <h4 className="font-inter font-semibold text-xs text-lush-dark/50 uppercase tracking-widest mb-1">Client</h4>
                                <p className="font-inter text-lush-dark text-sm">{project.details.client}</p>
                            </div>
                            <div>
                                <h4 className="font-inter font-semibold text-xs text-lush-dark/50 uppercase tracking-widest mb-1">Year</h4>
                                <p className="font-inter text-lush-dark text-sm">{project.details.year}</p>
                            </div>
                            <div className="col-span-2">
                                <h4 className="font-inter font-semibold text-xs text-lush-dark/50 uppercase tracking-widest mb-1">Location</h4>
                                <p className="font-inter text-lush-dark text-sm">{project.details.location}</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <motion.div 
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="aspect-[4/3] w-full relative overflow-hidden rounded-sm"
                        >
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        </motion.div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-32 max-w-5xl mx-auto">
                    <div>
                        <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4 text-lush-dark">The Vision</h3>
                        <p className="font-inter font-light text-lush-dark/70 leading-relaxed text-base md:text-lg">
                            {project.details.description}
                        </p>
                    </div>
                    <div>
                        <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4 text-lush-dark">The Approach</h3>
                        <p className="font-inter font-light text-lush-dark/70 leading-relaxed text-base md:text-lg">
                            {project.details.concept}
                        </p>
                    </div>
                </div>

                {/* Additional Gallery */}
                <div>
                    <h2 className="text-3xl md:text-5xl font-playfair font-bold text-center mb-16 text-lush-dark">Selected Gallery</h2>
                    <div className="flex flex-col gap-12 sm:gap-24">
                        {project.details.gallery.map((img, index) => (
                            <motion.div 
                                key={index}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.8 }}
                                className={`w-full ${index % 2 === 0 ? 'md:w-3/4 md:mr-auto' : 'md:w-3/4 md:ml-auto'}`}
                            >
                                <div className="aspect-[16/9] w-full relative overflow-hidden rounded-sm">
                                    <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default ProjectDetailsPage;
