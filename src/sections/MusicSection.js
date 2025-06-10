import React from 'react';
import { motion } from 'framer-motion';

const MusicSection = () => {
  return (
    <>
      <motion.section
        className="section gallery"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
          },
        }}
      >
        <h2>Instrumentos</h2>
        <div className="gallery-images">
          {[
            { img: 'charango.png', nombre: 'Charango' },
            { img: 'sampoña.png', nombre: 'Sampoña' },
            { img: 'quena.png', nombre: 'Quena' }
          ].map(({ img, nombre }, i) => (
            <div key={img} className="instrumento">
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
          ))}
        </div>
      </motion.section>

      <motion.section
        className="section gallery"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
          },
        }}
      >
        <h2>Bandas Conocidas</h2>
        <div className="gallery-images">
          {[
            { img: 'kjarkas.jpg', nombre: 'Los Kjarkas' },
            { img: 'savia.jpg', nombre: 'Savia Andina' },
            { img: 'llaj.jpg', nombre: 'Llajtaimanta' }
          ].map(({ img, nombre }, i) => (
            <div key={img} className="instrumento">
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
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default MusicSection;