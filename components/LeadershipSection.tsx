import React from 'react';

const LeadershipSection: React.FC = () => {
    const achievements = [
        "Executive-level professional with over 30 years of experience across the Middle East, Africa, Asia-Pacific, and Europe.",
        "15+ years dedicated to airport mega-projects, including delivery of 5 major international airports in the MENA region.",
        "Proven track record as Project Director on multi-billion-dollar programs.",
        "Previously served as Executive Director at Saudi Entertainment Ventures (SEVEN, PIF subsidiary).",
        "Holds a Master's in Engineering Management and a Bachelor of Civil Engineering.",
        "Fluent in Arabic & English, with extensive global experience."
    ];

    const projects = [
        "Bahrain International Airport Modernization (USD 1.1B)",
        "King Khalid International Airport, T5 - Riyadh (SAR 1.6B)",
        "Prince Mohammad Bin Abdul Aziz Int'l Airport - Madinah",
        "Cairo International Airport T3 (USD 360M)",
        "Hammamet International Airport - Tunisia (EUR 437M)"
    ];

    return (
        <section id="leadership" className="py-24 bg-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-gray-100 text-4xl font-bold">Leadership</h2>
                    <div className="w-24 h-1 bg-[#64ffda] mx-auto mt-4"></div>
                </div>
                <div className="bg-gray-900 rounded-lg shadow-xl p-8 md:p-12 max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/3 text-center">
                            <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop" alt="Hassan Hammadeh, CEO" className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto shadow-lg border-4 border-[#64ffda] animated-image" />
                            <h3 className="text-gray-100 text-2xl font-bold mt-6">Hassan Hammadeh</h3>
                            <p className="text-lg text-[#64ffda]">CEO & Founder</p>
                        </div>
                        <div className="md:w-2/3">
                            <h4 className="text-gray-100 text-2xl font-semibold mb-4 border-b-2 border-[#64ffda]/50 pb-2">Key Achievements</h4>
                            <ul className="list-disc list-inside space-y-3 text-gray-300">
                                {achievements.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>

                            <h4 className="text-gray-100 text-2xl font-semibold mt-8 mb-4 border-b-2 border-[#64ffda]/50 pb-2">Notable Projects</h4>
                             <div className="flex flex-wrap gap-3">
                                {projects.map((project, index) => (
                                    <span key={index} className="bg-gray-700 text-gray-300 text-sm font-medium px-4 py-2 rounded-full border border-gray-600">
                                        {project}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadershipSection;