// FIX: Import React to provide the JSX namespace and React types.
import React from 'react';

const reasons = [
    {
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
        title: 'Expertise & Experience',
        description: 'Over 30 years of leadership in executive-level construction and 15+ years dedicated to airport mega-projects.'
    },
    {
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
        title: 'Competitive Advantages',
        description: 'A proven track record of delivering multi-billion-dollar programs in the MENA region and beyond.'
    },
    {
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />,
        title: 'Technology & Innovation',
        description: 'Leveraging AI-driven controls and agile methodologies for efficiency and cost-effectiveness.'
    },
    {
        icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />,
        title: 'Client Testimonials',
        description: 'Building long-term relationships by consistently exceeding expectations and delivering excellence.'
    }
];

const ReasonCard: React.FC<{ icon: JSX.Element; title: string; description: string; }> = ({ icon, title, description }) => {
    return (
        <div className="flex items-start p-6 bg-slate-50 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-lg">
            <div className="flex-shrink-0 mr-6">
                <div className="bg-blue-100 text-blue-600 rounded-full p-4">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>{icon}</svg>
                </div>
            </div>
            <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
                <p className="text-slate-600">{description}</p>
            </div>
        </div>
    );
};


const WhyChooseUsSection: React.FC = () => {
    return (
        <section id="why-choose-us" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-800">Why Choose Us</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {reasons.map((reason, index) => (
                        <ReasonCard key={index} {...reason} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;