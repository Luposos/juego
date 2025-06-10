import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="navbar-container">
        <a 
          href="#inicio" 
          className="navbar-logo"
          onClick={(e) => handleSmoothScroll(e, 'inicio')}
        >
          CHUKUTA HERO
        </a>
        
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a 
              href="#inicio" 
              className="navbar-link"
              onClick={(e) => handleSmoothScroll(e, 'inicio')}
            >
              Inicio
            </a>
          </li>
           <li className="navbar-item">
            <a 
              href="#personajes" 
              className="navbar-link"
              onClick={(e) => handleSmoothScroll(e, 'personajes')}
            >
              Personajes
            </a>
          </li>
          <li className="navbar-item">
            <a 
              href="#historia" 
              className="navbar-link"
              onClick={(e) => handleSmoothScroll(e, 'historia')}
            >
              Historia
            </a>
          </li>
          <li className="navbar-item">
            <a 
              href="#acerca" 
              className="navbar-link"
              onClick={(e) => handleSmoothScroll(e, 'acerca')}
            >
              Acerca del Juego
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;