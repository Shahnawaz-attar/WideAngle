
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="bg-slate-800 text-slate-300 py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                    <div className="md:col-span-1">
                        <h3 className="text-2xl font-bold text-white mb-4">WIDEANGLE</h3>
                        <p className="max-w-xs mx-auto md:mx-0">
                            Delivering world-class airport infrastructure with precision and innovation.
                        </p>
                    </div>
                    
                    <div className="md:col-span-1">
                        <h4 className="text-xl font-semibold text-white mb-4">Contact Information</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center justify-center md:justify-start">
                                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                <span>+966 56 049 6788</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start">
                                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                <a href="mailto:info@wideangle360.com" className="hover:text-blue-400">info@wideangle360.com</a>
                            </li>
                             <li className="flex items-center justify-center md:justify-start">
                                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9"></path></svg>
                                <a href="http://www.wideangle360.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">www.wideangle360.com</a>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-1">
                        <h4 className="text-xl font-semibold text-white mb-4">Office Locations</h4>
                         <p>Riyadh, Saudi Arabia</p>
                         <p>Dubai, UAE</p>
                    </div>
                </div>
                <div className="mt-12 border-t border-slate-700 pt-8 text-center text-slate-400">
                    <p>&copy; {new Date().getFullYear()} WIDEANGLE. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
