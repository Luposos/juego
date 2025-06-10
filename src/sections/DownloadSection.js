import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

export default function DownloadSection() {
  return (
    <motion.section 
      className="section download" 
      id="download" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }} 
      variants={fadeIn}
    >
      <h2>Descarga Chukuta Hero!</h2>
      <p>Versión alpha disponible para Windows:</p>
      <a href="#" className="cta-button">⬇ Descargar .EXE</a>
      <p>(.APK y Web próximamente)</p>
    </motion.section>
  );
}