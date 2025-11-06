import React, { useState, useEffect } from 'react';

const Logo = () => (
    <div className="flex items-center space-x-2">
        <svg className="w-10 h-10 text-[#64ffda]" viewBox="0 0 512 512" fill="currentColor">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM159.3 159.3C196.4 122.2 250 100.7 304 96.3c-2.8-13.4-12.4-23.7-25.7-25.7-53.6-4.4-107.2 17.1-144.3 54.2s-58.6 90.7-54.2 144.3c2 13.3 12.3 22.9 25.7 25.7 4.4 54 25.9 107.6 63 144.7s82.1 58.6 135.7 63c13.4-2 23-12.3 25.7-25.7-4.4-54-25.9-107.6-63-144.7s-82.1-58.6-135.7-63zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"/>
        </svg>
        <span className="text-2xl font-bold tracking-wider text-slate-100">WIDEANGLE</span>
    </div>
);

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Leadership', href: '#leadership' },
        { name: 'Contact', href: '#contact' },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a192f]/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" aria-label="Home"><Logo /></a>
                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map(item => (
                        <a key={item.name} href={item.href} className="text-lg font-medium text-slate-300 hover:text-[#64ffda] transition-colors">
                            {item.name}
                        </a>
                    ))}
                </nav>
                 <button 
                    className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#64ffda]" 
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? (
                        <svg className="w-6 h-6 text-slate-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    ) : (
                        <svg className="w-6 h-6 text-slate-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    )}
                </button>
            </div>
            {/* Mobile Menu Panel */}
            <div className={`
                absolute top-full left-0 right-0 bg-[#0a192f]/95 backdrop-blur-sm md:hidden
                transition-all duration-300 ease-in-out
                ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden
            `}>
                <nav className="flex flex-col items-center space-y-6 py-8">
                    {navItems.map(item => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={toggleMenu}
                            className="text-xl font-medium text-slate-300 hover:text-[#64ffda] transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;