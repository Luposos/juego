// src/bandas.js
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Bandas = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const bandas = [
    { img: 'kjarkas.jpg', nombre: 'Los Kjarkas', slug: 'los-kjarkas' },
    { img: 'savia.jpg', nombre: 'Savia Andina', slug: 'savia-andina' },
    { img: 'llaj.jpg', nombre: 'Llajtaimanta', slug: 'llajtaimanta' }
  ];

  return (
    <motion.section
      className="section gallery"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <h2>Bandas Conocidas</h2>
      <div className="gallery-images">
        {bandas.map(({ img, nombre, slug }, i) => (
          <Link to={`/bandas/${slug}`} key={img} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="instrumento" style={{ cursor: 'pointer' }}>
              <motion.img
                src={`/assets/instrumentos/${img}`}
                alt={nombre}
                whileHover={{ scale: 1.05, rotate: 1 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * i }}
              />
              <p className="nombre-instrumento">{nombre}</p>
            </div>
          </Link>
        ))}
      </div>
    </motion.section>
  );
};

export default Bandas;
