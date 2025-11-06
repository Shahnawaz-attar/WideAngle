// FIX: Import React to provide the JSX namespace and React types.
import React from 'react';

const values = [
    { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />, title: 'Integrity', text: 'We act with honesty, transparency, and accountability.' },
    { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />, title: 'Innovation', text: 'We embrace creativity and continuously seek better solutions.' },
    { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />, title: 'Quality', text: 'We deliver excellence in everything we do.' },
    { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />, title: 'Customer Focus', text: 'We put our customers at the center of all decisions.' },
    { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.905 11h8.19M7.905 11a2.5 2.5 0 01-4.95-.213l-.5-2.5a2.5 2.5 0 012.45-3.087h3.001a2.5 2.5 0 012.45 3.087l-.5 2.5a2.5 2.5 0 01-4.95.213z" />, title: 'Sustainability', text: 'Committed to long-term environmental and social responsibility.' },
];

const ValueCard: React.FC<{ icon: JSX.Element; title: string; text: string; }> = ({ icon, title, text }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center">
        <div className="bg-blue-100 text-blue-600 rounded-full p-4 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">{icon}</svg>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600">{text}</p>
    </div>
);

const ValuesSection: React.FC = () => {
    return (
        <section id="values" className="py-20 bg-slate-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-800">Our Core Values</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.slice(0, 3).map((value, i) => <ValueCard key={i} {...value} />)}
                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-2/3 mx-auto">
                        {values.slice(3).map((value, i) => <ValueCard key={i} {...value} />)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValuesSection;