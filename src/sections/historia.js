import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: 'easeOut' },
  }),
};

const storyVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.4,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const iconFloat = {
  animate: {
    y: [-10, 10, -10],
    rotate: [-5, 5, -5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const HistoriaKevin = () => {
  return (
    <motion.section className="section story" id="story" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        🎭 La Historia de Kevin "Queso"
      </motion.h2>

      <div className="story-container">
        {[
          {
            icon: '🎸',
            title: 'El Sueño del Músico Callejero',
            content: 'Kevin, alias "Queso", es un joven músico callejero en La Paz que sueña con ser reconocido. Él siempre quiso ser como los músicos bolivianos más famosos del país que tocan en los grandes teatros.',
          },
          {
            icon: '🏛️',
            title: 'El Gran Sueño',
            content: 'Su meta y mayor sueño es tocar en el Teatro Alberto Saavedra Pérez, el escenario más prestigioso de Bolivia donde solo los verdaderos maestros pueden presentarse.',
          },
          {
            icon: '👹',
            title: 'La Amenaza Oscura',
            content: 'Sin embargo, una entidad oscura amenaza con silenciar la música tradicional, y solo un verdadero chukuta hero podrá detenerla y salvar el folklore boliviano.',
          },
          {
            icon: '🎵',
            title: 'El Viaje Musical',
            content: 'Con controles en forma de charango, guitarra criolla, quena y zampoña, Kevin recorrerá escenarios emblemáticos interpretando clásicos de los Kjarkas, Los Jairas y Savia Andina.',
          },
          {
            icon: '⛰️',
            title: 'El Duelo Final',
            content: 'El gran desafío final será un duelo contra la entidad oscura, en forma de un anciano maestro de la música andina en la cima de la montaña Illimani.',
          },
        ].map((item, i) => (
          <motion.div
            className={`story-chapter ${i % 2 !== 0 ? 'reverse' : ''}`}
            key={i}
            custom={i + 1}
            initial="hidden"
            whileInView="visible"
            variants={storyVariants}
          >
            <motion.div className="story-icon" variants={iconFloat} animate="animate">
              {item.icon}
            </motion.div>
            <div className="story-content">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          </motion.div>
        ))}

        <motion.div
          className="story-finale"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div
            className="finale-glow"
            animate={{
              boxShadow: [
                "0 0 20px #ff55dd",
                "0 0 40px #ff55dd",
                "0 0 20px #ff55dd",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <h3>🏆 ¿Podrás ayudar a Kevin a cumplir su destino?</h3>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};