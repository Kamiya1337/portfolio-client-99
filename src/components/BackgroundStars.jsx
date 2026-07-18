import { motion } from 'framer-motion';

const Star5 = ({ className, style }) => (
  <svg viewBox="0 0 100 100" className={className} style={style} fill="currentColor">
    <path d="M50 0 L63.5 32.6 L98.8 35.1 L71.8 58.2 L80.3 92.7 L50 74.2 L19.7 92.7 L28.2 58.2 L1.2 35.1 L36.5 32.6 Z" />
  </svg>
);

const Star4 = ({ className, style }) => (
  <svg viewBox="0 0 100 100" className={className} style={style} fill="currentColor">
    <path d="M50 0 C50 32 68 50 100 50 C68 50 50 68 50 100 C50 68 32 50 0 50 C32 50 50 32 50 0 Z" />
  </svg>
);

const starElements = [
  // Giant & Large background stars
  { id: 1, type: 5, size: 'w-64 h-64 sm:w-80 sm:h-80', pos: 'top-[15%] right-[2%]', opacity: 'text-slate-300/35', animate: { y: [0, -35, 0], rotate: [12, 35, 12], scale: [1, 1.08, 1] }, duration: 7 },
  { id: 2, type: 5, size: 'w-72 h-72 sm:w-96 sm:h-96', pos: 'bottom-[2%] right-[2%]', opacity: 'text-slate-300/35', animate: { y: [0, 40, 0], rotate: [15, -15, 15], scale: [0.95, 1.06, 0.95] }, duration: 8 },
  { id: 3, type: 5, size: 'w-36 h-36', pos: 'top-[42%] left-[4%]', opacity: 'text-slate-300/30', animate: { y: [0, -30, 0], x: [0, 15, 0], rotate: [45, 90, 45] }, duration: 9 },
  { id: 4, type: 5, size: 'w-44 h-44', pos: 'bottom-[15%] left-[2%]', opacity: 'text-slate-300/30', animate: { y: [0, 25, 0], rotate: [-30, 10, -30] }, duration: 8.5 },

  // Medium Floating Stars
  { id: 5, type: 5, size: 'w-20 h-20', pos: 'top-[12%] right-[28%]', opacity: 'text-slate-400/40', animate: { y: [0, -25, 0], x: [0, -12, 0], rotate: [-12, 24, -12] }, duration: 6 },
  { id: 6, type: 4, size: 'w-16 h-16', pos: 'top-[16%] left-[18%]', opacity: 'text-slate-400/40', animate: { y: [0, 22, 0], scale: [0.9, 1.25, 0.9], rotate: [0, 45, 0] }, duration: 5.5 },
  { id: 7, type: 5, size: 'w-24 h-24', pos: 'top-[58%] right-[22%]', opacity: 'text-slate-300/35', animate: { y: [0, -28, 0], rotate: [-12, 30, -12] }, duration: 7.5 },
  { id: 8, type: 4, size: 'w-16 h-16', pos: 'top-[52%] right-[6%]', opacity: 'text-slate-400/40', animate: { y: [0, 20, 0], scale: [1, 1.3, 1] }, duration: 5 },

  // Twinkling Sparkles (Fast pulsing & floating)
  { id: 9, type: 4, size: 'w-10 h-10', pos: 'top-[4%] right-[14%]', opacity: 'text-slate-400/50', animate: { y: [0, -18, 0], scale: [0.8, 1.35, 0.8], opacity: [0.3, 0.8, 0.3] }, duration: 4 },
  { id: 10, type: 5, size: 'w-8 h-8', pos: 'top-[3%] right-[22%]', opacity: 'text-slate-400/45', animate: { y: [0, 15, 0], rotate: [0, 180, 360] }, duration: 6 },
  { id: 11, type: 4, size: 'w-12 h-12', pos: 'top-[20%] right-[22%]', opacity: 'text-slate-400/50', animate: { y: [0, -20, 0], scale: [1, 1.4, 1], opacity: [0.4, 0.9, 0.4] }, duration: 4.5 },
  { id: 12, type: 4, size: 'w-8 h-8', pos: 'top-[28%] left-[12%]', opacity: 'text-slate-400/45', animate: { y: [0, 16, 0], scale: [0.7, 1.3, 0.7] }, duration: 3.8 },
  { id: 13, type: 4, size: 'w-14 h-14', pos: 'bottom-[12%] left-[16%]', opacity: 'text-slate-400/45', animate: { y: [0, -22, 0], rotate: [0, -45, 0], scale: [0.9, 1.3, 0.9] }, duration: 5.2 },
  { id: 14, type: 4, size: 'w-10 h-10', pos: 'bottom-[8%] right-[28%]', opacity: 'text-slate-400/45', animate: { y: [0, 18, 0], opacity: [0.2, 0.85, 0.2] }, duration: 4.2 },
];

export default function BackgroundStars() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {starElements.map((star) => {
        const StarComponent = star.type === 5 ? Star5 : Star4;
        return (
          <motion.div
            key={star.id}
            initial={{ opacity: 0 }}
            animate={{ ...star.animate, opacity: star.animate.opacity || [0.4, 0.75, 0.4] }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: (star.id % 4) * 0.6,
            }}
            className={`absolute ${star.pos} ${star.opacity}`}
          >
            <StarComponent className={star.size} />
          </motion.div>
        );
      })}
    </div>
  );
}
