import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

export default function SystemSection() {
  return (
    <motion.section className="section system" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
      <h2>Requisitos del Sistema</h2>
      <ul>
        <li>🖥️ Windows 10 / Linux / MacOS</li>
        <li>💾 2GB de RAM mínimo</li>
        <li>📀 1GB de espacio libre</li>
        <li>🎧 Altavoces o auriculares recomendados</li>
      </ul>
    </motion.section>
  );
}