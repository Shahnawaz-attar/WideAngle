
import React from 'react';
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
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
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
