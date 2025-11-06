
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

const TabButton: React.FC<{ active: boolean; onClick: () => void; children: React.ReactNode }> = ({ active, onClick, children }) => (
    <button
        onClick={onClick}
        className={`px-6 py-3 font-semibold text-lg rounded-t-lg transition-colors duration-300 focus:outline-none ${
            active ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
        }`}
    >
        {children}
    </button>
);

const ServiceCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
    </div>
);

const ServicesSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<ServiceCategory>('Management');

    return (
        <section id="services" className="py-20 bg-slate-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-800">Our Services</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
                </div>
                <div className="flex justify-center border-b border-slate-300 mb-8">
                    <TabButton active={activeTab === 'Management'} onClick={() => setActiveTab('Management')}>Core Management</TabButton>
                    <TabButton active={activeTab === 'Systems'} onClick={() => setActiveTab('Systems')}>Systems Implementation</TabButton>
                    <TabButton active={activeTab === 'Processes'} onClick={() => setActiveTab('Processes')}>Operational Processes</TabButton>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData[activeTab].map((service, index) => (
                        <ServiceCard key={index} title={service.title} description={service.description} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
