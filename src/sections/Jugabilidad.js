import React from 'react';
import { motion } from 'framer-motion';

function GuitarHeroButtons() {
  const [rotate, setRotate] = React.useState(0);
  const [glowIndex, setGlowIndex] = React.useState(null);

  const colors = ["#ff3333", "#33ff33", "#3333ff", "#ffff33", "#ff55dd"];

  const handleButton = (i) => {
    setGlowIndex(i);
    setRotate((r) => r + 360);
    setTimeout(() => setGlowIndex(null), 400);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
      <div style={{ display: "flex", gap: 18 }}>
        {colors.map((color, i) => (
          <motion.button
            key={color}
            onClick={() => handleButton(i)}
            whileHover={{ scale: 1.18, boxShadow: `0 0 32px ${color}` }}
            whileTap={{ scale: 1.05, boxShadow: `0 0 64px 16px ${color}` }}
            animate={glowIndex === i ? { boxShadow: `0 0 64px 24px ${color}` } : { boxShadow: `0 4px 16px ${color}88` }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              border: "none",
              background: color,
              margin: "0 2px",
              cursor: "pointer",
              outline: "none"
            }}
            aria-label={`Botón musical ${i + 1}`}
          />
        ))}
      </div>
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/8027/8027828.png"
        alt="Charango"
        animate={{ rotate }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{
          width: 130,
          height: "auto",
          filter: "drop-shadow(0 4px 16px #ff55dd88)",
          marginTop: 10
        }}
      />
    </div>
  );
}

export function Jugabilidad() {
  return (
    <motion.section
      className="section hero-promo"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "300px",
        marginBottom: "2rem",
        gap: "1.5rem"
      }}
    >
      <motion.h3
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{ color: "#ff55dd", marginBottom: 8, textAlign: "center" }}
      >
        ¡Mucho más que un Guitar Hero!
        Siente toda la vibra de la ciudad
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={{ fontSize: "1.2rem", textAlign: "center" }}
      >
        <b>Modo multijugador</b>, combos, power-ups y desafíos únicos. <br />
        ¡Vive la experiencia musical paceña con amigos!
      </motion.p>
      <GuitarHeroButtons />
    </motion.section>
  );
}