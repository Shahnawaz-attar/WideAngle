import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ValuesSection from './components/ValuesSection';
import SpecializationSection from './components/SpecializationSection';
import ServicesSection from './components/ServicesSection';
import LeadershipSection from './components/LeadershipSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton'; // Import the new component

const App: React.FC = () => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section[id], footer[id]').forEach(element => {
        observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);


  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ValuesSection />
        <SpecializationSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <LeadershipSection />
      </main>
      <Footer />
      <ScrollToTopButton /> {/* Add the scroll-to-top button here */}
    </div>
  );
};

export default App;