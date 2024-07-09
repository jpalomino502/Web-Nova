import React from 'react';
import Navbar from '../components/Sirius/Navbar';
import Hero from '../components/Sirius/Hero';
import Features from '../components/Sirius/Features';
import Pricing from '../components/Sirius/Pricing';
import Contact from '../components/Sirius/Contact';
import Footer from '../components/Sirius/Footer';

const Sirius = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Sirius;
