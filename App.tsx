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

const App: React.FC = () => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section[id]').forEach(section => {
        observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);


  return (
    <div className="min-h-screen bg-[#0a192f] font-sans">
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
    </div>
  );
};

export default App;