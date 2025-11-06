
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center text-white text-center px-6">
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <img src="https://picsum.photos/1920/1080?grayscale&blur=2&random=1" alt="Modern airport architecture" className="absolute inset-0 w-full h-full object-cover"/>
            <div className="relative z-20 max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight uppercase mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
                    WIDEANGLE
                </h1>
                <p className="text-xl md:text-2xl font-light" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
                    Precision, Innovation, and Efficiency in Airport Project Management
                </p>
                <a href="#about" className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg">
                    Discover More
                </a>
            </div>
        </section>
    );
};

export default Hero;
