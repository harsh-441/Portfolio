import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Review from './components/Review';
import Contact from './components/Contact';
import Certificates from './components/Certificates';

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <div className="h-screen flex items-center justify-center md:p-2 relative overflow-hidden">
      {/* Radial Blur Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://i.pinimg.com/736x/30/28/54/302854bafdd45d634748d70cb54446fb.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-100 scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-r from-white/60 via-transparent to-black/60"></div>
      </div>

      <div className="relative z-10 w-full max-w-9xl h-full flex flex-col md:flex-row gap-2 md:gap-5 p-2 md:p-3">
        
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="flex-1 flex min-h-0">
          {activeTab === 'Home' && <Home />}
          {activeTab === 'About' && <About />}
          {activeTab === 'Skills' && <Skills />}
          {activeTab === 'Projects' && <Projects />}
          {activeTab === 'Certificates' && <Certificates />}
          {activeTab === 'Review' && <Review />}
          {activeTab === 'Contact' && <Contact />}
        </div>  

        
      </div>
    </div>
  );
}

export default App;