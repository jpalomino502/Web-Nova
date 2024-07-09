import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import 'particles.js';

const App = () => {
  const [loadingError, setLoadingError] = useState(false);

  useEffect(() => {
    window.particlesJS.load('particles-js', '/particles.json', function(response) {
      if (response === 'error') {
        setLoadingError(true);
      }
    });
  }, []);

  if (loadingError) {
    // Handle loading error here, maybe show a message or fallback content
    return <div>Error loading particles.json</div>;
  }

  return (
    <div className="relative">
      <div id="particles-js" className="bg-black fixed top-0 left-0 w-screen h-screen z-0"></div>
      <div className="relative z-10">
        <Header />
        <div className="pt-16">
          <Hero />
          <About />
          <Services />
          <Projects />
          <WhyChooseUs />
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
