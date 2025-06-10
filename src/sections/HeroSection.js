import { motion } from 'framer-motion';
import './hero.css';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: 'easeOut' },
  }),
};

export default function HeroSection() {
  return (
    <header className="hero-section">
      <div className="overlay">
        <motion.h1
          className="game-title animated-beat"
          animate={{
            scale: [1, 1.2, 1],
            textShadow: [
              "0px 0px 10px #ff55dd",
              "0px 0px 30px #ff55dd",
              "0px 0px 10px #ff55dd",
            ],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
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
  );
}