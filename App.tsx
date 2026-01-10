
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Events from './components/Events';
import Registry from './components/Registry';
import RSVPForm from './components/RSVPForm';
import Gallery from './components/Gallery';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <OurStory />
        <Events />
        <Gallery />
        <Registry />
        <RSVPForm />
      </main>

      <footer className="py-12 bg-white text-center border-t border-gray-100">
        <div className="font-serif text-2xl text-amber-900 mb-4">A & V</div>
        <p className="text-gray-500 text-sm tracking-widest uppercase mb-6">12.10.2025</p>
        <div className="flex justify-center space-x-6 mb-8 text-gray-400">
          <span className="cursor-pointer hover:text-amber-700 transition-colors">Instagram</span>
          <span className="cursor-pointer hover:text-amber-700 transition-colors">Facebook</span>
        </div>
        <p className="text-gray-300 text-[10px] uppercase tracking-widest">Hecho con amor para nuestro gran día</p>
      </footer>
      
      {/* Floating Scroll to top if needed, but smooth scroll is enough */}
    </div>
  );
};

export default App;
