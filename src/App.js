import React from 'react';
import './App.css';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: 'easeOut' },
  }),
};

function App() {
  return (
    <div className="app">
      <header className="hero-section">
        <div className="overlay">
          <motion.h1
            className="game-title animated-beat"
            animate={{
              scale: [1, 1.2, 1],
              textShadow: [
                "0px 0px 10px #ff55dd",
                "0px 0px 30px #ff55dd",
                "0px 0px 10px #ff55dd"
              ],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            CHUKUTA HERO!
          </motion.h1>

          <motion.p className="tagline" initial="hidden" animate="visible" custom={2} variants={fadeIn}>
            El ritmo paceño... en tus manos 🎸
          </motion.p>
          <motion.a href="#download" className="cta-button" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            🎮 Descarga ahora
          </motion.a>
        </div>
      </header>

      <motion.section className="section trailer" id="trailer" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <h2>Trailer Oficial</h2>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Trailer de Chukuta Hero"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </motion.section>

      <motion.section className="section download" id="download" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <h2>Descarga Chukuta Hero!</h2>
        <p>Versión alpha disponible para Windows:</p>
        <a href="#" className="cta-button">⬇ Descargar .EXE</a>
        <p>(.APK y Web próximamente)</p>
      </motion.section>

      <motion.section className="section gallery" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <h2>Galería del Juego</h2>
        <div className="gallery-images">
          {[1, 2, 3].map((n, i) => (
            <motion.img
              key={n}
              src={`https://via.placeholder.com/300x200?text=Gameplay+${n}`}
              alt={`Gameplay ${n}`}
              whileHover={{ scale: 1.05, rotate: 1 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * i }}
            />
          ))}
        </div>
      </motion.section>

      <motion.section
        className="section gallery"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2>Instrumentos</h2>
        <div className="gallery-images">
          {[
            { img: 'charango.png', nombre: 'Charango' },
            { img: 'sampoña.png', nombre: 'Sampoña' },
            { img: 'quena.png', nombre: 'Quena' }
          ].map(({ img, nombre }, i) => (
            <div key={img} className="instrumento">
              <motion.img
                src={`/assets/instrumentos/${img}`}
                alt={nombre}
                whileHover={{ scale: 1.05, rotate: 1 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * i }}
              />
              <p className="nombre-instrumento">{nombre}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="section gallery"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2>Bandas Conocidas</h2>
        <div className="gallery-images">
          {[
            { img: 'kjarkas.jpg', nombre: 'Los Kjarkas' },
            { img: 'savia.jpg', nombre: 'Savia Andina' },
            { img: 'llaj.jpg', nombre: 'Llajtaimanta' }
          ].map(({ img, nombre }, i) => (
            <div key={img} className="instrumento">
              <motion.img
                src={`/assets/instrumentos/${img}`}
                alt={nombre}
                whileHover={{ scale: 1.05, rotate: 1 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * i }}
              />
              <p className="nombre-instrumento">{nombre}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section className="section art" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <h2>Arte y Estilo Visual</h2>
        <p>
          Todo el arte ha sido realizado con estética en plastilina y modelado 3D
          a mano, rindiendo homenaje a la riqueza cultural de Bolivia.
        </p>
        <img src="https://via.placeholder.com/800x400?text=Arte+del+Juego" alt="Arte del juego" />
      </motion.section>

      <motion.section className="section system" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <h2>Requisitos del Sistema</h2>
        <ul>
          <li>🖥️ Windows 10 / Linux / MacOS</li>
          <li>💾 2GB de RAM mínimo</li>
          <li>📀 1GB de espacio libre</li>
          <li>🎧 Altavoces o auriculares recomendados</li>
        </ul>
      </motion.section>

      <motion.section className="section faq" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <h2>Preguntas Frecuentes (FAQ)</h2>
        <p><strong>¿Es gratis?</strong> Sí, la versión inicial es gratuita.</p>
        <p><strong>¿Habrá nuevos niveles?</strong> Sí, lanzaremos DLCs con nuevas canciones.</p>
        <p><strong>¿Se puede jugar con joystick?</strong> Próximamente en una actualización.</p>
      </motion.section>

      <motion.section className="section contact" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <h2>Conéctate con Nosotros</h2>
        <ul>
          <li>📸 Instagram: @chukutahero</li>
          <li>🐦 Twitter: @chukutahero</li>
          <li>🎥 YouTube: Chukuta Hero Oficial</li>
        </ul>
      </motion.section>

      <footer className="footer">
        <p>© 2025 Chukuta Hero! Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
