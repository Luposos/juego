import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';
import './footer.css';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const slideUp = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Footer() {
  return (
    <motion.footer 
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <div className="footer-content">
        {/* Logo/Brand Section */}
        <motion.div className="footer-brand" variants={slideUp}>
          <h3 className="brand-title">Chukuta Hero</h3>
          <p className="brand-description">
            La aventura musical definitiva que combina ritmo, acción y diversión.
          </p>
          <div className="brand-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
            <div className="decoration-line"></div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div className="footer-section faq-section" variants={slideUp}>
          <h4 className="section-title">
            <span className="title-icon">❓</span>
            Preguntas Frecuentes
          </h4>
          <div className="faq-list">
            <div className="faq-item">
              <span className="faq-question">¿Es gratis?</span>
              <span className="faq-answer">Sí, la versión inicial es gratuita.</span>
            </div>
            <div className="faq-item">
              <span className="faq-question">¿Habrá nuevos niveles?</span>
              <span className="faq-answer">Sí, lanzaremos DLCs con nuevas canciones.</span>
            </div>
            <div className="faq-item">
              <span className="faq-question">¿Se puede jugar con joystick?</span>
              <span className="faq-answer">Próximamente en una actualización.</span>
            </div>
          </div>
        </motion.div>

        {/* Contact/Social Section */}
        <motion.div className="footer-section contact-section" variants={slideUp}>
          <h4 className="section-title">
            <span className="title-icon">🚀</span>
            Síguenos
          </h4>
          <div className="social-links">
            <a href="#" className="social-link instagram">
              <span className="social-icon">📸</span>
              <span className="social-text">
                <span className="social-platform">Instagram</span>
                <span className="social-handle">@chukutahero</span>
              </span>
            </a>
            <a href="#" className="social-link twitter">
              <span className="social-icon">🐦</span>
              <span className="social-text">
                <span className="social-platform">Twitter</span>
                <span className="social-handle">@chukutahero</span>
              </span>
            </a>
            <a href="#" className="social-link youtube">
              <span className="social-icon">🎥</span>
              <span className="social-text">
                <span className="social-platform">YouTube</span>
                <span className="social-handle">Chukuta Hero Oficial</span>
              </span>
            </a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div className="footer-section links-section" variants={slideUp}>
          <h4 className="section-title">
            <span className="title-icon">🎮</span>
            Enlaces Rápidos
          </h4>
          <ul className="quick-links">
            <li><a href="#inicio">Inicio</a></li>
           
            <li><a href="#personajes">Personajes</a></li>
           
          </ul>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div 
        className="footer-bottom"
        variants={slideUp}
      >
        <div className="footer-divider">
          <div className="divider-line"></div>
          <div className="divider-glow"></div>
        </div>
        
        <div className="footer-bottom-content">
          <p className="copyright">
            © {new Date().getFullYear()} Chukuta Hero. Todos los derechos reservados.
          </p>
          <div className="footer-meta">
            <span>Hecho con 💜 para gamers</span>
            <span className="separator">•</span>
            <span>Versión 1.0</span>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
}