import { motion } from 'motion/react';
import { Logo } from './Logo';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.2 }}
      onAnimationComplete={onComplete}
    >
      {/* Logo Container with movement animation */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-8"
        initial={{ scale: 0.8, opacity: 0, x: 0, y: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 1, 
          x: 0, 
          y: 0 
        }}
        exit={{
          x: typeof window !== 'undefined' ? -window.innerWidth / 2 + 150 : -500,
          y: typeof window !== 'undefined' ? -window.innerHeight / 2 + 80 : -300,
          scale: 0.4,
          opacity: 0
        }}
        transition={{ 
          initial: { duration: 0.6, ease: 'easeOut' },
          exit: { duration: 0.8, ease: 'easeInOut' }
        }}
      >
        {/* Logo with scale animation */}
        <div>
          <Logo variant="default" size="large" />
        </div>

        {/* Tagline */}
        <motion.div
          className="text-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            initial: { duration: 0.6, delay: 0.4 },
            exit: { duration: 0.3 }
          }}
        >
          <p className="text-gray-600 tracking-wider text-lg">
            One Axis. Unified Solutions.
          </p>
        </motion.div>

        {/* Loading bar */}
        <motion.div
          className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            initial: { delay: 0.6 },
            exit: { duration: 0.3 }
          }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-red-500 to-red-600"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>

      {/* Animated particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-red-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0],
          }}
          exit={{ opacity: 0 }}
          transition={{
            initial: {
              duration: 2,
              delay: Math.random() * 1.5,
              repeat: Infinity,
              repeatDelay: Math.random() * 2,
            },
            exit: { duration: 0.3 }
          }}
        />
      ))}
    </motion.div>
  );
}