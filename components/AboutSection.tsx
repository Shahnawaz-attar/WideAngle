
import React from 'react';

const missionItems = [
    { title: "Provide", description: "Client-focused project management from concept to completion." },
    { title: "Use", description: "AI-driven project controls and agile methodologies to minimize costs and delays." },
    { title: "Build", description: "Sustainable, efficient, and future-ready airport facilities." },
    { title: "Develop", description: "Long-term client relationships by consistently exceeding expectations." }
];

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-800">Who We Are</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                    <div className="md:w-1/2">
                        <img src="https://picsum.photos/800/600?random=2" alt="Team collaborating in a modern office" className="rounded-lg shadow-2xl"/>
                    </div>
                    <div className="md:w-1/2 text-lg text-slate-600 leading-relaxed">
                        <p>
                            <span className="font-bold text-blue-700">Wide Angle</span> is a forward-thinking Project Management Consultancy dedicated to delivering complex airport projects with precision, innovation, and efficiency. From concept design through final account, we support clients in achieving their vision while minimizing risks, optimizing costs, and ensuring timely delivery.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="bg-slate-100 p-8 rounded-lg shadow-lg">
                        <h3 className="text-3xl font-bold text-slate-800 mb-4">Our Vision</h3>
                        <p className="text-lg text-slate-600">
                            To be the most trusted partner in delivering world-class airport infrastructure through innovation, agility, and sustainable solutions.
                        </p>
                    </div>
                    <div className=" p-8">
                         <h3 className="text-3xl font-bold text-slate-800 mb-4">Our Mission</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {missionItems.map((item, index) => (
                                <div key={index} className="flex flex-col p-4 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                    <h4 className="font-bold text-blue-600 text-lg mb-2">{item.title}</h4>
                                    <p className="text-slate-600">{item.description}</p>
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
