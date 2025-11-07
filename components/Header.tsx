import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Logo = () => (
    <div className="flex items-center space-x-3">
        <svg className="w-9 h-9 text-[#64ffda]" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L20.4 24L6 39" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 9L36.4 24L22 39" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6"/>
            <path d="M38 9L42 24L38 39" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3"/>
        </svg>
        <span className="text-2xl font-bold tracking-wider text-gray-100">WIDEANGLE</span>
    </div>
);

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

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
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-800/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" aria-label="Home"><Logo /></a>
                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map(item => (
                        <a key={item.name} href={item.href} className="text-lg font-medium text-gray-300 hover:text-[#64ffda] transition-colors">
                            {item.name}
                        </a>
                    ))}
                </nav>
                 <button 
                    className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#64ffda] text-gray-100" 
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    )}
                </button>
            </div>
            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        ref={menuRef}
                        className="fixed inset-y-0 left-0 w-full max-w-xs bg-gray-800/95 backdrop-blur-sm shadow-xl z-[9999] p-6 flex flex-col"
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ duration: 0.4, ease: [0.2, 0.9, 0.3, 1] }}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="mobile-menu-title"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <h2 id="mobile-menu-title" className="text-2xl font-bold text-gray-100">Navigation</h2>
                            <button
                                onClick={toggleMenu}
                                className="text-[#64ffda] hover:text-[#0ea5a4]/80 focus:outline-none focus:ring-2 focus:ring-[#64ffda] rounded-md p-1"
                                aria-label="Close menu"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>
                        <nav className="flex flex-col items-start space-y-6 flex-grow">
                            {navItems.map(item => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={toggleMenu}
                                    className="text-2xl font-medium text-gray-300 hover:text-[#64ffda] transition-colors w-full py-2"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                        {/* Optionally add social links or other info here */}
                    </motion.div>
                )}
            </AnimatePresence>
            {isMenuOpen && (
                <motion.div
                    className="fixed inset-0 bg-black/70 z-[9998]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    onClick={toggleMenu}
                    aria-hidden="true"
                ></motion.div>
            )}
        </header>
    );
};

export default Header;