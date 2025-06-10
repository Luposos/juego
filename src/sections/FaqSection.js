import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

export default function FaqSection() {
  return (
    <motion.section className="section faq" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
      <h2>Preguntas Frecuentes (FAQ)</h2>
      <p><strong>¿Es gratis?</strong> Sí, la versión inicial es gratuita.</p>
      <p><strong>¿Habrá nuevos niveles?</strong> Sí, lanzaremos DLCs con nuevas canciones.</p>
      <p><strong>¿Se puede jugar con joystick?</strong> Próximamente en una actualización.</p>
    </motion.section>
  );
}