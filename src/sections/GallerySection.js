import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

export default function GallerySection() {
  return (
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
  );
}