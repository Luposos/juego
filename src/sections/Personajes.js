import React, { useState, useEffect } from 'react';
import './Personajes.css';
import quesoImage from '../assets/personajes/queso.png';
import oscuroImage from '../assets/personajes/oscuro.png';

const Personajes = () => {
  // Estado para controlar el índice del personaje actual
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array con la información de los personajes
  const personajes = [
    {
      id: 1,
      name: "CHUKUTA",
      title: "KEVIN 'QUESO'",
      description: "Kevin, conocido como 'Queso', es un joven músico callejero paceño cuya pasión por la música tradicional boliviana late con fuerza en cada nota que toca. Desde niño soñó con seguir los pasos de los grandes maestros de la música andina, practicando incansablemente con su charango en las calles de La Paz. Su mayor aspiración es llevar el alma de la música boliviana al escenario del Teatro Municipal Alberto Saavedra Pérez, demostrando que el arte callejero tiene tanto valor como el de los grandes teatros.",
      image: quesoImage,
      gradient: "linear-gradient(135deg, #ff6b35, #ff8e53)",
      category: "EL HÉROE"
    },
    {
      id: 2,
      name: "VILLANO",
      title: "ENTIDAD OSCURA",
      description: "La Entidad Oscura es una criatura nacida del olvido y la indiferencia hacia las tradiciones culturales. Se manifiesta como una sombra silenciosa que corrompe los instrumentos musicales y borra las melodías de la memoria de quienes las escuchan. Su presencia crece cada vez que un instrumento tradicional es abandonado o cuando una canción ancestral deja de ser transmitida. Solo un verdadero Chukut Hero, conectado profundamente con las raíces de la música popular, podrá enfrentarse a esta amenaza que busca silenciar para siempre el corazón musical de Bolivia.",
      image: oscuroImage,
      gradient: "linear-gradient(135deg, #4ecdc4, #44a08d)",
      category: "LA AMENAZA"
    }
  ];

  // Función para avanzar al siguiente personaje
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === personajes.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Función para retroceder al personaje anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? personajes.length - 1 : prevIndex - 1
    );
  };

  // Función para saltar a un personaje específico
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Efecto para el desplazamiento automático cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    // Limpieza del intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="personajes-container">
      <div className="content-wrapper">
        {/* Sección izquierda - Información del personaje */}
        <div className="info-section">
          <div className="info-content">
            <h3 className="about-title">PERSONAJES</h3>
            <h1 className="main-title">{personajes[currentIndex].title}</h1>
            <p className="description">
              {personajes[currentIndex].description}
            </p>
          </div>
        </div>

        {/* Sección derecha - Tarjetas de personajes */}
        <div className="cards-section">
          <div className="cards-container">
            {personajes.map((personaje, index) => (
              <div
                key={personaje.id}
                className={`character-card ${index === currentIndex ? 'active' : ''} ${
                  index < currentIndex ? 'left' : index > currentIndex ? 'right' : ''
                }`}
                style={{ background: personaje.gradient }}
                onClick={() => goToSlide(index)}
              >
                <div className="card-content">
                  <img 
                    src={personaje.image} 
                    alt={personaje.name}
                    className="character-image"
                  />
                  <div className="card-info">
                    <span className="character-category">{personaje.category}</span>
                    <h3 className="character-name">{personaje.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Flechas de navegación */}
          <button className="nav-arrow nav-arrow-left" onClick={prevSlide}>
            ‹
          </button>
          <button className="nav-arrow nav-arrow-right" onClick={nextSlide}>
            ›
          </button>

          {/* Indicadores de puntos */}
          <div className="dots-container">
            {personajes.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personajes;