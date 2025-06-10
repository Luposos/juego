import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

export default function MusicSection() {
  return (
    <motion.section className="section music" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
      <h2>La Música como Protagonista</h2>
      <p>
        Sumérgete en una experiencia musical que mezcla folklore, rock paceño,
        electroandino y más. Cada nota es parte de la identidad de La Paz.
      </p>
      <img src="https://via.placeholder.com/800x400?text=Escena+musical+del+Juego" alt="Escena musical" />
    </motion.section>
  );
}