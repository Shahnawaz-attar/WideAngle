
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
        <section id="leadership" className="py-20 bg-slate-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-800">Leadership</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
                </div>
                <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/3 text-center">
                            <img src="https://picsum.photos/400/400?random=4" alt="Hassan Hammadeh, CEO" className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto shadow-lg border-4 border-blue-500" />
                            <h3 className="text-2xl font-bold mt-6 text-slate-800">Hassan Hammadeh</h3>
                            <p className="text-slate-600 text-lg">Chief Executive Officer</p>
                        </div>
                        <div className="md:w-2/3">
                            <ul className="space-y-3 text-slate-600 text-lg mb-8">
                                {achievements.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <svg className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <h4 className="text-xl font-semibold text-slate-700 mb-4 border-t pt-4">Key Projects Delivered:</h4>
                             <div className="flex flex-wrap gap-2">
                                {projects.map((project, index) => (
                                    <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">{project}</span>
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
