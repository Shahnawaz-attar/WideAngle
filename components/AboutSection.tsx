import React from 'react';

const missionItems = [
    { title: "Provide", description: "Client-focused project management from concept to completion." },
    { title: "Use", description: "AI-driven project controls and agile methodologies to minimize costs and delays." },
    { title: "Build", description: "Sustainable, efficient, and future-ready airport facilities." },
    { title: "Develop", description: "Long-term client relationships by consistently exceeding expectations." }
];

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-gray-100 text-4xl font-bold">Who We Are</h2>
                    <div className="w-24 h-1 bg-[#64ffda] mx-auto mt-4"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                    <div className="md:w-1/2 overflow-hidden rounded-lg">
                        <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" alt="Team collaborating in a modern office" className="rounded-lg shadow-2xl animated-image"/>
                    </div>
                    <div className="md:w-1/2 text-lg text-gray-300 leading-relaxed">
                        <p>
                            <span className="font-bold text-[#64ffda]">Wide Angle</span> is a forward-thinking Project Management Consultancy dedicated to delivering complex airport projects with precision, innovation, and efficiency. From concept design through final account, we support clients in achieving their vision while minimizing risks, optimizing costs, and ensuring timely delivery.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                        <h3 className="text-gray-100 text-3xl font-bold mb-4">Our Vision</h3>
                        <p className="text-lg text-gray-300">
                            To be the most trusted partner in delivering world-class airport infrastructure through innovation, agility, and sustainable solutions.
                        </p>
                    </div>
                    <div className="p-8">
                         <h3 className="text-gray-100 text-3xl font-bold mb-4">Our Mission</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {missionItems.map((item, index) => (
                                <div key={index} className="flex flex-col p-4 bg-gray-800 rounded-lg border border-gray-700 shadow-sm hover:shadow-xl hover:border-[#64ffda]/50 transition-all duration-300">
                                    <h4 className="font-bold text-[#64ffda] text-lg mb-2">{item.title}</h4>
                                    <p className="text-gray-300">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;