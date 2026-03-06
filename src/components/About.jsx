import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeUpText = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
    }
};

const About = () => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-10%" });

    return (
        <section ref={containerRef} className="py-32 px-4 md:px-12 lg:px-24 bg-lush-dark text-white relative z-30 overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

                    {/* Text Content */}
                    <div className="lg:col-span-5 order-2 lg:order-1">
                        <motion.h2
                            className="text-lush-red text-sm md:text-base mb-6 tracking-[0.3em] font-inter uppercase"
                            variants={fadeUpText}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            Our Philosophy
                        </motion.h2>

                        <motion.h3
                            className="text-4xl md:text-6xl font-playfair leading-[1.1] mb-8 normal-case"
                            variants={fadeUpText}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            We craft <br />
                            <span className="font-script text-lush-gold normal-case text-5xl md:text-7xl">spaces</span> that <br />
                            inspire you.
                        </motion.h3>

                        <motion.p
                            className="text-lg text-gray-400 font-inter font-light leading-relaxed mb-10"
                            variants={fadeUpText}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            At LUSH Living, interior design is more than just decoration. It's an immersive experience designed to elevate your everyday. We merge timeless elegance with contemporary sophistication to create spaces layered in luxury.
                        </motion.p>
                    </div>

                    {/* Asymmetrical Image Grid */}
                    <div className="lg:col-span-7 order-1 lg:order-2 grid grid-cols-2 gap-4 md:gap-8 transform-gpu">
                        <motion.div
                            className="mt-12 md:mt-24"
                            initial={{ opacity: 0, y: 100 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.2 }}
                        >
                            <div className="relative overflow-hidden group rounded-sm">
                                <img
                                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Luxury Living Room"
                                    className="w-full h-auto object-cover transform-gpu scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-lush-red/30 to-transparent opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-500" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                            transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.4 }}
                        >
                            <div className="relative overflow-hidden group rounded-sm">
                                <img
                                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                    alt="Elegant Interior"
                                    className="w-full h-auto object-cover transform-gpu scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-lush-gold/30 to-transparent opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-500" />
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
