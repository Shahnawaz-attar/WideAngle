import React from 'react';

const specializations = [
    { title: 'Airports', description: 'Passenger terminals, runways, aprons, airside & landside infrastructure.' },
    { title: 'Complex Transportation Hubs', description: 'Integrating multiple modes of transport for seamless passenger flow.' },
    { title: 'Large-Scale Developments', description: 'Commercial and mixed-use projects (secondary scope).' },
];

const SpecializationSection: React.FC = () => {
    return (
        <section id="specialization" className="py-24 bg-[#0a192f]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-bold text-slate-100 mb-6">Our Specialization</h2>
                         <ul className="space-y-6">
                            {specializations.map((spec, index) => (
                                <li key={index} className="flex items-start">
                                    <svg className="w-6 h-6 text-[#64ffda] mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                    <div>
                                        <h3 className="text-xl font-semibold text-slate-200">{spec.title}</h3>
                                        <p className="text-slate-300">{spec.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:w-1/2">
                        <img src="https://picsum.photos/800/600?random=3" alt="Aerial view of an airport tarmac" className="rounded-lg shadow-2xl w-full h-full object-cover"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecializationSection;