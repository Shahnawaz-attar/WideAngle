import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center text-center px-6">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/70 to-transparent z-10"></div>
            <img src="https://picsum.photos/1920/1080?grayscale&random=10" alt="Modern airport architecture" className="absolute inset-0 w-full h-full object-cover"/>
            <div className="relative z-20 max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight uppercase mb-4 text-slate-100" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
                    WIDE<span className="text-[#64ffda]">ANGLE</span>
                </h1>
                <p className="text-xl md:text-2xl font-light text-slate-200" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
                    Precision, Innovation, and Efficiency in Airport Project Management
                </p>
                <a href="#about" className="mt-8 inline-block bg-transparent hover:bg-[#64ffda]/10 text-[#64ffda] font-bold py-3 px-8 rounded-md border-2 border-[#64ffda] transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Discover More
                </a>
            </div>
        </section>
    );
};

export default Hero;