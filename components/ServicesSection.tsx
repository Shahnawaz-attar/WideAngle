import React, { useState } from 'react';

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
    <div className="bg-[#0a192f] p-6 rounded-lg shadow-md border-l-4 border-[#64ffda] hover:shadow-xl hover:shadow-[#64ffda]/10 hover:-translate-y-1 transition-all duration-300">
        <h3 className="text-xl font-bold text-slate-100 mb-2">{title}</h3>
        <p className="text-slate-300">{description}</p>
    </div>
);

const AccordionItem: React.FC<{
    category: ServiceCategory;
    isOpen: boolean;
    onToggle: () => void;
}> = ({ category, isOpen, onToggle }) => {
    return (
        <div className="border border-slate-700 rounded-lg overflow-hidden transition-all duration-300 bg-[#112240]">
            <button
                onClick={onToggle}
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none focus:bg-[#172a45] transition-colors"
                aria-expanded={isOpen}
                aria-controls={`content-${category}`}
            >
                <h3 className="text-xl font-semibold text-slate-100">{categoryDisplayNames[category]}</h3>
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
                    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#0a192f]">
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
        <section id="services" className="py-24 bg-[#112240]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-100">Our Services</h2>
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
