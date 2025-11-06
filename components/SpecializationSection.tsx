import React from 'react';

const specializations = [
    { title: 'Airports', description: 'Passenger terminals, runways, aprons, airside & landside infrastructure.' },
    { title: 'Complex Transportation Hubs', description: 'Integrating multiple modes of transport for seamless passenger flow.' },
    { title: 'Large-Scale Developments', description: 'Commercial and mixed-use projects (secondary scope).' },
];

const SpecializationSection: React.FC = () => {
    return (
        <section id="specialization" className="py-24 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <h2 className="text-gray-100 text-4xl font-bold mb-6">Our Specialization</h2>
                         <ul className="space-y-6">
                            {specializations.map((spec, index) => (
                                <li key={index} className="flex items-start">
                                    <svg className="w-6 h-6 text-[#64ffda] mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                    <div>
                                        <h3 className="text-gray-100 text-xl font-semibold">{spec.title}</h3>
                                        <p className="text-gray-300">{spec.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:w-1/2 rounded-lg overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=2070&auto=format&fit=crop" alt="Aerial view of an airport tarmac" className="rounded-lg shadow-2xl w-full h-full object-cover animated-image"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecializationSection;