import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

export default function ContactSection() {
  return (
    <motion.section className="section contact" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
      <h2>Conéctate con Nosotros</h2>
      <ul>
        <li>📸 Instagram: @chukutahero</li>
        <li>🐦 Twitter: @chukutahero</li>
        <li>🎥 YouTube: Chukuta Hero Oficial</li>
      </ul>
    </motion.section>
  );
}