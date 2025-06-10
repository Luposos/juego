import { motion } from 'framer-motion';
import Trailer from '../assets/personajes/video/chukuta-trailer.mp4';
import './trailer.css';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: 'easeOut' },
  }),
};

const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { 
      delay: 0.5, 
      duration: 0.8, 
      ease: 'easeOut' 
    },
  },
};

const glowPulse = {
  initial: { boxShadow: "0 0 20px rgba(255, 85, 221, 0.5)" },
  animate: { 
    boxShadow: [
      "0 0 20px rgba(255, 85, 221, 0.5)",
      "0 0 40px rgba(255, 85, 221, 0.8)",
      "0 0 20px rgba(255, 85, 221, 0.5)"
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function TrailerSection() {
  return (
    <motion.section
      className="section trailer"
      id="trailer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <motion.div className="trailer-header" custom={1} variants={fadeIn}>
        <h2 className="trailer-title">
          <span className="title-gradient">Trailer</span>
          <span className="title-accent"> Oficial</span>
        </h2>
        <p className="trailer-subtitle">
          Descubre la épica aventura que te espera
        </p>
      </motion.div>

      <motion.div 
        className="video-container-enhanced"
        variants={scaleIn}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div 
          className="video-wrapper"
          variants={glowPulse}
          initial="initial"
          animate="animate"
        >
          <video 
            controls 
            className="trailer-video"
            title="Trailer de Chukuta Hero"
            poster="/path/to/your/poster-image.jpg" // Añade una imagen de poster si tienes
          >
            <source src={Trailer} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
          
          {/* Overlay decorativo */}
          <div className="video-overlay">
            <div className="play-indicator">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="40" r="40" fill="rgba(255, 85, 221, 0.2)" />
                <polygon points="30,25 30,55 55,40" fill="#ff55dd" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Elementos decorativos */}
        <div className="video-decorations">
          <div className="decoration-corner top-left"></div>
          <div className="decoration-corner top-right"></div>
          <div className="decoration-corner bottom-left"></div>
          <div className="decoration-corner bottom-right"></div>
        </div>
      </motion.div>

      <motion.div 
        className="trailer-features"
        custom={2}
        variants={fadeIn}
      >
        <div className="feature-item">
          <span className="feature-icon">🎮</span>
          <span>Multijugador</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon">⚡</span>
          <span>Historia</span>
        </div>
        <div className="feature-item">
          <span className="feature-icon">🎸</span>
          <span>Música</span>
        </div>
      </motion.div>
    </motion.section>
  );
}