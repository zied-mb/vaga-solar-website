import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer'; 
import ScrollToTopButton from './components/ScrollToTopButton';



function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <div className={`${darkMode ? 'dark bg-gray-900' : 'bg-white'} transition-colors duration-300 min-h-screen w-full`}>
      <div className="w-full min-h-screen mx-auto">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <Services />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
        <ScrollToTopButton />
      </div>
    </div>
  );
}

export default App; 