import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Star5 = ({ color, size }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} className="drop-shadow-md">
    <path
      d="M50 0 L63.5 32.6 L98.8 35.1 L71.8 58.2 L80.3 92.7 L50 74.2 L19.7 92.7 L28.2 58.2 L1.2 35.1 L36.5 32.6 Z"
      fill={color}
      stroke={color === '#ffffff' ? '#191c1d' : '#ffffff'}
      strokeWidth="6"
    />
  </svg>
);

const Star4 = ({ color, size }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} className="drop-shadow-md">
    <path
      d="M50 0 C50 32 68 50 100 50 C68 50 50 68 50 100 C50 68 32 50 0 50 C32 50 50 32 50 0 Z"
      fill={color}
      stroke={color === '#ffffff' ? '#191c1d' : '#ffffff'}
      strokeWidth="5"
    />
  </svg>
);

export default function StarClickEffect() {
  const [particles, setParticles] = useState([]);

  const handleClick = useCallback((e) => {
    // Avoid triggering on drag or text selection if needed, but click works great everywhere
    const clickX = e.clientX;
    const clickY = e.clientY;
    const count = 9 + Math.floor(Math.random() * 5); // 9 to 13 stars per click
    const now = Date.now();

    const newParticles = Array.from({ length: count }).map((_, i) => {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
      const speed = 40 + Math.random() * 80;
      const dx = Math.cos(angle) * speed;
      const initialDy = Math.sin(angle) * speed - 30; // initial pop upwards
      const fallDy = initialDy + 70 + Math.random() * 60; // gravity drop

      const isBlack = i % 2 === 0;
      return {
        id: `${now}-${i}-${Math.random()}`,
        x: clickX,
        y: clickY,
        dx,
        fallDy,
        color: isBlack ? '#191c1d' : '#ffffff',
        size: 14 + Math.random() * 16, // 14px to 30px
        isFourPoint: Math.random() > 0.45,
        rotation: (Math.random() - 0.5) * 540,
        duration: 0.75 + Math.random() * 0.45, // 0.75s to 1.2s smooth fall
      };
    });

    setParticles((prev) => [...prev.slice(-30), ...newParticles]); // keep max active particles safe
  }, []);

  useEffect(() => {
    window.addEventListener('pointerdown', handleClick);
    return () => window.removeEventListener('pointerdown', handleClick);
  }, [handleClick]);

  const removeParticle = (id) => {
    setParticles((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden" aria-hidden="true">
      <AnimatePresence>
        {particles.map((p) => {
          const Component = p.isFourPoint ? Star4 : Star5;
          return (
            <motion.div
              key={p.id}
              initial={{
                x: p.x - p.size / 2,
                y: p.y - p.size / 2,
                scale: 0.2,
                opacity: 1,
                rotate: 0,
              }}
              animate={{
                x: p.x - p.size / 2 + p.dx,
                y: p.y - p.size / 2 + p.fallDy,
                scale: [0.3, 1.15, 0.7],
                opacity: [1, 1, 0],
                rotate: p.rotation,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: p.duration,
                ease: [0.22, 1, 0.36, 1],
              }}
              onAnimationComplete={() => removeParticle(p.id)}
              className="absolute left-0 top-0"
            >
              <Component color={p.color} size={p.size} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
