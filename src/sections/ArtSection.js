import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

export default function ArtSection() {
  return (
    <motion.section className="section art" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
      <h2>Arte y Estilo Visual</h2>
      <p>
        Todo el arte ha sido realizado con estética en plastilina y modelado 3D
        a mano, rindiendo homenaje a la riqueza cultural de Bolivia.
      </p>
      <img src="https://via.placeholder.com/800x400?text=Arte+del+Juego" alt="Arte del juego" />
    </motion.section>
  );
}