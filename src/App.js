import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import TrailerSection from './sections/TrailerSection';
import Personajes from './sections/Personajes';
import DownloadSection from './sections/DownloadSection';

import MusicSection from './sections/MusicSection';
import SystemSection from './sections/SystemSection';
import FaqSection from './sections/FaqSection';
import ContactSection from './sections/ContactSection';
import { Jugabilidad } from './sections/Jugabilidad';
import Footer from './components/Footer';
import { HistoriaKevin } from './sections/historia';

function App() {
  return (
    <div className="app">
      <Navbar />
      
      {/* Secciones con IDs para el scroll */}
      <div id="inicio">
        <HeroSection />
      </div>
      
      
      <TrailerSection />
        <div id="personajes">
        <Personajes />
      </div>
      
     
      
      <div id="historia">
        <HistoriaKevin />
      </div>
      
      <div id="acerca">
        <Jugabilidad />
      </div>
      
      <MusicSection />
      <SystemSection />
     
      <Footer />
    </div>
  );
}

export default App;