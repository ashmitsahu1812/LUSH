import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
    const phoneNumber = "919440307336";
    const message = encodeURIComponent("Hi, I am interested in Lush Living and would like to discuss a project.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ 
                type: "spring", 
                stiffness: 260, 
                damping: 20,
                delay: 2 // Show after loader/initial animations
            }}
            className="fixed bottom-8 right-8 z-[9999] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl cursor-pointer group"
            aria-label="Contact us on WhatsApp"
        >
            {/* Tooltip */}
            <span className="absolute right-16 px-4 py-2 bg-white text-lush-dark text-xs font-inter font-medium rounded-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-lush-dark/5">
                Chat with us
            </span>

            {/* WhatsApp Icon SVG */}
            <svg 
                width="30" 
                height="30" 
                viewBox="0 0 24 24" 
                fill="white" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M17.472 14.382c-.301-.15-1.767-.872-2.04-.971-.272-.099-.47-.15-.669.15-.199.3-.761 1.052-.933 1.252-.172.2-.344.225-.645.075-.3-.15-1.265-.467-2.41-1.488-.891-.795-1.492-1.778-1.667-2.078-.175-.3-.018-.462.132-.61.135-.133.301-.35.452-.524.15-.174.2-.299.3-.499.1-.2.05-.375-.025-.524-.075-.15-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.767-.721 2.016-1.418.249-.697.249-1.296.174-1.418-.075-.122-.276-.198-.577-.348zM12 2C6.477 2 2 6.477 2 12c0 2.13.66 4.104 1.785 5.73L2 22l4.394-1.713A9.95 9.95 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
            </svg>
        </motion.a>
    );
};

export default WhatsAppButton;
