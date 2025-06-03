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

const storyVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { 
      delay: i * 0.4, 
      duration: 0.6, 
      ease: 'easeOut' 
    },
  }),
};

const iconFloat = {
  animate: {
    y: [-10, 10, -10],
    rotate: [-5, 5, -5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
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

      {/* NUEVA SECCIÓN DE HISTORIA */}
      <motion.section className="section story" id="story" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <motion.h2 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          🎭 La Historia de Kevin "Queso"
        </motion.h2>
        
        <div className="story-container">
          <motion.div className="story-chapter" custom={1} initial="hidden" whileInView="visible" variants={storyVariants}>
            <motion.div className="story-icon" variants={iconFloat} animate="animate">
              🎸
            </motion.div>
            <div className="story-content">
              <h3>El Sueño del Músico Callejero</h3>
              <p>
                Kevin, alias <strong>"Queso"</strong>, es un joven músico callejero en La Paz que sueña con ser reconocido. 
                Él siempre quiso ser como los músicos bolivianos más famosos del país que tocan en los grandes teatros.
              </p>
            </div>
          </motion.div>

          <motion.div className="story-chapter reverse" custom={2} initial="hidden" whileInView="visible" variants={storyVariants}>
            <motion.div className="story-icon" variants={iconFloat} animate="animate">
              🏛️
            </motion.div>
            <div className="story-content">
              <h3>El Gran Sueño</h3>
              <p>
                Su meta y mayor sueño es tocar en el <strong>Teatro Alberto Saavedra Pérez</strong>, 
                el escenario más prestigioso de Bolivia donde solo los verdaderos maestros pueden presentarse.
              </p>
            </div>
          </motion.div>

          <motion.div className="story-chapter" custom={3} initial="hidden" whileInView="visible" variants={storyVariants}>
            <motion.div className="story-icon" variants={iconFloat} animate="animate">
              👹
            </motion.div>
            <div className="story-content">
              <h3>La Amenaza Oscura</h3>
              <p>
                Sin embargo, una <strong>entidad oscura</strong> amenaza con silenciar la música tradicional, 
                y solo un verdadero <em>chukuta hero</em> podrá detenerla y salvar el folklore boliviano.
              </p>
            </div>
          </motion.div>

          <motion.div className="story-chapter reverse" custom={4} initial="hidden" whileInView="visible" variants={storyVariants}>
            <motion.div className="story-icon" variants={iconFloat} animate="animate">
              🎵
            </motion.div>
            <div className="story-content">
              <h3>El Viaje Musical</h3>
              <p>
                Con controles en forma de <strong>charango, guitarra criolla, quena y zampoña</strong>, 
                Kevin recorrerá escenarios emblemáticos interpretando clásicos de los 
                <em>Kjarkas, Los Jairas y Savia Andina</em>.
              </p>
            </div>
          </motion.div>

          <motion.div className="story-chapter" custom={5} initial="hidden" whileInView="visible" variants={storyVariants}>
            <motion.div className="story-icon" variants={iconFloat} animate="animate">
              ⛰️
            </motion.div>
            <div className="story-content">
              <h3>El Duelo Final</h3>
              <p>
                El gran desafío final será un duelo contra la entidad oscura, en forma de un anciano maestro 
                de la música andina en la cima de la montaña <strong>Illimani</strong>. 
                Solo una interpretación perfecta lo convertirá en el verdadero guardián del folklore boliviano.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="story-finale"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <motion.div 
              className="finale-glow"
              animate={{
                boxShadow: [
                  "0 0 20px #ff55dd",
                  "0 0 40px #ff55dd",
                  "0 0 20px #ff55dd"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <h3>🏆 ¿Podrás ayudar a Kevin a cumplir su destino?</h3>
            </motion.div>
          </motion.div>
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

      <motion.section className="section music" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <h2>La Música como Protagonista</h2>
        <p>
          Sumérgete en una experiencia musical que mezcla folklore, rock paceño,
          electroandino y más. Cada nota es parte de la identidad de La Paz.
        </p>
        <img src="https://via.placeholder.com/800x400?text=Escena+musical+del+Juego" alt="Escena musical" />
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

      <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap", margin: "2rem 0" }}>
        <motion.section
          className="section faq"
          style={{ flex: "1 1 300px", minWidth: 280, maxWidth: 400 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2>Preguntas Frecuentes (FAQ)</h2>
          <p><strong>¿Es gratis?</strong> Sí, la versión inicial es gratuita.</p>
          <p><strong>¿Habrá nuevos niveles?</strong> Sí, lanzaremos DLCs con nuevas canciones.</p>
          <p><strong>¿Se puede jugar con joystick?</strong> Próximamente en una actualización.</p>
        </motion.section>

        <motion.section
          className="section contact"
          style={{ flex: "1 1 300px", minWidth: 280, maxWidth: 400 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2>Conéctate con Nosotros</h2>
          <ul>
            <li>📸 Instagram: @chukutahero</li>
            <li>🐦 Twitter: @chukutahero</li>
            <li>🎥 YouTube: Chukuta Hero Oficial</li>
          </ul>
        </motion.section>
      </div>

      <motion.section
        className="section hero-promo"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "300px",
          marginBottom: "2rem",
          gap: "1.5rem"
        }}
      >
        <motion.h3
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ color: "#ff55dd", marginBottom: 8, textAlign: "center" }}
        >
          ¡Mucho más que un Guitar Hero!
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{ fontSize: "1.2rem", textAlign: "center" }}
        >
          <b>Modo multijugador</b>, combos, power-ups y desafíos únicos. <br />
          ¡Vive la experiencia musical paceña con amigos!
        </motion.p>
        <GuitarHeroButtons />
      </motion.section>

      <footer className="footer" style={{ background: "#1a1a2e", color: "#fff", padding: "2rem 0", marginTop: "2rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <h3 style={{ color: "#ff55dd", marginBottom: 8 }}>Equipo Los Papayes</h3>
          <p style={{ fontSize: "1.1rem", marginBottom: 12 }}>
            Desarrolladores apasionados, unidos por la música y la creatividad.<br />
            Inspirados en <b>Guitar Hero</b> y <b>Clone Hero</b>, creamos <span style={{ color: "#ff55dd" }}>Chukuta Hero</span> para celebrar el ritmo y la cultura paceña.
          </p>
          <p style={{ fontSize: "1rem", color: "#aaa", marginBottom: 8 }}>
            Proyecto iniciado y finalizado en 2025.<br />
            ¡Gracias por ser parte de esta aventura musical!
          </p>
          <div style={{ margin: "1rem 0" }}>
            <span role="img" aria-label="guitar">🎸</span>
            <span style={{ margin: "0 8px" }}>|</span>
            <span role="img" aria-label="team">🤘</span>
            <span style={{ margin: "0 8px" }}>|</span>
            <span role="img" aria-label="bolivia">🇧🇴</span>
          </div>
          <p style={{ fontSize: "0.95rem", color: "#666" }}>
            © 2025 Chukuta Hero! Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

function GuitarHeroButtons() {
  const [rotate, setRotate] = React.useState(0);
  const [glowIndex, setGlowIndex] = React.useState(null);

  const colors = ["#ff3333", "#33ff33", "#3333ff", "#ffff33", "#ff55dd"];

  const handleButton = (i) => {
    setGlowIndex(i);
    setRotate((r) => r + 360);
    setTimeout(() => setGlowIndex(null), 400);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
      <div style={{ display: "flex", gap: 18 }}>
        {colors.map((color, i) => (
          <motion.button
            key={color}
            onClick={() => handleButton(i)}
            whileHover={{ scale: 1.18, boxShadow: `0 0 32px ${color}` }}
            whileTap={{ scale: 1.05, boxShadow: `0 0 64px 16px ${color}` }}
            animate={glowIndex === i ? { boxShadow: `0 0 64px 24px ${color}` } : { boxShadow: `0 4px 16px ${color}88` }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              border: "none",
              background: color,
              margin: "0 2px",
              cursor: "pointer",
              outline: "none"
            }}
            aria-label={`Botón musical ${i + 1}`}
          />
        ))}
      </div>
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/8027/8027828.png"
        alt="Charango"
        animate={{ rotate }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{
          width: 130,
          height: "auto",
          filter: "drop-shadow(0 4px 16px #ff55dd88)",
          marginTop: 10
        }}
      />
    </div>
  );
}

export default App;
