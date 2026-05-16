import { Link } from 'react-router-dom';

const projectsData = [
    {
        id: 'mr-amiya-sahu-residence',
        title: 'Amiya Sahu Residence',
        category: 'Residential Interior',
        image: '/projects/interior/mr-amiya-sahu-residence/living-room-main.png',
        color: '#fdf1f1'
    },
    {
        id: 'mr-gopal-sharma-residence',
        title: 'Gopal Sharma Residence',
        category: 'Residential Interior',
        image: '/projects/interior/mr-gopal-sharma-residence/living-room-1.png',
        color: '#f9e8e8'
    },
    {
        id: 'mr-pradhans-talcher',
        title: "Mr. Pradhan's Residence",
        category: 'Residential Interior',
        image: '/projects/interior/mr-pradhans-talcher/dining-area.png',
        color: '#f5f5f5'
    },
    {
        id: 'equipage-infracore',
        title: 'Equipage Infracore',
        category: 'Commercial Interior',
        image: '/projects/interior/equipage-infracore/reception.png',
        color: '#fafafa'
    }
];

const Projects = () => {
    const [activeColor, setActiveColor] = useState('transparent');

    return (
        <motion.section
            className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 transition-colors duration-700 ease-in-out relative"
            animate={{ backgroundColor: activeColor }}
            style={{ backgroundColor: 'transparent' }}
        >
            {activeColor === 'transparent' && <div className="absolute inset-0 bg-white -z-10" />}

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16">
                    <div>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-playfair font-bold text-lush-dark normal-case">
                            Selected
                        </h2>
                        <h2 className="font-script text-4xl sm:text-5xl md:text-7xl text-lush-red normal-case -mt-2">
                            Works
                        </h2>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 max-w-sm mt-4 sm:mt-6 md:mt-0 font-inter font-light">
                        A curated collection of our most defining interior design achievements across the globe.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">
                    {projectsData.map((project, index) => (
                        <Link 
                            to={`/interior/${project.id}`}
                            key={project.id}
                            className={`group cursor-pointer block ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
                            onMouseEnter={() => setActiveColor(project.color)}
                            onMouseLeave={() => setActiveColor('transparent')}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                            >
                                <div className="relative overflow-hidden aspect-[4/5] mb-6 rounded-sm">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)]"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

                                    {/* Discover overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="w-24 h-24 rounded-full bg-lush-red/90 flex items-center justify-center text-white font-playfair font-bold text-sm -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                                            View
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-between items-start text-lush-dark">
                                    <div>
                                        <h4 className="text-xl sm:text-2xl font-playfair font-bold mb-2 group-hover:text-lush-red transition-colors duration-300 normal-case">
                                            {project.title}
                                        </h4>
                                        <p className="text-sm font-inter text-gray-600 uppercase tracking-widest">
                                            {project.category}
                                        </p>
                                    </div>
                                    <span className="text-gray-500 font-inter text-sm block mt-2">
                                        0{index + 1}
                                    </span>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Projects;
