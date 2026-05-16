import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const team = [
        {
            name: "AR. BIBHUDATTA SAHOO",
            role: "Lead Designer, Project Manager",
            image: "/team/bibhudatta-sahoo.png"
        },
        {
            name: "AR. SUSHMITA SUBUDHI",
            role: "Lead Designer, Project Manager",
            image: "/team/sushmita-subudhi.png"
        }
    ];

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-24 px-4 sm:px-6 md:px-12 lg:px-24 min-h-screen bg-white"
        >
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-playfair font-bold text-lush-dark mb-12">
                        About LUSH
                    </h1>
                    
                    <div className="space-y-12 text-lush-dark/80 font-inter font-light text-lg leading-relaxed">
                        <p className="text-xl md:text-2xl font-playfair text-lush-dark italic border-l-4 border-lush-red pl-6 py-2">
                            Founded on the principles of timeless elegance and contemporary sophistication, Lush Living began as a vision to redefine the boundaries of interior design and architectural excellence.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 pt-16 border-t border-lush-dark/10">
                            <div>
                                <h2 className="text-lush-red text-xs uppercase tracking-[0.4em] font-bold mb-6">Our Philosophy</h2>
                                <h3 className="text-2xl md:text-3xl font-playfair font-bold text-lush-dark mb-4">Design Ethos</h3>
                                <p className="text-xl italic font-playfair text-lush-dark/90 leading-relaxed mb-8">
                                    "To create spaces that don't just exist, but breathe with the souls of those who inhabit them."
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-playfair font-bold text-lush-dark mb-4">Approach</h3>
                                <p>
                                    We specialize in narrating the unique stories of our clients through meticulously curated materials, bespoke furnishings, and an unwavering attention to detail. Our team of visionary designers and architects work in harmony to transform concepts into immersive physical realities.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Team Section */}
                    <div className="mt-32 pt-20 border-t border-lush-dark/10">
                        <h2 className="text-lush-red text-xs uppercase tracking-[0.4em] font-bold mb-12 text-center">Our Team</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                            {team.map((member, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.2 }}
                                    className="group"
                                >
                                    <div className="relative overflow-hidden aspect-[4/5] rounded-sm mb-6">
                                        <img 
                                            src={member.image} 
                                            alt={member.name}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-lush-dark/10 group-hover:bg-transparent transition-colors duration-500" />
                                    </div>
                                    <h4 className="text-xl font-playfair font-bold text-lush-dark tracking-wide">{member.name}</h4>
                                    <p className="text-xs uppercase tracking-[0.2em] text-lush-red mt-2 font-inter">{member.role}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default AboutPage;
