import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion

type ServiceCategory = 'Management' | 'Systems' | 'Processes';

const servicesData = {
    Management: [
        { title: 'Project & Program Management', description: 'Specializing in airports & mega projects.' },
        { title: 'Design Management', description: 'Concept, schematic, detailed design oversight.' },
        { title: 'Construction Management', description: 'Site administration, quality, safety, progress monitoring.' },
        { title: 'Commercial & Cost Management', description: 'Budgeting, cash flow, claims, and final accounts.' },
        { title: 'Contract & Claims Management', description: 'Negotiation, dispute resolution, risk mitigation.' },
        { title: 'Sustainability & Innovation', description: 'Green building certifications, AI-enabled controls.' },
    ],
    Systems: [
        { title: 'ICT Systems', description: 'SCN, CNE, DCH, VoIP, DMS, WDN, PAS, and more.' },
        { title: 'Security Systems', description: 'CCTV, Security and Access Control (SACS), PSIM.' },
        { title: 'Airport Operations Systems (AOS)', description: 'AODB, CUPPS, CUSS, FIDS, AMIS, BRS.' },
    ],
    Processes: [
        { title: 'Testing & Commissioning', description: 'Developing plans, coordinating activities, and reviewing T&C procedures (TCIR, SAT, SPT, IPT).' },
        { title: 'Operational Readiness (ORAT)', description: 'Validating readiness, training staff, conducting trials, mitigating risks for a smooth transition.' },
    ],
};

const categoryDisplayNames: Record<ServiceCategory, string> = {
    Management: 'Core Management',
    Systems: 'Systems Implementation',
    Processes: 'Operational Processes',
};

const ServiceCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <motion.div
        className="bg-gray-900 p-6 rounded-lg shadow-md border-l-4 border-[#64ffda] cursor-pointer" // Removed hover classes
        tabIndex={0} // Make card focusable for keyboard navigation
        initial={{ rotateX: 0, rotateY: 0, y: 0, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)' }} // Default shadow-md
        whileHover={{
            rotateX: -6, // Tilt up from bottom
            rotateY: 6, // Tilt from left to right
            y: -8, // Lift slightly
            boxShadow: '0 0 30px rgba(100, 255, 218, 0.4), 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)', // Soft glow + enhanced shadow
            zIndex: 10, // Bring to front on hover/focus
        }}
        whileFocus={{
            rotateX: -6,
            rotateY: 6,
            y: -8,
            boxShadow: '0 0 30px rgba(100, 255, 218, 0.4), 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)',
            outline: 'none', // Remove default outline for custom styling
            zIndex: 10,
        }}
        transition={{ duration: 0.36, ease: [0.2, 0.9, 0.3, 1] }} // Use motion tokens
        style={{ transformStyle: 'preserve-3d', transformOrigin: 'center' }} // Enable 3D transform
    >
        <h3 className="text-gray-100 text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
    </motion.div>
);

const AccordionItem: React.FC<{
    category: ServiceCategory;
    isOpen: boolean;
    onToggle: () => void;
}> = ({ category, isOpen, onToggle }) => {
    return (
        <div className="border border-gray-600 rounded-lg overflow-hidden transition-all duration-300 bg-gray-700">
            <button
                onClick={onToggle}
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none focus:bg-gray-800 transition-colors"
                aria-expanded={isOpen}
                aria-controls={`content-${category}`}
            >
                <h3 className="text-gray-100 text-xl font-semibold">{categoryDisplayNames[category]}</h3>
                <svg
                    className={`w-6 h-6 text-[#64ffda] transition-transform duration-300 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div
                id={`content-${category}`}
                className={`grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-900">
                        {servicesData[category].map((service, index) => (
                            <ServiceCard key={index} title={service.title} description={service.description} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ServicesSection: React.FC = () => {
    const [openCategory, setOpenCategory] = useState<ServiceCategory | null>('Management');

    const handleToggle = (category: ServiceCategory) => {
        setOpenCategory(prev => (prev === category ? null : category));
    };

    const categories: ServiceCategory[] = ['Management', 'Systems', 'Processes'];

    return (
        <section id="services" className="py-24 bg-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-gray-100 text-4xl font-bold">Our Services</h2>
                    <div className="w-24 h-1 bg-[#64ffda] mx-auto mt-4"></div>
                </div>
                <div className="max-w-4xl mx-auto space-y-4">
                    {categories.map((category) => (
                        <AccordionItem
                            key={category}
                            category={category}
                            isOpen={openCategory === category}
                            onToggle={() => handleToggle(category)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;