import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { architectureProjects } from '../data/architectureData';
import { interiorProjects } from '../data/interiorData';

const sliderImages = [
    {
        url: '/projects/interior/mr-amiya-sahu-residence/living-room-main.png',
        title: 'Amiya Sahu Residence',
        category: 'Interior'
    },
    {
        url: '/projects/interior/mr-gopal-sharma-residence/living-room-1.png',
        title: 'Gopal Sharma Residence',
        category: 'Interior'
    },
    {
        url: '/projects/interior/mr-pradhans-talcher/dining-area.png',
        title: "Mr. Pradhan's Residence",
        category: 'Interior'
    },
    {
        url: '/projects/interior/dgh-data-center/manager-office.png',
        title: 'DGH Data Center',
        category: 'Commercial'
    }
];

const ProjectSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000); // Auto-play every 5 seconds
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden rounded-sm group mb-20">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <img
                        src={sliderImages[currentIndex].url}
                        alt={sliderImages[currentIndex].title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    
                    <div className="absolute bottom-10 left-10 text-white z-10">
                        <motion.p 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-xs md:text-sm uppercase tracking-[0.3em] font-inter mb-2"
                        >
                            {sliderImages[currentIndex].category}
                        </motion.p>
                        <motion.h3 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="text-2xl md:text-5xl font-playfair font-bold"
                        >
                            {sliderImages[currentIndex].title}
                        </motion.h3>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Slider Controls */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/20 bg-black/10 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-lush-red hover:border-lush-red"
                aria-label="Previous slide"
            >
                <ChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/20 bg-black/10 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-lush-red hover:border-lush-red"
                aria-label="Next slide"
            >
                <ChevronRight size={24} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {sliderImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentIndex ? 'bg-lush-red w-8' : 'bg-white/40 hover:bg-white/60'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

const CompletedProjectsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const categories = [
        {
            id: 'architecture',
            title: 'Architecture',
            description: 'Structural elegance and spatial harmony.',
            image: architectureProjects[0]?.image || null,
            count: architectureProjects.length,
            href: '/architecture'
        },
        {
            id: 'interior',
            title: 'Interior',
            description: 'Bespoke indoor environments and luxury.',
            image: interiorProjects[0]?.image || '/projects/interior/mr-amiya-sahu-residence/living-room-main.png',
            count: interiorProjects.length,
            href: '/interior'
        },
        {
            id: 'landscape',
            title: 'Landscape Design',
            description: 'Seamless transitions between nature and form.',
            image: null,
            count: 0,
            href: '/landscape'
        },
        {
            id: 'management',
            title: 'Project Management',
            description: 'Executing complex visions with precision.',
            image: null,
            count: 0,
            href: '/management'
        }
    ];

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-24 px-4 sm:px-6 md:px-12 lg:px-24"
        >
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-playfair font-bold text-lush-dark">
                        Completed Projects
                    </h1>
                    <p className="mt-4 text-lush-dark/70 font-inter font-light max-w-2xl text-base sm:text-lg mb-12">
                        Explore our portfolio across various disciplines, where each project reflects our commitment to excellence and timeless design.
                    </p>
                    
                    {/* Integrated Slider showcasing real interior completed projects */}
                    <ProjectSlider />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {categories.map((category, index) => (
                        <Link to={category.href} key={category.id} className="block group">
                            <motion.div 
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="relative overflow-hidden aspect-[16/9] md:aspect-[4/3] rounded-sm mb-6 border border-gray-200/60 bg-neutral-900 group-hover:border-lush-red/50 transition-colors duration-500"
                            >
                                {category.image ? (
                                    <>
                                        <img 
                                            src={category.image} 
                                            alt={category.title}
                                            className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                        />
                                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors duration-500" />
                                        
                                        <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full bg-gradient-to-t from-black/70 to-transparent">
                                            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-white mb-2">
                                                {category.title}
                                            </h3>
                                            <p className="text-white/80 font-inter font-light text-sm md:text-base uppercase tracking-widest">
                                                View Projects ({category.count})
                                            </p>
                                        </div>
                                    </>
                                ) : (
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#1d1e22] via-[#16171a] to-[#0f1012] flex flex-col justify-between p-8 md:p-10">
                                        <div className="flex justify-between items-start">
                                            <span className="text-[11px] font-inter uppercase tracking-[0.25em] text-white/40">
                                                Category 0{index + 1}
                                            </span>
                                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-lush-red font-medium">
                                                Coming Soon
                                            </span>
                                        </div>

                                        <div className="transform group-hover:translate-x-1 transition-transform duration-300">
                                            <h3 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-2">
                                                {category.title}
                                            </h3>
                                            <p className="text-white/60 font-inter font-light text-sm max-w-sm">
                                                {category.description}
                                            </p>
                                        </div>

                                        <div className="flex items-center justify-between text-white/50 group-hover:text-white transition-colors duration-300 pt-4 border-t border-white/10">
                                            <span className="text-xs font-inter uppercase tracking-widest text-lush-red">
                                                No work in this category yet
                                            </span>
                                            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-lush-red group-hover:border-lush-red transition-all">
                                                <ArrowUpRight size={14} className="text-white" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default CompletedProjectsPage;
